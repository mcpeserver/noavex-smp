import { useState } from 'react';
import { Terminal, Copy, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { ServerConfig } from '../types';

interface CommandsProps {
  config: ServerConfig;
}

export default function Commands({ config }: CommandsProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (cmdText: string, id: string) => {
    navigator.clipboard.writeText(cmdText);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 1500);
  };

  const commandList = config?.commands || [];

  return (
    <section id="perintah" className="relative z-20 py-16 md:py-24 bg-[#0B0B0D] border-t border-zinc-950/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-500">Kemudahan Bermain</span>
          <h2 className="font-minecraft text-lg sm:text-xl text-white tracking-widest uppercase mt-1 mb-3">
            Panduan Perintah Server
          </h2>
          <p className="font-poppins text-xs text-zinc-400 max-w-md mx-auto">
            Gunakan perintah esensial di bawah ini secara langsung di dalam server game untuk navigasi dan pengelolaan akunmu.
          </p>
          <div className="w-12 h-1 bg-[#DC143C] mx-auto rounded-full mt-4" />
        </div>

        {/* Command Terminal Layout (Prisinte quality, completely clean, anti-overlapping) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          className="rounded-2xl border border-zinc-900 bg-[#121316] overflow-hidden shadow-2xl"
        >
          {/* Terminal Bar */}
          <div className="flex items-center justify-between bg-[#1A1C22] px-4 py-3 border-b border-zinc-950/50">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
              <span className="text-[9px] font-mono text-zinc-500 ml-2 tracking-widest uppercase flex items-center gap-1">
                <Terminal className="h-3 w-3" />
                noavex-commands.sh
              </span>
            </div>
            <span className="text-[8px] font-mono text-zinc-500">bash v5.2</span>
          </div>

          {/* Terminal Commands List */}
          <div className="p-4 sm:p-6 space-y-3.5 max-h-[480px] overflow-y-auto font-mono">
            {commandList.map((command, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:bg-zinc-950/80 hover:border-zinc-850 transition-all duration-200 group"
              >
                {/* Left: command string & description */}
                <div className="flex items-start gap-3 min-w-0">
                  <span className="text-[10px] text-zinc-600 mt-0.5 select-none">{String(idx + 1).padStart(2, '0')}</span>
                  <div className="space-y-1 min-w-0">
                    <span className="text-xs sm:text-sm font-bold text-[#FF6464] tracking-wide block">
                      {command.cmd}
                    </span>
                    <span className="font-sans text-xs text-zinc-400 block truncate">
                      {command.desc}
                    </span>
                  </div>
                </div>

                {/* Right: copy button */}
                <button
                  onClick={() => handleCopy(command.cmd, `${idx}`)}
                  className={`flex items-center gap-1.5 self-end sm:self-auto px-3.5 py-1.5 rounded-lg border text-[10px] font-sans font-bold uppercase tracking-wider transition-all duration-150 cursor-pointer ${
                    copiedId === `${idx}`
                      ? 'bg-emerald-950/20 border-emerald-800/40 text-emerald-400'
                      : 'bg-[#202127]/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                  }`}
                  aria-label={`Salin perintah ${command.cmd}`}
                >
                  {copiedId === `${idx}` ? (
                    <>
                      <Check className="h-3 w-3" />
                      Tersalin
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      Salin
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
