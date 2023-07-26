import ImageWrapper from '../../components/content-header/ImageWrapper'
import Tabs from '../../components/tabs/tabs'
import { SelectParent } from '../../components/test/SelectParent'
import { useGlobalContext } from '../../context/global/GlobalContext'

// const data = [
//   {
//     name: 'Tab001',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nihil, nisi, voluptate ad quis ea omnis quidem minima fugit adipisci, porro ut velit officiis natus eligendi autem inventore dolor fuga unde nesciunt expedita, beatae officia nostrum labore. Reiciendis, commodi adipisci eius est recusandae ipsa incidunt repellat explicabo nobis corporis debitis non ullam, eos itaque, quia, iste repudiandae. Iusto numquam consectetur quo, et, quis deleniti ipsam eaque perferendis. Repellat ad, molestiae id deserunt praesentium distinctio similique nesciunt itaque. Repellat error enim blanditiis esse, odio commodi exercitationem nostrum perferendis veniam quod, recusandae provident aspernatur aliquam placeat odit cumque fugit ducimus, voluptatibus ad?'
//   },
//   {
//     name: 'Tab002',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores perspiciatis repellat soluta dolorum, quam quos possimus atque rerum porro voluptate beatae dolor incidunt! Corporis, tempore quasi fugit est. Ex, quae!Aliquam nulla explicabo facilis, consequuntur tenetur! Rem architecto veritatis quo corporis sapiente nesciunt culpa at enim similique officiis adipisci in commodi suscipit, natus facilis, repellat laboriosam eaque obcaecati quaerat vero!'
//   },
//   {
//     name: 'Tab003',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem minus similique architecto sequi delectus non, nobis consequuntur officia, laboriosam reiciendis ea! Natus iste quas perspiciatis magnam repellat, voluptate excepturi esse.'
//   }
// ]

export function MainView() {
  const { menu } = useGlobalContext()
  const { index, selectedRef } = useGlobalContext()

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
      <SelectParent />
      <h1>main</h1>
      <h1>main</h1> <h1>main</h1> <h1>main</h1> <h1>main</h1>
      <h1>main</h1>
      <h1>main</h1>
      <h1>main</h1>
      <h1>main</h1>
      <h1>main</h1> <h1>main</h1>
      <h1>main</h1>
      <h1>main</h1>
      <h1>main</h1>
      <h1>main</h1>
      <h1>main</h1>
      <h1>main</h1>
      <h1>main</h1>
      <h1>main</h1> <h1>main</h1>
      <h1>main</h1>
    </>
  )
}
