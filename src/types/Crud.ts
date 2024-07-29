export interface Crud {
    _id: string
    name: string
    fields: CrudField[]
}

export interface CrudField {
    name: string
    type: string
    required: boolean
    options?: string[]
}

export type FieldValue = string | number | boolean

export interface CrudFieldAPI {
    label: string
    type: string
    required: boolean
    options?: string[]
    value?: FieldValue
}

export interface CrudItemFieldAddition {
    label: string
    value: FieldValue
}

export interface CrudItemFieldEdition {
    label: string
    value: FieldValue
    required?: boolean
    type?: string
}

interface CrudFieldItem extends CrudItemAPI {
    value: FieldValue
}

export interface CrudItemAPI {
    _id: string
    crudId: string
    fields: CrudFieldAPI[]
}

export interface CrudListAPIResponse {
    name: string
    fields: CrudFieldAPI[]
    items: CrudFieldItem[]
}