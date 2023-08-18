import { useEffect, useState } from 'react'
import { Animation } from 'rsuite'
import { CardItem } from '../CardItem'
import styles from './tab.module.less'
interface ItemProps {
  id: number
  name: string
  image: string
  [key: string]: string | number
}

interface Props {
  data: ItemProps[]
  activeId: number
}
export const TabContent = ({ data, activeId }: Props) => {
  console.log('TabContent', data)
  const [show, setShow] = useState(false)
  const unMounted = () => {
    show && setShow(false)
  }
  useEffect(() => {
    data.length > 0 && setShow(true)
    return unMounted()
  }, [])

  return (
    <Animation.Bounce in={show}>
      <div className={styles.tabsContent}>
        {data.map((item: any, index: number) => (
          <div key={item}>
            <p>{item.name}</p>
            <CardItem props={item} />
          </div>
        ))}
      </div>
    </Animation.Bounce>
  )
}
