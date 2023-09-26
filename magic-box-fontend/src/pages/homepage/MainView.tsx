/*
 * @Author: LinRenJie xoxosos666@gmail.com
 * @Date: 2023-07-26 20:40:41
 * @Description:
 */
import { useGlobalContext } from '../../context/global/GlobalContext'
import ImageWrapper from './components/content-header/ImageWrapper'
import Tabs from './components/tabs/Tabs'

export function MainView() {
  const { index, selectedRef, menu } = useGlobalContext()

  if (!menu) {
    return <div>loading...</div>
  }
  return (
    <>
      <ImageWrapper />
      {menu?.map((item, i) => {
        return (
          <div ref={index === i ? selectedRef : null} key={item.id}>
            <h4 style={{ padding: '15px 25px 0 25px', borderBottom: '1px solid gainsboro' }}>{item.name}</h4>
            <Tabs tabIndex={i} data={item.children}></Tabs>
          </div>
        )
      })}
    </>
  )
}
