import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      id: 1,
      question: 'Kalau aku pesan sekarang, makanannya sampai jam berapa?',
      answer: 'Menu diantarkan sesuai jadwal makan yang kamu pilih. Kami berkomitmen pengiriman tepat waktu dengan kurير yang ramah dan profesional. Kamu bisa request jam pengiriman khusus saat konsultasi awal.',
    },
    {
      id: 2,
      question: 'Ini cocok nggak sih buat yang punya kondisi kesehatan tertentu?',
      answer: 'Cocok banget! Program Personalized kami dirancang khusus untuk kondisi medis tertentu seperti diabetes, hipertensi, kolesterol tinggi, dan asam urat. Konsultasikan dengan ahli gizi kami untuk meal plan yang aman dan tepat.',
    },
    {
      id: 3,
      question: 'Bisa request tanpa minyak atau bahan tertentu?',
      answer: 'Tentu saja! Kami bisa custom menu sesuai alegi atau pantangan kamu: gluten-free, dairy-free, seafood-free, nut-free, atau pantangan makanan lainnya. Ceritakan kebutuhan spesifikmu dan kami akan siapkan meal plan yang aman dan nyaman.',
    },
    {
      id: 4,
      question: 'Dalam satu kotak isinya lengkap apa aja?',
      answer: 'Setiap kotak berisi menu lengkap dengan nasi/karbo, lauk pauk, sayuran, dan sambal. Semua sudah terhitung kalorinya sesuai program yang dipilih. Hitungan nutrisi sudah akurat dan sesuai kebutuhan dailymu.',
    },
    {
      id: 5,
      question: 'Bisa bantu nurunin berat badan juga?',
      answer: 'Bisa banget! Program Fat Loss kami dirancang khusus untuk menurunkan berat badan dengan aman dan efektif. Ribuan pelanggan sudah membuktikan hasil nyata: turun 2-3 kg per bulan dengan tetap makan enak dan berenergi.',
    },
    {
      id: 6,
      question: 'Kalau alamat aku berubah, bisa diganti nggak?',
      answer: 'Bisa! Kamu bisa ubah alamat pengiriman kapan aja melalui aplikasi atau hubungi CS kami via WhatsApp. Sistemnya fleksibel dan responsif untuk memastikan kemudahan kamu sebagai pelanggan.',
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="section bg-white">
      <div className="container-custom max-w-3xl">
        <h2 className="text-center mb-4">Pertanyaan yang Sering Diajukan</h2>
        <p className="text-center text-gray-600 mb-12">
          Wajar kok kalau kamu masih ragu! Kami sudah kumpulkan pertanyaan yang paling sering ditanyakan untuk bantu kamu lebih yakin memulai perjalanan sehat bersama EatHealthy.
        </p>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
              >
                <span className="text-left font-semibold text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`text-primary-600 flex-shrink-0 transition-transform ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>

              {/* Answer */}
              {activeIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-primary-50 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Masih Butuh Bantuan?
          </h3>
          <p className="text-gray-600 mb-6">
            Tim customer service kami siap membantu kamu 24/7 via WhatsApp
          </p>
          <button className="btn-primary">
            💬 Chat Sekarang
          </button>
        </div>
      </div>
    </section>
  );
}
