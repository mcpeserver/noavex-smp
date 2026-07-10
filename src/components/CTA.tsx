import { ArrowRight, MessageSquare, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { ServerConfig } from '../types';

interface CTAProps {
  config: ServerConfig;
  onChangePage: (pageId: string) => void;
}

export default function CTA({ config, onChangePage }: CTAProps) {
  const discordUrl = config?.socials?.discord || 'https://discord.gg/9KUN2byKRM';
  const websiteUrl = config?.socials?.website || 'https://community.randev.com';

  return (
    <section className="relative z-20 py-16 md:py-20 bg-[#0B0B0D] border-t border-zinc-950/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
        {/* Ambient red backglow behind CTA content */}
        <div className="absolute inset-x-0 top-0 h-40 bg-red-950/10 blur-3xl -z-10 rounded-full" />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 mb-10 px-2"
        >
          <span className="text-[9px] font-bold uppercase tracking-widest text-[#DC143C]">GABUNG SEKARANG JUGA</span>
          <h2 className="font-minecraft text-xl sm:text-2xl md:text-3xl text-white tracking-widest uppercase">
            Tulis Kisah Keberanianmu
          </h2>
          <p className="font-poppins text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed text-balance">
            Siapkan perlengkapanmu, pilih duniamu, dan temukan takdir barumu di jagat Noavex SMP bersama ratusan petualang lainnya dari seluruh penjuru tanah air!
          </p>
        </motion.div>

        {/* Action Controls - Completely responsive, prevents jamming or stacking overlapping */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md sm:max-w-none mx-auto px-4"
        >
          {/* Main Join Button */}
          <button
            onClick={() => onChangePage('server')}
            className="w-full sm:w-auto font-poppins text-xs font-bold uppercase tracking-wider text-white bg-[#DC143C] hover:bg-red-700 hover:shadow-[0_0_20px_rgba(220,20,60,0.35)] px-8 py-3.5 sm:py-4 rounded-xl border border-red-500/10 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
            aria-label="Dapatkan Alamat Server untuk Bergabung"
          >
            Mulai Petualangan
            <ArrowRight className="h-4 w-4" />
          </button>

          {/* Discord Server Link */}
          <a
            href={discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto font-poppins text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-white bg-[#202127]/60 hover:bg-[#202127] border border-zinc-800/80 hover:border-zinc-700 px-8 py-3.5 sm:py-4 rounded-xl backdrop-blur-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            aria-label="Gabung Discord Resmi Noavex SMP"
          >
            Gabung Discord Server
            <MessageSquare className="h-3.5 w-3.5 text-[#DC143C]" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
