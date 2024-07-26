import { useAppSelector } from '@/store/hooks'
import { getDictionary } from '@/internationalization/dictionary'
import { RhfCheckbox, RHFSelect, RHFTextField } from '@/components/form'
import { Button } from '@/components/elements/Button'
import { useCallback, useMemo, useState } from 'react'
import MenuItem from '@mui/material/MenuItem'
import Chip from '@mui/material/Chip'
import { AddOption } from '@/components/modules/Cruds/New/CrudForm/AddDynamicField/Add0ption'
import { FieldType } from '@/types/Field'

type Field = {
    status: 'new'
}

interface AddDynamicFieldProps {
    methods: any
}

export const AddDynamicField = ({ methods }: AddDynamicFieldProps) => {
	const { watch, setValue, register, unregister } = methods
	const { lang } = useAppSelector(state => state.config)
	const dictionary = getDictionary(lang)
	const [fields, setFields] = useState<Field[]>([{ status: 'new' }])

	const handleAddField = useCallback(() => {
		setFields(prev => [...prev, { status: 'new' }])
	}, [])

	const handleRemoveField = useCallback((index: number) => {
		setFields(prev => prev.filter((_, i) => i !== index))
	}, [])

	const values = watch()
	const types = useMemo(() => watch()?.fields?.map((field: any) => field.type), [values])

	const DynamicFields = useMemo(() => fields.map((_, index) => {
		const type = watch(`fields[${index}].type`)
		const showOptionFields = [FieldType.OPTIONS, FieldType.MULTIPLE_OPTIONS, FieldType.AUTOCOMPLETE, FieldType.RADIO_GROUP].includes(type)
		if (showOptionFields && !watch(`fields[${index}].options`)) {
			register(`fields[${index}].options`)
			setValue(`fields[${index}].options`, [])
		} else if (!showOptionFields && watch(`fields[${index}].options`)) {
			unregister(`fields[${index}].options`)
		}

		const options = watch(`fields[${index}].options`)

		return (
			<div key={`dynamic-field-${index}`} className="w-full">
				<div className="flex flex-wrap gap-4">
					<div className="flex mt-2">
						<RhfCheckbox defaultChecked={false} name={`fields[${index}].required`} label={dictionary.required}/>
					</div>
					<div className="flex w-72">
						<RHFTextField fullWidth name={`fields[${index}].name`} label={dictionary.crud.fieldName} required />
					</div>
					<div className="flex w-72">
						<RHFSelect name={`fields[${index}].type`} label={dictionary.crud.fieldType} required>
							<MenuItem value={FieldType.TEXT}>{dictionary.crud.fieldTypes.text}</MenuItem>
							<MenuItem value={FieldType.NUMBER}>{dictionary.crud.fieldTypes.number}</MenuItem>
							<MenuItem value={FieldType.OPTIONS}>{dictionary.crud.fieldTypes.options}</MenuItem>
							<MenuItem value={FieldType.AUTOCOMPLETE}>{dictionary.crud.fieldTypes.autocomplete}</MenuItem>
							<MenuItem value={FieldType.DATE}>{dictionary.crud.fieldTypes.date}</MenuItem>
							<MenuItem value={FieldType.RADIO_GROUP}>{dictionary.crud.fieldTypes.radioGroup}</MenuItem>
							<MenuItem value={FieldType.PHONE}>{dictionary.crud.fieldTypes.phone}</MenuItem>
							<MenuItem value={FieldType.CPF}>{dictionary.crud.fieldTypes.cpf}</MenuItem>
							<MenuItem value={FieldType.CNPJ}>{dictionary.crud.fieldTypes.cnpj}</MenuItem>
						</RHFSelect>
					</div>
					{showOptionFields && (
						<AddOption
							setValue={(typedOption) => setValue(`fields[${index}].options`, [...options, typedOption])}
							options={options}
						/>
					)}
					{fields.length > 1 && (
						<Button
							className="px-4 mt-2 bg-red-500 hover:bg-red-600 text-white max-h-10"
							onClick={() => handleRemoveField(index)}
						>{dictionary.delete}</Button>
					)}
					<div className="flex gap-3 w-full flex-wrap">
						{options && options?.map((option: string, i: number) => (
							<Chip
								className="mb-3"
								key={`option-${i}`}
								label={option}
								onDelete={() => {
									setValue(`fields[${index}].options`, (options as string[]).filter((_, j) => i !== j))
								}}
							/>
						))}
					</div>
				</div>
				{index !== fields.length - 1 && <div className="bg-gray-300 h-1 w-full my-5"/>}

			</div>
		)
	}), [fields, handleRemoveField, types])

	return (
		<div className="bg-blue-100 text-gray-800 p-5 rounded-2xl">
			<div className="flex justify-between">
				<p className="mb-4">{dictionary.crud.new.startFillingFields}</p>
			</div>
			{DynamicFields}
			<Button
				className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white w-full"
				onClick={handleAddField}
			>{dictionary.crud.addNewField}</Button>
		</div>
	)
}