'use client'
import Cookies from 'js-cookie'
import { useAppDispatch } from '@/store/hooks'
import { initializeUser } from '@/store/user/userSlice'

export const PreLoadUser = () => {
	const user = Cookies.get('user')
	const dispatch = useAppDispatch()

	if (user) {
		dispatch(initializeUser(JSON.parse(user)))
	}

	return null
}