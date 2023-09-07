import request, { IResponse } from '../../../utils/useRequest'

interface Props {
  id: number
}

const urlPix = '/resources/'
export const getResource = (params: Props) =>
  request.get<IResponse<{ [key: string]: string }>>(urlPix + 'getResource', { params })
