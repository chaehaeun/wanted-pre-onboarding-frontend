import { axiosInstance } from 'api/index'

interface Todo {
  id: string
  todo: string
  isCompleted: boolean
}

class TodoService {
  async createTodo(todo: Todo, token: string | null) {
    const body = {
      id: todo.id,
      todo: todo.todo,
      isCompleted: todo.isCompleted,
    }
    try {
      if (!token) {
        throw new Error('No token')
      }
      await axiosInstance.post('/todos', body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    } catch (error) {
      throw error
    }
  }
  async getTodos(token: string | null) {
    try {
      if (!token) {
        throw new Error('No token')
      }
      const response = await axiosInstance.get('/todos', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      return response.data
    } catch (error) {
      throw error
    }
  }

  async updateTodo(
    id: string,
    todo: string,
    isCompleted: boolean,
    token: string | null,
  ) {
    const body = {
      todo,
      isCompleted,
    }
    const url = `/todos/${id}`
    if (!token) {
      throw new Error('No token')
    }

    try {
      await axiosInstance.put(url, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    } catch (error) {
      throw error
    }
  }

  async deleteTodo(id: string, token: string | null) {
    const url = `/todos/${id}`
    if (!token) {
      throw new Error('No token')
    }

    try {
      await axiosInstance.delete(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    } catch (error) {
      throw error
    }
  }
}

const todoService = new TodoService()
export default todoService
