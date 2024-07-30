'use client'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { initializeCrudList } from '@/store/crud/crudSlice'
import { getCrudList } from '@/api/crud'
import { Crud } from '@/types/Crud'

export const PreLoadCrud = () => {
	const { user } = useAppSelector(state => state.user)
	const [crudList, setCrudList] = useState<Crud[]>([])
	const dispatch = useAppDispatch()

	const getCrud = async () => {
		try {
			if (!user?.email) throw new Error('User email not found')
			if (crudList.length) return console.log('Crud list already loaded')

			const response = await getCrudList(user.email)
			setCrudList(response)
		} catch (error) {
			console.error(`Error getting cruds by user email: ${error}`)
		}
	}

	useEffect(() => {
		if (user) {
			getCrud()
		}
	}, [user])

	useEffect(() => {
		if (crudList.length) {
			dispatch(initializeCrudList(crudList))
		}
	}, [crudList])

	return null
}