'use client'

import { DynamicField } from '@/components/elements/DynamicField'
import { FieldType } from '@/types/Field'
import { Grid } from '@mui/material'
import FormProvider from '@/components/form'
import { useForm } from 'react-hook-form'


interface DynamicFormProps {
    fields: {
        label: string
        type: FieldType
        required: boolean
        options?: string[]
    }[]
	onSubmit: (data: any) => void // TODO: TYPE
}


export const DynamicForm = ({ fields }: DynamicFormProps) => {
	const methods = useForm()

	return (
		<FormProvider methods={methods}>
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
		</FormProvider>
	)
}