import { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container-custom flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
            <Leaf className="text-white" size={24} />
          </div>
          <span className="font-bold text-xl text-gray-900">EatHealthy</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li>
            <a href="#home" className="hover:text-primary-600 transition">
              Beranda
            </a>
          </li>
          <li>
            <a href="#programs" className="hover:text-primary-600 transition">
              Program
            </a>
          </li>
          <li>
            <a href="#features" className="hover:text-primary-600 transition">
              Keunggulan
            </a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-primary-600 transition">
              Testimoni
            </a>
          </li>
        </ul>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <a href="#contact" className="btn-primary">
            Hubungi Kami
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <X size={28} className="text-gray-900" />
          ) : (
            <Menu size={28} className="text-gray-900" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container-custom py-4 flex flex-col gap-4">
            <a href="#home" className="text-gray-700 hover:text-primary-600 font-medium">
              Beranda
            </a>
            <a href="#programs" className="text-gray-700 hover:text-primary-600 font-medium">
              Program
            </a>
            <a href="#features" className="text-gray-700 hover:text-primary-600 font-medium">
              Keunggulan
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary-600 font-medium">
              Testimoni
            </a>
            <a href="#contact" className="btn-primary w-full justify-center">
              Hubungi Kami
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
