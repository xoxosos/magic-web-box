import request from '../../../utils/useRequest'

interface Result {
  data: { token: string }
  code: number
  message: string
}
const login = (params: { username: string; password: string }) => {
  return request.get<Result>('/login', { params })
}
// 统一导出
const useLoginApi = {
  login
}
export default useLoginApi
