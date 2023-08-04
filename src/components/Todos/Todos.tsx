import { Button, Modal, TodoItem } from 'components'
import React, { useRef, useState } from 'react'
import { useModal } from 'hooks'

interface Todo {
  id: string
  text: string
  status: boolean
}

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [value, setValue] = useState('')
  const { showModal, content, openModal, closeModal } = useModal()
  // const [showModal, setShowModal] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmedValue = value.trim()
    if (!trimmedValue) {
      openModal('할 일을 작성해주세요.')

      return
    }

    const newTodo: Todo = {
      id: Date.now().toString(),
      text: trimmedValue,
      status: false,
    }

    setTodos([...todos, newTodo])
    setValue('')

    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleUpdate = (updated: {
    id: string
    text: string
    status: boolean
  }) => {
    setTodos(prev =>
      prev.map(todo => (todo.id === updated.id ? updated : todo)),
    )
  }

  const handleDelete = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <div className="w-4/5 mx-auto">
      <form className="w-full" onSubmit={handleSubmit}>
        <fieldset>
          <legend className="sr-only">Todo 입력폼</legend>
          <div className="flex w-full shadow-wrap">
            <label htmlFor="todo" className="sr-only">
              할 일
            </label>
            <input
              ref={inputRef}
              onChange={handleChange}
              value={value}
              type="text"
              id="todo"
              placeholder="할 일을 추가해주세요."
              className="flex-grow px-2 py-2 border-2 border-black focus:outline-none"
            />
            <Button mode="add" type="submit" dataTestId={'new-todo-add-button'}>
              추가
            </Button>
          </div>
        </fieldset>
      </form>

      <ul className="flex flex-col w-full gap-4 overflow-y-scroll mt-7 max-h-96">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            todo={todo.text}
            isComplete={todo.status}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>

      {showModal && <Modal onClose={closeModal}>{content}</Modal>}
    </div>
  )
}

export default Todos
