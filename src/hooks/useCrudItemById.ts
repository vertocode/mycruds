import { useRequest } from '@/hooks/useRequest'

export const useCrudItemById = (itemId: string) => {
	const { data, error, isLoading } = useRequest({
		endpoint: `/crud/item/${itemId}`
	})

	return {
		item: data,
		error,
		isLoading
	}
}