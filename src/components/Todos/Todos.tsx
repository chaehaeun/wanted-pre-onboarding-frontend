import { Button, Modal, TodoItem } from 'components'
import React, { useEffect, useRef, useState } from 'react'
import { useModal } from 'hooks'
import { todoService } from 'api'
import { useAuth } from 'context/AuthContext'

interface Todo {
  id: string
  todo: string
  isCompleted: boolean
}

const Todos = () => {
  // 할 일 목록 상태 및 입력 값 상태 관리
  const [todos, setTodos] = useState<Todo[]>([])
  const [value, setValue] = useState('')
  // 모달 관련 상태와 함수를 사용하는 훅
  const { showModal, content, openModal, closeModal } = useModal()
  // 입력 필드에 대한 참조
  const inputRef = useRef<HTMLInputElement | null>(null)
  const { token: storedToken } = useAuth()

  // 컴포넌트가 마운트되면 할 일 목록을 가져옴
  useEffect(() => {
    const fetchTodos = async () => {
      if (!storedToken) return
      try {
        const fetchedTodos = await todoService.getTodos(storedToken)
        setTodos(fetchedTodos)
      } catch (error) {
        openModal('할 일을 불러오는데 실패했습니다.')
      }
    }

    fetchTodos()
  }, [storedToken, openModal])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const trimmedValue = value.trim()
    if (!trimmedValue) {
      openModal('할 일을 작성해주세요.')

      return
    }

    try {
      const response = await todoService.createTodo(trimmedValue, storedToken)

      setTodos(prev => [...prev, response])
      setValue('')
    } catch (error: any) {
      openModal('할 일 추가에 실패했습니다.')
    }

    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleUpdate = async (
    id: string,
    newTodo: string,
    newIsCompleted: boolean,
  ) => {
    // 현재 수정하려는 할 일 아이템을 찾음
    const currentTodo = todos.find(todo => todo.id === id)
    // 현재 할 일이 존재하지 않거나 변경사항이 없다면 함수를 종료
    if (
      !currentTodo ||
      (currentTodo.todo === newTodo &&
        currentTodo.isCompleted === newIsCompleted)
    )
      return

    try {
      await todoService.updateTodo(id, newTodo, newIsCompleted, storedToken)
      // 업데이트 성공 시, 할 일 목록을 업데이트
      setTodos(prev =>
        prev.map(item =>
          item.id === id
            ? { ...item, todo: newTodo, isCompleted: newIsCompleted }
            : item,
        ),
      )
    } catch (error) {
      openModal('할 일 수정에 실패했습니다.')
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await todoService.deleteTodo(id, storedToken)
      setTodos(prev => prev.filter(todo => todo.id !== id))
    } catch (error) {
      openModal('할 일 삭제에 실패했습니다.')
    }
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
              data-testid="new-todo-input"
              className="flex-grow px-2 py-2 border-2 border-black focus:outline-none"
            />
            <Button mode="add" type="submit" dataTestId={'new-todo-add-button'}>
              추가
            </Button>
          </div>
        </fieldset>
      </form>

      <ul className="flex flex-col gap-4 overflow-y-auto mt-7 max-h-96">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            todo={todo.todo}
            isComplete={todo.isCompleted}
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
