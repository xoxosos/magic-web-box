import CustomButton from '../../../components/buttons/CustomButton' // 样式文件
interface Props {
  isLogin: boolean
  onSubmit: (e: string) => void
  className: string
}

function LoginButton({ isLogin, onSubmit, className }: Props) {
  return (
    <CustomButton
      className={className}
      color="red"
      appearance="subtle"
      type="submit"
      onClick={() => onSubmit(isLogin ? 'login' : 'register')}
    >
      {isLogin ? '登录' : '注册'}
    </CustomButton>
  )
}

export default LoginButton
