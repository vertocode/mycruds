import { CrudField } from "@/types/Crud";
import { post } from "@/services/axios";

interface CrudParams {
    creatorUserEmail: string
    name: string
    fields: CrudField[]
}

export const createCrud = async (params: CrudParams) => {
    return await post('/cruds', params)
}