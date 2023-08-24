import { useAuth } from 'context/AuthContext'
import { Navigate } from 'react-router-dom'

interface ProtectedRouteProps {
  children: React.ReactNode
  requiredLogin: boolean
}

const ProtectedRoute = ({ children, requiredLogin }: ProtectedRouteProps) => {
  const { token } = useAuth()

  switch (requiredLogin) {
    case true:
      if (token) return <>{children}</>

      return <Navigate to="/signin" replace />
    case false:
      if (!token) return <>{children}</>

      return <Navigate to="/todo" replace />
  }
}

export default ProtectedRoute
