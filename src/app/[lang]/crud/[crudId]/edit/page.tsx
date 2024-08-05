import { AvailableLanguages } from '@/types/Language'
import { EditCrudForm } from '@/components/modules/Cruds/Edit/EditCrudForm'
import { CrudBreadcrumbs } from '@/components/modules/Cruds/Bredcrumb'

interface EditCrudItemPageProps {
	params: {
		lang: AvailableLanguages
		crudId: string
	}
}

export default function EditCrudItemPage({ params: { crudId } }: EditCrudItemPageProps) {
	if (!crudId) return (
		<div className="mt-5">
			<h1 className="text-red-500 text-2xl">Error: Invalid CrudId</h1>
		</div>
	)

	return (
		<div
			className="max-w-full"
		>
			<CrudBreadcrumbs crudId={crudId} />
		 	<EditCrudForm crudId={crudId} />
		</div>
	)
}