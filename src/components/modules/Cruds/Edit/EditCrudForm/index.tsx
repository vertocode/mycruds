'use client'

import { useCrudById } from '@/hooks/useCrudById'
import { CrudForm } from '@/components/modules/Cruds/New/CrudForm'
import {Spinner} from "@/components/elements/Spinner";

interface EditCrudFormProps {
    crudId: string
}

export const EditCrudForm = ({ crudId }: EditCrudFormProps) => {
	const { crud } = useCrudById(crudId)

	console.log(crud, '<<< crud')
	if (!crud) return <Spinner />

	return (
		<div>
			<CrudForm initialData={crud}/>
		</div>
	)
}