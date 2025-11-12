export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  benefits: string[];
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Creme Hidratante Profissional",
    description: "Hidratação intensa para pés ressecados e rachados. Fórmula avançada com ureia 20%.",
    image: "https://images.pexels.com/photos/6663564/pexels-photo-6663564.jpeg?auto=compress&cs=tinysrgb&w=800",
    benefits: ["Hidratação profunda", "Reduz rachaduras", "Absorção rápida"],
    category: "hidratacao"
  },
  {
    id: 2,
    name: "Kit Tratamento Completo",
    description: "Conjunto profissional com tudo que você precisa para cuidar dos seus pés.",
    image: "https://images.pexels.com/photos/3738382/pexels-photo-3738382.jpeg?auto=compress&cs=tinysrgb&w=800",
    benefits: ["Economia", "Completo", "Resultados visíveis"],
    category: "kits"
  },
  {
    id: 3,
    name: "Esfoliante para Calos",
    description: "Remove calos e pele morta com eficácia. Contém ácidos naturais e vitamina E.",
    image: "https://images.pexels.com/photos/6663583/pexels-photo-6663583.jpeg?auto=compress&cs=tinysrgb&w=800",
    benefits: ["Remove calos", "Suaviza a pele", "Natural"],
    category: "tratamento"
  },
  {
    id: 4,
    name: "Spray Antifúngico",
    description: "Proteção e tratamento contra fungos e odores. Fórmula de ação rápida.",
    image: "https://images.pexels.com/photos/7185040/pexels-photo-7185040.jpeg?auto=compress&cs=tinysrgb&w=800",
    benefits: ["Elimina fungos", "Controla odores", "Ação rápida"],
    category: "tratamento"
  },
  {
    id: 5,
    name: "Óleo Revitalizante",
    description: "Nutrição profunda com óleos essenciais. Ideal para massagem e relaxamento.",
    image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800",
    benefits: ["Nutrição intensa", "Relaxante", "Aroma terapêutico"],
    category: "hidratacao"
  },
  {
    id: 6,
    name: "Creme para Unhas",
    description: "Fortalece e protege as unhas. Previne micoses e deixa as unhas saudáveis.",
    image: "https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=800",
    benefits: ["Fortalece unhas", "Previne micoses", "Crescimento saudável"],
    category: "tratamento"
  }
];
