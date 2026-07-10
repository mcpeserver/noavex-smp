import {
  Globe,
  Flame,
  Shuffle,
  RotateCcw,
  Heart,
  Hammer,
  Sparkles,
  Award,
  Home,
  Send,
  Archive,
  Hand,
  Mic,
  Skull,
  MapPin,
  User,
  Crown,
  Mountain,
  Repeat,
  Infinity as InfinityIcon,
  Laptop,
  HelpCircle
} from 'lucide-react';
import { motion } from 'motion/react';
import { ServerConfig } from '../types';

interface FeaturesProps {
  config: ServerConfig;
}

export default function Features({ config }: FeaturesProps) {
  // Map feature icons dynamically based on string type
  const getIcon = (type: string) => {
    switch (type) {
      case 'Globe':
        return <Globe className="h-4.5 w-4.5 text-red-500" />;
      case 'Flame':
        return <Flame className="h-4.5 w-4.5 text-[#DC143C]" />;
      case 'Shuffle':
        return <Shuffle className="h-4.5 w-4.5 text-indigo-400" />;
      case 'RotateCcw':
        return <RotateCcw className="h-4.5 w-4.5 text-emerald-400" />;
      case 'Heart':
        return <Heart className="h-4.5 w-4.5 text-[#FF6464]" />;
      case 'Hammer':
        return <Hammer className="h-4.5 w-4.5 text-amber-500" />;
      case 'Sparkles':
        return <Sparkles className="h-4.5 w-4.5 text-[#FFC857]" />;
      case 'Award':
        return <Award className="h-4.5 w-4.5 text-[#FFC857]" />;
      case 'Home':
        return <Home className="h-4.5 w-4.5 text-cyan-400" />;
      case 'Send':
        return <Send className="h-4.5 w-4.5 text-sky-400" />;
      case 'Archive':
        return <Archive className="h-4.5 w-4.5 text-purple-400" />;
      case 'Hand':
        return <Hand className="h-4.5 w-4.5 text-zinc-300" />;
      case 'Mic':
        return <Mic className="h-4.5 w-4.5 text-pink-400" />;
      case 'Skull':
        return <Skull className="h-4.5 w-4.5 text-zinc-400" />;
      case 'MapPin':
        return <MapPin className="h-4.5 w-4.5 text-orange-400" />;
      case 'User':
        return <User className="h-4.5 w-4.5 text-teal-400" />;
      case 'Crown':
        return <Crown className="h-4.5 w-4.5 text-yellow-500" />;
      case 'Mountain':
        return <Mountain className="h-4.5 w-4.5 text-[#49D17D]" />;
      case 'Repeat':
        return <Repeat className="h-4.5 w-4.5 text-lime-400" />;
      case 'Infinity':
        return <InfinityIcon className="h-4.5 w-4.5 text-sky-500" />;
      case 'Laptop':
        return <Laptop className="h-4.5 w-4.5 text-emerald-500" />;
      default:
        return <HelpCircle className="h-4.5 w-4.5 text-zinc-400" />;
    }
  };

  const featureList = config?.features || [];

  return (
    <section id="fitur" className="relative z-20 py-16 md:py-24 bg-[#0B0B0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-500">Mekanika Lengkap</span>
          <h2 className="font-minecraft text-lg sm:text-xl md:text-2xl text-white tracking-widest uppercase mt-1 mb-3">
            Fitur Unggulan Server
          </h2>
          <p className="font-poppins text-xs text-zinc-400 max-w-md mx-auto px-4">
            Hanya fitur-fitur berkelas dunia yang didesain untuk memanjakan gameplay survival kamu di Noavex SMP.
          </p>
          <div className="w-12 h-1 bg-[#DC143C] mx-auto rounded-full mt-5" />
        </div>

        {/* Feature Grid - Fully responsive, absolutely no overlapping on small screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {featureList.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.3, delay: (index % 4) * 0.04 }}
              className="flex items-center gap-4 rounded-xl border border-zinc-900 bg-[#15161A]/40 p-4 hover:bg-[#202127]/30 hover:border-zinc-800/80 transition-all duration-200 group"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#202127]/80 border border-zinc-850 group-hover:bg-zinc-800/40 group-hover:scale-105 transition-all duration-300 shrink-0">
                {getIcon(feature.type)}
              </div>
              <div className="min-w-0">
                <h3 className="font-poppins text-xs font-semibold text-zinc-200 group-hover:text-white transition-colors duration-150 truncate">
                  {feature.name}
                </h3>
                <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest block mt-0.5">Noavex Feature</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
