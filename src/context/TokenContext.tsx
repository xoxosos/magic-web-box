import React, { useMemo } from 'react'

interface Props {
  children: React.ReactNode
}
interface TokenContextType {
  token: string
  setToken: (token: string) => void
}
const TokenContextObj: TokenContextType = {
  token: '',
  setToken: (token: string) => {
    console.log(token)
  }
}
const TokenContext = React.createContext<TokenContextType>(TokenContextObj)
export const useTokenContext = () => React.useContext(TokenContext)
export const TokenProvider: React.FC<Props> = ({ children }) => {
  const [token, setToken] = React.useState<string>('')
  // useMemo来缓存contextValue的值，只有当token发生变化时才重新计算contextValue。
  const contextValue = useMemo(() => ({ token, setToken }), [token])
  return <TokenContext.Provider value={contextValue}>{children}</TokenContext.Provider>
}
