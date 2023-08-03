import { Button, TodoItem } from 'components'
import React from 'react'

const Todos = () => {
  return (
    <div className="w-4/5 mx-auto">
      <form className="w-full">
        <fieldset>
          <legend className="sr-only">Todo 입력폼</legend>
          <div className="flex w-full shadow-wrap">
            <label htmlFor="todo" className="sr-only">
              할 일
            </label>
            <input
              type="text"
              id="todo"
              placeholder="할 일을 추가해주세요."
              className="flex-grow px-2 py-2 border-2 border-black focus:outline-none"
            />
            <Button
              mode="add"
              type="submit"
              onClick={() => {}}
              dataTestId={'new-todo-add-button'}
            >
              추가
            </Button>
          </div>
        </fieldset>
      </form>

      <ul className="flex flex-col w-full gap-4 overflow-y-scroll mt-7 max-h-96">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    </div>
  )
}

export default Todos
