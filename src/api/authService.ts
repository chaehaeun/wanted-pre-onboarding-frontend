import { axiosInstance } from 'api/index'

interface AuthData {
  email: string
  password: string
}

class AuthService {
  signUp = async (data: AuthData): Promise<void> => {
    return await axiosInstance.post('/auth/signup', data)
  }

  signIn = async (data: AuthData): Promise<string> => {
    const response = await axiosInstance.post('/auth/signin', data)

    return response.data.access_token
  }
}

const authService = new AuthService()
export default authService
