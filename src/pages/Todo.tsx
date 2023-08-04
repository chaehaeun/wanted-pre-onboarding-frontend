import { Title, Todos } from 'components'
import { useIsLoggedIn } from 'hooks'

const Todo = () => {
  useIsLoggedIn()

  return (
    <div>
      <Title>ToDo List</Title>
      <Todos />
    </div>
  )
}

export default Todo
