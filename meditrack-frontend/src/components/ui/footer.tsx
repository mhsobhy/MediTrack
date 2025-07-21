import Link from 'next/link'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 space-x-reverse mb-4">
              <div className="bg-white/20 p-2 rounded-xl">
                <UserCircleIcon className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold">MediTrack</span>
            </div>
            <p className="text-blue-100 leading-relaxed">
              نظام صيدلية إلكترونية متكامل لإدارة الوصفات الطبية والأدوية بطريقة آمنة وفعالة
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-100 hover:text-white transition-colors">
                  الصفحة الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/register/patient" className="text-blue-100 hover:text-white transition-colors">
                  تسجيل كمريض
                </Link>
              </li>
              <li>
                <Link href="/register/doctor" className="text-blue-100 hover:text-white transition-colors">
                  تسجيل كطبيب
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-blue-100 hover:text-white transition-colors">
                  تسجيل دخول
                </Link>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">روابط مهمة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-blue-100 hover:text-white transition-colors">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-blue-100 hover:text-white transition-colors">
                  شروط الاستخدام
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-blue-100 hover:text-white transition-colors">
                  المساعدة
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-blue-100 hover:text-white transition-colors">
                  الأسئلة الشائعة
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">بيانات التواصل</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 space-x-reverse">
                <PhoneIcon className="h-5 w-5 text-blue-300" />
                <span className="text-blue-100">+970 591 234 567</span>
              </li>
              <li className="flex items-center space-x-3 space-x-reverse">
                <EnvelopeIcon className="h-5 w-5 text-blue-300" />
                <span className="text-blue-100">info@meditrack.ps</span>
              </li>
              <li className="flex items-center space-x-3 space-x-reverse">
                <MapPinIcon className="h-5 w-5 text-blue-300" />
                <span className="text-blue-100">غزة - فلسطين</span>
              </li>
              <li className="flex items-center space-x-3 space-x-reverse">
                <GlobeAltIcon className="h-5 w-5 text-blue-300" />
                <span className="text-blue-100">www.meditrack.ps</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200">
            © 2024 MediTrack. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
