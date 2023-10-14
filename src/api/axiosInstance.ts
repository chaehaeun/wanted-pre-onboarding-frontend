import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://www.pre-onboarding-selection-task.store/',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axiosInstance
