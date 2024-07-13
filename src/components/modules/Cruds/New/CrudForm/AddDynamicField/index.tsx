'use client'

import {useAppSelector} from "@/store/hooks";
import {getDictionary} from "@/internationalization/dictionary";
import {RHFSelect, RHFTextField} from "@/components/form";
import {Button} from "@/components/elements/Button";
import {useCallback, useMemo, useState} from "react";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";

type Field = {
    status: 'new'
}

interface AddDynamicFieldProps {
    methods: any
}

export const AddDynamicField = ({ methods }: AddDynamicFieldProps) => {
    const { watch, setValue, register, unregister } = methods
    const {lang} = useAppSelector(state => state.config)
    const dictionary = getDictionary(lang)
    const [fields, setFields] = useState<Field[]>([{ status: 'new' }])
    const [typedOption, setTypedOption] = useState<string>('')

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
        const showOptionFields = type === 'options' || type === 'multipleOptions'
        if (showOptionFields && !watch(`fields[${index}].options`)) {
            register(`fields[${index}].options`)
            setValue(`fields[${index}].options`, [])
        } else if (!showOptionFields && watch(`fields[${index}].options`)) {
            unregister(`fields[${index}].options`)
        }

        const options = watch(`fields[${index}].options`)

        return (
            <div key={`dynamic-field-${index}`} className="w-full">
                <div className="w-full flex gap-3 items-center">
                        <RHFTextField name={`fields[${index}].name`} label={dictionary.crud.fieldName} className="max-w-40" required/>
                        <RHFSelect name={`fields[${index}].type`} label={dictionary.crud.fieldType} className="max-w-40" required>
                        <MenuItem value="text">{dictionary.crud.fieldTypes.text}</MenuItem>
                        <MenuItem value="number">{dictionary.crud.fieldTypes.number}</MenuItem>
                        <MenuItem value="options">{dictionary.crud.fieldTypes.options}</MenuItem>
                        <MenuItem value="multipleOptions">{dictionary.crud.fieldTypes.multipleOptions}</MenuItem>
                        <MenuItem value="date">{dictionary.crud.fieldTypes.date}</MenuItem>
                    </RHFSelect>
                    {showOptionFields && (
                        <>
                            <TextField
                                onChange={(e) => setTypedOption(e.target.value)}
                                label={dictionary.crud.typeNewOption}
                                className="max-w-60"
                                required
                            />
                            <Button
                                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white"
                                onClick={() => {
                                    console.log('typedOption', typedOption)
                                    setValue(`fields[${index}].options`, [...options, typedOption])
                                    setTypedOption('')
                                }}
                            >{dictionary.addOption}</Button>
                            <div>
                                {options && options?.map((option: string, i: number) => (
                                    <Chip key={`option-${i}`} label={option} onDelete={() => {}}/>
                                ))}
                            </div>
                        </>
                    )}
                    {fields.length > 1 && (
                        <Button
                            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white"
                            onClick={() => handleRemoveField(index)}
                        >{dictionary.delete}</Button>
                    )}
                </div>


                {index !== fields.length - 1 && <div className="bg-gray-300 h-1 w-full my-5"/>}
            </div>
        )
    }), [fields, handleRemoveField, types])

    return (
        <div>
            <p>{dictionary.crud.new.startFillingFields}</p>
            <div className="bg-blue-100 text-gray-800 p-5 rounded-2xl">
                {DynamicFields}
                <Button
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white w-full mt-5"
                    onClick={handleAddField}
                >{dictionary.crud.addNewField}</Button>
            </div>
        </div>
    )
}