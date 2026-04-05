import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState } from 'react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Amelia',
      age: 28,
      role: 'Mahasiswi',
      city: 'Semarang',
      avatar: '👩‍🎓',
      rating: 5,
      text: 'Awalnya ragu karena makanan sehat identik hambar, tapi ternyata enak banget! Bahkan teman kantor jadi ikutan langganan karena penasaran.',
      verified: true,
    },
    {
      id: 2,
      name: 'Budi Setiawan',
      age: 32,
      role: 'Fitness Enthusiast',
      city: 'Bandung',
      avatar: '💪',
      rating: 5,
      text: 'Program Muscle Gain-nya pas buat bantu latihan. Nggak perlu pusing hitung kalori atau timbang lauk, semua udah diatur. Progress latihan jadi lebih konsisten.',
      verified: true,
    },
    {
      id: 3,
      name: 'Dika Prasetyo',
      age: 26,
      role: 'Programmer',
      city: 'Jakarta',
      avatar: '👨‍💻',
      rating: 5,
      text: 'Rasanya nggak seperti makanan diet yang hambar. Tetap ada bumbu dan variasinya juga banyak. Suami dan anak malah sering ikut nyicip.',
      verified: true,
    },
    {
      id: 4,
      name: 'Maya Putri',
      age: 23,
      role: 'Fresh Graduate',
      city: 'Surabaya',
      avatar: '👩‍💼',
      rating: 5,
      text: 'EatHealthy ini bukan sekadar catering, tapi jadi bentuk self-care buat aku. Praktis, enak, dan bantu hidup lebih teratur.',
      verified: true,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="testimonials"
      className="section bg-gray-50"
    >
      <div className="container-custom">
        <h2 className="text-center mb-4">15,000+ Pelanggan Telah Merasakan Perubahan Nyata</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Bukan hanya soal berat badan turun, tapi juga tentang hidup lebih sehat, produktif, dan bahagia setiap hari
        </p>

        {/* Main Testimonial */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-8">
          <div className="mb-6">
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              "{testimonials[currentIndex].text}"
            </p>
          </div>

          {/* Author */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-3xl">
                {testimonials[currentIndex].avatar}
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  {testimonials[currentIndex].name}
                  {testimonials[currentIndex].verified && (
                    <span className="text-primary-600 ml-2">✓</span>
                  )}
                </p>
                <p className="text-sm text-gray-600">
                  {testimonials[currentIndex].role}, {testimonials[currentIndex].age} Tahun
                </p>
                <p className="text-xs text-gray-500">
                  {testimonials[currentIndex].city}
                </p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <ChevronLeft className="text-gray-600" size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <ChevronRight className="text-gray-600" size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition ${
                index === currentIndex
                  ? 'bg-primary-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-primary-600">15K+</p>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary-600">4.9/5</p>
            <p className="text-gray-600">Average Rating</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary-600">100%</p>
            <p className="text-gray-600">Verified Reviews</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary-600">99%</p>
            <p className="text-gray-600">Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
