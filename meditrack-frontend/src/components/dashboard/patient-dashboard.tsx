'use client'

import { useState, useEffect } from 'react'
import { 
  ClipboardDocumentListIcon, 
  BeakerIcon, 
  ClockIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

const PatientDashboard = () => {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    // Get user info from localStorage or API
    const userRole = localStorage.getItem('user_role')
    if (userRole !== 'patient') {
      window.location.href = '/login'
    }
    // You can fetch user details from API here
  }, [])

  const stats = [
    {
      name: 'الوصفات النشطة',
      value: '3',
      icon: ClipboardDocumentListIcon,
      color: 'bg-blue-500'
    },
    {
      name: 'الأدوية الحالية',
      value: '5',
      icon: BeakerIcon,
      color: 'bg-green-500'
    },
    {
      name: 'المواعيد القادمة',
      value: '2',
      icon: ClockIcon,
      color: 'bg-purple-500'
    },
    {
      name: 'مؤشر الصحة',
      value: '85%',
      icon: HeartIcon,
      color: 'bg-red-500'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">لوحة تحكم المريض</h1>
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
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-6 text-white mb-8">
          <h2 className="text-2xl font-bold mb-2">مرحباً بك!</h2>
          <p className="text-green-100">
            تابع حالتك الصحية ووصفاتك الطبية من خلال لوحة التحكم هذه.
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

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Current Prescriptions */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">الوصفات الحالية</h3>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-xl">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-blue-900">باراسيتامول</p>
                    <p className="text-sm text-blue-700">500mg - مرتين يومياً</p>
                    <p className="text-xs text-blue-600">د. أحمد حسن</p>
                  </div>
                  <span className="bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full">
                    نشط
                  </span>
                </div>
              </div>
              
              <div className="p-4 bg-green-50 rounded-xl">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-green-900">فيتامين د</p>
                    <p className="text-sm text-green-700">1000 وحدة - يومياً</p>
                    <p className="text-xs text-green-600">د. فاطمة علي</p>
                  </div>
                  <span className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full">
                    نشط
                  </span>
                </div>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-xl">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-purple-900">أوميجا 3</p>
                    <p className="text-sm text-purple-700">1000mg - مرة يومياً</p>
                    <p className="text-xs text-purple-600">د. محمد الأحمد</p>
                  </div>
                  <span className="bg-purple-200 text-purple-800 text-xs px-2 py-1 rounded-full">
                    نشط
                  </span>
                </div>
              </div>
            </div>
            
            <button className="w-full mt-4 p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
              عرض جميع الوصفات
            </button>
          </div>

          {/* Medicine Reminders */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">تذكيرات الأدوية</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-xl">
                <div>
                  <p className="font-medium text-yellow-900">باراسيتامول</p>
                  <p className="text-sm text-yellow-700">حان وقت الجرعة</p>
                </div>
                <button className="bg-yellow-500 text-white px-3 py-1 rounded-lg text-sm">
                  تم التناول
                </button>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-xl">
                <div>
                  <p className="font-medium text-blue-900">فيتامين د</p>
                  <p className="text-sm text-blue-700">خلال ساعتين</p>
                </div>
                <button className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm">
                  تذكير
                </button>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl">
                <div>
                  <p className="font-medium text-green-900">أوميجا 3</p>
                  <p className="text-sm text-green-700">غداً في الصباح</p>
                </div>
                <button className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm">
                  مجدول
                </button>
              </div>
            </div>
            
            <button className="w-full mt-4 p-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors">
              إعداد تذكيرات جديدة
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">إجراءات سريعة</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors text-right">
                <BeakerIcon className="h-6 w-6 text-blue-600 mb-2" />
                <p className="font-medium text-blue-900">البحث عن دواء</p>
                <p className="text-sm text-blue-700">ابحث في قاعدة بيانات الأدوية</p>
              </button>
              
              <button className="p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors text-right">
                <ClipboardDocumentListIcon className="h-6 w-6 text-green-600 mb-2" />
                <p className="font-medium text-green-900">التاريخ المرضي</p>
                <p className="text-sm text-green-700">عرض تاريخك الطبي الكامل</p>
              </button>
              
              <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors text-right">
                <ClockIcon className="h-6 w-6 text-purple-600 mb-2" />
                <p className="font-medium text-purple-900">حجز موعد</p>
                <p className="text-sm text-purple-700">احجز موعد مع طبيبك</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientDashboard