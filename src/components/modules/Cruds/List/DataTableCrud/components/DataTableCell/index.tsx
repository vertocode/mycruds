'use client'

import {GridCell, GridCellProps, GridMenuIcon} from "@mui/x-data-grid"
import {useState} from "react";
import Menu from "@/components/elements/Menu";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useAppSelector} from "@/store/hooks";
import {getDictionary} from "@/internationalization/dictionary";


export const DataTableCell = ({ ...props }: GridCellProps) => {
    const { field } = props?.column || {}
    const { lang } = useAppSelector(state => state.config)
    const dict = getDictionary(lang)
    const [isDropdownOpened, setIsDropdownOpened] = useState<boolean>(false)

    if (field === 'dropdown') {
        const options = [
            { label: dict.edit, action: () => {}, leftIcon: <EditIcon /> },
            { label: dict.delete, action: () => {}, leftIcon: <DeleteIcon /> }
        ]
        return (
            <div className="MuiDataGrid-cell w-full flex items-center justify-end relative">
                <Menu options={options}>
                    <GridMenuIcon className="cursor-pointer" onClick={() => setIsDropdownOpened(true)}/>
                </Menu>
            </div>
        )
    }

    return (
        <GridCell {...props} />
    )
}