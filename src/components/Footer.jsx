import { Leaf, Mail, MapPin, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container-custom py-12 md:py-16 border-b border-gray-800">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <Leaf className="text-white" size={24} />
              </div>
              <span className="font-bold text-xl text-white">EatHealthy</span>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Transformasi sehat dimulai dari pilihan menu yang tepat. Bersama ahli gizi profesional, kami siap membantumu mencapai tubuh impian.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary-600 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary-600 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-primary-600 transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Program Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Program</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary-600 transition">
                  Fat Loss
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-600 transition">
                  Muscle Gain
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-600 transition">
                  Healthy Life
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-600 transition">
                  Personalized
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary-600 transition">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-600 transition">
                  Tim Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-600 transition">
                  Karir
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-600 transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Hubungi Kami</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-primary-600 mt-1 flex-shrink-0" />
                <span>+62 857 6072 5444</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-primary-600 mt-1 flex-shrink-0" />
                <span>hello@eathealthy.co.id</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary-600 mt-1 flex-shrink-0" />
                <span>Balikpapan • Samarinda • Semarang</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="container-custom py-8">
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {/* Trust Signals */}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-primary-600">✓</span>
            <span>100% Halal - Tersertifikasi BPJPH</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-primary-600">✓</span>
            <span>Ahli Gizi Profesional - Konsultasi Gratis</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-primary-600">✓</span>
            <span>Money Back Guarantee</span>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 EatHealthy Indonesia. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-600 transition">
              Syarat & Ketentuan
            </a>
            <a href="#" className="hover:text-primary-600 transition">
              Kebijakan Privasi
            </a>
            <a href="#" className="hover:text-primary-600 transition">
              Bantuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
