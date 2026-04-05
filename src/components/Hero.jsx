import { MessageCircle, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="section bg-gradient-to-br from-primary-50 via-white to-blue-50"
    >
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 animate-slideUp">
          <div>
            <h1 className="text-primary-700">
              Diet Sehat <span className="text-primary-600">Halal</span> & Lezat!
            </h1>
            <p className="text-lg text-gray-600 mt-4">
              Catering diet tersertifikasi BPJPH dengan meal plan personal dari ahli gizi profesional. Gratis ongkir & konsultasi unlimited.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-200">
            <div>
              <p className="text-3xl font-bold text-primary-600">15K+</p>
              <p className="text-sm text-gray-600">Happy Customers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-600">4.9/5</p>
              <p className="text-sm text-gray-600">Rating</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-600">100%</p>
              <p className="text-sm text-gray-600">Halal</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-primary gap-2">
              <MessageCircle size={20} />
              Konsultasi Gratis
            </button>
            <button className="btn-secondary gap-2">
              <Play size={20} />
              Lihat Video
            </button>
          </div>

          {/* Trust Signal */}
          <p className="text-sm text-gray-500">
            ✓ Tersertifikasi Halal BPJPH • ✓ Ahli Gizi Profesional • ✓ Fresh Setiap Hari
          </p>
        </div>

        {/* Right Content - Image Placeholder */}
        <div className="relative">
          <div className="bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl aspect-square flex items-center justify-center shadow-2xl">
            <div className="text-white text-center">
              <p className="text-6xl mb-2">🍱</p>
              <p className="text-xl font-semibold">Menu Sehat Lezat</p>
              <p className="text-sm opacity-80">Bukan stock photo!</p>
            </div>
          </div>
          
          {/* Floating Card */}
          <div className="absolute -bottom-8 -left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs animate-fadeIn">
            <p className="font-semibold text-gray-900">Turun BB Terbukti</p>
            <p className="text-sm text-gray-600">2.2 kg dalam sebulan tanpa lemas</p>
            <p className="text-xs text-primary-600 mt-2">⭐⭐⭐⭐⭐ Dari 3,500+ pelanggan</p>
          </div>
        </div>
      </div>
    </section>
  );
}
