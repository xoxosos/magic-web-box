import { Button, ButtonToolbar, FlexboxGrid, Form, Message, Panel, useToaster } from 'rsuite'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTokenContext } from '../../context/auth/AuthContext'
import styles from './login.module.less'
import './login.less'
import useLoginApi from './service'

function LoginView() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  // 使用setToken来更新token 重新渲染
  const { setToken } = useTokenContext()
  const toaster = useToaster()
  const handleSubmit = async () => {
    const res = await useLoginApi.login({ username, password })
    const { data, code, message } = res?.data || {}
    if (code !== 0)
      return toaster.push(
        <Message showIcon type="error" closable>
          {message}
        </Message>
      )
    toaster.push(
      <Message showIcon type="success" closable>
        {message}
      </Message>
    )
    localStorage.setItem('token', data?.token)
    setToken(res?.data?.data?.token)
    // 登录成功后跳转到首页
    navigate('/home')
    console.log(localStorage.getItem('token'))
  }
  return (
    <div className={`${styles.loginForm} login-content`}>
      <FlexboxGrid justify="center" style={{ margin: 'auto', width: '100%' }}>
        <FlexboxGrid.Item>
          <Panel className="login-form-card" header={<h3>Login</h3>} bordered>
            <Form fluid>
              <Form.Group>
                <Form.ControlLabel>Username or email address</Form.ControlLabel>
                <Form.Control
                  name="name"
                  onChange={(e) => {
                    setUsername(e)
                  }}
                />
              </Form.Group>
              <Form.Group>
                <Form.ControlLabel>Password</Form.ControlLabel>
                <Form.Control
                  name="password"
                  type="password"
                  autoComplete="off"
                  onChange={(e) => setPassword(e)}
                />
              </Form.Group>
              <Form.Group>
                <ButtonToolbar>
                  <Button
                    className={styles.loginButton}
                    color="red"
                    appearance="subtle"
                    onClick={handleSubmit}
                  >
                    Sign in
                  </Button>
                  <Button
                    className={styles.loginButton}
                    color="red"
                    appearance="subtle"
                    onClick={handleSubmit}
                  >
                    log in
                  </Button>
                  <Button className={styles.link} appearance="link">
                    Forgot password?
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
