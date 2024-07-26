import { useCallback, useState } from 'react'

export const useTable = () => {
	const [pageSize, setPageSize] = useState<number>(10)
	const [page, setPage] = useState<number>(0)

	const handlePageSizeChange = useCallback((newValue: number) => {
		setPageSize(newValue)
	}, [])

	const handlePageChange = useCallback((newValue: number) => {
		setPage(newValue)
	}, [])

	return {
		pageSize,
		handlePageSizeChange,
		page,
		handlePageChange
	}
}