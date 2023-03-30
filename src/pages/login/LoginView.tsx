import { Button, ButtonToolbar, Content, FlexboxGrid, Form, Panel } from 'rsuite'

import request from '../../utils/useRequest'

function LoginView() {
  interface Post {
    data: { token: string }
  }
  const handleSubmit = async () => {
    const res = await request.get<Post>('/getToken')
    localStorage.setItem('token', res?.data?.data?.token)
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
                  <Form.Control name="name" />
                </Form.Group>
                <Form.Group>
                  <Form.ControlLabel>Password</Form.ControlLabel>
                  <Form.Control name="password" type="password" autoComplete="off" />
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
