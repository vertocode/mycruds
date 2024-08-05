import { getDictionary } from '@/internationalization/dictionary'
import { AvailableLanguages } from '@/types/Language'
import { EditItemForm } from '@/components/modules/Cruds/Item/EditItemForm'
import { BackButton } from '@/components/modules/Cruds/Item/BackButton'
import { CrudBreadcrumbs } from '@/components/modules/Cruds/Bredcrumb'

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
			<CrudBreadcrumbs crudId={crudId} itemId={itemId}/>
			<h1 className="text-gray-700 text-2xl flex items-center gap-3 mt-5">
				<BackButton crudId={crudId}/>
				<span className="mt-1">
					{dict.crudItem.edit.title}
				</span>
			</h1>
			<EditItemForm crudId={crudId} itemId={itemId}/>
		</div>
	)
}