"use client";

import { Menu, X, Droplets, Phone } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-2 rounded-lg">
              <Droplets className="w-8 h-8 text-white" />
            </div>
            <div className="lg:block hidden">
              <h1 className="text-2xl font-bold text-gray-900">
                Barokah Sumur Bor Bali
              </h1>
              <p className="text-xs text-gray-600">
                Spesialis Sumur Bor Profesional
              </p>
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Beranda
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Tentang Kami
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Layanan
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Galeri
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Kontak
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-3">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 font-medium"
            >
              Beranda
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 font-medium"
            >
              Tentang Kami
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 font-medium"
            >
              Layanan
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 font-medium"
            >
              Galeri
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 font-medium"
            >
              Kontak
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
