'use client'

import { DynamicData, DynamicForm } from '@/components/elements/DynamicForm'
import { useCallback } from 'react'
import { useCrudById } from '@/hooks/useCrudById'
import { Button } from '@/components/elements/Button'
import { createCrudItem } from '@/api/crud'
import { CrudItemFieldAddition, FieldValue } from '@/types/Crud'
import { useSnackbar } from '@/components/elements/Snackbar'
import { useAppSelector } from '@/store/hooks'
import { getDictionary } from '@/internationalization/dictionary'
import { useRouter } from 'next/navigation'

interface RegisterItemFormProps {
	crudId: string
}

export const RegisterItemForm = ({ crudId }: RegisterItemFormProps) => {
	const { lang } = useAppSelector(state => state.config)
	const dict = getDictionary(lang)
	const { crud } = useCrudById(crudId)
	const router = useRouter()
	const { enqueueSnackbar } = useSnackbar()

	const handleSubmit = useCallback(async (data: DynamicData) => {
		try {
			const fields: CrudItemFieldAddition[] = Object.entries(data).map(([key, value]) => ({
				label: key,
				value: value as unknown as FieldValue
			}))

			const response = await createCrudItem(crudId, fields)

			if (!response.crudId) {
				throw new Error('Not found crudId in the response.')
			}

			enqueueSnackbar(dict.crudItem.create.feedback.success, { variant: 'success' })
			router.push(`/crud/${crudId}/list`)
		} catch (error) {
			console.error(error)
			enqueueSnackbar(dict.crudItem.create.feedback.success, { variant: 'error' })
		}
	}, [])

	if (!crud?.fields) return null

	return (
		<div className="rounded bg-white shadow p-5 mt-5">
			<DynamicForm
				fields={crud.fields}
				onSubmit={handleSubmit}
				submitButton={(
					<Button
						className="mt-3"
						type="submit"
						variant="contained"
						color="primary"
						fullWidth
					>
						{dict.create}
					</Button>
				)}
			 />
		</div>
	)
}