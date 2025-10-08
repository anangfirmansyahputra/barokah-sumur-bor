import { Droplet, Wrench, Settings, Droplets, Package, Waves, CheckCircle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Droplet,
      title: 'Pembuatan Sumur Bor',
      description: 'Jasa pembuatan sumur bor profesional untuk rumah, villa, hotel, dan industri',
      features: [
        'Survei lokasi gratis',
        'Kedalaman disesuaikan',
        'Garansi kualitas air',
        'Harga kompetitif'
      ],
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Wrench,
      title: 'Servis Sumur',
      description: 'Perawatan dan perbaikan sumur bor untuk memastikan debit air tetap optimal',
      features: [
        'Pengecekan rutin',
        'Pembersihan sumur',
        'Perbaikan kerusakan',
        'Garansi servis'
      ],
      color: 'from-cyan-600 to-cyan-700'
    },
    {
      icon: Settings,
      title: 'Servis Pompa',
      description: 'Perawatan dan perbaikan pompa air berbagai jenis dan merek',
      features: [
        'Semua jenis pompa',
        'Suku cadang original',
        'Teknisi berpengalaman',
        'Service cepat'
      ],
      color: 'from-teal-600 to-teal-700'
    },
    {
      icon: Droplets,
      title: 'Instalasi Air',
      description: 'Pemasangan sistem perpipaan dan instalasi air lengkap',
      features: [
        'Desain sistem pipa',
        'Material berkualitas',
        'Instalasi profesional',
        'Garansi pemasangan'
      ],
      color: 'from-green-600 to-green-700'
    },
    {
      icon: Package,
      title: 'Tandon Penampungan',
      description: 'Pembuatan dan instalasi tandon air berbagai kapasitas',
      features: [
        'Berbagai ukuran',
        'Material tahan lama',
        'Sistem otomatis',
        'Instalasi lengkap'
      ],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Waves,
      title: 'Kuras Tower & Lainnya',
      description: 'Layanan pembersihan dan perawatan tower air dan sistem air lainnya',
      features: [
        'Pembersihan menyeluruh',
        'Desinfeksi sistem',
        'Pengecekan komponen',
        'Laporan hasil kerja'
      ],
      color: 'from-cyan-500 to-teal-600'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Layanan Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Berbagai layanan pembuatan sumur bor profesional untuk memenuhi kebutuhan air bersih Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${service.color} p-8 text-white`}>
                <service.icon className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-blue-50">{service.description}</p>
              </div>

              <div className="p-8">
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Proses Kerja Kami</h3>
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            <div className="space-y-2">
              <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                1
              </div>
              <h4 className="font-semibold">Survei Lokasi</h4>
              <p className="text-sm text-blue-50">Analisis lokasi dan kedalaman air</p>
            </div>
            <div className="space-y-2">
              <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                2
              </div>
              <h4 className="font-semibold">Penawaran</h4>
              <p className="text-sm text-blue-50">Estimasi biaya dan waktu pengerjaan</p>
            </div>
            <div className="space-y-2">
              <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                3
              </div>
              <h4 className="font-semibold">Pengeboran</h4>
              <p className="text-sm text-blue-50">Proses pengeboran profesional</p>
            </div>
            <div className="space-y-2">
              <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                4
              </div>
              <h4 className="font-semibold">Instalasi</h4>
              <p className="text-sm text-blue-50">Pemasangan pompa dan finishing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
