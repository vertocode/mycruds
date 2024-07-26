'use client'

import { DynamicForm } from '@/components/elements/DynamicForm'
import { useCallback } from 'react'
import { useCrudById } from '@/hooks/useCrudById'

interface RegisterItemFormProps {
	crudId: string
}

export const RegisterItemForm = ({ crudId }: RegisterItemFormProps) => {
	const { crud } = useCrudById(crudId)

	console.log(crud)

	const handleSubmit = useCallback((data: any) => {
		// TODO: Apply and type
	}, [])

	return (
		<div className="rounded bg-white shadow p-5 mt-5">
			<DynamicForm fields={crud.fields} onSubmit={handleSubmit} />
		</div>
	)
}