'use client'

import { GridCell, GridCellProps, GridMenuIcon } from '@mui/x-data-grid'
import Menu from '@/components/elements/Menu'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { useAppSelector } from '@/store/hooks'
import { getDictionary } from '@/internationalization/dictionary'
import { useRouter } from 'next/navigation'
import { ConfirmationModal } from '@/components/elements/ConfirmationModal'
import { useState } from 'react'

interface DataTableCellProps extends GridCellProps {
	crudId: string
	onDelete: () => Promise<void>
}

export const DataTableCell = ({ crudId, onDelete, ...props }: DataTableCellProps) => {
	const [isOpened, setIsOpened] = useState(false)

	const { field } = props?.column || {}
	const { lang } = useAppSelector(state => state.config)
	const dict = getDictionary(lang)
	const router = useRouter()

	if (field === 'dropdown') {
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
			<div className="MuiDataGrid-cell w-full flex items-center justify-end relative">
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
		)
	}

	return (
		<GridCell {...props} />
	)
}