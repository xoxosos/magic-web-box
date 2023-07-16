import request from '../../../utils/useRequest'

interface Result {
  data: { token?: string } | null
  code: number
  message: string
}
interface UserParams {
  username: string
  password: string
  email?: string
}
const urlPix = '/user'
const login = (params: UserParams) => request.get<Result>(urlPix + '/login', { params })
const getUserList = () => request.get<Result>(urlPix + '/getUserList')
const getCategories = () => request.get<Result>('categories/getCategories')

const register = (data: UserParams) => request.post<UserParams, Result>(urlPix + '/register', data)

// 统一导出
const useLoginApi = {
  login,
  register,
  getUserList,
  getCategories
}
export default useLoginApi
