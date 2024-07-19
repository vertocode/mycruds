import {Crud} from "@/types/Crud";
import { post } from "@/services/axios";

interface CrudParams extends Crud {
    creatorUserEmail: string
}

export const createCrud = async (params: CrudParams) => {
    return await post('/cruds', params)
}