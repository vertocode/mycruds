'use client'

import TextField from "@mui/material/TextField";
import {DataGrid} from "@mui/x-data-grid";

import {dataGrid} from "@/internationalization/pt/dataGrid";
import {useEffect, useMemo, useState} from "react";
import {useDebounce} from "@/hooks/useDebounce";
import {useTable} from "@/hooks/useTable";
import {useAppSelector} from "@/store/hooks";
import {getDictionary} from "@/internationalization/dictionary";
import {DataTableCell} from "@/components/modules/Cruds/List/DataTableCrud/components/DataTableCell";
import { styled } from '@mui/material/styles';
import {useRequest} from "@/hooks/useRequest";
import TablePagination from '@mui/material/TablePagination'

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
    const { data, isLoading } = useRequest({
        endpoint: `/crud/${crudId}/list`,
        body: {
            page,
            pageSize,
            search: debouncedSearch
        }
    })

    useEffect(() => {
        if (data && onUpdateCrudName) {
            onUpdateCrudName(data.name)
        }
    }, [data])

    const rows = useMemo(() => (data?.items || [])
        .filter(item => item.fields.some(field => field?.label && data.fields.some(f => f.label === field.label)))
        .map(item => ({
            id: item._id,
            dropdown: null,
            ...item.fields.reduce((acc, field) => {
                acc[field.label] = field.value
                return acc
            }, {})
        })), [data])

    const columns = useMemo(() => (data?.fields || [])
        .map(field => ({
            field: field.label,
            headerName: field.label,
            width: field.label ? (field.label.length * 10) < 100 ? 100 : field.label.length * 10 : 0
    })).concat({
            field: 'dropdown',
            headerName: ''
        }), [data])

    if (!rows || !columns) return null


    console.log('rows', rows)
    console.log('columns', columns)
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
                rows={rows}
                density="comfortable"
                columns={columns}
                slots={{
                    cell: (props) => <DataTableCell {...props} />
                }}
                isRowSelectable={() => false}
                hideFooter={true}
                initialState={{
                    pagination: {
                        paginationModel: {page, pageSize},
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
                    console.log(e)
                    handlePageChange(e?.target?.value || 0)
                }}
            />
        </div>
    )
}

export const StyledDataGrid = styled(DataGrid)({
    '& .MuiDataGrid-cellEmpty': {
        display: 'none'
    },
    '& .MuiDataGrid-filler': {
        height: '1px'
    },
    '& .MuiDataGrid-row': {
        display: 'flex',
        justifyContent: 'space-between',
        borderTop: '1px solid var(--rowBorderColor)'
    },
    '& .MuiDataGrid-cell': {
        borderTop: 'none'
    },
    '& [class*="MuiDataGrid-columnHeaderRow"]': {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'red'
    },
    '[class*="MuiDataGrid-columnHeaderRow"]': {
        backgroundColor: 'rgb(241 245 249) !important'
    },
    '[role="row"]': {
        paddingLeft: '1.25rem',
        paddingRight: '1.25rem',
    }
})