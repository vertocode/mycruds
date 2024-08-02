'use client'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { initializeCrudList } from '@/store/crud/crudSlice'
import { getCrudList } from '@/api/crud'
import { Crud } from '@/types/Crud'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import { useSnackbar } from '@/components/elements/Snackbar'
import { getDictionary } from '@/internationalization/dictionary'

export const PreLoadCrud = () => {
	const { user } = useAppSelector(state => state.user)
	const { lang } = useAppSelector(state => state.config)
	const dict = getDictionary(lang)
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [crudList, setCrudList] = useState<Crud[]>([])
	const dispatch = useAppDispatch()
	const { enqueueSnackbar } = useSnackbar()

	const getCrud = async () => {
		try {
			if (!user?.email) throw new Error('User email not found')
			if (crudList.length) return console.log('Crud list already loaded')

			const response = await getCrudList(user.email)
			setCrudList(response)
		} catch (error) {
			console.error(`Error getting cruds by user email: ${error}`)
			enqueueSnackbar(dict.crud.errorGettingCrud, { variant: 'error' })
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		if (user) {
			getCrud()
		} else {
			setIsLoading(false)
		}
	}, [user])

	useEffect(() => {
		if (crudList.length) {
			dispatch(initializeCrudList(crudList))
		}
	}, [crudList])

	return (
		<Modal
			open={isLoading}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box
				sx={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					bgcolor: 'background.paper',
					borderRadius: 4,
					boxShadow: 24,
					p: 12,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<CircularProgress />
			</Box>
		</Modal>
	)
}