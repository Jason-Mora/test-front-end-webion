import { del, get, put } from "./networkUtils"

export async function getUsers(filter: string | undefined) {
    const response = await get(`users?${(filter !== undefined && filter.trim() !== '') ? `filter=${filter}&` : ''}page=1&pageSize=100`)
    return response.data
}

export async function deleteUser(id: string | undefined) {
    const response = await del(`users/${id}`)
    return response
}

export async function editUser(id: string | undefined, user: IPersona | undefined) {
    const response = await put(`users/${id}`, user)
    return response
}