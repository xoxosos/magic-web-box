import React from 'react'
// 设为可选的话 调用需要?.链式操作
// interface AuthContextType {
//   token?: string
//   setToken?: (value: string | undefined) => void
//   logOut?: () => void
// }
interface AuthContextType {
  token: string | undefined
  setToken: (value: string | undefined) => void
  logOut: () => void
}
const TokenContextObj: AuthContextType = {
  token: undefined,
  setToken: () => {
    //
  },
  logOut: () => {
    //
  }
}
export const AuthContext = React.createContext<AuthContextType>(TokenContextObj)

export const useTokenContext = () => React.useContext(AuthContext)
