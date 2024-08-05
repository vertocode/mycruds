'use client'

import { Button } from '@/components/elements/Button'
import { useRouter } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { getDictionary } from '@/internationalization/dictionary'
import { ConfirmationModal } from '@/components/elements/ConfirmationModal'
import { useCallback, useState } from 'react'
import { useSnackbar } from '@/components/elements/Snackbar'
import { deleteCrud, getCrudList } from '@/api/crud'
import { initializeCrudList } from '@/store/crud/crudSlice'

interface ListHeaderProps {
    crudId: string
    crudName: string
}

export const ListHeader = ({ crudId, crudName }: ListHeaderProps) => {
	const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false)
	const [createItemRedirectLoading, setCreateItemRedirectLoading] = useState<boolean>(false)
	const [editItemRedirectLoading, setEditCrudRedirectLoading] = useState<boolean>(false)
	const router = useRouter()
	const { lang } = useAppSelector(state => state.config)
	const { cruds } = useAppSelector(state => state.crud)
	const { user } = useAppSelector(state => state.user)
	const dict = getDictionary(lang)
	const dispatch = useAppDispatch()

	const { enqueueSnackbar } = useSnackbar()

	const handleDeleteCrud = useCallback(async () => {
		try {
			await deleteCrud({ crudId })
			enqueueSnackbar(dict.crud.delete.feedback.success, { variant: 'success' })
			const otherCrudId = cruds.find(c => c._id !== crudId)?._id
			router.push(otherCrudId ? `/crud/${otherCrudId}/list` : '/crud/new')
			if (user?.email) {
				const newCrudList = await getCrudList(user.email)
				dispatch(initializeCrudList(newCrudList))
			} else {
				console.error('We are trying to get the crud list without have the user, something wrong!')
				router.refresh()
			}
		} catch (error) {
			console.error(error)
			enqueueSnackbar(dict.crud.delete.feedback.error, { variant: 'error' })
		}
	}, [])

	return (
		<>
			<header className="flex justify-between gap-3">
				<h1 className="font-bold text-gray-800">{crudName} #{crudId}</h1>
				<div className="flex gap-3">
					<Button variant="outlined" color="error" onClick={() => setShowDeleteModal(true)}>
						{dict.crud.deleteCrud}
					</Button>
					<Button
						variant="outlined"
						loading={editItemRedirectLoading}
						onClick={() => {
							setEditCrudRedirectLoading(true)
							router.push(`/crud/${crudId}/edit`)
						}}
					>
						{dict.crud.editCrud}
					</Button>
					<Button
						variant="contained"
						loading={createItemRedirectLoading}
						onClick={() => {
							setCreateItemRedirectLoading(true)
							router.push(`/crud/${crudId}/new`)
						}}
					>{dict.crud.list.registerNewItem}</Button>
				</div>
			</header>
			<ConfirmationModal
				isOpened={showDeleteModal}
				handleClose={() => setShowDeleteModal(false)}
				title={dict.crud.delete.title}
				description={dict.crud.delete.description}
				onConfirm={handleDeleteCrud}
			/>
		</>
	)
}