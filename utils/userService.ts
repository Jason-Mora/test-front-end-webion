import { del, get, put } from "./networkUtils"

export async function getUsers(filter: string | undefined, manageError: Function) {
  try {
    const response = await get(`users?${(filter !== undefined && filter.trim() !== '') ? `filter=${filter}&` : ''}page=1&pageSize=100`)
    return response.data
  }
  catch (err) {
    manageError(err)
  }
}

export async function deleteUser(id: string | undefined, manageError: Function) {
  try {
    const response = await del(`users/${id}`)
    return response
  }
  catch (err) {
    manageError(err)
  }
}

export async function editUser(id: string | undefined, user: IPersona | undefined, manageError: Function) {
  try {
    const response = await put(`users/${id}`, user)
    return response
  }
  catch (err) {
    manageError(err)
  }
}