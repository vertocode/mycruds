'use client'

import TextField from "@mui/material/TextField";
import {DataGrid, GridColDef} from "@mui/x-data-grid";

import {dataGrid} from "@/internationalization/pt/dataGrid";
import {useMemo, useState} from "react";
import {useDebounce} from "@/hooks/useDebounce";
import {useTable} from "@/hooks/useTable";
import {useAppSelector} from "@/store/hooks";
import {getDictionary} from "@/internationalization/dictionary";
import {DataTableCell} from "@/components/modules/Cruds/List/DataTableCrud/components/DataTableCell";
import { styled } from '@mui/material/styles';
import {useRequest} from "@/hooks/useRequest";





interface DataTableCrudProps {
    crudId: string
}

export const DataTableCrud = ({ crudId }: DataTableCrudProps) => {
    const [search, setSearch] = useState<string>('')
    const debouncedSearch = useDebounce(search)
    const { page, pageSize } = useTable()
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
            headerName: field.label
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
                className="px-5 bg-white"
                loading={isLoading}
                localeText={lang ? dataGrid : {}}
                rows={rows}
                density="comfortable"
                columns={columns}
                slots={{
                    cell: (props) => <DataTableCell {...props} />
                }}
                isRowSelectable={() => false}
                initialState={{
                    pagination: {
                        paginationModel: {page, pageSize},
                    },
                }}
                pageSizeOptions={[10]}
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
    }
})