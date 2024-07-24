import useSWR from "swr";
import {useMemo} from "react";

interface UseRequestProps {
    endpoint: string
    method?: string
    body?: any
}

export const useRequest = ({ endpoint, method = 'GET', body }: UseRequestProps) => {
    const searchParamsString = useMemo(() => new URLSearchParams(body).toString(), [])
    console.log(searchParamsString, '<<<')

    // @ts-ignore
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR(`http://localhost:3000${endpoint}?${searchParamsString}`, fetcher)

    return {
        data,
        error,
        isLoading
    }
}