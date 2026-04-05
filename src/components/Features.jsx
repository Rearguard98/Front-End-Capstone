import { Heart, Utensils, TrendingDown, Shield } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Heart,
      title: 'Rasa Enak, Gizi Seimbang',
      description: 'Menu dirancang ahli gizi & dimasak chef profesional. 100% halal, enak seperti makanan rumahan!',
      points: ['Bumbu pas & lezat', 'Variasi menu banyak', 'Fresh setiap hari'],
      testimonial: '"Ini katering diet terenak! Rasanya nggak kayak diet, bumbunya pas banget."',
      author: 'Sarah L., 28 Balikpapan',
    },
    {
      icon: Utensils,
      title: 'Gratis Ongkir & Fleksibel',
      description: 'Skip hari kapan aja tanpa hangus! Customer service responsif siap bantu kamu.',
      points: ['Gratis ongkir', 'Skip hari fleksibel', 'CS responsif 24/7'],
      testimonial: '"Fitur skip hari ngebantu banget! CS super responsif, praktis deh."',
      author: 'Budi S., 35 Samarinda',
    },
    {
      icon: TrendingDown,
      title: 'Garansi Hasil Nyata',
      description: 'Nutrisi terukur presisi. Garansi uang kembali kalau target nggak tercapai!',
      points: ['Nutrisi presisi', 'Hasil terbukti', 'Money back guarantee'],
      testimonial: '"Turun 2.2 kg dalam sebulan tanpa lemas! Worth every penny."',
      author: 'Rina A., 31 Semarang',
    },
  ];

  return (
    <section
      id="features"
      className="section bg-white"
    >
      <div className="container-custom">
        <h2 className="text-center mb-4">Keunggulan Kompetitif</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Temukan kenapa ribuan pelanggan mempercayai kami untuk transformasi sehat mereka
        </p>

        <div className="space-y-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  isEven ? '' : 'md:grid-cols-2 md:auto-cols-fr'
                }`}
              >
                {/* Content */}
                <div className={isEven ? '' : 'md:order-2'}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary-100 rounded-lg">
                      <Icon className="text-primary-600" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-6">
                    {feature.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {feature.points.map((point, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Shield size={20} className="text-primary-600 flex-shrink-0" />
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Testimonial */}
                  <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-primary-600">
                    <p className="text-gray-700 italic mb-2">
                      {feature.testimonial}
                    </p>
                    <p className="text-sm text-gray-600 font-medium">
                      {feature.author}
                    </p>
                  </div>
                </div>

                {/* Image Placeholder */}
                <div className={isEven ? '' : 'md:order-1'}>
                  <div className="bg-gradient-to-br from-primary-300 to-primary-600 rounded-xl aspect-square flex items-center justify-center shadow-lg">
                    <div className="text-white text-center">
                      <p className="text-5xl mb-2">✨</p>
                      <p className="font-semibold">{feature.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
