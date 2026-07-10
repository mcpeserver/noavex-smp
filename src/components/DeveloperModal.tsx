import { useEffect } from 'react';
import { X, ShieldCheck, Phone, Compass, Users, Link2, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { DeveloperConfig } from '../types';

interface DeveloperModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: DeveloperConfig | null;
  loading: boolean;
  error: string | null;
}

export default function DeveloperModal({ isOpen, onClose, config, loading, error }: DeveloperModalProps) {
  // Listen to Escape key to close modal for WCAG AA Accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0B0B0D]/90 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-red-950/40 bg-[#15161A]/95 p-6 shadow-2xl md:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Informasi Pengembang Website"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-zinc-800/50"
              aria-label="Tutup modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-950/40 border border-red-700/30">
                <ShieldCheck className="h-5 w-5 text-[#DC143C]" />
              </div>
              <div>
                <h2 className="font-poppins text-xl font-bold tracking-tight text-white">Informasi Pengembang</h2>
                <p className="text-xs text-zinc-400">Hubungi pengembang untuk pembuatan website & sistem</p>
              </div>
            </div>

            {loading && (
              <div className="flex flex-col items-center justify-center py-12 gap-3">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-red-500 border-t-transparent"></div>
                <p className="text-sm text-zinc-400">Memuat data pengembang...</p>
              </div>
            )}

            {error && (
              <div className="rounded-xl border border-red-900/30 bg-red-950/20 p-4 text-center">
                <p className="text-sm text-red-400">{error}</p>
                <button
                  onClick={onClose}
                  className="mt-3 text-xs underline text-zinc-400 hover:text-white"
                >
                  Tutup
                </button>
              </div>
            )}

            {!loading && !error && config && (
              <div className="space-y-6">
                {/* Developer Card */}
                <div className="rounded-xl border border-zinc-800 bg-[#202127]/60 p-5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#DC143C]">Developed By</span>
                  <h3 className="font-poppins text-lg font-bold text-white mt-1 mb-4">{config.name}</h3>
                  
                  <div className="space-y-3">
                    {/* Portfolio */}
                    <a
                      href={config.website.portfolio}
                      target="_blank"
                      rel="noopener noreferrer referrer"
                      className="flex items-center justify-between p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/60 hover:border-red-950/50 hover:bg-[#15161A] transition-all duration-200 group"
                      aria-label="Buka Portfolio Pengembang"
                    >
                      <div className="flex items-center gap-2.5">
                        <Compass className="h-4 w-4 text-zinc-400 group-hover:text-[#DC143C]" />
                        <span className="text-sm font-medium text-zinc-300 group-hover:text-white">Portfolio Developer</span>
                      </div>
                      <ExternalLink className="h-3.5 w-3.5 text-zinc-500 group-hover:text-white" />
                    </a>

                    {/* WhatsApp */}
                    <a
                      href={`https://wa.me/${config.contact.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer referrer"
                      className="flex items-center justify-between p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/60 hover:border-emerald-950/50 hover:bg-[#15161A] transition-all duration-200 group"
                      aria-label="Hubungi WhatsApp Pengembang"
                    >
                      <div className="flex items-center gap-2.5">
                        <Phone className="h-4 w-4 text-zinc-400 group-hover:text-emerald-500" />
                        <span className="text-sm font-medium text-zinc-300 group-hover:text-white">WhatsApp Developer</span>
                      </div>
                      <span className="text-xs font-mono text-zinc-500 group-hover:text-white">{config.contact.phone}</span>
                    </a>
                  </div>
                </div>

                {/* Community Card */}
                <div className="rounded-xl border border-zinc-800 bg-[#202127]/60 p-5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Developer Community</span>
                  <h3 className="font-poppins text-base font-bold text-white mt-1 mb-4">{config.community.name}</h3>

                  <div className="grid grid-cols-2 gap-3">
                    {/* Discord */}
                    <a
                      href={config.community.discord}
                      target="_blank"
                      rel="noopener noreferrer referrer"
                      className="flex flex-col items-start p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/60 hover:border-[#DC143C]/30 hover:bg-zinc-900 transition-all duration-200"
                      aria-label="Bergabung ke Discord Komunitas"
                    >
                      <Users className="h-4 w-4 text-[#DC143C] mb-1.5" />
                      <span className="text-xs font-bold text-white">Discord</span>
                      <span className="text-[10px] text-zinc-400 mt-0.5 truncate w-full">Join Community</span>
                    </a>

                    {/* Website */}
                    <a
                      href={config.community.website}
                      target="_blank"
                      rel="noopener noreferrer referrer"
                      className="flex flex-col items-start p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/60 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-200"
                      aria-label="Kunjungi Website Komunitas"
                    >
                      <Link2 className="h-4 w-4 text-zinc-400 mb-1.5" />
                      <span className="text-xs font-bold text-white">Website</span>
                      <span className="text-[10px] text-zinc-400 mt-0.5 truncate w-full">randev.com</span>
                    </a>
                  </div>
                </div>

                <p className="text-[10px] text-center text-zinc-500 leading-normal">
                  Data ini diambil secara dinamis dari server konfigurasi pengembang eksternal demi keandalan data.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
