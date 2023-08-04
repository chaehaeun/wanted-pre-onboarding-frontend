import React, { createContext, useContext } from 'react'

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthContext = createContext<string | null>('')

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const storedToken = localStorage.getItem('accessToken')

  return (
    <AuthContext.Provider value={storedToken}>{children}</AuthContext.Provider>
  )
}
