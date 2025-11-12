import type React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
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
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            
            {/* 👈 ENVOLVEMOS A IMAGEM COM UM LINK */}
            <div className="flex items-center gap-2 mx-auto md:mx-0">
              <a href="#" className="flex items-center"> {/* 👈 Link para o topo */}
                <img
                  src={LogoFooter}
                  alt="Logo Prospés"
                  className="h-10" 
                />
              </a>
            </div>
            
            <p className="text-sm leading-relaxed">
              Produtos profissionais de podologia para cuidar da saúde e beleza dos seus pés.
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
                  Produtos
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
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-500" />
                <span>contato@prospes.com.br</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-500" />
                <span>São Paulo, SP</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-teal-600 rounded-full flex items-center justify-center transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-teal-600 rounded-full flex items-center justify-center transition">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Prospés. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}