'use client'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import AddIcon from '@mui/icons-material/Add'
import BackupTableIcon from '@mui/icons-material/BackupTable'
import { getDictionary } from '@/internationalization/dictionary'
import { useAppSelector } from '@/store/hooks'
import { useMemo } from 'react'
import { usePathname, useRouter } from 'next/navigation'

export const Sidebar = () => {
	const { lang } = useAppSelector(state => state.config)
	const { cruds } = useAppSelector(state => state.crud)
	const dictionary = getDictionary(lang)
	const router = useRouter()
	const pathname = usePathname()
	const predefinedRoutes = [
		{
			name: dictionary.crud.new.createCrud,
			icon: <AddIcon />,
			route: '/crud/new'
		}
	]

	const crudRoutes = useMemo(() => {
		if (!cruds || !cruds.length) return []

		return cruds.map(crud => ({
			id: crud._id,
			name: crud.name,
			icon: <BackupTableIcon />,
			route: `/crud/${crud._id}/list`
		}))
	}, [cruds])

	if (!cruds.length) return null


	return (
		<Box sx={{ width: 250 }} role="presentation" className="text-gray-800 bg-white shadow-md h-screen fixed top-[45px] left-0 overflow-auto">
			<List>
				{predefinedRoutes.map((config, index) => (
					<ListItem key={`${config.route}-key-predefined-item`} disablePadding onClick={() => router.push(config.route)}>
						<ListItemButton className="hover:bg-gray-200 transition-colors duration-200 rounded">
							<ListItemIcon>
								{config.icon}
							</ListItemIcon>
							<ListItemText primary={config.name} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{crudRoutes.map((crud) => (
					<ListItem key={`${crud.id}-item-sidebar`} disablePadding onClick={() => router.push(crud.route)}>
						<ListItemButton
							className="hover:bg-gray-200 transition-colors duration-200 rounded"
							selected={pathname.includes(crud.id)}
						>
							<ListItemIcon>
								{crud.icon}
							</ListItemIcon>
							<ListItemText primary={crud.name} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	)
}