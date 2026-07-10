import { MouseEvent } from 'react';
import serverLogo from '../assets/images/server_logo_1783693270316.jpg';
import { DeveloperConfig, ServerConfig } from '../types';
import { Compass, MessageCircle, Globe2, Sparkles, AlertCircle } from 'lucide-react';

interface FooterProps {
  config: DeveloperConfig | null;
  serverConfig: ServerConfig;
  loading: boolean;
  onChangePage: (pageId: string) => void;
}

export default function Footer({ config, serverConfig, loading, onChangePage }: FooterProps) {
  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    onChangePage(id);
  };

  const navLinks = [
    { label: 'Beranda', id: 'beranda' },
    { label: 'Dunia', id: 'dunia' },
    { label: 'Fitur', id: 'fitur' },
    { label: 'Rules', id: 'rules' },
    { label: 'Mulai Bermain', id: 'server' },
  ];

  return (
    <footer className="relative z-20 bg-[#0B0B0D] border-t border-zinc-950/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-zinc-900/40">
          
          {/* Column 1: Brand & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={serverLogo}
                alt="Noavex SMP Crest Logo"
                className="h-11 w-11 rounded-full border border-red-950/40 object-cover shadow-md"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div>
                <span className="font-minecraft text-xs sm:text-sm tracking-widest text-white uppercase font-bold block">
                  {serverConfig?.serverName || 'Noavex SMP'}
                </span>
                <span className="text-[9px] font-mono tracking-widest text-[#DC143C] uppercase block mt-0.5">
                  {serverConfig?.tagline || 'Dua Dunia, Dua Kisah.'}
                </span>
              </div>
            </div>
            <p className="font-sans text-xs text-zinc-400 leading-relaxed max-w-sm text-justify">
              Server Minecraft Indonesia premium yang memadukan tantangan Survival Hardcore LifeSteal dengan kedalaman sistem RPG AuraSkills secara imersif dan seimbang.
            </p>
            <p className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider pt-1.5">
              © 2026 Noavex SMP
            </p>
          </div>

          {/* Column 2: Navigasi */}
          <div className="space-y-4">
            <h4 className="font-minecraft text-xs tracking-wider text-white uppercase">Navigasi</h4>
            <div className="w-8 h-0.5 bg-[#DC143C] rounded-full" />
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 pt-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className="font-poppins text-xs text-zinc-400 hover:text-white transition-colors duration-150 flex items-center gap-1.5"
                  >
                    <span className="h-1 w-1 rounded-full bg-red-600/40" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Developer Info */}
          <div className="space-y-4">
            <h4 className="font-minecraft text-xs tracking-wider text-white uppercase">Developer Info</h4>
            <div className="w-8 h-0.5 bg-[#DC143C] rounded-full" />
            
            {loading && (
              <p className="text-xs text-zinc-550 font-sans">Memuat data pengembang...</p>
            )}

            {!loading && config && (
              <ul className="space-y-2.5 pt-1">
                <li className="font-sans text-xs text-zinc-400">
                  <span className="font-semibold text-zinc-300">Developed by: </span>
                  <a
                    href={config.website.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#DC143C] font-semibold transition-colors"
                  >
                    {config.name}
                  </a>
                </li>
                <li>
                  <a
                    href={config.website.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-poppins text-xs text-zinc-400 hover:text-[#DC143C] transition-colors duration-150 flex items-center gap-2 group"
                  >
                    <Compass className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                    Portfolio Developer
                  </a>
                </li>
                <li>
                  <a
                    href={`https://wa.me/${config.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-poppins text-xs text-zinc-400 hover:text-emerald-400 transition-colors duration-150 flex items-center gap-2 group"
                  >
                    <MessageCircle className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                    WhatsApp Developer
                  </a>
                </li>
              </ul>
            )}
          </div>

        </div>

        {/* Legal & Independent Disclaimer */}
        <div className="pt-6 text-center">
          <div className="flex items-center justify-center gap-2 text-zinc-650 text-[9px]">
            <AlertCircle className="h-3.5 w-3.5 shrink-0 text-zinc-600" />
            <p className="max-w-2xl text-balance leading-normal">
              Website ini dikembangkan secara independen dan tidak berafiliasi dengan Mojang Studios maupun Noavex SMP.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
