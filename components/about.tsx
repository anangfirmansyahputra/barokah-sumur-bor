import { Award, Users, Wrench, Shield } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Award,
      title: "Berpengalaman",
      description:
        "Lebih dari 15 tahun melayani kebutuhan air bersih di seluruh Bali",
    },
    {
      icon: Users,
      title: "Tim Profesional",
      description: "Teknisi terlatih dan bersertifikat dengan keahlian tinggi",
    },
    {
      icon: Wrench,
      title: "Peralatan Modern",
      description:
        "Menggunakan mesin bor dan teknologi terkini untuk hasil optimal",
    },
    {
      icon: Shield,
      title: "Bergaransi",
      description: "Jaminan kualitas air dan hasil pengeboran sesuai standar",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tentang Barokah Sumur Bor Bali
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami adalah perusahaan jasa pembuatan sumur bor terpercaya di Bali
            yang berkomitmen menyediakan solusi air bersih berkualitas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Mengapa Memilih Kami?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Barokah Sumur Bor Bali telah dipercaya oleh ratusan klien di
              seluruh Bali untuk memenuhi kebutuhan air bersih mereka. Kami
              mengkhususkan diri dalam pembuatan sumur bor untuk berbagai
              keperluan, mulai dari hunian pribadi, villa, hotel, hingga
              kebutuhan industri.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Dengan tim yang berpengalaman, peralatan modern, dan komitmen
              terhadap kualitas, kami memastikan setiap proyek diselesaikan
              dengan sempurna. Kami juga memberikan konsultasi gratis untuk
              membantu Anda menemukan solusi terbaik sesuai kebutuhan dan
              lokasi.
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-600">
              <p className="text-gray-700 italic">
                {
                  "Kepuasan klien adalah prioritas utama kami. Setiap proyek dikerjakan dengan standar kualitas tertinggi dan hasil yang memuaskan."
                }
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              {/* <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/GVbHXYwtyMU"
                title="Proses Pembuatan Sumur Bor"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              /> */}
              <iframe
                src="https://drive.google.com/file/d/1ZG2hrSIkfQufubzfdHlPhlzK5cWMKlHx/preview"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                title="Proses Pembuatan Sumur Bor"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
