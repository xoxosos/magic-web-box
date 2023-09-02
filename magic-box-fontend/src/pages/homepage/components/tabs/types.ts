/**
 * data types
 */

export interface DataProps {
  id: number
  name: string
  image: string
  description: string

  [key: string]: string | number
}

export interface Props {
  data: DataProps[]
  activeId?: number
  click?: (id: number) => void
  tabIndex?: number
}
