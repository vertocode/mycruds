import { CrudFieldAPI, CrudItemFieldAddition, CrudItemFieldEdition } from '@/types/Crud'
import { get, post, put, deleteRequest } from '@/services/axios'

interface CrudParams {
    creatorUserEmail: string
    name: string
    fields: CrudFieldAPI[]
}

export const createCrud = async (params: CrudParams) => {
	return await post('/cruds', params)
}

export const deleteCrud = async (params: { crudId: string }) => {
	return await deleteRequest(`/crud/${params.crudId}`)
}

export const getCrudList = async (userEmail: string) => {
	return await get('/cruds', { email: userEmail })
}

export const getCrudItem = async (itemId: string) => {
	return await get(`/crud/item/${itemId}`)
}

export const createCrudItem = async (crudId: string, fields: CrudItemFieldAddition[]) => {
	return await post(`/crud/${crudId}/item`, { fields })
}

export const editCrudItem = async (crudId: string, itemId: string, fields: CrudItemFieldEdition[]) => {
	return await put(`/crud/${crudId}/item/${itemId}`, { fields })
}

export const deleteCrudItem = async (itemId: string) => {
	return await deleteRequest(`/crud/item/${itemId}`)
}