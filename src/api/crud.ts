import { CrudFieldAPI } from '@/types/Crud'
import { get, post } from '@/services/axios'

interface CrudParams {
    creatorUserEmail: string
    name: string
    fields: CrudFieldAPI[]
}

export const createCrud = async (params: CrudParams) => {
	return await post('/cruds', params)
}

export const getCrudList = async (userEmail: string) => {
	return await get('/cruds', { email: userEmail })
}