import { ArrowDown, Flame, Globe, Swords } from 'lucide-react';
import { motion } from 'motion/react';
import heroBg from '../assets/images/hero_bg_1783693246360.jpg';
import serverLogo from '../assets/images/server_logo_1783693270316.jpg';
import { ServerConfig } from '../types';

interface HeroProps {
  config: ServerConfig;
  onChangePage: (pageId: string) => void;
}

export default function Hero({ config, onChangePage }: HeroProps) {
  // Generate floating ash particles
  const ashParticles = Array.from({ length: 12 });

  return (
    <section
      id="beranda"
      className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden px-4 pt-20 pb-32 md:pt-24 md:pb-40"
      aria-label="Noavex SMP Hero Banner"
    >
      {/* Background Image with Dark Vignetting */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Cinematic Dark Castle Noavex SMP"
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Layer 1: Dark Red Vignette Overlay */}
        <div className="absolute inset-0 bg-radial-[circle_at_center,_rgba(11,11,13,0.35)_0%,_rgba(11,11,13,0.96)_85%]" />
        {/* Layer 2: Black Surface Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0D]/80 via-transparent to-transparent" />
      </div>

      {/* Floating Ash Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {ashParticles.map((_, index) => {
          const delay = index * 0.8;
          const left = Math.random() * 100;
          const size = Math.random() * 3 + 1.5;
          return (
            <div
              key={index}
              className="absolute bg-red-600/25 rounded-full animate-float-particle"
              style={{
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
                bottom: '-20px',
                animationDelay: `${delay}s`,
                animationDuration: `${12 + Math.random() * 6}s`,
              }}
            />
          );
        })}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center max-w-3xl mx-auto flex flex-col items-center mt-6">
        
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 90, damping: 14, delay: 0.1 }}
          className="mb-5 relative group"
        >
          {/* Logo background glow */}
          <div className="absolute inset-0 rounded-full bg-red-950/40 blur-2xl group-hover:bg-red-800/25 transition-all duration-300" />
          
          <img
            src={serverLogo}
            alt="Official Noavex SMP Logo"
            className="relative h-28 w-28 sm:h-36 sm:w-36 md:h-44 md:w-44 rounded-full border-2 border-red-950/60 p-1 bg-black/40 shadow-2xl hover:scale-105 transition-all duration-300 object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mb-4 px-2"
        >
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#DC143C] font-semibold flex items-center justify-center gap-1.5 mb-2.5">
            <Flame className="h-3 w-3 text-[#DC143C] animate-pulse" />
            Minecraft Server Indonesia Premium
            <Flame className="h-3 w-3 text-[#DC143C] animate-pulse" />
          </span>
          <h1 className="font-minecraft text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-widest font-bold drop-shadow-[0_4px_16px_rgba(220,20,60,0.4)]">
            {config?.serverName || 'NOAVEX SMP'}
          </h1>
        </motion.div>

        {/* Subtitle (highly readable, non-overlapping) */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="font-poppins text-xs sm:text-sm text-zinc-300 max-w-xl leading-relaxed mb-8 px-4 text-center text-balance"
        >
          {config?.heroSubtitle || 'Dua Dunia, Dua Petualangan. Pilih dunia yang sesuai dengan gaya bermainmu dan mulai perjalananmu sekarang.'}
        </motion.p>

        {/* Action Buttons (Strictly responsive, prevents stacking overlapping) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-6 max-w-md sm:max-w-none"
        >
          <button
            onClick={() => onChangePage('server')}
            className="w-full sm:w-auto font-poppins text-xs font-bold uppercase tracking-wider text-white bg-[#DC143C] hover:bg-red-700 active:scale-[0.98] px-8 py-3.5 sm:py-4 rounded-xl border border-red-500/10 shadow-lg shadow-red-950/40 hover:shadow-red-900/40 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500"
            aria-label="Masuk ke Alamat Server"
          >
            Mulai Bermain
          </button>
          
          <button
            onClick={() => onChangePage('fitur')}
            className="w-full sm:w-auto font-poppins text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-white bg-[#202127]/60 hover:bg-[#202127] border border-zinc-800/80 hover:border-zinc-700 px-8 py-3.5 sm:py-4 rounded-xl backdrop-blur-sm active:scale-[0.98] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-zinc-600"
            aria-label="Buka Fitur Server"
          >
            Lihat Fitur
          </button>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer text-zinc-500 hover:text-white transition-colors duration-250"
        onClick={() => onChangePage('dunia')}
        aria-label="Lihat info dunia"
      >
        <span className="text-[8px] font-mono tracking-widest uppercase">Pilih Dunia</span>
        <div className="h-7 w-4 rounded-full border border-zinc-850 p-1 flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="h-1.5 w-1 rounded-full bg-[#DC143C]"
          />
        </div>
      </motion.div>
    </section>
  );
}
