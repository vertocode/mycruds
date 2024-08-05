'use client'

import { getDictionary } from '@/internationalization/dictionary'
import { useAppSelector } from '@/store/hooks'
import { Button } from '@/components/elements/Button'

export const WelcomeContainer = ({ onSubmit }: { onSubmit: () => void }) => {
	const user = useAppSelector(state => state.user.user)
	const lang = useAppSelector(state => state.config.lang)
	const dictionary = getDictionary(lang)

	const { title, description, createNow } = dictionary.crud.new

	if (!user) return 'Erro ao pegar usuário'

	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gray-100">
			<h1 className="mb-4 text-3xl font-bold text-gray-700 text-center">{title(user.name)}</h1>
			<p className="mb-8 text-lg text-gray-600">{description}</p>
			<Button onClick={onSubmit} className="px-6 py-3 text-white bg-blue-500 hover:bg-blue-600">{createNow}</Button>
		</div>
	)
}