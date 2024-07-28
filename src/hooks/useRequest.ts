import useSWR from 'swr'
import { useMemo } from 'react'
import axios from 'axios'

interface UseRequestProps {
    endpoint: string
    body?: any
}

export const useRequest = ({ endpoint, body }: UseRequestProps) => {
	const searchParamsString = useMemo(() => new URLSearchParams(body).toString(), [body])

	const fetcher = (url: string) => axios.get(url).then(res => res.data)
	const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}?${searchParamsString}`, fetcher)

	return {
		data,
		error,
		isLoading
	}
}