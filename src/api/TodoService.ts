import { axiosInstance } from 'api/index'

class TodoService {
  async createTodo(todo: string, token: string | null) {
    try {
      if (!token) {
        throw new Error('토큰이 존재하지 않습니다.')
      }
      const response = await axiosInstance.post(
        '/todos',
        { todo },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        },
      )

      return response.data
    } catch (error) {
      throw error
    }
  }

  async getTodos(token: string | null) {
    try {
      if (!token) {
        throw new Error('토큰이 존재하지 않습니다.')
      }
      const response = await axiosInstance.get('/todos', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.status === 204 || !response.data) {
        return []
      }

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
      throw new Error('토큰이 존재하지 않습니다.')
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
      throw new Error('토큰이 존재하지 않습니다.')
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
