import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FlexboxGrid, Form, FormInstance, Panel, Schema, useToaster } from 'rsuite'
import CustomButton from '../../components/buttons/CustomButton'
import FormGroup from '../../components/form/FormGroup'
import { pushMessage } from '../../components/message/ToasterMessage'
import { useTokenContext } from '../../context/auth/AuthContext'
import LoginButton from './components/LoginButton'
import styles from './login.module.less'
import useLoginApi from './service'

const { StringType } = Schema.Types
const nameRule = StringType().isRequired('请输入用户名')
const emailRule = StringType().isEmail('请输入正确的邮箱地址')
const passwordRule = StringType().isRequired('请输入密码')
function LoginView() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [isLogin, setIsLogin] = useState(true)
  const formRef = useRef<FormInstance<Record<string, any>, string, { [x: string]: string | undefined }>>(null)
  const navigate = useNavigate()
  // 使用setToken来更新token 重新渲染
  const { setToken } = useTokenContext()
  const toaster = useToaster()
  const handleSubmit = async (type = 'login') => {
    if (!formRef.current?.check((formError: object) => console.table(formError))) {
      console.error('Form Error')
      return
    }
    const res = type === 'login' ? await useLoginApi.login(formData) : await useLoginApi.register(formData)
    const { data, code, message } = res || {}
    if (code !== 0) {
      return pushMessage({ type: 'error', msg: message, toaster })
    }
    pushMessage({ type: 'success', msg: message, toaster })
    if (isLogin) {
      setToken(data?.token)
      // 登录成功后跳转到首页
      navigate('/home')
    } else {
      setIsLogin(!isLogin)
    }
  }
  const handleChange = (value: string, name: string) => {
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div className={`${styles.loginForm} login-content`}>
      <FlexboxGrid justify="center" style={{ margin: 'auto', padding: '20px' }}>
        <FlexboxGrid.Item colspan={12} style={{ width: '100%', display: 'flex' }}>
          <Panel
            className={`${styles.loginFormCard} login-form-card`}
            header={<h2>Welcome to Geek Heaven</h2>}
            bordered
          >
            <Form fluid ref={formRef}>
              <FormGroup
                label={isLogin ? '输入用户名或者邮箱' : '用户名'}
                name="name"
                rule={nameRule}
                controlProps={{
                  onChange: (value) => handleChange(value, 'username')
                }}
              />
              {isLogin ? null : (
                <FormGroup
                  label="邮箱"
                  rule={emailRule}
                  name="email"
                  controlProps={{
                    onChange: (value) => handleChange(value, 'email')
                  }}
                />
              )}
              <FormGroup
                label="密码"
                name="password"
                rule={passwordRule}
                controlProps={{
                  onChange: (value) => handleChange(value, 'password')
                }}
              />
              <Form.Group>
                <div className={styles.buttonGroup}>
                  {isLogin ? (
                    <>
                      <LoginButton isLogin={isLogin} onSubmit={() => handleSubmit()} className={styles.loginButton} />
                      <CustomButton className={styles.link} appearance="link">
                        忘记密码?
                      </CustomButton>
                    </>
                  ) : (
                    <LoginButton
                      isLogin={isLogin}
                      onSubmit={() => handleSubmit('register')}
                      className={styles.loginButton}
                    />
                  )}
                  <CustomButton className={styles.link} appearance="link" onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? '没有账号？去注册' : '已有账号？去登录'}
                  </CustomButton>
                </div>
              </Form.Group>
            </Form>
          </Panel>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </div>
  )
}

export default LoginView
