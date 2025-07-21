import Image from 'next/image'
import Link from 'next/link'
import { CheckIcon } from '@heroicons/react/24/solid'

const HeroSection = () => {
  const features = [
    'قاعدة بيانات شاملة للأدوية',
    'متابعة دقيقة للوصفات الطبية',
    'نظام إدارة متكامل للمرضى والأطباء',
    'تقارير صحية دقيقة ومفصلة'
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              مرحباً بك في{' '}
              <span className="text-gradient">MediTrack</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              نظام صيدلية إلكترونية متكامل لإدارة الوصفات الطبية والأدوية بطريقة آمنة وفعالة.
              نحن نهدف لتسهيل الوصول إلى الأدوية ومتابعة الحالة الصحية للمرضى بأفضل طريقة ممكنة.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3 space-x-reverse">
                  <div className="bg-green-100 rounded-full p-1">
                    <CheckIcon className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register/patient" className="btn-primary text-center">
                ابدأ كمريض
              </Link>
              <Link href="/register/doctor" className="btn-secondary text-center">
                انضم كطبيب
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl opacity-20 blur-3xl"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                <Image
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="طبيب متعدد المهام"
                  width={500}
                  height={400}
                  className="rounded-2xl w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
