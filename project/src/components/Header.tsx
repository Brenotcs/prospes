import { useEffect, useState, type MouseEvent } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import Logo from '../assets/logo.png';

// Define a altura da área de hover (por exemplo, 4rem = 64px)
const HEADER_HEIGHT_REM = 'h-16'; 

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  

  const handleContactClick = (e?: MouseEvent<HTMLButtonElement>) => {
    if (e) e.preventDefault();
    const el = document.getElementById('contato');
    if (el) {
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };
  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  // Lógica de Scroll e Active Section (atualizada para incluir a detecção de scroll)
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    // IDs das seções usadas para detectar a seção ativa
    const ids = ['produtos', 'beneficios', 'depoimentos', 'catalogo']; 
    const header = document.querySelector('header') as HTMLElement | null;
    let ticking = false;

    const updateActiveAndScrolled = () => {
      // 1. Lógica de detecção de Scroll
      setScrolled(window.scrollY > 200); 

      // 2. Lógica de Active Section (mantida)
      const offset = header ? header.offsetHeight : 0;
      const position = window.scrollY + offset;
      let current = '';
      
      for (const id of ids) {
          const el = document.getElementById(id);
          if (!el) continue;
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (position >= top && position < bottom) {
              current = id;
              break;
          }
      }

      if (!current) {
          const first = document.getElementById(ids[0]);
          if (first && position < first.offsetTop) {
              current = '';
          } else {
              const last = ids.slice().reverse().find(id => {
                  const el = document.getElementById(id);
                  return el && position >= el.offsetTop;
              });
              current = last ?? '';
          }
      }
      setActiveSection(current);
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveAndScrolled();
          ticking = false;
        });
        ticking = true;
      }
    };

    updateActiveAndScrolled();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []); 

  
  return (
        <div className={`fixed top-0 left-0 right-0 z-50 transition-all ${HEADER_HEIGHT_REM} group`}>
        
        <header className={`
          absolute top-0 left-0 right-0 
          ${scrolled ? 'bg-slate-900/80 backdrop-blur-md' : 'bg-slate-900/60 backdrop-blur-sm'} 
          shadow-md w-full transition-all duration-300 ease-in-out
          ${scrolled ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'} 
          group-hover:translate-y-0 group-hover:opacity-100 
          ${scrolled ? 'shadow-lg' : 'shadow-md'}
        `}>
            
            <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
              
              <a href="#" className="flex items-center gap-2">
                <img 
                  src={Logo} 
                  alt="Logo Prospés" 
                  className="h-12"
                />
              </a>

              <nav className="hidden md:flex items-center gap-8 mx-auto"> 
                {/* PRODUTOS */}
                <a 
                  href="#produtos" 
                  onClick={(e) => handleNavClick(e, 'produtos')}
                  onMouseEnter={() => setHoveredLink('produtos')}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="text-gray-200 hover:text-teal-400 transition relative"
                >
                  Mais Vendidos
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-teal-400 transition-all duration-300 ${activeSection === 'produtos' || hoveredLink === 'produtos' ? 'w-full' : 'w-0'}`} />
                </a>
                
                {/* BENEFÍCIOS */}
                <a 
                  href="#beneficios" 
                  onClick={(e) => handleNavClick(e, 'beneficios')}
                  onMouseEnter={() => setHoveredLink('beneficios')}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="text-gray-200 hover:text-teal-400 transition relative"
                >
                  Benefícios
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-teal-400 transition-all duration-300 ${activeSection === 'beneficios' || hoveredLink === 'beneficios' ? 'w-full' : 'w-0'}`} />
                </a>
                
                {/* DEPOIMENTOS */}
                <a 
                  href="#depoimentos" 
                  onClick={(e) => handleNavClick(e, 'depoimentos')}
                  onMouseEnter={() => setHoveredLink('depoimentos')}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="text-gray-200 hover:text-teal-400 transition relative"
                >
                  Depoimentos
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-teal-400 transition-all duration-300 ${activeSection === 'depoimentos' || hoveredLink === 'depoimentos' ? 'w-full' : 'w-0'}`} />
                </a>

                {/* CATÁLOGO */}
                <a 
                  href="#catalogo" 
                  onClick={(e) => handleNavClick(e, 'catalogo')}
                  onMouseEnter={() => setHoveredLink('catalogo')}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="text-gray-200 hover:text-teal-400 transition relative"
                >
                  Catálogo
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-teal-400 transition-all duration-300 ${activeSection === 'catalogo' || hoveredLink === 'catalogo' ? 'w-full' : 'w-0'}`} />
                </a>
              </nav>
              <div className="flex items-center gap-3">
                {/* Botão de Menu Mobile */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden text-gray-200 hover:text-teal-400 transition"
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Botão Fale Conosco */}
                <button
                  onClick={handleContactClick}
                  className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition shadow-lg"
                  aria-label="Ir para a seção de contato"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="hidden sm:inline">Fale Conosco</span>
                </button>
              </div>
              
            </div>

            {/* Menu Mobile Dropdown */}
            <div 
              className={`md:hidden bg-slate-900/95 backdrop-blur-md border-t border-white/10 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
                mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <nav className="flex flex-col py-4 px-4 space-y-4">
                <a 
                  href="#produtos" 
                  onClick={(e) => handleNavClick(e, 'produtos')}
                  className="text-gray-200 hover:text-teal-400 transition py-2 border-b border-white/10 transform transition-transform duration-200 hover:translate-x-2"
                >
                  Produtos
                </a>
                <a 
                  href="#beneficios" 
                  onClick={(e) => handleNavClick(e, 'beneficios')}
                  className="text-gray-200 hover:text-teal-400 transition py-2 border-b border-white/10 transform transition-transform duration-200 hover:translate-x-2"
                >
                  Benefícios
                </a>
                <a 
                  href="#depoimentos" 
                  onClick={(e) => handleNavClick(e, 'depoimentos')}
                  className="text-gray-200 hover:text-teal-400 transition py-2 border-b border-white/10 transform transition-transform duration-200 hover:translate-x-2"
                >
                  Depoimentos
                </a>
                <a 
                  href="#catalogo" 
                  onClick={(e) => handleNavClick(e, 'catalogo')}
                  className="text-gray-200 hover:text-teal-400 transition py-2 border-b border-white/10 transform transition-transform duration-200 hover:translate-x-2"
                >
                  Catálogo
                </a>
              </nav>
            </div>
        </header>
    </div>
  );
}