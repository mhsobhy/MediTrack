import Link from 'next/link'
import { 
  UserPlusIcon, 
  UserIcon, 
  ClipboardDocumentListIcon 
} from '@heroicons/react/24/outline'

const FeatureCards = () => {
  const cards = [
    {
      icon: UserPlusIcon,
      title: 'تسجيل كمريض',
      description: 'انضم إلى المنصة كمريض واحصل على خدمة طبية متميزة ومتابعة دقيقة لوصفاتك الطبية',
      href: '/register/patient',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: UserIcon,
      title: 'تسجيل كدكتور',
      description: 'انضم كطبيب وقدم خدماتك الطبية للمرضى من خلال منصة آمنة ومتطورة',
      href: '/register/doctor',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: ClipboardDocumentListIcon,
      title: 'استشارات إدارية',
      description: 'احصل على استشارات إدارية متخصصة لإدارة العيادات والمؤسسات الطبية بكفاءة',
      href: '/consultation',
      color: 'from-purple-500 to-violet-600'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            ابدأ من هنا
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اختر النوع المناسب لك للبدء في استخدام منصة MediTrack والاستفادة من خدماتنا المتميزة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Link
              key={index}
              href={card.href}
              className="group block"
            >
              <div className="card group-hover:scale-105 transition-transform duration-300">
                <div className={`bg-gradient-to-r ${card.color} p-4 rounded-2xl w-fit mb-6`}>
                  <card.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {card.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {card.description}
                </p>
                
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                  <span>ابدأ الآن</span>
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureCards