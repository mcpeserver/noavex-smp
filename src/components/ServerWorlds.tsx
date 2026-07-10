import { Skull, Sparkles, Shield, Heart, Trophy, Swords, Compass, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { ServerConfig } from '../types';

interface ServerWorldsProps {
  config: ServerConfig;
}

export default function ServerWorlds({ config }: ServerWorldsProps) {
  // Map icons for bullet features dynamically
  const getBulletIcon = (worldType: string, index: number) => {
    if (worldType === 'lifesteal') {
      const icons = [
        <Heart className="h-4 w-4 text-[#FF6464]" />,
        <Swords className="h-4 w-4 text-[#FF6464]" />,
        <Shield className="h-4 w-4 text-[#FF6464]" />
      ];
      return icons[index] || <Heart className="h-4 w-4 text-[#FF6464]" />;
    } else {
      const icons = [
        <Trophy className="h-4 w-4 text-[#FFC857]" />,
        <Sparkles className="h-4 w-4 text-[#FFC857]" />,
        <Compass className="h-4 w-4 text-[#FFC857]" />
      ];
      return icons[index] || <Sparkles className="h-4 w-4 text-[#FFC857]" />;
    }
  };

  const worlds = config?.worlds || [];

  return (
    <section id="dunia" className="relative z-20 py-16 md:py-24 bg-[#0B0B0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-500">Pilih Jalan Petualanganmu</span>
          <h2 className="font-minecraft text-lg sm:text-xl md:text-2xl text-white tracking-widest uppercase mt-1 mb-3">
            Dua Dunia Survival
          </h2>
          <p className="font-poppins text-xs text-zinc-400 max-w-md mx-auto px-4">
            Dua kubu mekanika berbeda yang dikonstruksi secara matang untuk memuaskan hasrat petualangmu di Noavex SMP.
          </p>
          <div className="w-12 h-1 bg-[#DC143C] mx-auto rounded-full mt-5" />
        </div>

        {/* Worlds Grid - Fully responsive, absolutely no overlapping on small screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {worlds.map((world, index) => {
            const isLifesteal = world.type === 'lifesteal';
            const cardColorClass = isLifesteal
              ? 'border-red-950/40 bg-gradient-to-br from-[#15161A] via-[#15161A] to-red-950/10'
              : 'border-amber-950/40 bg-gradient-to-br from-[#15161A] via-[#15161A] to-amber-950/10';
            const glowColorClass = isLifesteal ? 'bg-red-600/5' : 'bg-amber-500/5';
            const badgeClass = isLifesteal 
              ? 'bg-red-950/40 text-[#FF6464] border-red-900/30'
              : 'bg-amber-950/40 text-[#FFC857] border-amber-900/30';

            return (
              <motion.div
                key={world.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ type: 'spring', stiffness: 45, damping: 14 }}
                className={`relative overflow-hidden rounded-3xl border ${cardColorClass} p-6 sm:p-8 md:p-10 shadow-2xl group flex flex-col justify-between`}
              >
                {/* Backglow element */}
                <div className={`absolute -right-12 -bottom-12 w-48 h-48 rounded-full blur-3xl ${glowColorClass} group-hover:scale-125 transition-transform duration-500`} />

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                    <div className="space-y-2">
                      <span className={`inline-block px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider border ${badgeClass}`}>
                        {world.badge}
                      </span>
                      <h3 className="font-minecraft text-base sm:text-lg text-white font-bold tracking-wide">
                        {world.title}
                      </h3>
                      <p className="font-poppins text-xs font-semibold text-zinc-300">
                        {world.sub}
                      </p>
                    </div>
                    
                    {/* Illustration with Lucide Icon */}
                    <div className="flex items-center justify-center p-3.5 rounded-xl bg-[#202127]/60 border border-zinc-850 group-hover:scale-105 group-hover:border-zinc-750 transition-all duration-300 self-start sm:self-auto">
                      {isLifesteal ? (
                        <Skull className="h-10 w-10 sm:h-12 sm:w-12 text-[#FF6464] opacity-80" />
                      ) : (
                        <Sparkles className="h-10 w-10 sm:h-12 sm:w-12 text-[#FFC857] opacity-80" />
                      )}
                    </div>
                  </div>

                  <p className="font-sans text-xs text-zinc-400 leading-relaxed mb-6 text-justify">
                    {world.description}
                  </p>
                </div>

                {/* Bullet Features (highly structured grid) */}
                <div className="space-y-3 border-t border-zinc-900 pt-5">
                  {world.bullets.map((bulletText, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#202127]/60 border border-zinc-900 shrink-0">
                        {getBulletIcon(world.type, idx)}
                      </div>
                      <span className="font-poppins text-xs font-medium text-zinc-300">
                        {bulletText}
                      </span>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
