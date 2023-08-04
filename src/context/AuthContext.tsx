import React, { createContext, useContext, useState } from 'react'

interface AuthProviderProps {
  children: React.ReactNode
}

interface AuthContextProps {
  token: string | null
  setToken: React.Dispatch<React.SetStateAction<string | null>>
}

const AuthContext = createContext<AuthContextProps>({
  token: null,
  setToken: () => {},
})

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('accessToken'),
  )

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  )
}
