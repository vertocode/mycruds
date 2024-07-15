import {FieldType} from "@/types/Field";
import {RHFMaskField, RHFMultiSelect, RHFSelect, RHFTextField} from "@/components/form";
import {useMemo} from "react";
import {convertToCamelCase} from "@/utils/string";
import MenuItem from "@mui/material/MenuItem";

interface DynamicFieldProps {
    label: string
    type: FieldType
    required: boolean
    options?: string[]
}

export const DynamicField = ({ type, label, required, options }: DynamicFieldProps) => {
    const name = useMemo(() => convertToCamelCase(label), [label])

    const commonProps = useMemo(() => ({
        name,
        label,
        required
    }), [])

    if (type === FieldType.TEXT) {
        return (
            <RHFTextField {...commonProps} />
        )
    }

    if (type === FieldType.NUMBER) {
        return (
            <RHFTextField {...commonProps} type="number" />
        )
    }

    if (type === FieldType.OPTIONS) {
        if (!options) {
            throw new Error('Options are required for field type options')
        }

        return (
            <RHFSelect {...commonProps}>
                {options.map((option, index) => (
                    <MenuItem key={`${convertToCamelCase(option)}-${index}-option`} value={option}>{option}</MenuItem>
                ))}
            </RHFSelect>
        )
    }

    if (type === FieldType.MULTIPLE_OPTIONS) {
        if (!options) {
            throw new Error('Options are required for field type multipleOptions')
        }

        return (
            <RHFMultiSelect {...commonProps} options={options.map(option => ({ label: option, value: option }))} />
        )
    }

    if (type === FieldType.DATE) {
        return (
            <RHFMaskField
                {...commonProps}
                mask="**/**/****"
            />
        )
    }

    if (type === FieldType.CPF) {
        return (
            <RHFMaskField
                {...commonProps}
                mask="***.***.***-**"
            />
        )
    }

    if (type === FieldType.CNPJ) {
        return (
            <RHFMaskField
                {...commonProps}
                mask="**.***.***/****-**"
            />
        )
    }

    return null
}