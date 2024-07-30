'use client'

import { useRouter } from 'next/navigation'
import { ArrowBack } from '@mui/icons-material'

export const BackButton = ({ crudId }: { crudId: string }) => {
	const router = useRouter()

	return (
		<span className="cursor-pointer" onClick={() => router.push(`/crud/${crudId}/list`)}>
			<ArrowBack/>
		</span>
	)
}