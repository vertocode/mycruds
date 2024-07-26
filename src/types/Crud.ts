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

export interface CrudFieldAPI {
    label: string
    type: string
    required: boolean
    options?: string[]
    value?: string | number | boolean
}

interface CrudFieldItem extends CrudItemAPI {
    value: string | number | boolean
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