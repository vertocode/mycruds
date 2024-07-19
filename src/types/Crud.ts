export interface Crud {
    name: string
    fields: CrudField[]
}

export interface CrudField {
    label: string
    type: string
    required: boolean
    options?: string[]
}