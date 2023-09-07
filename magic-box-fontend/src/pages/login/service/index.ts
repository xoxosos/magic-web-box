import request, { IResponse } from '../../../utils/useRequest'

interface UserParams {
  username: string
  password: string
  email?: string
}
const urlPix = '/user'
type LoginRes = { token?: string }

const login = <T extends LoginRes>(params: UserParams) => request.get<IResponse<T>>(urlPix + '/login', { params })
const register = <T extends LoginRes>(data: UserParams) =>
  request.post<UserParams, IResponse<T>>(urlPix + '/register', data)
const getUserList = <T>() => request.get<IResponse<T>>(urlPix + '/getUserList')
const getCategories = <T>() => request.get<IResponse<T>>('categories/getCategories')

// 统一导出
const useLoginApi = {
  login,
  register,
  getUserList,
  getCategories
}
export default useLoginApi
