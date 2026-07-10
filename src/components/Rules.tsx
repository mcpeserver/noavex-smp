import { ShieldAlert, CheckCircle, AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';
import { ServerConfig } from '../types';

interface RulesProps {
  config: ServerConfig;
}

export default function Rules({ config }: RulesProps) {
  const rules = config?.rules || [];

  return (
    <section id="rules" className="relative z-20 py-16 md:py-24 bg-[#0B0B0D]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-500">Keadilan Bersama</span>
          <h2 className="font-minecraft text-lg sm:text-xl md:text-2xl text-white tracking-widest uppercase mt-1 mb-3">
            Peraturan Server
          </h2>
          <p className="font-poppins text-xs text-zinc-400 max-w-md mx-auto px-4">
            Demi menjaga kenyamanan, sportivitas, dan ekosistem bermain yang kondusif, harap patuhi peraturan dasar Noavex SMP.
          </p>
          <div className="w-12 h-1 bg-[#DC143C] mx-auto rounded-full mt-4" />
        </div>

        {/* Timeline Layout (Absolutely pristine, zero text overlapping) */}
        <div className="space-y-6 mb-12">
          {rules.map((rule, index) => (
            <motion.div
              key={rule.num}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative flex gap-4 p-5 rounded-2xl border border-zinc-900 bg-[#15161A]/40 backdrop-blur-sm hover:border-zinc-800/80 hover:bg-[#1a1b20]/40 transition-all duration-200 group"
            >
              {/* Left: Beautiful Circle Number */}
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 border border-zinc-850 font-mono text-xs font-bold text-[#DC143C] shrink-0 group-hover:scale-105 group-hover:bg-[#1C1D24] transition-all duration-300">
                {rule.num}
              </div>

              {/* Right: Content */}
              <div className="space-y-1.5 min-w-0">
                <h3 className="font-poppins text-sm font-bold text-white group-hover:text-[#DC143C] transition-colors duration-200">
                  {rule.title}
                </h3>
                <p className="font-sans text-xs text-zinc-400 leading-relaxed text-justify">
                  {rule.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Warning Card */}
        {config?.warningText && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-red-950/40 bg-red-950/10 p-5 md:p-6"
          >
            <div className="flex gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-950/60 border border-red-800/30 text-[#DC143C] shrink-0">
                <ShieldAlert className="h-5 w-5 animate-pulse" />
              </div>
              <div className="space-y-1 min-w-0">
                <h4 className="font-poppins text-xs font-bold uppercase tracking-wider text-red-400">
                  Sanksi & Tindakan Tegas
                </h4>
                <p className="font-sans text-xs text-red-300/85 leading-relaxed text-justify">
                  {config.warningText}
                </p>
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
