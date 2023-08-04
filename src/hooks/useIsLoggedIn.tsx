import { useGetToken } from 'context'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const useIsLoggedIn = () => {
  const { isLogin } = useGetToken()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLogin) {
      navigate('/signin')
    } else if (isLogin) {
      navigate('/todo')
    }
  }, [isLogin, navigate])
}

export default useIsLoggedIn
