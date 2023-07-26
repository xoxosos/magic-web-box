import request from '../../../utils/useRequest'

interface Result {
  data: { [key: string]: string } | null
  code: number
  message: string
}
interface Props {
  id: number
}
const urlPix = '/categories/'
export const getResource = (params: Props) => request.get<Result>(urlPix + 'getResource', { params })
