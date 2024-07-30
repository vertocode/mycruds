'use client'

import TextField from '@mui/material/TextField'
import { DataGrid, GridMenuIcon } from '@mui/x-data-grid'

import { dataGrid } from '@/internationalization/pt/dataGrid'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import { useTable } from '@/hooks/useTable'
import { useAppSelector } from '@/store/hooks'
import { getDictionary } from '@/internationalization/dictionary'
import { styled } from '@mui/material/styles'
import { useRequest } from '@/hooks/useRequest'
import TablePagination from '@mui/material/TablePagination'
import { CrudFieldAPI, CrudListAPIResponse } from '@/types/Crud'
import { deleteCrudItem } from '@/api/crud'
import { useSnackbar } from '@/components/elements/Snackbar'
import { DataTableRow } from '@/components/modules/Cruds/List/DataTableCrud/components/DataTableRow'

interface DataTableCrudProps {
    crudId: string
    onUpdateCrudName?: (name: string) => void
}

export const DataTableCrud = ({ crudId, onUpdateCrudName }: DataTableCrudProps) => {
	const [search, setSearch] = useState<string>('')
	const debouncedSearch = useDebounce(search)
	const { page, pageSize, handlePageSizeChange, handlePageChange } = useTable()
	const { lang } = useAppSelector(state => state.config)
	const dict = getDictionary(lang)
	const { data, isLoading, mutate } = useRequest({
		endpoint: `/crud/${crudId}/list`,
		body: {
			page,
			pageSize,
			search: debouncedSearch
		}
	})
	const { enqueueSnackbar } = useSnackbar()
	const typedData = data as CrudListAPIResponse | undefined
	const typedFields = typedData?.fields as CrudFieldAPI[] | undefined

	const items = useMemo(() => {
		if (!typedData) return []


		return typedData.items.filter(item => item.fields.some(field => {
			if (!field?.label || !typedFields || !typedFields.length) return false

			return field.label && typedFields.some(f => f.label === field.label)
		}))
	}, [typedData, typedFields])

	const rows = useMemo(() => items.map(item => ({
		id: item._id,
		dropdown: null,
		...item.fields.reduce((acc, field) => {
			return {
				...acc,
				[field.label]: field.value
			}
		}, {})
	})), [items])

	const columns = useMemo(() => {
		if (!typedFields) return []

		return typedFields.map((field: CrudFieldAPI): { headerName: string; field: string; width?: number } => ({
			field: field.label,
			headerName: field.label,
			width: field.label ? (field.label.length * 10) < 100 ? 100 : field.label.length * 10 : 0
		}))
	}, [typedFields])

	const handleDeleteItem = useCallback(async (rowId: string) => {
		const response = await deleteCrudItem(rowId)

		if (!response?._id) {
			enqueueSnackbar(dict.crudItem.delete.feedback.error, { variant: 'error' })
			return
		}

		await mutate()
		enqueueSnackbar(dict.crudItem.delete.feedback.success, { variant: 'success' })
	}, [])

	useEffect(() => {
		if (typedData && onUpdateCrudName) {
			onUpdateCrudName(typedData.name)
		}
	}, [typedData])

	if (!rows || !columns) return null

	return (
		<div>
			<div className="bg-white shadow p-5 rounded mt-5">
				<TextField
					fullWidth
					label={dict.search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>
			<StyledDataGrid
				className="bg-white"
				loading={isLoading}
				localeText={lang ? dataGrid : {}}
				key={`data-grid-${JSON.stringify(rows)}`}
				rows={rows}
				density="comfortable"
				columns={columns}
				slots={{
					row: (props) => <DataTableRow
						crudId={crudId}
						onDelete={async () => await handleDeleteItem(props.rowId as string)}
						{...props}
					/>
				}}
				isRowSelectable={() => false}
				hideFooter={true}
				initialState={{
					pagination: {
						paginationModel: { page, pageSize },
					},
				}}
			/>
			<TablePagination
				page={page}
				rowsPerPage={pageSize}
				component="div"
				count={data?.totalItems || 0}
				onRowsPerPageChange={(e) => handlePageSizeChange(e.target.value as unknown as number)}
				onPageChange={(e) => {
					const typedTarget = e?.target as unknown as { value: number }

					handlePageChange(typedTarget?.value || 0)
				}}
			/>
		</div>
	)
}

export const StyledDataGrid = styled(DataGrid)({
	'& .MuiDataGrid-cell': {
		borderTop: 'none'
	},
	'& .MuiDataGrid-cell::hover': {
		backgroundColor: 'red !important'
	},
	'[class*="MuiDataGrid-columnHeaderRow"]': {
		backgroundColor: 'rgb(241 245 249) !important',
		paddingLeft: '65px !important'
	},
	'[role="row"]': {
		paddingLeft: '1.25rem',
		paddingRight: '1.25rem',
	}
})