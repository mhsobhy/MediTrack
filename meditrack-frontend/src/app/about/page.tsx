import Navbar from '@/components/ui/navbar'
import Footer from '@/components/ui/footer'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">عن MediTrack</h1>
          <p className="text-xl text-gray-600">نظام إدارة الصيدليات الإلكتروني الرائد في فلسطين</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
          <div className="prose prose-lg max-w-none text-right">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">رؤيتنا</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              نسعى لتكون منصة MediTrack الرائدة في مجال إدارة الصيدليات الإلكترونية في المنطقة، 
              من خلال توفير حلول تقنية متطورة تضمن الوصول الآمن والفعال للأدوية والخدمات الطبية.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">مهمتنا</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              نعمل على تطوير وتقديم نظام صيدلية إلكترونية شامل يربط بين الأطباء والمرضى والصيادلة، 
              مما يسهل عملية إدارة الوصفات الطبية ويحسن من جودة الرعاية الصحية المقدمة للمجتمع.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">قيمنا</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 bg-blue-50 rounded-2xl">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">الأمان والخصوصية</h3>
                <p className="text-blue-800">نحافظ على أعلى معايير الأمان لحماية البيانات الطبية الحساسة</p>
              </div>
              
              <div className="p-6 bg-green-50 rounded-2xl">
                <h3 className="text-xl font-semibold text-green-900 mb-3">الدقة والموثوقية</h3>
                <p className="text-green-800">نضمن دقة المعلومات الطبية والوصفات المقدمة للمرضى</p>
              </div>
              
              <div className="p-6 bg-purple-50 rounded-2xl">
                <h3 className="text-xl font-semibold text-purple-900 mb-3">سهولة الاستخدام</h3>
                <p className="text-purple-800">نصمم واجهات بسيطة وسهلة الاستخدام لجميع فئات المستخدمين</p>
              </div>
              
              <div className="p-6 bg-orange-50 rounded-2xl">
                <h3 className="text-xl font-semibold text-orange-900 mb-3">التطوير المستمر</h3>
                <p className="text-orange-800">نعمل باستمرار على تطوير وتحسين خدماتنا لتلبية احتياجات المستخدمين</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">فريق العمل</h2>
            <p className="text-gray-700 leading-relaxed">
              يضم فريق MediTrack مجموعة من المختصين في مجال التكنولوجيا الطبية وتطوير البرمجيات، 
              بالإضافة إلى استشاريين طبيين وصيادلة ذوي خبرة واسعة في المجال الصحي. نعمل جميعاً 
              بروح الفريق الواحد لتحقيق هدفنا في تحسين الخدمات الصحية المقدمة للمجتمع.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}