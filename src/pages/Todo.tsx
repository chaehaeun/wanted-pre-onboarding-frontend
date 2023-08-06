import { Title, Todos } from 'components'
import { useAuth } from 'context/AuthContext'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Todo = () => {
  const navigate = useNavigate()
  const { token } = useAuth()

  useEffect(() => {
    if (!token) {
      navigate('/signin')
    }
  }, [navigate, token])

  return (
    <div>
      <Title>ToDo List</Title>
      <Todos />
    </div>
  )
}

export default Todo
