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
}