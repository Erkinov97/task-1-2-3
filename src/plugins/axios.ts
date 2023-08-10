import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL

const instance = axios.create({
  baseURL: baseURL, // API ning manzili
  headers: {
    'Content-Type': 'application/json'
  }
})

// Interseptor qo'shish
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default instance
