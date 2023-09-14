import { Icon } from '@rsuite/icons'
interface Props {
  icon: string | any
  styles?: any
}
export const ReactIcon = ({ icon, styles }: Props) => <Icon as={icon} style={styles} />
