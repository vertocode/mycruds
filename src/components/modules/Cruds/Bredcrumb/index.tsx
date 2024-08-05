import Link from '@mui/material/Link'
import ChecklistIcon from '@mui/icons-material/Checklist'
import Typography from '@mui/material/Typography'
import GrainIcon from '@mui/icons-material/Grain'
import Breadcrumbs from '@mui/material/Breadcrumbs'

interface CrudBreadcrumbsProps {
    crudId: string
    itemId?: string
}

export const CrudBreadcrumbs = ({ crudId, itemId }: CrudBreadcrumbsProps) => {
	return (
		<Breadcrumbs className="mt-5" aria-label="breadcrumb">
			<Link
				underline="hover"
				sx={{ display: 'flex', alignItems: 'center' }}
				color="inherit"
				href={`/crud/${crudId}/list`}
			>
				<ChecklistIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Listagem de itens
			</Link>
			<Typography
				sx={{ display: 'flex', alignItems: 'center' }}
				color="text.primary"
			>
				<GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
				{itemId ? `Item #${itemId}` : `Crud #${crudId}`}
			</Typography>
		</Breadcrumbs>
	)
}