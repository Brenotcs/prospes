import type React from 'react';
import { Mail, Phone, MapPin, Instagram, Youtube } from 'lucide-react';
import LogoFooter from '../assets/logofooter.png'; 

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset; 
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid xl:grid-cols-4 gap-8 mb-8">
          <div className="space-y-6">
            
            {/* Logo */}
            <div className="flex items-center gap-2 mx-auto xl:mx-0">
              <a href="#" className="flex items-center">
                <img
                  src={LogoFooter}
                  alt="Logo Prospés"
                  className="h-10" 
                />
              </a>
            </div>
            
            <p className="text-base leading-relaxed">
              Canal de vendas oficial da Decreína para profissionais.<br />
              Saúde integral para unhas, pés e mãos com cosméticos podológicos que garantem um atendimento seguro, eficaz e sem complicações!
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="#produtos" 
                  onClick={(e) => handleNavClick(e, 'produtos')} 
                  className="hover:text-teal-500 transition"
                >
                  Mais Vendidos
                </a>
              </li>
              <li>
                <a 
                  href="#beneficios" 
                  onClick={(e) => handleNavClick(e, 'beneficios')} 
                  className="hover:text-teal-500 transition"
                >
                  Benefícios
                </a>
              </li>
              <li>
                <a 
                  href="#depoimentos" 
                  onClick={(e) => handleNavClick(e, 'depoimentos')} 
                  className="hover:text-teal-500 transition"
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <a 
                  href="#catalogo" 
                  onClick={(e) => handleNavClick(e, 'catalogo')} 
                  className="hover:text-teal-500 transition"
                >
                  Catálogo
                </a>
              </li>
              <li>
                <a 
                  href="#contato" 
                  onClick={(e) => handleNavClick(e, 'contato')} 
                  className="hover:text-teal-500 transition"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-500" />
                <span>(71) 99418-0078</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-500" />
                <span>contato@prospes.online</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-500" />
                <span>Salvador, BA</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-500" />
                <span>Osasco, SP</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Redes Sociais</h4>
            
            <ul className="space-y-3">
              
              {/* Perfil @prospes_oficial (Instagram) */}
              <li className="text-sm">
                <a 
                  href="https://www.instagram.com/prospes_oficial" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-gray-300 hover:text-teal-500 transition"
                  aria-label="Instagram Prospés Oficial"
                >
                  <Instagram className="w-5 h-5 flex-shrink-0" />
                  <span>Instagram Prospés</span>
                </a>
              </li>

              {/* Perfil @decreina_oficial (Instagram) */}
              <li className="text-sm">
                <a 
                  href="https://www.instagram.com/decreina_oficial" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-gray-300 hover:text-teal-500 transition"
                  aria-label="Instagram Decreina Oficial"
                >
                  <Instagram className="w-5 h-5 flex-shrink-0" />
                  <span>Instagram Decreína</span>
                </a>
              </li>
              
              {/* Link para YouTube */}
              <li className="text-sm">
                <a 
                  href="https://www.youtube.com/@DECREINA-OFICIAL" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-gray-300 hover:text-teal-500 transition"
                  aria-label="YouTube Decreína Oficial"
                >
                  <Youtube className="w-5 h-5 flex-shrink-0" />
                  <span>Youtube Decreína</span>
                </a>
              </li>
              
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Prospés. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}