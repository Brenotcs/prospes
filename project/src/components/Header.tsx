import { ShoppingBag, Phone } from 'lucide-react';

export default function Header() {
  const whatsappNumber = "5511999999999";
  const whatsappMessage = "Olá! Gostaria de conhecer os produtos da Prospés.";

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
  <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShoppingBag className="w-8 h-8 text-teal-600" />
          <h1 className="text-2xl font-bold text-gray-800">Prospés</h1>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#produtos" className="text-gray-700 hover:text-teal-600 transition">Produtos</a>
          <a href="#beneficios" className="text-gray-700 hover:text-teal-600 transition">Benefícios</a>
          <a href="#depoimentos" className="text-gray-700 hover:text-teal-600 transition">Depoimentos</a>
        </nav>

        <button
          onClick={handleWhatsAppClick}
          className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full flex items-center gap-2 transition"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">Fale Conosco</span>
        </button>
      </div>
    </header>
  );
}
