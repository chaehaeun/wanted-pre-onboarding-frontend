import { Button } from 'components'
import { useState } from 'react'

interface TodoItemProps {
  id: string
  todo: string
  isComplete: boolean
  onUpdate: (id: string, todo: string, isCompleted: boolean) => void
  onDelete: (id: string) => void
}

const TodoItem = ({
  id,
  todo,
  isComplete,
  onUpdate,
  onDelete,
}: TodoItemProps) => {
  const [isChecked, setIsChecked] = useState(isComplete)
  const [isEditing, setIsEditing] = useState(false)
  const [todoText, setTodoText] = useState(todo)
  const [initialTodoText, setInitialTodoText] = useState(todo)

  const handleCheckBox = () => {
    setIsChecked(prev => !prev)
    onUpdate(id, todoText, !isChecked)
  }

  const handleEdit = () => {
    setIsEditing(true)
    setInitialTodoText(todoText)
  }

  const handleCancel = () => {
    setIsEditing(false)
    setTodoText(initialTodoText)
  }

  const handleConfirm = () => {
    onUpdate(id, todoText, isChecked)
    setIsEditing(false)
  }

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value)
  }

  const handleDelete = () => {
    onDelete(id)
  }

  const renderViewMode = () => (
    <>
      <input
        className="relative w-5 h-5 mr-3 bg-white border-2 border-black appearance-none cursor-pointer shadow-wrap-sm checked:bg-teal-500 after:absolute  checked:after:content-['✓'] after:w-5 after:h-5 after:block after:-top-1 after:left-[1px] shrink-0"
        type="checkbox"
        id={`checkbox-${id}`}
        onChange={handleCheckBox}
        checked={isChecked}
      />
      <label className="flex-grow mt-1" htmlFor={`checkbox-${id}`}>
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
  )

  const renderEditMode = () => (
    <>
      <div className="flex-grow">
        <label className="sr-only" htmlFor={id}>
          할 일
        </label>
        <input
          className="w-full border-b-2 border-black"
          type="text"
          data-testid="modify-input"
          value={todoText}
          id={id}
          onChange={handleChanges}
        />
      </div>
      <Button
        type="button"
        dataTestId="submit-button"
        onClick={handleConfirm}
        mode="edit"
      >
        확인
      </Button>
      <Button
        type="button"
        dataTestId="cancel-button"
        mode="delete"
        onClick={handleCancel}
      >
        취소
      </Button>
    </>
  )

  return (
    <li className="flex items-center w-full gap-3 px-2">
      {!isEditing ? renderViewMode() : renderEditMode()}
    </li>
  )
}

export default TodoItem
