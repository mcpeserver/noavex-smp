import { Heart, Sparkles, Globe2, Compass, ShieldAlert } from 'lucide-react';
import { motion } from 'motion/react';
import { ServerConfig } from '../types';

interface QuickInfoProps {
  config: ServerConfig;
}

export default function QuickInfo({ config }: QuickInfoProps) {
  // Get icons based on dynamic card type
  const getIcon = (type: string) => {
    switch (type) {
      case 'lifesteal':
        return <Heart className="h-5 w-5 text-[#FF6464]" />;
      case 'auraskills':
        return <Sparkles className="h-5 w-5 text-[#FFC857]" />;
      case 'multiplatform':
        return <Globe2 className="h-5 w-5 text-[#49D17D]" />;
      case 'dualworld':
        return <Compass className="h-5 w-5 text-zinc-300" />;
      default:
        return <ShieldAlert className="h-5 w-5 text-[#DC143C]" />;
    }
  };

  const getBorderColor = (type: string) => {
    switch (type) {
      case 'lifesteal':
        return 'hover:border-red-600/30 shadow-red-950/5';
      case 'auraskills':
        return 'hover:border-amber-600/30 shadow-amber-950/5';
      case 'multiplatform':
        return 'hover:border-emerald-600/30 shadow-emerald-950/5';
      default:
        return 'hover:border-zinc-500/30 shadow-zinc-900/5';
    }
  };

  const cards = config?.quickInfo || [];

  return (
    <section className="relative z-20 py-16 md:py-24 bg-[#0B0B0D] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-500">Kualitas Tanpa Kompromi</span>
          <h2 className="font-minecraft text-lg sm:text-xl md:text-2xl text-white tracking-widest uppercase mt-1 mb-3">
            Noavex Experience
          </h2>
          <div className="w-12 h-1 bg-[#DC143C] mx-auto rounded-full" />
        </div>

        {/* Responsive Grid with perfect mobile margins (No overlapping) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl border border-zinc-900 bg-[#15161A]/50 p-5 md:p-6 backdrop-blur-sm hover:bg-[#202127]/40 hover:-translate-y-1 transition-all duration-300 shadow-xl ${getBorderColor(card.type)}`}
            >
              {/* Card Hover Glow effect */}
              <div className="absolute inset-0 bg-radial-[circle_at_top_right,_var(--tw-gradient-stops)] from-transparent via-transparent to-transparent group-hover:from-red-950/5 transition-all duration-300" />
              
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#202127]/80 border border-zinc-850/80 mb-4 group-hover:scale-105 transition-transform duration-300">
                {getIcon(card.type)}
              </div>

              <h3 className="font-poppins text-sm md:text-base font-bold text-white mb-2 group-hover:text-[#DC143C] transition-colors duration-200">
                {card.title}
              </h3>

              <p className="font-sans text-xs text-zinc-400 leading-relaxed text-zinc-400/85">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
