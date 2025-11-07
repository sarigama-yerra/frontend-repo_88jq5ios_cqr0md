import { ExternalLink } from 'lucide-react';

export default function StickyCTA({ ctaHref }) {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href={ctaHref}
        target="_blank"
        rel="noreferrer noopener"
        className="flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-xl shadow-emerald-600/30"
      >
        Daftar Sekarang <ExternalLink size={18} className="opacity-90" />
      </a>
    </div>
  );
}
