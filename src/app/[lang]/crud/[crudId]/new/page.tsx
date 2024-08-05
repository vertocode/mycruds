import { getDictionary } from '@/internationalization/dictionary'
import { AvailableLanguages } from '@/types/Language'
import { RegisterItemForm } from '@/components/modules/Cruds/Item/RegisterItemForm'
import { BackButton } from '@/components/modules/Cruds/Item/BackButton'
import { CrudBreadcrumbs } from '@/components/modules/Cruds/Bredcrumb'

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
			<CrudBreadcrumbs crudId={crudId} />
			<h1 className="text-gray-700 text-2xl flex items-center gap-3 mt-5">
				<BackButton crudId={crudId} />
				<span className="mt-1">
					{dict.crudItem.create.title}
				</span>
			</h1>
			<RegisterItemForm crudId={crudId} />
		</div>
	)
}