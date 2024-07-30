'use client'

import {GridMenuIcon, GridRow, GridRowProps} from '@mui/x-data-grid'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { useState } from 'react'
import { useAppSelector } from '@/store/hooks'
import { getDictionary } from '@/internationalization/dictionary'
import { useRouter } from 'next/navigation'
import Menu from "@/components/elements/Menu";
import {ConfirmationModal} from "@/components/elements/ConfirmationModal";

interface DataTableCellProps extends GridRowProps {
	crudId: string
	onDelete: () => Promise<void>
}

export const DataTableRow = ({ crudId, onDelete, ...props }: GridRowProps) => {
	const [isOpened, setIsOpened] = useState(false)

	const { lang } = useAppSelector(state => state.config)
	const dict = getDictionary(lang)
	const router = useRouter()

	const handleOpen = () => setIsOpened(true)
	const handleClose = () => setIsOpened(false)

	const options = [
		{
			label: dict.edit,
			action: () => {
				if (!crudId || !props.rowId) return
				router.push(`/crud/${crudId}/${props.rowId}/edit`)
			},
			leftIcon: <EditIcon />
		},
		{ label: dict.delete, action: handleOpen, leftIcon: <DeleteIcon /> }
	]

	return (
		<div className="flex" style={{
			borderTop: '1px solid var(--rowBorderColor)'
		}}>
			<div className="MuiDataGrid-cell flex items-center justify-end relative">
				<Menu options={options}>
					<GridMenuIcon className="cursor-pointer"/>
				</Menu>
				<ConfirmationModal
					isOpened={isOpened}
					handleClose={handleClose}
					title={dict.crudItem.delete.title}
					description={dict.crudItem.delete.description}
					onConfirm={onDelete}
				/>
			</div>
			<GridRow {...props} />
		</div>
	)
}