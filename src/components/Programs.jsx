import { Check, TrendingDown, Heart, Zap, Flame } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      id: 1,
      name: 'Fat Loss',
      icon: TrendingDown,
      description: 'Pangkas lemak sambil tetap makan enak. Didesain tinggi protein & serat.',
      price: '47rb',
      badge: 'Populer',
      features: ['Tinggi protein', 'Tinggi serat', 'Kalori terkontrol'],
      cta: 'Pilih Program Ini',
      color: 'from-red-400 to-red-600',
    },
    {
      id: 2,
      name: 'Healthy Life',
      icon: Heart,
      description: 'Jaga berat badan ideal dan energimu seharian. Pilihan praktis & seimbang.',
      price: '51rb',
      badge: 'Keseimbangan',
      features: ['Nutrisi seimbang', 'Energi optimal', 'Fleksibel'],
      cta: 'Pilih Program Ini',
      color: 'from-pink-400 to-pink-600',
    },
    {
      id: 3,
      name: 'Personalized',
      icon: Zap,
      description: 'Program 100% dirancang khusus oleh ahli gizi kami untuk kebutuhan spesifikmu.',
      price: '54rb',
      badge: 'Custom',
      features: ['Full custom', 'Konsultasi gratis', 'Sesuai kebutuhan'],
      cta: 'Konsultasi Dulu',
      color: 'from-amber-400 to-amber-600',
    },
    {
      id: 4,
      name: 'Muscle Gain',
      icon: Flame,
      description: 'Maksimalkan pertumbuhan otot dengan asupan protein berkualitas tinggi.',
      price: '58rb',
      badge: 'Protein Tinggi',
      features: ['60g+ protein', 'High calorie', 'Otot optimal'],
      cta: 'Pilih Program Ini',
      color: 'from-orange-400 to-orange-600',
    },
  ];

  return (
    <section
      id="programs"
      className="section bg-gray-50"
    >
      <div className="container-custom">
        <h2 className="text-center mb-4">Program Diet Sesuai Tujuanmu</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Pilih program yang sesuai dengan target kesehatanmu. Semua dilengkapi konsultasi gratis dengan ahli gizi.
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {programs.map((program) => {
            const Icon = program.icon;
            const [fromColor, toColor] = program.color.split(' to-');

            return (
              <div
                key={program.id}
                className="card overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                {/* Header Color */}
                <div className={`bg-gradient-to-r ${program.color} h-32 relative`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="text-white" size={48} />
                  </div>

                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-white text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                    {program.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {program.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {program.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b">
                    <p className="text-3xl font-bold text-primary-600">
                      Rp{program.price}
                      <span className="text-sm text-gray-600">/meal</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Sudah termasuk ongkir</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check size={18} className="text-primary-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className="btn-primary w-full justify-center">
                    {program.cta}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-white rounded-lg p-8 grid md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="font-bold text-primary-600">Mulai dari 450 Kcal</p>
            <p className="text-sm text-gray-600">Fleksibel sesuai kebutuhan</p>
          </div>
          <div>
            <p className="font-bold text-primary-600">Menu Bervariasi</p>
            <p className="text-sm text-gray-600">Berbeda setiap hari</p>
          </div>
          <div>
            <p className="font-bold text-primary-600">Gratis Ongkir</p>
            <p className="text-sm text-gray-600">Di Balikpapan, Samarinda, Semarang</p>
          </div>
          <div>
            <p className="font-bold text-primary-600">4.9 Rating</p>
            <p className="text-sm text-gray-600">Dari 3,500+ pelanggan</p>
          </div>
        </div>
      </div>
    </section>
  );
}
