import { Title, Todos } from 'components'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Todo = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    if (!token) {
      navigate('/signin')
    }
  }, [navigate])

  return (
    <div>
      <Title>ToDo List</Title>
      <Todos />
    </div>
  )
}

export default Todo
