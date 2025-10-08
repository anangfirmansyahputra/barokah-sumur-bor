"use client"

import { ArrowRight, CheckCircle, Phone } from 'lucide-react';

export default function ClassicHero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="home" className="relative pt-16">
      <div className="relative bg-blue-600 text-white py-20 lg:py-32">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="/assets/hero.jpg"
            alt="Background"
            className="w-full h-full object-cover object-top"
          />
        </div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              JASA SUMUR BOR PROFESIONAL
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Melayani Seluruh Wilayah Bali
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Pengalaman Lebih Dari 15 Tahun - Teknologi Modern - Tim Berpengalaman
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={scrollToContact}
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-10 py-4 rounded text-xl font-bold transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Phone className="w-6 h-6" />
                HUBUNGI KAMI
              </button>
              <button
                onClick={scrollToServices}
                className="bg-white hover:bg-gray-100 text-blue-600 px-10 py-4 rounded text-xl font-bold transition-colors duration-200"
              >
                LIHAT LAYANAN
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded border-2 border-white/30">
                <CheckCircle className="w-12 h-12 mx-auto mb-3 text-yellow-400" />
                <h3 className="text-lg font-bold mb-2">GARANSI KUALITAS</h3>
                <p className="text-base">Air Bersih & Jernih Terjamin</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded border-2 border-white/30">
                <CheckCircle className="w-12 h-12 mx-auto mb-3 text-yellow-400" />
                <h3 className="text-lg font-bold mb-2">PERALATAN MODERN</h3>
                <p className="text-base">Teknologi Terkini & Terpercaya</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded border-2 border-white/30">
                <CheckCircle className="w-12 h-12 mx-auto mb-3 text-yellow-400" />
                <h3 className="text-lg font-bold mb-2">TIM PROFESIONAL</h3>
                <p className="text-base">Berpengalaman & Tersertifikasi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Bar */}
      <div className="bg-gray-100 py-8 border-t-4 border-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-700 font-semibold text-lg">TAHUN PENGALAMAN</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-700 font-semibold text-lg">PROYEK SELESAI</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-700 font-semibold text-lg">KEPUASAN KLIEN</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-700 font-semibold text-lg">SIAP MELAYANI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
