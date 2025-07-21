import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  timeout: 10000,
})

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    // Check if we're in the browser
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('auth_token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor for handling auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Check if we're in the browser
      if (typeof window !== 'undefined') {
        localStorage.removeItem('auth_token')
        window.location.href = '/login'
      }
    }
    return Promise.reject(error)
  }
)

// Auth API functions
export const authAPI = {
  login: (credentials: { email: string; password: string }) =>
    api.post('/login', credentials),
  
  register: (userData: any) =>
    api.post('/register', userData),
  
  logout: () =>
    api.post('/logout'),
  
  getProfile: () =>
    api.get('/me'),
}

// Medicine API functions
export const medicineAPI = {
  getAll: (params?: any) =>
    api.get('/medicines', { params }),
  
  getById: (id: number) =>
    api.get(`/medicines/${id}`),
  
  getCategories: () =>
    api.get('/medicines-categories'),
}

// Prescription API functions
export const prescriptionAPI = {
  getAll: (params?: any) =>
    api.get('/prescriptions', { params }),
  
  create: (data: any) =>
    api.post('/doctors/prescriptions', data),
  
  update: (id: number, data: any) =>
    api.put(`/doctors/prescriptions/${id}`, data),
  
  delete: (id: number) =>
    api.delete(`/doctors/prescriptions/${id}`),
}

export default api