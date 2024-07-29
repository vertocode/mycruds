import { getDictionary } from '@/internationalization/dictionary'
import { AvailableLanguages } from '@/types/Language'
import { RegisterItemForm } from '@/components/modules/Cruds/Item/RegisterItemForm'
import { EditItemForm } from '@/components/modules/Cruds/Item/EditItemForm'

interface EditCrudItemPageProps {
	params: {
		lang: AvailableLanguages
		crudId: string
		itemId: string
	}
}

export default function EditCrudItemPage({ params: { lang, crudId, itemId } }: EditCrudItemPageProps) {
	const dict = getDictionary(lang)

	if (!crudId || !itemId) return (
		<div className="mt-5">
			<h1 className="text-red-500 text-2xl">Error: Invalid {!crudId ? 'CrudId' : 'ItemId'}</h1>
		</div>
	)

	return (
		<div className="mt-5">
			<h1 className="text-gray-700 text-2xl">{dict.crudItem.edit.title}</h1>
			<EditItemForm crudId={crudId} itemId={itemId} />
		</div>
	)
}