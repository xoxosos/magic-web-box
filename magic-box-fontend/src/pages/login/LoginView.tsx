import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, ButtonToolbar, FlexboxGrid, Form, Message, Panel, useToaster } from 'rsuite'
import { useTokenContext } from '../../context/auth/AuthContext'
import './login.less'
import styles from './login.module.less'
import useLoginApi from './service'
const CustomMessage = ({ type, msg }) => (
  <Message showIcon type={type} closable>
    {msg}
  </Message>
)
function LoginView() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [isLogin, setIsLogin] = useState(true)
  const navigate = useNavigate()
  // 使用setToken来更新token 重新渲染
  const { setToken, token } = useTokenContext()
  const toaster = useToaster()
  const handleSubmit = async (type = 'login') => {
    const res =
      type === 'login'
        ? await useLoginApi.login({ username, password })
        : await useLoginApi.register({ username, password, email })
    const { data, code, message } = res?.data || {}
    if (code !== 0) {
      return toaster.push(
        <Message showIcon type="error" closable>
          {message}
        </Message>
      )
    }
    toaster.push(
      <Message showIcon type="success" closable>
        {message}
      </Message>
    )

    if (isLogin) {
      setToken(data?.token)
      // 登录成功后跳转到首页
      navigate('/home')
    } else {
      setIsLogin(!isLogin)
    }
  }
  return (
    <div className={`${styles.loginForm} login-content`}>
      <FlexboxGrid justify="center" style={{ margin: 'auto' }}>
        <FlexboxGrid.Item colspan={12} style={{ width: '100%', display: 'flex' }}>
          <Panel style={{ width: '600px' }} className="login-form-card" header={<h2>Magic Box</h2>} bordered>
            <Form fluid>
              <Form.Group>
                <Form.ControlLabel>{isLogin ? '输入用户名或者邮箱' : '用户名'}</Form.ControlLabel>
                <Form.Control
                  name="name"
                  onChange={(e) => {
                    setUsername(e)
                  }}
                />
              </Form.Group>

              {isLogin ? null : (
                <>
                  <Form.Group>
                    <Form.ControlLabel>邮箱</Form.ControlLabel>
                    <Form.Control
                      name="name"
                      onChange={(e) => {
                        setEmail(e)
                      }}
                    />
                  </Form.Group>
                </>
              )}
              <Form.Group>
                <Form.ControlLabel>密码</Form.ControlLabel>
                <Form.Control name="password" type="password" autoComplete="off" onChange={(e) => setPassword(e)} />
              </Form.Group>
              <Form.Group>
                <ButtonToolbar>
                  {isLogin ? (
                    <>
                      <Button
                        className={styles.loginButton}
                        color="red"
                        appearance="subtle"
                        onClick={() => handleSubmit()}
                      >
                        登录
                      </Button>

                      <Button className={styles.link} appearance="link">
                        忘记密码?
                      </Button>
                    </>
                  ) : (
                    <Button
                      className={styles.loginButton}
                      color="red"
                      appearance="subtle"
                      onClick={() => handleSubmit('register')}
                    >
                      注册
                    </Button>
                  )}
                  <Button className={styles.link} appearance="link" onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? '没有账号？去注册' : '已有账号？去登录'}
                  </Button>
                </ButtonToolbar>
              </Form.Group>
            </Form>
          </Panel>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </div>
  )
}

export default LoginView
