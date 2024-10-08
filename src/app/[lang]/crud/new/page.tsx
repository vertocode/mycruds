'use client'

import { WelcomeContainer } from '@/components/modules/Cruds/New/WelcomeContainer'
import { useAppSelector } from '@/store/hooks'
import { useState } from 'react'
import { CrudForm } from '../../../../components/modules/Cruds/CrudForm'

export default function NewCrudPage() {
	const [wasSubmittedWelcome, setWasSubmittedWelcome] = useState<boolean>(false)
	const { cruds } = useAppSelector(state => state.crud)
	const { loaded } = useAppSelector(state => state.config)


	const showWelcome = cruds.length === 0 && !wasSubmittedWelcome

	if (!loaded) return null

	return (
		<div
			className="max-w-full"
		>
			{showWelcome
				? <WelcomeContainer onSubmit={() => setWasSubmittedWelcome(true)}/>
				: <CrudForm />
			}
		</div>
	)
}