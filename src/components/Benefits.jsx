import { Rocket, Shield, Zap, GraduationCap, Headphones } from 'lucide-react';

const items = [
  {
    icon: Shield,
    title: 'Broker Tepercaya',
    desc: 'Regulasi kuat dan reputasi global untuk keamanan akun Anda.'
  },
  {
    icon: Zap,
    title: 'Eksekusi Cepat',
    desc: 'Order dieksekusi dalam hitungan milidetik untuk meminimalkan slippage.'
  },
  {
    icon: Rocket,
    title: 'Spread Rendah',
    desc: 'Biaya trading kompetitif agar potensi profit Anda lebih optimal.'
  },
  {
    icon: GraduationCap,
    title: 'Edukasi Lengkap',
    desc: 'Webinar, artikel, dan materi pembelajaran untuk semua level.'
  },
  {
    icon: Headphones,
    title: 'Dukungan Responsif',
    desc: 'Tim support siap membantu Anda setiap saat.'
  }
];

export default function Benefits() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Mengapa Memilih FBS?</h2>
        <p className="text-gray-600 mt-3 text-center max-w-2xl mx-auto">Fokus pada hal penting: hasil. Dengan teknologi modern, biaya rendah, dan dukungan lengkap, FBS membantu Anda berkembang di pasar global.</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <Icon size={22} />
                </div>
                <h3 className="font-semibold text-gray-900 text-lg">{title}</h3>
              </div>
              <p className="text-gray-600 mt-3">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
