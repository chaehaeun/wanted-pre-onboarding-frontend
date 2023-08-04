import { axiosInstance } from 'api/index'

interface SignUpData {
  email: string
  password: string
}

interface SignInData {
  email: string
  password: string
}

class AuthService {
  async signUp(data: SignUpData): Promise<void> {
    try {
      await axiosInstance.post('/auth/signup', data)
    } catch (error) {
      throw error
    }
  }

  async signIn(data: SignInData): Promise<string> {
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
