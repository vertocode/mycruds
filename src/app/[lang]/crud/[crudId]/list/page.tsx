'use client'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import TextField from "@mui/material/TextField";
import {useDebounce} from "@/hooks/useDebounce";
import {useState} from "react";
import {useTable} from "@/hooks/useTable";

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
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function CrudList() {
    const [search, setSearch] = useState<string>('')
    const debouncedSearch = useDebounce(search)
    const { page, pageSize } = useTable()

    return (
        <div className="mt-5 max-h-[1000px]">
            <div className="bg-white shadow p-5 rounded">
                <TextField
                    fullWidth
                    label="Search"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <DataGrid
                loading={false}
                rows={rows}
                density="comfortable"
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page, pageSize },
                    },
                }}
                onRowCountChange={(value) => {
                    console.log('test >>>', value)
                }}
                pageSizeOptions={[5, 10]}
            />
        </div>
    )
}