import {get} from "@/services/axios"

export const login = async (email: string, password: string) => {
    return await get('/auth/login', { email, password })
}