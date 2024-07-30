'use client'
import * as React from 'react'
import Box from '@mui/material/Box'
import { Button } from '@/components/elements/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { useEffect, useState } from 'react'

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	boxShadow: 24,
	p: 4,
}

interface ConfirmationModalProps {
    isOpened: boolean
    handleClose: () => void
    title: string
    description?: string
	onConfirm?: () => Promise<void>
}

export function ConfirmationModal({ isOpened, handleClose, onConfirm, title, description }: ConfirmationModalProps) {
	const [isLoading, setIsLoading] = useState<boolean>(false)

	useEffect(() => {
		if (isLoading) {
			(async () => {
				if (onConfirm) {
					await onConfirm()
				}

				setIsLoading(false)
				handleClose()
			})()
		}
	}, [isLoading])

	return (
		<div>
			<Modal
				open={isOpened}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						{title}
					</Typography>
					{description && <Typography id="modal-modal-description" sx={{ mt: 2 }}>
						{description}
					</Typography>}
					<div className="mt-3 flex justify-end gap-3">
						<Button variant="outlined" onClick={handleClose}>Cancel</Button>
						<Button loading={isLoading} color="error" variant="contained" onClick={() => setIsLoading(true)}>Confirm</Button>
					</div>
				</Box>
			</Modal>
		</div>
	)
}