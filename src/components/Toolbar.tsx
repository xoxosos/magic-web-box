/*
 * @Author: LinRenJie xoxosos666@gmail.com
 * @Date: 2023-03-29 10:09:17
 * @LastEditors: LinRenJie xoxosos666@gmail.com
 * @LastEditTime: 2023-03-29 10:39:11
 * @FilePath: /rsuite-app/src/components/Toolbar.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Toggle from 'rsuite/Toggle'
type themeUnionType = 'dark' | 'light' | 'high-contrast' | undefined
interface Props {
  theme: themeUnionType
  toggleTheme: () => void
}

function Toolbar({ toggleTheme }: Props) {
  return (
    <>
      <Toggle
        size="lg"
        checkedChildren="dark"
        unCheckedChildren="light"
        onChange={toggleTheme}
      ></Toggle>
    </>
  )
}

export default Toolbar
