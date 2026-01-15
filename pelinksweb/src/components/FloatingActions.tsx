import React, { useEffect, useState } from 'react';

const WHATSAPP_NUMBER = '2348143617840';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Pelinks%20team!`;

function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed left-4 bottom-4 sm:left-6 sm:bottom-6 flex flex-col gap-3 transition-all duration-300 z-50 ${
        isVisible ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-4 opacity-0 pointer-events-none'
      }`}
      aria-hidden={!isVisible}
    >
      <button
        type="button"
        onClick={scrollToTop}
        className="group flex items-center gap-2 rounded-full bg-white text-slate-900 shadow-lg shadow-slate-900/10 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 px-4 py-3 border border-slate-200"
        aria-label="Scroll to top"
      >
        <span className="grid place-items-center h-8 w-8 rounded-full bg-slate-900 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-6.5 6.5M12 5l6.5 6.5" />
          </svg>
        </span>
        <span className="text-sm font-semibold tracking-wide">Top</span>
      </button>

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer noopener"
        className="group flex items-center gap-2 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/25 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 px-4 py-3"
        aria-label="Chat on WhatsApp"
      >
        <span className="grid place-items-center h-8 w-8 rounded-full bg-white/15">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="h-5 w-5">
            <path d="M16 3C9.373 3 4 8.373 4 15c0 2.064.535 4.022 1.556 5.787L4 29l8.4-1.613C13.962 27.788 14.972 28 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-.89 0-1.767-.142-2.608-.422l-.524-.174-4.954.95.947-4.838-.171-.517A8.995 8.995 0 0 1 7 15c0-4.962 4.038-9 9-9s9 4.038 9 9-4.038 9-9 9zm4.447-6.713c-.242-.121-1.435-.707-1.656-.788-.222-.081-.383-.121-.544.121-.161.242-.625.788-.767.95-.141.161-.283.181-.524.061-.242-.121-1.022-.377-1.948-1.2-.72-.642-1.207-1.435-1.349-1.677-.141-.242-.015-.374.106-.494.11-.11.242-.283.363-.424.121-.141.161-.242.242-.403.081-.161.04-.303-.02-.424-.061-.121-.544-1.312-.746-1.8-.197-.473-.4-.409-.544-.417-.141-.007-.303-.009-.464-.009a.896.896 0 0 0-.646.303c-.222.242-.847.828-.847 2.017 0 1.189.868 2.339.989 2.501.121.161 1.708 2.608 4.142 3.657.579.25 1.03.399 1.382.511.58.185 1.107.159 1.524.096.464-.069 1.435-.586 1.637-1.152.202-.566.202-1.051.141-1.152-.061-.101-.221-.161-.464-.283z" />
          </svg>
        </span>
        <div className="flex flex-col leading-tight">
          <span className="text-xs font-semibold uppercase opacity-80">WhatsApp</span>
          <span className="text-sm font-bold tracking-wide">Chat now</span>
        </div>
      </a>
    </div>
  );
}

export default FloatingActions;
