'use client'

import { useState, useEffect } from 'react'
import { 
  UserGroupIcon, 
  ClipboardDocumentListIcon, 
  BeakerIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'

const DoctorDashboard = () => {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    // Get user info from localStorage or API
    const userRole = localStorage.getItem('user_role')
    if (userRole !== 'doctor') {
      window.location.href = '/login'
    }
    // You can fetch user details from API here
  }, [])

  const stats = [
    {
      name: 'إجمالي المرضى',
      value: '156',
      icon: UserGroupIcon,
      color: 'bg-blue-500'
    },
    {
      name: 'الوصفات الطبية',
      value: '89',
      icon: ClipboardDocumentListIcon,
      color: 'bg-green-500'
    },
    {
      name: 'الأدوية المتاحة',
      value: '1,247',
      icon: BeakerIcon,
      color: 'bg-purple-500'
    },
    {
      name: 'التقارير',
      value: '23',
      icon: ChartBarIcon,
      color: 'bg-orange-500'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">لوحة تحكم الطبيب</h1>
            <button
              onClick={() => {
                localStorage.removeItem('auth_token')
                localStorage.removeItem('user_role')
                window.location.href = '/login'
              }}
              className="text-red-600 hover:text-red-800"
            >
              تسجيل خروج
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Message */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white mb-8">
          <h2 className="text-2xl font-bold mb-2">مرحباً دكتور!</h2>
          <p className="text-blue-100">
            هذه لوحة التحكم الخاصة بك. يمكنك إدارة المرضى والوصفات الطبية من هنا.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">{stat.name}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-xl`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">إجراءات سريعة</h3>
            <div className="space-y-3">
              <button className="w-full text-right p-3 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors">
                إضافة وصفة طبية جديدة
              </button>
              <button className="w-full text-right p-3 bg-green-50 hover:bg-green-100 rounded-xl transition-colors">
                عرض قائمة المرضى
              </button>
              <button className="w-full text-right p-3 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors">
                البحث في الأدوية
              </button>
              <button className="w-full text-right p-3 bg-orange-50 hover:bg-orange-100 rounded-xl transition-colors">
                إنشاء تقرير
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">الوصفات الحديثة</h3>
            <div className="space-y-3">
              <div className="p-3 border border-gray-200 rounded-xl">
                <p className="font-medium">أحمد محمد</p>
                <p className="text-sm text-gray-600">باراسيتامول - 500mg</p>
                <p className="text-xs text-gray-500">منذ ساعتين</p>
              </div>
              <div className="p-3 border border-gray-200 rounded-xl">
                <p className="font-medium">فاطمة علي</p>
                <p className="text-sm text-gray-600">أموكسيسيلين - 250mg</p>
                <p className="text-xs text-gray-500">منذ 4 ساعات</p>
              </div>
              <div className="p-3 border border-gray-200 rounded-xl">
                <p className="font-medium">محمد حسن</p>
                <p className="text-sm text-gray-600">ايبوبروفين - 400mg</p>
                <p className="text-xs text-gray-500">أمس</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorDashboard