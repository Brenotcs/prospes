export interface Testimonial {
  id: string;
  name: string;
  message: string;
  rating: number;
  location?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Maria Silva',
    message: 'Produtos incríveis! Meus pés nunca estiveram tão bem cuidados. O creme hidratante é perfeito e os resultados apareceram em poucos dias.',
    rating: 5,
    location: 'São Paulo, SP'
  },
  {
    id: '2',
    name: 'João Santos',
    message: 'Excelente qualidade! O kit completo superou minhas expectativas. Recomendo para todos que buscam cuidados profissionais para os pés.',
    rating: 5,
    location: 'Rio de Janeiro, RJ'
  },
  {
    id: '3',
    name: 'Ana Costa',
    message: 'Finalmente encontrei produtos que realmente funcionam! O esfoliante removeu todos os calos e minha pele ficou super macia.',
    rating: 5,
    location: 'Belo Horizonte, MG'
  },
  {
    id: '4',
    name: 'Carlos Oliveira',
    message: 'Atendimento excelente e produtos de primeira linha. O spray antifúngico resolveu meu problema rapidamente. Muito satisfeito!',
    rating: 5,
    location: 'Curitiba, PR'
  },
  {
    id: '5',
    name: 'Patrícia Lima',
    message: 'Adorei o óleo revitalizante! Além de hidratar, tem um aroma delicioso. Uso todos os dias e meus pés estão sempre macios.',
    rating: 5,
    location: 'Porto Alegre, RS'
  },
  {
    id: '6',
    name: 'Roberto Alves',
    message: 'Produtos profissionais com preço justo. A entrega foi rápida e tudo chegou bem embalado. Virei cliente fiel!',
    rating: 5,
    location: 'Brasília, DF'
  }
];

