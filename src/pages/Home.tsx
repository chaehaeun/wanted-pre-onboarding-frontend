import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      navigate('/todo')
    } else {
      navigate('/signin')
    }
  }, [navigate])

  return <></>
}

export default Home
