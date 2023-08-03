import { Button, TodoItem } from 'components'
import React, { useState } from 'react'

interface Todo {
  id: string
  text: string
  status: boolean
}

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmedValue = value.trim()
    if (!trimmedValue) return

    const newTodo: Todo = {
      id: Date.now().toString(),
      text: trimmedValue,
      status: false,
    }

    setTodos([...todos, newTodo])
    setValue('')
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
          />
        ))}
      </ul>
    </div>
  )
}

export default Todos
