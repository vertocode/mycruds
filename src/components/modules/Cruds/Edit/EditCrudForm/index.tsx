'use client'

import { useCrudById } from '@/hooks/useCrudById'
import { CrudForm } from '../../CrudForm'
import { Spinner } from '@/components/elements/Spinner'

interface EditCrudFormProps {
    crudId: string
}

export const EditCrudForm = ({ crudId }: EditCrudFormProps) => {
	const { crud } = useCrudById(crudId)

	if (!crud) return <Spinner />

	return (
		<div>
			<CrudForm initialData={crud}/>
		</div>
	)
}