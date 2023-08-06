import { useAuth } from 'context/AuthContext'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const { token } = useAuth()

  useEffect(() => {
    if (token) {
      navigate('/todo')
    } else {
      navigate('/signin')
    }
  }, [navigate, token])

  return <></>
}

export default Home
