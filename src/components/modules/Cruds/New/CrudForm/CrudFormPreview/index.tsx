'use client'

import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import Iconify from '@/components/elements/Iconify'
import { useMemo } from 'react'
import { isNil } from 'lodash'
import { DynamicForm } from '@/components/elements/DynamicForm'
import { useAppSelector } from '@/store/hooks'
import { getDictionary } from '@/internationalization/dictionary'
import { FieldType } from '@/types/Field'

interface CrudFormPreviewProps {
    methods: any
}

export const CrudFormPreview = ({ methods }: CrudFormPreviewProps) => {
	const { lang } = useAppSelector(state => state.config)
	const dictionary = getDictionary(lang)

	const values = methods.watch()

	const fields = useMemo(() => {
		if (!values || !values.fields || !values.fields.length) return []
        type Field = { name: string, type: FieldType, required: boolean | undefined, options: string[] }
        return values.fields.filter((field: Field) => {
        	const { name, type } = field || {}
        	return !isNil(name) && !isNil(type)
        }).map((field: Field) => ({
        	label: field.name,
        	type: field.type,
        	required: !!field.required,
        	options: field?.options || []
        }))
	}, [values])

	return (
		<Accordion className="mt-5">
			<AccordionSummary
				expandIcon={<Iconify icon="ph:arrow-up-bold" />}
				aria-controls="panel1-content"
				id="panel1-header"
			>
				<h2 className="text-gray-600 flex gap-1 items-center">
					{dictionary.crud.previewForm}
					<Iconify icon="mdi:table" />
				</h2>
			</AccordionSummary>
			<AccordionDetails key={JSON.stringify(fields)}>
				{fields.length
					? <DynamicForm fields={fields} />
					: (
						<p>
							{dictionary.crud.noFieldsYetFillToPreview}
						</p>
					)}

			</AccordionDetails>
		</Accordion>
	)
}