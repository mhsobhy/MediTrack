import Navbar from '@/components/ui/navbar'
import Footer from '@/components/ui/footer'

export default function ConsultationPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">الاستشارات الإدارية</h1>
          <p className="text-xl text-gray-600">خدمات استشارية متخصصة لإدارة المؤسسات الطبية</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">قريباً...</h2>
              <p className="text-lg">
                نعمل حالياً على تطوير خدمة الاستشارات الإدارية المتخصصة
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border border-gray-200 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">إدارة العيادات</h3>
              <p className="text-gray-700">استشارات متخصصة في إدارة العيادات الطبية وتنظيم العمل</p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">إدارة المستشفيات</h3>
              <p className="text-gray-700">حلول إدارية شاملة للمستشفيات والمراكز الطبية الكبيرة</p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">إدارة الصيدليات</h3>
              <p className="text-gray-700">استشارات في إدارة الصيدليات وتنظيم المخزون الدوائي</p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">التدريب والتطوير</h3>
              <p className="text-gray-700">برامج تدريبية للكادر الطبي والإداري في المؤسسات الصحية</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">للاستفسار عن خدمات الاستشارة الإدارية</p>
            <a href="mailto:consultation@meditrack.ps" className="btn-primary">
              تواصل معنا
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}