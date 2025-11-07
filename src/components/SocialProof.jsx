import { Star, Award, ShieldCheck } from 'lucide-react';

export default function SocialProof() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 text-amber-500">
              <Star size={22} />
              <p className="font-semibold text-gray-900">Rating tinggi dari trader</p>
            </div>
            <p className="text-gray-600 mt-3">Dipercaya oleh jutaan pengguna di seluruh dunia untuk pengalaman trading yang konsisten.</p>
          </div>
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 text-emerald-600">
              <ShieldCheck size={22} />
              <p className="font-semibold text-gray-900">Keamanan kelas dunia</p>
            </div>
            <p className="text-gray-600 mt-3">Standar keamanan ketat dan perlindungan saldo negatif untuk ketenangan.</p>
          </div>
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 text-sky-600">
              <Award size={22} />
              <p className="font-semibold text-gray-900">Penghargaan industri</p>
            </div>
            <p className="text-gray-600 mt-3">Meraih berbagai penghargaan bergengsi atas inovasi dan layanan.</p>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6 opacity-70">
          <img src="https://images.unsplash.com/photo-1581553673739-c4906b5d0de8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxWaXNhfGVufDB8MHx8fDE3NjI1NDE1NjN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Visa" className="h-7" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" className="h-7" />
          <img src="https://images.unsplash.com/photo-1705514814688-7ac2da1bd5e4?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI1NDE1NjN8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="PCI" className="h-7" />
        </div>
      </div>
    </section>
  );
}
