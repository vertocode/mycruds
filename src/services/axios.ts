import axios from 'axios'

const axiosInstance = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL })

export const get = async (url: string, data?: any) => {
	const res = await axiosInstance.get(url, {
		params: data
	})

	return res.data
}

export const post = async (url: string, data: any) => {
	const res = await axiosInstance.post(url, data)

	return res.data
}

export const put = async (url: string, data: any) => {
	const res = await axiosInstance.put(url, data)

	return res.data
}

export const deleteRequest = async (url: string) => {
	const res = await axiosInstance.delete(url)

	return res.data
}