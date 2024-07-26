'use client'

import Avatar from '@/assets/avatar.png'
import Image from 'next/image'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { useCallback, useMemo, useState } from 'react'
import { logout } from '@/store/user/userSlice'
import { getDictionary } from '@/internationalization/dictionary'
import { useRouter } from 'next/navigation'

export const UserButton = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

	const { user } = useAppSelector(state => state.user)
	const { lang } = useAppSelector(state => state.config)
	const dispatch = useAppDispatch()
	const router = useRouter()

	const { header: { user: userDictionary } } = getDictionary(lang)

	const username = useMemo(() => user ? user.name.split(' ')[0] : '', [user])

	const logoutAction = useCallback(() => {
		dispatch(logout())
		router.push('/signin')
		setIsMenuOpen(false)
	}, [dispatch])

	const options = useMemo(() => [
		{ label: userDictionary.logout, action: logoutAction }
	], [dispatch, userDictionary])

	if (!user) return null

	return (
		<div className="relative">
			<div className="flex items-center">
				<button
					className="flex text-sm border-2 rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out text-gray-600 gap-1 items-center pr-2"
					onClick={() => setIsMenuOpen(prevState => !prevState)}
				>
					<Image className="h-8 w-8 rounded-full" src={Avatar} alt="User" width={30} height={30}/>
					<span>{username}</span>
				</button>
			</div>
			{isMenuOpen && (
				<div
					className="absolute left-0 top-10 w-48 bg-white rounded-md shadow-lg origin-top-right ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
					<div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
						{options.map((option, optionIndex) => (
							<span
								key={`user-action-option-${optionIndex}`}
								className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
								role="menuitem"
								onClick={option.action}
							>
								{option.label}
							</span>
						))}
					</div>
				</div>
			)}
		</div>
	)
}