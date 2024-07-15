import {useAppSelector} from "@/store/hooks";
import {getDictionary} from "@/internationalization/dictionary";
import {RhfCheckbox, RHFSelect, RHFTextField} from "@/components/form";
import {Button} from "@/components/elements/Button";
import {useCallback, useMemo, useState} from "react";
import MenuItem from "@mui/material/MenuItem";
import Chip from "@mui/material/Chip";
import {AddOption} from "@/components/modules/Cruds/New/CrudForm/AddDynamicField/Add0ption";

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
                <div className="flex flex-wrap gap-4">
                    <div className="flex mt-2">
                        <RhfCheckbox name={`fields[${index}].required`} label={dictionary.required}/>
                    </div>
                    <div className="flex w-72">
                        <RHFTextField fullWidth name={`fields[${index}].name`} label={dictionary.crud.fieldName} required />
                    </div>
                    <div className="flex w-72">
                        <RHFSelect name={`fields[${index}].type`} label={dictionary.crud.fieldType} required>
                            <MenuItem value="text">{dictionary.crud.fieldTypes.text}</MenuItem>
                            <MenuItem value="number">{dictionary.crud.fieldTypes.number}</MenuItem>
                            <MenuItem value="options">{dictionary.crud.fieldTypes.options}</MenuItem>
                            <MenuItem value="multipleOptions">{dictionary.crud.fieldTypes.multipleOptions}</MenuItem>
                            <MenuItem value="date">{dictionary.crud.fieldTypes.date}</MenuItem>
                        </RHFSelect>
                    </div>
                    {showOptionFields && <AddOption setValue={(typedOption) => setValue(`fields[${index}].options`, [...options, typedOption])} />}
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
                                    setValue(`fields[${index}].options`, options.filter((_, j) => i !== j))
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
                <Button className="bg-green-200 text-green-800 hover:bg-green-300 min-w-44 max-h-16 mb-2">{dictionary.crud.viewCrudForm}</Button>
            </div>
            {DynamicFields}
            <Button
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white w-full"
                onClick={handleAddField}
            >{dictionary.crud.addNewField}</Button>
        </div>
    )
}