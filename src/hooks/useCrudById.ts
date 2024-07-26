import { useRequest } from '@/hooks/useRequest'

export const useCrudById = (crudId: string) => {
	const { data, error, isLoading } = useRequest({
		endpoint: `/crud/${crudId}`
	})

	return {
		crud: data,
		error,
		isLoading
	}
}