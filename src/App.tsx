import { useState, useEffect } from 'react';
import { DeveloperConfig, ServerConfig } from './types';
import { defaultServerConfig } from './data/defaultConfig';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickInfo from './components/QuickInfo';
import ServerWorlds from './components/ServerWorlds';
import Features from './components/Features';
import Commands from './components/Commands';
import Rules from './components/Rules';
import ServerAddress from './components/ServerAddress';
import CTA from './components/CTA';
import Footer from './components/Footer';
import DeveloperModal from './components/DeveloperModal';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [developerConfig, setDeveloperConfig] = useState<DeveloperConfig | null>(null);
  const [serverConfig, setServerConfig] = useState<ServerConfig>(defaultServerConfig);
  const [isLoadingDev, setIsLoadingDev] = useState<boolean>(true);
  const [isLoadingServer, setIsLoadingServer] = useState<boolean>(true);
  const [devError, setDevError] = useState<string | null>(null);
  const [isDevModalOpen, setIsDevModalOpen] = useState<boolean>(false);
  
  // Managing pages: 'beranda' | 'dunia' | 'fitur' | 'rules' | 'server'
  const [currentPage, setCurrentPage] = useState<string>('beranda');

  // Fetch Developer Configuration dynamically from Gist API
  useEffect(() => {
    let active = true;
    fetch('https://raw.githubusercontent.com/mcpeserver/MyAPI/main/config.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Gagal memuat konfigurasi pengembang');
        }
        return res.json();
      })
      .then((data: DeveloperConfig) => {
        if (active) {
          setDeveloperConfig(data);
          setIsLoadingDev(false);
        }
      })
      .catch((err: Error) => {
        if (active) {
          console.error('Developer API Error:', err);
          setDevError(err.message || 'Terjadi kesalahan saat memuat data');
          setIsLoadingDev(false);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  // Fetch Server Configuration dynamically from public/server_config.json
  useEffect(() => {
    let active = true;
    fetch('/server_config.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Gagal memuat konfigurasi server');
        }
        return res.json();
      })
      .then((data: ServerConfig) => {
        if (active) {
          setServerConfig(data);
          setIsLoadingServer(false);
        }
      })
      .catch((err) => {
        console.warn('Using default server configuration fallback due to:', err);
        if (active) {
          setServerConfig(defaultServerConfig);
          setIsLoadingServer(false);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  // Scroll to top on page change
  const navigateToPage = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="relative min-h-screen bg-[#0B0B0D] text-white overflow-x-hidden selection:bg-red-700 selection:text-white flex flex-col justify-between">
      {/* Skip to Content Link for WCAG AA Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-[#DC143C] text-white px-4 py-2 rounded-lg font-bold text-xs"
      >
        Skip ke Konten Utama
      </a>

      {/* Navigation Header */}
      <Navbar 
        currentPage={currentPage} 
        onChangePage={navigateToPage} 
        onOpenDeveloperModal={() => setIsDevModalOpen(true)} 
        config={serverConfig}
        developerConfig={developerConfig}
      />

      {/* Main Content Area with elegant AnimatePresence transition */}
      <main id="main-content" className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="w-full"
          >
            {currentPage === 'beranda' && (
              <>
                <Hero config={serverConfig} onChangePage={navigateToPage} />
                <QuickInfo config={serverConfig} />
                <CTA config={serverConfig} onChangePage={navigateToPage} />
              </>
            )}

            {currentPage === 'dunia' && (
              <>
                <ServerWorlds config={serverConfig} />
                <CTA config={serverConfig} onChangePage={navigateToPage} />
              </>
            )}

            {currentPage === 'fitur' && (
              <>
                <Features config={serverConfig} />
                <Commands config={serverConfig} />
              </>
            )}

            {currentPage === 'rules' && (
              <Rules config={serverConfig} />
            )}

            {currentPage === 'server' && (
              <>
                <ServerAddress config={serverConfig} />
                <CTA config={serverConfig} onChangePage={navigateToPage} />
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Column */}
      <Footer 
        config={developerConfig} 
        serverConfig={serverConfig}
        loading={isLoadingDev} 
        onChangePage={navigateToPage} 
      />

      {/* Dynamic Developer Modal */}
      <DeveloperModal
        isOpen={isDevModalOpen}
        onClose={() => setIsDevModalOpen(false)}
        config={developerConfig}
        loading={isLoadingDev}
        error={devError}
      />
    </div>
  );
}
