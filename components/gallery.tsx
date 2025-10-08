"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("photos");

  const videos = [
    "https://drive.google.com/file/d/1NZ6PVr2nw5x-HrsgsqayCilLtBOk6qzv/preview",
    "https://drive.google.com/file/d/1wv9Ho3Z1uUQPjBnsgK6gNvR3WeOog9F9/preview",
    "https://drive.google.com/file/d/1ZG2hrSIkfQufubzfdHlPhlzK5cWMKlHx/preview",
    "https://drive.google.com/file/d/1saJ8Mzza_pGW1C-sFezFosVBMjEMj8Jf/preview",
  ];

  const images = [
    "/assets/0ad94132-1ae3-4086-aa11-d8920d46074d.jpg",
    "/assets/4cb9e07b-5ccb-4e85-9843-62fb3f153f27.jpg",
    "/assets/9a86e208-9c44-4b6c-807f-65855e0bcb34.jpg",
    "/assets/30cc36a0-8472-4fca-99ff-40502c5ff7a8.jpg",
    "/assets/415cc0a1-e206-4e95-86a5-020806395ccb.jpg",
    "/assets/70365f2a-9da9-4149-9cd7-eee57ca3a269.jpg",
    "/assets/b5b9be56-3923-4074-839f-e5fba4e73990.jpg",
    "/assets/fcf6581b-1b9e-4f09-95f2-9c9a06a2d8f8.jpg",
  ];

  const openImage = (index: number) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            GALERI PROYEK
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dokumentasi proyek-proyek sumur bor yang telah kami selesaikan
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex  p-2">
            <button
              onClick={() => setActiveTab("photos")}
              className={`px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 ${
                activeTab === "photos"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              FOTO PROYEK
            </button>
            <button
              onClick={() => setActiveTab("videos")}
              className={`px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 ml-2 ${
                activeTab === "videos"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              VIDEO PROYEK
            </button>
          </div>
        </div>

        {/* Photos Grid */}
        {activeTab === "photos" && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => openImage(index)}
                className="relative aspect-square rounded-lg overflow-hidden shadow-lg cursor-pointer group border-4 border-white hover:border-blue-600 transition-all duration-300"
              >
                <img
                  src={image}
                  alt={`Proyek Sumur Bor ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/40 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    KLIK UNTUK PERBESAR
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-bold text-sm">
                    PROYEK {index + 1}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Videos Grid */}
        {activeTab === "videos" && (
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {videos.map((video, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden "
              >
                <div className="relative aspect-video bg-gray-900">
                  <iframe
                    src={video}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={`Video Proyek ${index + 1}`}
                  />
                </div>
                <div className="p-4 bg-gray-50">
                  <p className="text-gray-700 font-semibold">
                    Dokumentasi proses pengerjaan sumur bor profesional
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-600 text-center">
            <div className="text-5xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-700 font-bold text-lg uppercase">
              Proyek Selesai
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-600 text-center">
            <div className="text-5xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-700 font-bold text-lg uppercase">
              Tahun Pengalaman
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-600 text-center">
            <div className="text-5xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-gray-700 font-bold text-lg uppercase">
              Kepuasan Klien
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal for Images */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeImage}
        >
          <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeImage}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-200 z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full backdrop-blur-sm transition-all duration-200"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Image */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-full max-w-full"
            >
              <img
                src={selectedImage}
                alt="Proyek Detail"
                className="max-h-[90vh] max-w-full object-contain rounded-lg shadow-2xl"
              />

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-6 py-3 rounded-full backdrop-blur-sm">
                <span className="font-bold text-lg">
                  {currentIndex + 1} / {images.length}
                </span>
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full backdrop-blur-sm transition-all duration-200"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Instructions */}
            <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg backdrop-blur-sm text-sm">
              <p>Tekan ESC untuk keluar</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
