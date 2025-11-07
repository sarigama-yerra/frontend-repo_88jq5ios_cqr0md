export default function CTA({ ctaHref }) {
  return (
    <section className="py-16 bg-emerald-600">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-white text-3xl font-extrabold">Siap Memulai? Dapatkan Peluang di Pasar Global Sekarang.</h3>
        <p className="text-emerald-50 mt-3">Buka akun melalui tautan IB kami untuk dukungan penuh, edukasi, dan bonus eksklusif.</p>
        <a
          href={ctaHref}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center justify-center mt-6 bg-white text-emerald-700 hover:text-emerald-800 font-semibold px-6 py-3 rounded-lg shadow-lg transition-colors"
        >
          Daftar Sekarang
        </a>
      </div>
    </section>
  );
}
