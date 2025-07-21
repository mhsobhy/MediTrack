const AboutSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            عن MediTrack
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
          <div className="prose prose-lg prose-blue max-w-none text-right">
            <p className="text-xl leading-relaxed text-gray-700 mb-6">
              نحن نقدم منصة صيدلية إلكترونية متكاملة تهدف إلى تسهيل الوصول إلى الأدوية رقم 
              واحد وإدارة الوصفات الطبية بطريقة آمنة وفعالة. منصتنا تجمع بين التكنولوجيا 
              المتطورة والخبرة الطبية لتقديم خدمة صحية شاملة.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-600 mb-6">
              من خلال MediTrack، يمكن للأطباء إنشاء وإدارة الوصفات الطبية، متابعة حالة المرضى، 
              ودعم اتخاذ القرارات الطبية المناسبة. كما يستطيع المرضى الوصول بسهولة إلى 
              وصفاتهم الطبية، متابعة تاريخهم المرضي، والحصول على معلومات دقيقة حول الأدوية.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">للأطباء</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• إدارة شاملة للوصفات الطبية</li>
                  <li>• متابعة حالة المرضى</li>
                  <li>• قاعدة بيانات الأدوية المحدثة</li>
                  <li>• تقارير طبية تفصيلية</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">للمرضى</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• الوصول السهل للوصفات الطبية</li>
                  <li>• متابعة التاريخ المرضي</li>
                  <li>• تذكيرات بمواعيد الأدوية</li>
                  <li>• معلومات شاملة عن الأدوية</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection