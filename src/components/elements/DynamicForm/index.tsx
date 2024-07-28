'use client'

import { DynamicField } from '@/components/elements/DynamicField'
import { FieldType } from '@/types/Field'
import { Grid } from '@mui/material'
import FormProvider from '@/components/form'
import { FieldValues, useForm, UseFormHandleSubmit } from 'react-hook-form'

export interface DynamicData {
	[key: string]: FieldValues
}


interface DynamicFormProps {
    fields: {
        label: string
        type: FieldType
        required: boolean
        options?: string[]
    }[]
	submitButton?: React.ReactNode
	onSubmit?: (data: DynamicData) => void
}


export const DynamicForm = ({ fields, submitButton, onSubmit }: DynamicFormProps) => {
	const methods = useForm()

	return (
		<FormProvider
			methods={methods}
			onSubmit={onSubmit ? methods.handleSubmit(onSubmit) : () => {}}
		>
			<Grid container spacing={3}>
				{fields.map((field, index) => (
					<Grid item xs={12} sm={6} md={4} key={`dynamic-field-${index}`}>
						<DynamicField
							type={field.type}
							label={field.label}
							required={field.required}
							options={field.options}
						/>
					</Grid>
				))}
			</Grid>
			{submitButton}
		</FormProvider>
	)
}