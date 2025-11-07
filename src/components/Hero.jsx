import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero({ ctaHref }) {
  return (
    <section className="relative w-full h-[90vh] min-h-[560px] overflow-hidden">
      {/* 3D Cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto h-full px-6 flex items-center">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1 text-sm font-medium"
          >
            Introducing Broker • FBS
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900"
          >
            Mulai Perjalanan Tradingmu Bersama
            <span className="block text-emerald-600">FBS – Raih Peluang di Pasar Global!</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-5 text-gray-700 text-lg md:text-xl"
          >
            Dapatkan akses ke eksekusi cepat, spread rendah, edukasi lengkap, dan dukungan profesional. Mulai dengan kepercayaan penuh pada broker global terpercaya.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-8 flex items-center gap-4"
          >
            <a
              href={ctaHref}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg shadow-emerald-600/20 transition-colors"
            >
              Daftar Sekarang
            </a>
            <span className="text-sm text-gray-600">Gratis • Cepat • Aman</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
