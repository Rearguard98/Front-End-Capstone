import { Eye } from 'lucide-react';

export default function Gallery() {
  const galleryItems = [
    { id: 1, title: 'Menu Sehat Lezat 1', rating: 4.9 },
    { id: 2, title: 'Menu Sehat Lezat 2', rating: 4.8 },
    { id: 3, title: 'Menu Sehat Lezat 3', rating: 4.9 },
    { id: 4, title: 'Menu Sehat Lezat 4', rating: 5.0 },
    { id: 5, title: 'Menu Sehat Lezat 5', rating: 4.9 },
    { id: 6, title: 'Menu Sehat Lezat 6', rating: 4.8 },
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <h2 className="text-center mb-4">Lihat Sendiri Kualitas Menu Kami</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Bukan stock photo! Ini menu asli yang kami kirim ke pelanggan setiap hari.
          Fresh, halal, dan dibuat dengan cinta oleh chef profesional.
        </p>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-primary-200 to-primary-400 group-hover:from-primary-300 group-hover:to-primary-500 transition-all duration-300 flex items-center justify-center">
                <span className="text-6xl">🍱</span>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <Eye 
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                  size={40} 
                />
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-4">
                <p className="text-white font-semibold">{item.title}</p>
                <p className="text-yellow-400 text-sm">⭐ {item.rating}/5</p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button className="btn-secondary">
            Lihat 6 Menu Lagi
          </button>
        </div>

        {/* Counter */}
        <div className="mt-8 text-center text-gray-600">
          <p>9 dari 18 menu ditampilkan</p>
        </div>
      </div>
    </section>
  );
}
