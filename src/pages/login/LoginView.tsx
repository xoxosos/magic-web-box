import { Button, ButtonToolbar, Content, FlexboxGrid, Form, Panel } from 'rsuite'

import request from '../../utils/useRequest'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTokenContext } from '../../context/auth/AuthContext'

function LoginView() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  // 使用setToken来更新token 重新渲染
  const { setToken } = useTokenContext()

  interface Post {
    data: { token: string }
  }

  const handleSubmit = async () => {
    console.log(username, password)
    const res = await request.get<Post>('/getToken')
    localStorage.setItem('token', res?.data?.data?.token)
    setToken(res?.data?.data?.token)
    // 登录成功后跳转到首页
    navigate('/')
    console.log(localStorage.getItem('token'))
  }
  return (
    <Content>
      <div className="login-content">
        <FlexboxGrid justify="center">
          <FlexboxGrid.Item colspan={12}>
            <Panel header={<h3>Login</h3>} bordered>
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
                    <Button appearance="primary" onClick={handleSubmit}>
                      Sign in
                    </Button>
                    <Button appearance="link">Forgot password?</Button>
                  </ButtonToolbar>
                </Form.Group>
              </Form>
            </Panel>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </div>
    </Content>
  )
}

export default LoginView
