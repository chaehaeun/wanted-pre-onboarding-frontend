import { Button } from 'components'
import { useState } from 'react'

interface TodoItemProps {
  id: string
  todo: string
  isComplete: boolean
  onUpdate: (updated: { id: string; text: string; status: boolean }) => void
  onDelete: (id: string) => void
}

const TodoItem = ({
  id,
  todo,
  isComplete,
  onUpdate,
  onDelete,
}: TodoItemProps) => {
  const [isCompleted, setIsCompleted] = useState(isComplete)
  const [isEditing, setIsEditing] = useState(false)
  const [todoText, setTodoText] = useState(todo)

  const handleCheckBox = () => {
    setIsCompleted(prev => !prev)
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleCancel = () => {
    setIsEditing(false)
    setTodoText(todo)
  }

  const hableUpdate = () => {
    setIsEditing(false)
    onUpdate({ id, text: todoText, status: isCompleted })
  }

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value)
  }

  const handleDelete = () => {
    onDelete(id)
  }

  return (
    <li className="flex items-center w-full gap-3 px-2">
      {!isEditing ? (
        <>
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
          <Button
            type="button"
            dataTestId="modify-button"
            mode="edit"
            onClick={handleEdit}
          >
            수정
          </Button>
          <Button
            onClick={handleDelete}
            type="button"
            dataTestId="delete-button"
            mode="delete"
          >
            삭제
          </Button>
        </>
      ) : (
        <>
          <div className="flex-grow">
            <label className="sr-only" htmlFor={id}>
              할 일
            </label>
            <input
              className="w-full border-b-2 border-black"
              type="text"
              value={todoText}
              id={id}
              onChange={handleChanges}
            />
          </div>
          <Button
            type="button"
            dataTestId="modify-button"
            onClick={hableUpdate}
            mode="edit"
          >
            확인
          </Button>
          <Button
            type="button"
            dataTestId="delete-button"
            mode="delete"
            onClick={handleCancel}
          >
            취소
          </Button>
        </>
      )}
    </li>
  )
}

export default TodoItem
