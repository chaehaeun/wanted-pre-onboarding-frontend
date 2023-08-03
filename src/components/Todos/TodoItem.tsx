import { Button } from 'components'
import { useState } from 'react'

interface TodoItemProps {
  id: string
  isComplete: boolean
  todo: string
}

const TodoItem = ({ id, isComplete, todo }: TodoItemProps) => {
  const [isCompleted, setIsCompleted] = useState(isComplete)

  const handleCheckBox = () => {
    setIsCompleted(prev => !prev)
  }

  return (
    <li className="flex items-center w-full px-2">
      <input
        className="relative w-5 h-5 mr-3 bg-white border-2 border-black appearance-none cursor-pointer shadow-wrap-sm checked:bg-teal-500 after:absolute  checked:after:content-['✓'] after:w-5 after:h-5 after:block after:-top-1 after:left-0"
        type="checkbox"
        id={id}
        onChange={handleCheckBox}
        checked={isCompleted}
      />
      <label className="flex-grow mt-1" htmlFor={id}>
        {todo}
      </label>
      <Button type="button" dataTestId="modify-button" mode="edit">
        수정
      </Button>
      <Button type="button" dataTestId="delete-button" mode="delete">
        삭제
      </Button>
    </li>
  )
}

export default TodoItem
