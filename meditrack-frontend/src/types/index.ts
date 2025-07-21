export interface User {
  id: number
  name: string
  email: string
  role: 'doctor' | 'patient'
  phone?: string
  address?: string
  date_of_birth?: string
  gender?: 'male' | 'female'
  specialization?: string
  license_number?: string
  created_at: string
  updated_at: string
}

export interface Medicine {
  id: number
  name: string
  generic_name?: string
  brand_name?: string
  description?: string
  category?: string
  price: string
  stock_quantity: number
  manufacturer?: string
  expiry_date?: string
  requires_prescription: boolean
  is_expired: boolean
  is_in_stock: boolean
  created_at: string
}

export interface Prescription {
  id: number
  doctor_name?: string
  patient_name?: string
  medicine_name: string
  dosage: string
  instructions: string
  prescribed_date: string
  start_date?: string
  end_date?: string
  duration_days?: number
  frequency: 'once_daily' | 'twice_daily' | 'thrice_daily' | 'four_times_daily' | 'as_needed'
  status: 'active' | 'completed' | 'cancelled'
  notes?: string
  created_at: string
  updated_at: string
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterData {
  name: string
  email: string
  password: string
  password_confirmation: string
  role: 'doctor' | 'patient'
  phone?: string
  address?: string
  date_of_birth?: string
  gender?: 'male' | 'female'
  specialization?: string
  license_number?: string
}

export interface AuthResponse {
  message: string
  user: User
  access_token: string
  token_type: string
}
