import { getDictionary } from '@/internationalization/dictionary'
import { AvailableLanguages } from '@/types/Language'
import { RegisterItemForm } from '@/components/modules/Cruds/Item/RegisterItemForm'
import { BackButton } from '@/components/modules/Cruds/Item/BackButton'
import { WelcomeContainer } from '@/components/modules/Cruds/New/WelcomeContainer'
import { CrudForm } from '@/components/modules/Cruds/New/CrudForm'
import { EditCrudForm } from '@/components/modules/Cruds/Edit/EditCrudForm'

interface EditCrudItemPageProps {
	params: {
		lang: AvailableLanguages
		crudId: string
	}
}

export default function EditCrudItemPage({ params: { lang, crudId } }: EditCrudItemPageProps) {
	const dict = getDictionary(lang)

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