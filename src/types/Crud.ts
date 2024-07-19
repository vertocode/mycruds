export interface Crud {
    _id: string
    name: string
    fields: CrudField[]
}

export interface CrudField {
    label: string
    type: string
    required: boolean
    options?: string[]
}