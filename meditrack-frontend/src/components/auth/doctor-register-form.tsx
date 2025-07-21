'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Link from 'next/link'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { authAPI } from '@/lib/api'

const doctorRegisterSchema = z.object({
  name: z.string().min(2, 'الاسم يجب أن يكون حرفين على الأقل'),
  email: z.string().email('البريد الإلكتروني غير صحيح'),
  password: z.string().min(6, 'كلمة المرور يجب أن تكون 6 أحرف على الأقل'),
  password_confirmation: z.string(),
  phone: z.string().min(10, 'رقم الهاتف غير صحيح'),
  specialization: z.string().min(2, 'التخصص مطلوب'),
  license_number: z.string().min(3, 'رقم الترخيص مطلوب'),
  address: z.string().optional(),
  date_of_birth: z.string().optional(),
  gender: z.enum(['male', 'female']).optional()
}).refine((data) => data.password === data.password_confirmation, {
  message: "كلمات المرور غير متطابقة",
  path: ["password_confirmation"],
})

type DoctorRegisterFormData = z.infer<typeof doctorRegisterSchema>

const DoctorRegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<DoctorRegisterFormData>({
    resolver: zodResolver(doctorRegisterSchema)
  })

  const onSubmit = async (data: DoctorRegisterFormData) => {
    setIsLoading(true)
    setError('')

    try {
      const response = await authAPI.register({
        ...data,
        role: 'doctor'
      })

      // Store token and redirect
      localStorage.setItem('auth_token', response.data.access_token)
      localStorage.setItem('user_role', 'doctor')
      window.location.href = '/dashboard/doctor'
    } catch (err: any) {
      setError(err.response?.data?.message || 'حدث خطأ في التسجيل')
    } finally {
      setIsLoading(false)
    }
  }

  const specializations = [
    'الطب العام',
    'طب القلب',
    'طب الأطفال',
    'الجراحة العامة',
    'طب العيون',
    'طب النساء والتوليد',
    'طب العظام',
    'طب الأمراض الجلدية',
    'طب الأنف والأذن والحنجرة',
    'الطب النفسي',
    'طب الأعصاب',
    'طب الأسنان'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">تسجيل كطبيب</h2>
          <p className="text-gray-600">انضم إلى MediTrack وقدم خدماتك الطبية</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                الاسم الكامل *
              </label>
              <input
                type="text"
                {...register('name')}
                className="input-field"
                placeholder="د. أحمد محمد"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                البريد الإلكتروني *
              </label>
              <input
                type="email"
                {...register('email')}
                className="input-field"
                placeholder="doctor@email.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                رقم الهاتف *
              </label>
              <input
                type="tel"
                {...register('phone')}
                className="input-field"
                placeholder="+970 59 123 4567"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            {/* Specialization */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                التخصص *
              </label>
              <select {...register('specialization')} className="input-field">
                <option value="">اختر التخصص</option>
                {specializations.map((spec) => (
                  <option key={spec} value={spec}>
                    {spec}
                  </option>
                ))}
              </select>
              {errors.specialization && (
                <p className="text-red-500 text-sm mt-1">{errors.specialization.message}</p>
              )}
            </div>

            {/* License Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                رقم الترخيص *
              </label>
              <input
                type="text"
                {...register('license_number')}
                className="input-field"
                placeholder="DOC12345"
              />
              {errors.license_number && (
                <p className="text-red-500 text-sm mt-1">{errors.license_number.message}</p>
              )}
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                تاريخ الميلاد
              </label>
              <input
                type="date"
                {...register('date_of_birth')}
                className="input-field"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                الجنس
              </label>
              <select {...register('gender')} className="input-field">
                <option value="">اختر الجنس</option>
                <option value="male">ذكر</option>
                <option value="female">أنثى</option>
              </select>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                عنوان العيادة
              </label>
              <textarea
                {...register('address')}
                className="input-field"
                rows={3}
                placeholder="أدخل عنوان العيادة"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                كلمة المرور *
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  {...register('password')}
                  className="input-field pl-10"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                تأكيد كلمة المرور *
              </label>
              <div className="relative">
                <input
                  type={showPasswordConfirm ? 'text' : 'password'}
                  {...register('password_confirmation')}
                  className="input-field pl-10"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPasswordConfirm ? (
                    <EyeSlashIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
              {errors.password_confirmation && (
                <p className="text-red-500 text-sm mt-1">{errors.password_confirmation.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'جاري التسجيل...' : 'تسجيل كطبيب'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              لديك حساب بالفعل؟{' '}
              <Link href="/login" className="text-blue-600 hover:text-blue-800 font-medium">
                سجل دخولك
              </Link>
            </p>
            <p className="text-gray-600 mt-2">
              تريد التسجيل كمريض؟{' '}
              <Link href="/register/patient" className="text-blue-600 hover:text-blue-800 font-medium">
                سجل هنا
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorRegisterForm