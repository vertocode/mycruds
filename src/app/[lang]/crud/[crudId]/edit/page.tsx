import { AvailableLanguages } from '@/types/Language'
import { EditCrudForm } from '@/components/modules/Cruds/Edit/EditCrudForm'

interface EditCrudItemPageProps {
	params: {
		lang: AvailableLanguages
		crudId: string
	}
}

export default function EditCrudItemPage({ params: { lang, crudId } }: EditCrudItemPageProps) {
	if (!crudId) return (
		<div className="mt-5">
			<h1 className="text-red-500 text-2xl">Error: Invalid CrudId</h1>
		</div>
	)

	return (
		<div
			className="max-w-full"
		>
		 	<EditCrudForm crudId={crudId} />
		</div>
	)
}