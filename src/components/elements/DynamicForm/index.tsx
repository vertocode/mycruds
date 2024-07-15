import { DynamicField } from "@/components/elements/DynamicField";
import {FieldType} from "@/types/Field";

interface DynamicFormProps {
    fields: {
        label: string
        type: FieldType
        required: boolean
        options?: string[]
    }[]
}


export const DynamicForm = ({ fields }: DynamicFormProps) => {
    return fields.map((field, index) => (
        <DynamicField
            key={`dynamic-field-${index}`}
            type={field.type}
            label={field.label}
            required={field.required}
            options={field.options}
        />
    ))
}