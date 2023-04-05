import { User } from "./User"

export interface PostsType {
    id: string
    published: boolean
    title: string
    createdAt: string
    updatedAt: string
    userId: string
    user: User

}