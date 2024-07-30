'use client'

import { DynamicData, DynamicForm } from '@/components/elements/DynamicForm'
import { useCallback, useEffect, useState } from 'react'
import { Button } from '@/components/elements/Button'
import { editCrudItem, getCrudItem } from '@/api/crud'
import { CrudItemFieldAddition, FieldValue } from '@/types/Crud'
import { useSnackbar } from '@/components/elements/Snackbar'
import { useAppSelector } from '@/store/hooks'
import { getDictionary } from '@/internationalization/dictionary'
import { useRouter } from 'next/navigation'

interface EditItemFormProps {
	crudId: string
	itemId: string
}

export const EditItemForm = ({ crudId, itemId }: EditItemFormProps) => {
	const [fields, setFields] = useState([])
	const { lang } = useAppSelector(state => state.config)
	const dict = getDictionary(lang)
	const router = useRouter()
	const { enqueueSnackbar } = useSnackbar()

	const handleSubmit = useCallback(async (data: DynamicData) => {
		try {
			const fields: CrudItemFieldAddition[] = Object.entries(data).map(([key, value]) => ({
				label: key,
				value: value as unknown as FieldValue
			}))

			const response = await editCrudItem(crudId, itemId, fields)

			if (!response.acknowledged) {
				throw new Error('Not found crudId in the response.')
			}

			enqueueSnackbar(dict.crudItem.edit.feedback.success, { variant: 'success' })
			router.push(`/crud/${crudId}/list`)
		} catch (error) {
			console.error(error)
			enqueueSnackbar(dict.crudItem.edit.feedback.error, { variant: 'error' })
		}
	}, [])

	useEffect(() => {
		const fetchCrudItem = async () => {
			const response = await getCrudItem(itemId)
			setFields(response.fields)
		}

		fetchCrudItem()
	}, [])

	if (!fields || !fields.length) return null

	return (
		<div className="rounded bg-white shadow p-5 mt-5">
			<DynamicForm
				fields={fields}
				onSubmit={handleSubmit}
				submitButton={(
					<Button
						className="mt-3"
						type="submit"
						variant="contained"
						color="primary"
						fullWidth
					>
						{dict.edit}
					</Button>
				)}
			 />
		</div>
	)
}