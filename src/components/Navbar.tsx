import { useState, useEffect, MouseEvent } from 'react';
import { Menu, X, Globe, Swords, BookOpen, Shield, HelpCircle } from 'lucide-react';
import serverLogo from '../assets/images/server_logo_1783693270316.jpg';
import { ServerConfig, DeveloperConfig } from '../types';

interface NavbarProps {
  currentPage: string;
  onChangePage: (pageId: string) => void;
  onOpenDeveloperModal: () => void;
  config: ServerConfig;
  developerConfig: DeveloperConfig | null;
}

export default function Navbar({ currentPage, onChangePage, onOpenDeveloperModal, config, developerConfig }: NavbarProps) {
  const isVisible = true;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll logic to activate glassmorphic styling on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Glassmorphic activation height
      if (currentScrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Beranda', id: 'beranda', icon: <Globe className="h-4 w-4" /> },
    { label: 'Dunia', id: 'dunia', icon: <Swords className="h-4 w-4" /> },
    { label: 'Fitur', id: 'fitur', icon: <BookOpen className="h-4 w-4" /> },
    { label: 'Rules', id: 'rules', icon: <Shield className="h-4 w-4" /> },
    { label: 'Mulai Bermain', id: 'server', icon: <HelpCircle className="h-4 w-4" /> },
  ];

  const handleItemClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    onChangePage(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out transform ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled
          ? 'bg-[#0B0B0D]/90 backdrop-blur-md border-b border-zinc-900/80 py-2.5 shadow-xl'
          : 'bg-transparent py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          
          {/* Left: Brand Logo & Title */}
          <a
            href="#beranda"
            onClick={(e) => handleItemClick(e, 'beranda')}
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#DC143C] rounded-lg p-1"
            aria-label="Kembali ke Beranda Noavex SMP"
          >
            <img
              src={serverLogo}
              alt="Noavex SMP Logo"
              className="h-9 w-9 rounded-full border border-red-950/40 object-cover shadow-md group-hover:scale-105 transition-transform duration-250"
              referrerPolicy="no-referrer"
            />
            <span className="font-minecraft text-xs sm:text-sm tracking-widest text-white group-hover:text-[#DC143C] transition-colors duration-250 uppercase font-bold">
              {config?.serverName || 'Noavex'}
            </span>
          </a>

          {/* Center: Desktop Navigation Links (with high visual fidelity) */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-4" aria-label="Navigasi Utama">
            {menuItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleItemClick(e, item.id)}
                  className={`font-poppins text-xs font-semibold tracking-wide py-1.5 px-3.5 rounded-lg transition-all duration-200 flex items-center gap-1.5 focus:outline-none focus:ring-1 focus:ring-[#DC143C] ${
                    isActive
                      ? 'text-white bg-[#DC143C]/15 border border-[#DC143C]/30 shadow-[0_0_12px_rgba(220,20,60,0.1)]'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-800/20 border border-transparent'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right: Join / Status Badge */}
          <div className="hidden md:flex items-center gap-4">
            {developerConfig && (
              <div className="flex items-center gap-2 border-r border-zinc-800/60 pr-4 mr-1 text-right">
                <div className="flex flex-col">
                  <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-wider">Developer</span>
                  <a 
                    href={developerConfig.website.portfolio} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[11px] font-poppins font-bold text-zinc-200 hover:text-[#DC143C] transition-colors"
                  >
                    {developerConfig.name}
                  </a>
                </div>
                <span className="text-zinc-700 text-xs select-none">/</span>
                <div className="flex flex-col text-left">
                  <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-wider">Contact</span>
                  <a 
                    href={`https://wa.me/${developerConfig.contact.whatsapp}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[11px] font-poppins font-bold text-emerald-500 hover:text-emerald-400 transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            )}

            <button
              onClick={() => onChangePage('server')}
              className="font-poppins text-xs font-bold uppercase tracking-wider text-white bg-[#DC143C] hover:bg-red-700 hover:shadow-[0_0_15px_rgba(220,20,60,0.4)] px-5 py-2.5 rounded-xl border border-red-500/10 transition-all duration-250 cursor-pointer focus:outline-none focus:ring-1 focus:ring-red-400"
            >
              Main Sekarang
            </button>
          </div>

          {/* Mobile hamburger & Navigation action controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onChangePage('server')}
              className="font-poppins text-[10px] font-bold uppercase tracking-wider text-white bg-[#DC143C] px-3 py-2 rounded-lg border border-red-500/10 cursor-pointer"
            >
              Main
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-zinc-300 hover:text-white p-2 rounded-lg bg-zinc-900/40 border border-zinc-800/80 focus:outline-none focus:ring-1 focus:ring-[#DC143C]"
              aria-expanded={isMobileMenuOpen}
              aria-label="Buka menu navigasi"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (Perfectly proportioned, absolutely zero overlaps) */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0B0B0D]/95 border-b border-zinc-900/80 backdrop-blur-lg shadow-2xl py-4 px-4 space-y-4">
          <nav className="flex flex-col gap-1" aria-label="Navigasi Utama Mobile">
            {menuItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleItemClick(e, item.id)}
                  className={`font-poppins text-xs font-semibold py-2.5 px-4 rounded-xl transition-all duration-150 flex items-center gap-3 ${
                    isActive
                      ? 'text-white bg-[#DC143C]/20 border border-[#DC143C]/40 font-bold'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60 border border-transparent'
                  }`}
                >
                  <span className={isActive ? 'text-[#DC143C]' : 'text-zinc-500'}>
                    {item.icon}
                  </span>
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Mobile Developer Info */}
          {developerConfig && (
            <div className="pt-4 border-t border-zinc-900/80 space-y-3">
              <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block px-1">
                Developer Info
              </span>
              <div className="bg-[#121316]/60 border border-zinc-900 rounded-xl p-3.5 space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400 font-medium font-poppins">Developed By:</span>
                  <a 
                    href={developerConfig.website.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#DC143C] font-semibold transition-colors font-poppins"
                  >
                    {developerConfig.name}
                  </a>
                </div>
                
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={developerConfig.website.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold uppercase tracking-wider text-center text-zinc-300 hover:text-white bg-[#202127] hover:bg-zinc-800 border border-zinc-800/80 px-3 py-2 rounded-lg transition-all font-poppins"
                  >
                    Portfolio
                  </a>
                  <a
                    href={`https://wa.me/${developerConfig.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold uppercase tracking-wider text-center text-white bg-emerald-600 hover:bg-emerald-700 px-3 py-2 rounded-lg transition-all font-poppins"
                  >
                    Hubungi WA
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
