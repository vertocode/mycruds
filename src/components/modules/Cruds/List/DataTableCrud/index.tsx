'use client'

import TextField from "@mui/material/TextField";
import {DataGrid, GridColDef} from "@mui/x-data-grid";

import {dataGrid} from "@/internationalization/pt/dataGrid";
import {useState} from "react";
import {useDebounce} from "@/hooks/useDebounce";
import {useTable} from "@/hooks/useTable";
import {useAppSelector} from "@/store/hooks";
import {getDictionary} from "@/internationalization/dictionary";
import {DataTableCell} from "@/components/modules/Cruds/List/DataTableCrud/components/DataTableCell";
import { styled } from '@mui/material/styles';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
    {
        field: 'dropdown',
        headerName: ''
    }
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
].map(row => ({
    ...row,
    dropdown: null
}))

export const DataTableCrud = () => {
    const [search, setSearch] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const debouncedSearch = useDebounce(search)
    const { page, pageSize } = useTable()
    const { lang } = useAppSelector(state => state.config)
    const dict = getDictionary(lang)

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