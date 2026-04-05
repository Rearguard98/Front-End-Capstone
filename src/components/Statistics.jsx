import { CheckCircle, Award, Users, Zap } from 'lucide-react';

export default function Statistics() {
  const stats = [
    {
      icon: CheckCircle,
      label: '100% Halal',
      description: 'Tersertifikasi BPJPH Kemenag RI',
    },
    {
      icon: Award,
      label: 'Ahli Gizi',
      description: 'Konsultasi unlimited dengan profesional',
    },
    {
      icon: Users,
      label: '15K+ Pelanggan',
      description: 'Rating 4.9/5 dengan 99% success rate',
    },
    {
      icon: Zap,
      label: 'Gratis Ongkir',
      description: 'Pengiriman gratis & skip fleksibel',
    },
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <h2 className="text-center mb-4">Mengapa Pilih EatHealthy?</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Kombinasi sempurna antara rasa lezat, gizi seimbang, dan fleksibilitas maksimal
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="card p-8 text-center hover:bg-primary-50 transition">
                <div className="inline-flex p-3 bg-primary-100 rounded-full mb-4">
                  <Icon className="text-primary-600" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-600 text-sm">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
