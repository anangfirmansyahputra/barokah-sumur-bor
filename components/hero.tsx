"use client"

import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-20 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div>
              <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                Solusi Air Bersih Terpercaya
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Jasa Sumur Bor
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Profesional di Bali
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Lebih dari 15 tahun pengalaman melayani kebutuhan air bersih untuk rumah, villa, hotel, dan industri di seluruh Bali dengan teknologi modern dan tim profesional.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex flex-col items-center space-y-2">
                <CheckCircle className="w-8 h-8 text-green-500" />
                <span className="text-gray-700 text-center">Garansi kualitas dan kuantitas air</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <CheckCircle className="w-8 h-8 text-green-500" />
                <span className="text-gray-700 text-center">Peralatan modern dan teknologi terkini</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <CheckCircle className="w-8 h-8 text-green-500" />
                <span className="text-gray-700 text-center">Tim berpengalaman dan tersertifikasi</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToContact}
                className="group bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Hubungi Kami</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-gray-700 px-8 py-4 rounded-lg font-semibold border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
              >
                Lihat Layanan
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 max-w-md mx-auto mt-12">
              <div className="bg-white p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600 font-medium">Tahun Pengalaman</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold text-cyan-500 mb-2">500+</div>
                <div className="text-gray-600 font-medium">Proyek Selesai</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
