/*
 * @Author: LinRenJie xoxosos666@gmail.com
 * @Date: 2023-08-18 22:53:42
 * @Description:
 */
import { Card } from './card/Card'

interface Data {
  image: string
  name: string
  description: string

  [key: string]: string | number
}

type DataProps = {
  data: Data
}

export const CardItem = ({ data }: DataProps) => {
  return <Card data={data} />
}
