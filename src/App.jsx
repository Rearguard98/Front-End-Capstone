import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import Features from './components/Features';
import Programs from './components/Programs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Statistics Section */}
        <Statistics />

        {/* Features Section */}
        <Features />

        {/* Programs Section */}
        <Programs />

        {/* Gallery Section */}
        <Gallery />

        {/* Testimonials Section */}
        <Testimonials />

        {/* FAQ Section */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Whatsapp Button */}
      <a
        href="https://wa.me/6281384854958"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-gradient-to-r from-green-400 to-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-40"
        aria-label="Contact on WhatsApp"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.734.732 5.41 2.124 7.738L2.046 22l2.215-.712C6.954 22.547 9.4 23 11.99 23c5.444 0 10.205-3.902 11.123-9.037.147.159.29.316.428.474" />
        </svg>
      </a>
    </div>
  );
}
