'use client'

import { GridCell, GridCellProps, GridMenuIcon } from '@mui/x-data-grid'
import Menu from '@/components/elements/Menu'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { useAppSelector } from '@/store/hooks'
import { getDictionary } from '@/internationalization/dictionary'
import { useRouter } from 'next/navigation'

interface DataTableCellProps extends GridCellProps {
	crudId: string
}

export const DataTableCell = ({ crudId, ...props }: DataTableCellProps) => {
	const { field } = props?.column || {}
	const { lang } = useAppSelector(state => state.config)
	const dict = getDictionary(lang)
	const router = useRouter()

	if (field === 'dropdown') {
		const options = [
			{
				label: dict.edit,
				action: () => {
					if (!crudId || !props.rowId) return
					router.push(`/crud/${crudId}/${props.rowId}/edit`)
				},
				leftIcon: <EditIcon />
			},
			{ label: dict.delete, action: () => {}, leftIcon: <DeleteIcon /> }
		]
		return (
			<div className="MuiDataGrid-cell w-full flex items-center justify-end relative">
				<Menu options={options}>
					<GridMenuIcon className="cursor-pointer"/>
				</Menu>
			</div>
		)
	}

	return (
		<GridCell {...props} />
	)
}