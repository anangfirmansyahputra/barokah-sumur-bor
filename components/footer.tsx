import { Droplets, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-2 rounded-lg">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white text-xl font-bold">Barokah Sumur Bor Bali</h3>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Solusi terpercaya untuk kebutuhan air bersih di Bali dengan layanan profesional dan bergaransi.
            </p>
            <a href="https://wa.me/6285738783805" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">WhatsApp Kami</span>
            </a>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Pembuatan Sumur Bor</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Servis Sumur</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Servis Pompa</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Instalasi Air</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Tandon Penampungan</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Kuras Tower</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">Tentang Kami</a></li>
              <li><a href="#gallery" className="hover:text-blue-400 transition-colors">Galeri Proyek</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Hubungi Kami</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Testimoni</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-sm">
              <li>Melayani seluruh wilayah Bali</li>
              <li className="pt-2">
                <a href="tel:085738783805" className="hover:text-blue-400 transition-colors">
                  0857-3878-3805
                </a>
              </li>
              <li>
                <a href="https://wa.me/6285738783805" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-sm text-center text-gray-400">
          <p>&copy; {currentYear} Barokah Sumur Bor Bali. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
