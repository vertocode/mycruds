export interface User {
    _id: string
    name: string
    email: string
    password: string
    createdAt: Date
    activeToken: string
    activeTokenExpires: Date
}