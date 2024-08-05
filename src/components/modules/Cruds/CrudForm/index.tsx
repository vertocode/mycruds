'use client'

import FormProvider from '@/components/form'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { AddDynamicField } from '@/components/modules/Cruds/CrudForm/AddDynamicField'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { getDictionary } from '@/internationalization/dictionary'
import { CrudName } from '@/components/modules/Cruds/CrudForm/CrudName'
import { Button } from '@/components/elements/Button'
import Iconify from '@/components/elements/Iconify'
import { CrudFormPreview } from '@/components/modules/Cruds/CrudForm/CrudFormPreview'
import { useState } from 'react'
import { createCrud, editCrud } from '@/api/crud'
import { useSnackbar } from '@/components/elements/Snackbar'
import { Crud, CrudField } from '@/types/Crud'
import { addCrud, editCrud as editCrudSlice } from '@/store/crud/crudSlice'
import { useRouter } from 'next/navigation'

interface CrudForm {
	initialData?: Crud
}

export const CrudForm = ({ initialData }: CrudForm) => {
	const { lang } = useAppSelector(state => state.config)
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const { enqueueSnackbar } = useSnackbar()
	const dispatch = useAppDispatch()
	const router = useRouter()
	const { user } = useAppSelector(state => state.user)

	const isEdition = !!initialData

	const dictionary = getDictionary(lang)
	const schema = yup.object().shape({
		name: yup.string().required(dictionary.name.required).min(3, dictionary.name.shouldInclude3Chars).max(25, dictionary.name.shouldInclude25Chars),
		fields: yup.array().of(yup.object().shape({
			name: yup.string()
				.required(dictionary.name.required)
				.min(3, dictionary.name.shouldInclude3Chars)
				.max(25, dictionary.name.shouldInclude25Chars)
				.test('unique', dictionary.name.shouldBeUnique, (value, context) => {
					if (!context || !context?.from) return true
					const [_, objectGroup] = context?.from || {}

					if (!objectGroup) return true
					const { fields } = objectGroup?.value || {}
					if (!fields) return true

					const names = fields?.map((field: any) => field.name)
					return names?.filter((name: string) => name === value).length === 1
				}),
			options: yup.array().of(yup.string().min(3, dictionary.name.shouldInclude3Chars).max(25, dictionary.name.shouldInclude25Chars))
		}))
	})

	const methods = useForm({
		mode: 'onChange',
		resolver: yupResolver(schema),
		defaultValues: {
			name: initialData?.name || '',
			fields: initialData?.fields?.map(field => {
				const typedField = field as unknown as CrudField
				return {
					name: typedField?.label,
					type: typedField?.type,
					required: !!typedField?.required,
					options: typedField?.options
				}
			}) || []
		}
	})

	const handleSubmit = methods.handleSubmit(async (data) => {
		setIsLoading(true)
		try {
			const crud = {
				name: data.name,
				fields: data.fields ? data.fields.filter(field => field && field?.name).map(field => {
					const typedField = field as unknown as CrudField
					return {
						label: typedField.name,
						type: typedField?.type,
						required: !!typedField?.required,
						options: typedField?.options
					}
				}) : [],
				creatorUserEmail: user?.email || ''
			}
			if (isEdition) {
				if (!initialData) throw new Error('Initial data is required to edit a crud')
				if (!initialData?._id) throw new Error('Initial data must have an id to edit a crud')

				const payload = {
					crudId: initialData._id,
					...crud
				}

				await editCrud(payload)
				enqueueSnackbar(dictionary.crud.edit.feedback.success, { variant: 'success' })
				dispatch(editCrudSlice({
					_id: initialData._id,
					name: crud.name,
					fields: crud.fields.filter(field => field && field?.label).map(field => ({ ...field, name: field?.label }))
				}))

				router.push(`/crud/${initialData._id}/list`)
			} else {
				const response = await createCrud(crud)

				enqueueSnackbar(dictionary.crud.new.feedback.success, { variant: 'success' })
				dispatch(addCrud(response))

				router.push(`/crud/${response._id}/list`)
			}
		} catch (e) {
			console.error(e)
			if (isEdition) {
				enqueueSnackbar(dictionary.crud.edit.feedback.error, { variant: 'error' })
			} else {
				enqueueSnackbar(dictionary.crud.new.feedback.error, { variant: 'error' })
			}
		} finally {
			setIsLoading(false)
		}
	})

	return (
		<FormProvider methods={methods} className="text-gray-800" onSubmit={handleSubmit}>
			<div className="flex flex-col justify-center mt-10 bg-gray-100">
				<h1 className="mb-4 text-3xl font-bold text-gray-700">
					{
						isEdition
							? dictionary.crud.editCrud
							: dictionary.crud.new.createCrud
					}
				</h1>
				<CrudName isEdition={isEdition} />
				<AddDynamicField methods={methods} isEdition={isEdition} />
				<CrudFormPreview methods={methods} />
			</div>
			<Button
				type="submit"
				loading={isLoading}
				className="mt-4 float-end bg-blue-700 text-white px-5 py-3 gap-1 flex hover:bg-blue-800"
			>
				<span>
					{isEdition ? dictionary.crud.edit.editCrud : dictionary.crud.new.createCrud}
				</span>
				<Iconify icon="ph:rocket" />
			</Button>
		</FormProvider>
	)
}