'use client'

import { RHFTextField } from '@/components/form'
import { useAppSelector } from '@/store/hooks'
import { getDictionary } from '@/internationalization/dictionary'

interface CrudNameProps {
	 isEdition: boolean
}

export const CrudName = ({ isEdition }: CrudNameProps) => {
	const { lang } = useAppSelector(state => state.config)
	const dictionary = getDictionary(lang)

	return (
		<div className="mb-8 text-lg text-gray-600">
			{!isEdition && <p>{dictionary.crud.new.chooseCrudName}</p>}
			<RHFTextField required name="name" label={dictionary.crud.crudName} className="max-w-80 text-white mt-3"/>
		</div>
	)
}