import { useState } from 'react';
import { Copy, Check, Server, Terminal, Laptop, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { ServerConfig } from '../types';

interface ServerAddressProps {
  config: ServerConfig;
}

export default function ServerAddress({ config }: ServerAddressProps) {
  const [copiedJava, setCopiedJava] = useState(false);
  const [copiedBedrock, setCopiedBedrock] = useState(false);

  const javaConfig = config?.ips?.java || { ip: 'noavexsmp.xyz', port: 'Default' };
  const bedrockConfig = config?.ips?.bedrock || { ip: 'noavexsmp.xyz', port: '25665' };

  const handleCopyJava = () => {
    navigator.clipboard.writeText(javaConfig.ip);
    setCopiedJava(true);
    setTimeout(() => setCopiedJava(false), 2000);
  };

  const handleCopyBedrock = () => {
    navigator.clipboard.writeText(bedrockConfig.ip);
    setCopiedBedrock(true);
    setTimeout(() => setCopiedBedrock(false), 2000);
  };

  return (
    <section id="server" className="relative z-20 py-16 md:py-24 bg-[#0B0B0D]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-500">Mulai Petualanganmu</span>
          <h2 className="font-minecraft text-lg sm:text-xl md:text-2xl text-white tracking-widest uppercase mt-1 mb-3">
            Alamat IP Server
          </h2>
          <p className="font-poppins text-xs text-zinc-400 max-w-md mx-auto px-4">
            Salin alamat server di bawah ini dan rekatkan langsung ke dalam daftar server Minecraft kamu.
          </p>
          <div className="w-12 h-1 bg-[#DC143C] mx-auto rounded-full mt-4" />
        </div>

        {/* IP Cards (Strictly mobile first, prevents overlaps, gorgeous styling) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          
          {/* JAVA EDITION CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-zinc-900 bg-gradient-to-b from-[#15161A] to-[#121316] p-6 sm:p-8 flex flex-col justify-between shadow-2xl group"
          >
            <div className="absolute inset-0 bg-radial-[circle_at_top_right,_rgba(220,20,60,0.03)_0%,_transparent_70%]" />
            
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-950/20 border border-red-900/30 text-[#DC143C]">
                  <Laptop className="h-5 w-5" />
                </div>
                <span className="text-[8px] font-mono font-bold uppercase tracking-widest text-red-400 border border-red-900/30 bg-red-950/30 px-2 py-0.5 rounded-full">
                  Java Edition
                </span>
              </div>

              <h3 className="font-minecraft text-sm sm:text-base text-white font-bold mb-1.5">
                Minecraft PC / Mac
              </h3>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed mb-6">
                Mendukung koneksi langsung menggunakan launcher Minecraft Java Edition favoritmu.
              </p>
            </div>

            {/* IP Value Indicator */}
            <div className="relative space-y-4 border-t border-zinc-900/80 pt-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-xl border border-zinc-950 bg-zinc-950/60 font-mono">
                <div className="min-w-0">
                  <span className="text-[9px] text-zinc-500 uppercase tracking-widest block">Server IP (Address)</span>
                  <span className="text-xs sm:text-sm font-bold text-white tracking-wider block truncate">
                    {javaConfig.ip}
                  </span>
                </div>
                
                <button
                  onClick={handleCopyJava}
                  className={`w-full sm:w-auto flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg border text-[10px] font-sans font-bold uppercase tracking-wider transition-all duration-150 cursor-pointer shrink-0 ${
                    copiedJava
                      ? 'bg-emerald-950/20 border-emerald-800/40 text-emerald-400'
                      : 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                  }`}
                >
                  {copiedJava ? (
                    <>
                      <Check className="h-3.5 w-3.5" />
                      Tersalin
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      Salin IP
                    </>
                  )}
                </button>
              </div>

              {/* Port Info */}
              <div className="flex justify-between items-center px-1 text-[10px] text-zinc-500 font-mono">
                <span>Port Utama:</span>
                <span className="text-zinc-300 font-bold">{javaConfig.port}</span>
              </div>
            </div>
          </motion.div>

          {/* BEDROCK EDITION CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-zinc-900 bg-gradient-to-b from-[#15161A] to-[#121316] p-6 sm:p-8 flex flex-col justify-between shadow-2xl group"
          >
            <div className="absolute inset-0 bg-radial-[circle_at_top_right,_rgba(59,130,246,0.03)_0%,_transparent_70%]" />

            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-950/20 border border-sky-900/30 text-sky-400">
                  <Phone className="h-5 w-5" />
                </div>
                <span className="text-[8px] font-mono font-bold uppercase tracking-widest text-sky-400 border border-sky-900/30 bg-sky-950/30 px-2 py-0.5 rounded-full">
                  Bedrock (Pocket)
                </span>
              </div>

              <h3 className="font-minecraft text-sm sm:text-base text-white font-bold mb-1.5">
                Minecraft HP / Konsol
              </h3>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed mb-6">
                Mainkan langsung dari handphone (iOS/Android), tablet, maupun konsol game favoritmu.
              </p>
            </div>

            {/* IP Value Indicator */}
            <div className="relative space-y-4 border-t border-zinc-900/80 pt-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-xl border border-zinc-950 bg-zinc-950/60 font-mono">
                <div className="min-w-0">
                  <span className="text-[9px] text-zinc-500 uppercase tracking-widest block">Server IP (Address)</span>
                  <span className="text-xs sm:text-sm font-bold text-white tracking-wider block truncate">
                    {bedrockConfig.ip}
                  </span>
                </div>
                
                <button
                  onClick={handleCopyBedrock}
                  className={`w-full sm:w-auto flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg border text-[10px] font-sans font-bold uppercase tracking-wider transition-all duration-150 cursor-pointer shrink-0 ${
                    copiedBedrock
                      ? 'bg-emerald-950/20 border-emerald-800/40 text-emerald-400'
                      : 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                  }`}
                >
                  {copiedBedrock ? (
                    <>
                      <Check className="h-3.5 w-3.5" />
                      Tersalin
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      Salin IP
                    </>
                  )}
                </button>
              </div>

              {/* Port Info */}
              <div className="flex justify-between items-center px-1 text-[10px] text-zinc-500 font-mono">
                <span>Port Utama (Wajib diisi):</span>
                <span className="text-sky-400 font-bold">{bedrockConfig.port}</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
