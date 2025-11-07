import Hero from './components/Hero';
import Benefits from './components/Benefits';
import SocialProof from './components/SocialProof';
import CTA from './components/CTA';
import StickyCTA from './components/StickyCTA';

const REFERRAL_LINK = 'https://fbs.com/?ref=YOUR_REF_ID';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-inter">
      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-emerald-600" />
            <span className="font-bold text-gray-900">FBS IB</span>
          </div>
          <a
            href={REFERRAL_LINK}
            target="_blank"
            rel="noreferrer noopener"
            className="hidden sm:inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-4 py-2 rounded-md"
          >
            Daftar Sekarang
          </a>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero ctaHref={REFERRAL_LINK} />
        <Benefits />
        <SocialProof />
        <CTA ctaHref={REFERRAL_LINK} />
      </main>

      {/* Footer */}
      <footer className="py-10 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-600">
          <p>Disclaimer: Trading memiliki risiko tinggi. Pastikan Anda memahami risikonya sebelum memulai.</p>
          <p className="mt-2">Hak cipta © {new Date().getFullYear()} FBS IB Partner. Semua hak dilindungi.</p>
        </div>
      </footer>

      {/* Sticky CTA */}
      <StickyCTA ctaHref={REFERRAL_LINK} />
    </div>
  );
}

export default App;
