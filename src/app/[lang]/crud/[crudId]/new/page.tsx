import { getDictionary } from '@/internationalization/dictionary'
import { AvailableLanguages } from '@/types/Language'
import { RegisterItemForm } from '@/components/modules/Cruds/Item/RegisterItemForm'

interface NewCrudItemPageProps {
	params: {
		lang: AvailableLanguages
		crudId: string
	}
}

export default function NewCrudItemPage({ params: { lang, crudId } }: NewCrudItemPageProps) {
	const dict = getDictionary(lang)

	if (!crudId) return (
		<div className="mt-5">
			<h1 className="text-red-500 text-2xl">Error: Invalid CrudId</h1>
		</div>
	)

	return (
		<div className="mt-5">
			<h1 className="text-gray-700 text-2xl">{dict.crudItem.create.title}</h1>
			<RegisterItemForm crudId={crudId} />
		</div>
	)
}