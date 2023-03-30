import { Dropdown, DropdownProps } from 'rsuite'
import Toolbar from './Toolbar'
import CogIcon from '@rsuite/icons/legacy/Cog'

type themeUnionType = 'dark' | 'light' | 'high-contrast' | undefined
interface Props extends DropdownProps {
  theme: themeUnionType
  toggleTheme: () => void
}
const CustomDropdown = ({ theme, toggleTheme, ...props }: Props) => (
  <Dropdown {...props} icon={<CogIcon />}>
    <Dropdown.Item>
      <Toolbar theme={theme} toggleTheme={toggleTheme}></Toolbar>
    </Dropdown.Item>
    <Dropdown.Item>Download As...</Dropdown.Item>
    <Dropdown.Item>Export PDF</Dropdown.Item>
    <Dropdown.Item>Export HTML</Dropdown.Item>
    <Dropdown.Item>Settings</Dropdown.Item>
    <Dropdown.Item>注销</Dropdown.Item>
  </Dropdown>
)

const SettingDropDown = ({ theme, toggleTheme, title }: Props) => (
  <>
    <CustomDropdown
      theme={theme}
      toggleTheme={toggleTheme}
      title={title}
      trigger="hover"
    ></CustomDropdown>
  </>
)
export default SettingDropDown
