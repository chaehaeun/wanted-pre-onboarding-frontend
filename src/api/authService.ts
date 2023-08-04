import { axiosInstance } from 'api/index'

interface AuthData {
  email: string
  password: string
}

class AuthService {
  async signUp(data: AuthData): Promise<void> {
    try {
      await axiosInstance.post('/auth/signup', data)
    } catch (error) {
      throw error
    }
  }

  async signIn(data: AuthData): Promise<string> {
    try {
      const response = await axiosInstance.post('/auth/signin', data)

      return response.data.access_token
    } catch (error) {
      throw error
    }
  }
}

const authService = new AuthService()
export default authService
