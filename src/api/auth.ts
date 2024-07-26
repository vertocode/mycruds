import { get, post } from '@/services/axios'

export const login = async (email: string, password: string) => {
	return await get('/auth/login', { email, password })
}

export const register = async (params: { email: string, password: string, name: string }) => {
	const { name, password, email } = params
	return await post('/users', { email, password, name })
}