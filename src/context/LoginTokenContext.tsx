import React, { createContext, useState } from 'react'

interface LoginTokenContextProps {
  children: React.ReactNode
}

const LoginTokenContext = createContext<string | null>('')

const LoginTokenContextProvider = ({ children }: LoginTokenContextProps) => {
  const loginToken = localStorage.getItem('accessToken')
  const [token] = useState<string | null>(loginToken)

  return (
    <LoginTokenContext.Provider value={token}>
      {children}
    </LoginTokenContext.Provider>
  )
}

export default LoginTokenContextProvider
