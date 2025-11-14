import { useEffect, useState, type MouseEvent } from 'react';
import { Phone } from 'lucide-react';
import Logo from '../assets/logo.png';

// Define a altura da área de hover (por exemplo, 4rem = 64px)
const HEADER_HEIGHT_REM = 'h-16'; 

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const whatsappNumber = "5511999999999";
  const whatsappMessage = "Olá! Gostaria de conhecer os produtos da Prospés.";

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    // ... (removido cálculo de offset para simplificar, como feito anteriormente) ...
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  // Lógica de Scroll e Active Section (atualizada para incluir a detecção de scroll)
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const ids = ['produtos', 'beneficios', 'contato'];
    const header = document.querySelector('header') as HTMLElement | null;
    let ticking = false;

    const updateActiveAndScrolled = () => {
      // 1. Lógica de detecção de Scroll
      // Aumentei o limite para 200px para evitar que a translucidez apareça muito rápido.
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
          // 👈 MUDANÇA: Aplica bg-white/90 (90% opacidade) quando scrolled é true
          ${scrolled ? 'bg-white/90 backdrop-blur-sm' : 'bg-white'} 
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
                <a 
                  href="#produtos" 
                  onClick={(e) => handleNavClick(e, 'produtos')}
                  onMouseEnter={() => setHoveredLink('produtos')}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="text-gray-700 hover:text-teal-600 transition relative"
                >
                  Produtos
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-teal-600 transition-all duration-300 ${activeSection === 'produtos' || hoveredLink === 'produtos' ? 'w-full' : 'w-0'}`} />
                </a>
                
                <a 
                  href="#beneficios" 
                  onClick={(e) => handleNavClick(e, 'beneficios')}
                  onMouseEnter={() => setHoveredLink('beneficios')}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="text-gray-700 hover:text-teal-600 transition relative"
                >
                  Benefícios
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-teal-600 transition-all duration-300 ${activeSection === 'beneficios' || hoveredLink === 'beneficios' ? 'w-full' : 'w-0'}`} />
                </a>
                
                <a 
                  href="#contato" 
                  onClick={(e) => handleNavClick(e, 'contato')}
                  onMouseEnter={() => setHoveredLink('contato')}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="text-gray-700 hover:text-teal-600 transition relative"
                >
                  Contato
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-teal-600 transition-all duration-300 ${activeSection === 'contato' || hoveredLink === 'contato' ? 'w-full' : 'w-0'}`} />
                </a>
              </nav>

              <button
                onClick={handleWhatsAppClick}
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition"
                aria-label="Fale conosco via WhatsApp"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">Fale Conosco</span>
              </button>
              
            </div>
        </header>
    </div>
  );
}