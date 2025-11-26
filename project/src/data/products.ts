import img0122 from '../assets/produtos/0122.jpg';
import img0131 from '../assets/produtos/0131.jpg';
import img0155 from '../assets/produtos/0155.jpg';
import img0165 from '../assets/produtos/0165.jpg';
import img0167 from '../assets/produtos/0167.jpg';
import img0176 from '../assets/produtos/0176.jpg'; 
import img0187 from '../assets/produtos/0187.jpg';
import img0192 from '../assets/produtos/0192.jpg';
import img0213 from '../assets/produtos/0213.jpg';
import img0225 from '../assets/produtos/0225.jpg';
import img0258 from '../assets/produtos/0258.jpg';
import img0260 from '../assets/produtos/0260.jpg';
import img0268 from '../assets/produtos/0268.jpg';
import img0272 from '../assets/produtos/0272.jpg';
import img0281 from '../assets/produtos/0281.jpg';
// ---

export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  benefits: string[];
  category: string;
  details?: string;
  details2?: string;
  list?: string[];
  highlights?: string[];
  faqs?: { question: string; answer: string }[];
}

export const products: Product[] = [
  // ID 1: Decreína Gotas/Spray (Mantido - Não tem lista embutida no details)
  {
    id: 1,
    name: "Decreína Gotas/Spray",
    description: "Proteção e regeneração de unhas danificadas por onicomicoses.",
    image: img0272,
    benefits: ["Ação localizada", "Resultados rápidos e duradouros", "Sensação de limpeza e conforto"],
    category: "tratamento",
    details: "Produto cosmético de uso profissional, desenvolvido para o cuidado e a higienização das unhas acometidas por onicomicose ou que apresentem espessamento, descoloração, irregularidade ou fragilidade.",
    highlights: [
      "Ação localizada",
      "Resultados Rápidos e Duradouros",
      "Sensação de limpeza e conforto após o uso",
      "Compatível com tratamentos de laser"
    ],
    faqs: [
      {
        question: "Qual é a indicação principal desse produto?",
        answer: "Auxiliar no tratamento de unhas com micose (onicomicose) e frieira (tínea pedis entre os dedos)."
      },
      {
        question: "É um medicamento?",
        answer: "Não. O Decreína Gotas/Spray é um produto cosmético, que segue todas as recomendações e normas da ANVISA/MS."
      }
    ]
  },
  // ID 2: Hidratante Decreína (Mantido - Já estava correto)
  {
    id: 2,
    name: "Hidratante Decreína",
    description: "Hidratação intensiva e toque sedoso, sem oleosidade",
    image: img0155,
    benefits: ["Desenvolvido para pés, áreas ásperas e ressecadas", "Com ação umectante e revitalizadora, hidrata e repara a pele", "Toque sedoso"],
    category: "hidratação",
    details: "Creme de tratamento intensivo, restaura e mantém a hidratação natural da pele dos pés. Sua fórmula associa ureia, aloe vera, óleo de semente de uva e manteiga de karité, criando uma barreira protetora que:" ,
    list: [
      "Atrai e retém a umidade da pele (ação umectante)",
      "Aumenta a elasticidade e a suavidade cutânea (ação revitalizadora)",
      "Previne e repara o ressecamento de calcanhares e plantas dos pés",
      "Proporciona toque sedoso, não oleoso, ideal para o uso profissional e domiciliar."
    ],
    highlights: [
      "Desenvolvido para pés, áreas ásperas e ressecadas",
      "Com ação umectante e revitalizadora, hidrata e repara a pele",
      "Toque sedoso"
    ],
    faqs: [
      {
        question: "Serve para peles sensíveis?",
        answer: "Sim, sua formulação é equilibrada e conta com aloe vera, porém, recomendamos testes de sensibilidade."
      },
      {
        question: "Quando devo usar no consultório?",
        answer: "Na finalização de atendimentos de rotina, como hidratação pós-procedimento. Ele devolve suavidade à pele e valoriza a experiência do cliente."
      },
      {
        question: "Pode ser indicado para uso domiciliar?",
        answer: "Sim. É excelente para manutenção diária, prevenindo o ressecamento entre uma sessão e outra, prolongando os resultados do atendimento profissional."
      }
    ]
  },
  // ID 3: Queratolítico Decreína (Mantido - Já estava corrigido)
  {
    id: 3,
    name: "Queratolítico Decreína",
    description: "Renovação e afinamento da pele hiperqueratósica, sem descamações agressivas",
    image: img0258,
    benefits: ["Peeling químico suave", "Substitui a necessidade do desgaste agressivo de lixas", "Mais conforto e segurança"],
    category: "esfoliação",
    details: "Produto altamente hidratante e esfoliante, desenvolvido para remover gradativamente o excesso de queratina da superfície plantar. Sua fórmula combina ureia, ácido salicílico, ácido lático, calêndula e alantoína, resultando em:",
    list: [
      "Peeling químico suave, que elimina células mortas, afina a espessura da pele e estimula a renovação celular",
      "Hidratação profunda, que mantém a pele elástica e macia",
      "Ação calmante e regeneradora, reduzindo irritações e promovendo conforto",
    ],
    details2: "Com o uso contínuo, substitui a necessidade do desgaste mecânico das lixas, oferecendo um cuidado mais saudável, confortável e eficaz.",
    highlights: [
      "Peeling químico suave",
      "Substitui a necessidade do desgaste agressivo de lixas",
      "Mais conforto e segurança"
    ],
    faqs: [
      {
        question: "Qual é a função principal do Queratolítico?",
        answer: "Promover descamação química suave, afinando a pele espessa e reduzindo calosidades de forma gradual."
      },
      {
        question: "Em quanto tempo aparecem os resultados?",
        answer: "Com o uso diário, em poucos dias já é possível notar a pele mais fina e hidratada, dispensando o uso de lixas frequentes."
      }
    ]
  },
  // ID 4: Decreína Nails
  {
    id: 4,
    name: "Decreína Nails",
    description: "Revitalização e fortalecimento de unhas danificadas",
    image: img0213,
    benefits: ["Unhas frágeis, quebradiças e com aspecto opaco", "Ação múltipla"],
    category: "tratamento",
    details: "Produto fortalecedor, regenerador e antisséptico desenvolvido para restaurar a vitalidade das unhas e cutículas. Sua formulação exclusiva combina óleo de melaleuca, óleo de copaíba, óleo de argan, queratina e pantenol, oferecendo:",
    list: [
      "Hidratação profunda da cutícula e da matriz ungueal",
      "Estimulação do crescimento de lâminas mais firmes e resistentes",
      "Ingredientes com ação antifúngica, auxiliando na prevenção de infecções",
      "Reparação de unhas danificadas por esmaltes, acetona ou traumas mecânicos.",
    ],
    details2: "O uso contínuo devolve brilho natural, resistência e aspecto saudável às unhas e cutículas.",
    highlights: [
      "Unhas frágeis, quebradiças e com aspecto opaco",
      "Ação múltipla"
    ],
    faqs: [
      {
        question: "Pode ser usado nas unhas das mãos?",
        answer: "Sim, inclusive em unhas com esmalte! É excelente na regeneração dos danos causados por unhas de gel."
      },
      {
        question: "Pode ser usado todos os dias?",
        answer: "Sim, recomenda-se aplicação duas vezes ao dia para melhores resultados."
      }
    ]
  },
  // ID 5: Pés Sensíveis Decreína
  {
    id: 5,
    name: "Pés Sensíveis Decreína",
    description: "Hidratação protetora para peles delicadas e diabéticas",
    image: img0260,
    benefits: ["Hidratação segura, contínua e confortável", "Peles sensíveis, finas ou ressecadas"],
    category: "hidratação",
    details: "Creme desenvolvido para hidratar profundamente, proteger e revitalizar as peles mais delicadas. Com uma combinação de ureia, lanolina, óleo de semente de uva, manteiga de karité e alantoína, ele promove:",
    list: [
      "Hidratação intensa e duradoura, com toque suave",
      "Fortalecimento da barreira hidrolipídica da pele",
      "Aumento da elasticidade e da resistência cutânea",
      "Proteção e conforto em peles delicadas e sensibilizadas",
      "Ação calmante e revitalizante, que reduz a sensação de aspereza"
    ],
    highlights: [
      "Hidratação segura, contínua e confortável",
      "Peles sensíveis, finas ou ressecadas"
    ],
    faqs: [
      {
        question: "Qual é o diferencial em relação ao Hidratante Decreína?",
        answer: "O Pés Sensíveis é formulado para peles delicadas e reativas, com ativos mais suaves e calmantes. Pode ser usado, sob orientação, por pacientes diabéticos."
      },
      {
        question: "Em que atendimentos é mais indicado?",
        answer: "Em protocolos de hidratação para pés frágeis, irritados ou sensibilizados, que exigem cuidado especial."
      }
    ]
  },
  // ID 6: Flash Remover Decreína
  {
    id: 6,
    name: "Flash Remover Decreína",
    description: "Emoliência Rápida e Segura para Onicofoses e Calosidades",
    image: img0268,
    benefits: ["Emoliência segura", "Ação rápida", "Ideal para mãos e unhas"],
    category: "emoliência",
    details: "Emoliente profissional de ação imediata, formulado para amolecer com rapidez e segurança as áreas espessadas da pele e das cutículas. Sua fórmula combina ureia, aloe vera, calêndula e alantoína, proporcionando:",
    list: [
      "Ação emoliente profunda, que facilita o trabalho manual da podóloga",
      "Efeito calmante e suavizante, que reduz irritações",
      "Melhora da maleabilidade da pele e das cutículas, sem ressecar nem agredir."
    ],
    highlights: [
      "Emoliência segura",
      "Ação rápida",
      "Ideal para mãos e unhas"
    ],
    faqs: [
      {
        question: "O que torna o Flash Remover especial?",
        answer: "Sua ação é quase imediata, permitindo a remoção rápida de onicofoses, cutículas e calosidades em consultórios com alta demanda."
      },
      {
        question: "Ele substitui o uso de instrumentos?",
        answer: "Não substitui, mas reduz o tempo de preparo e minimiza a necessidade de força mecânica, tornando o procedimento mais seguro e confortável."
      },
      {
        question: "Quais cuidados devo ter ao usar o Flash Remover?",
        answer: "A profissional deve utilizar luvas ao aplicar e deve remover todo o produto ao final dos 3 minutos de aplicação."
      }
    ]
  },
  // ID 7: Assepsis Decreína
  {
    id: 7,
    name: "Assepsis Decreína",
    description: "Higienização profissional e emoliência segura",
    image: img0187,
    benefits: ["Dupla ação (emoliente e higienizante)", "Livre de agentes alcalinos, atua com suavidade e segurança"],
    category: "higienização",
    details: "O produto combina ativos com ação umectante, emoliente e higienizante, promovendo maciez, limpeza e segurança no preparo da pele. Sua fórmula conta com ureia, aloe vera e hortelã, oferecendo:",
    list: [
      "Amolecimento rápido e controlado das áreas espessas",
      "Higienização eficaz e profunda das regiões trabalhadas",
      "Efeito refrescante e calmante",
      "Ausência de hidróxidos, garantindo tolerância e segurança dermatológica."
    ],
    highlights: [
      "Dupla ação (emoliente e higienizante)",
      "Livre de agentes alcalinos, atua com suavidade e segurança"
    ],
    faqs: [
      {
        question: "Ele é só higienizante?",
        answer: "Não. Além de higienizar e eliminar microrganismos, também age como emoliente, amolecendo calosidades e preparando a pele com leveza."
      },
      {
        question: "Quando usar em cabine?",
        answer: "Logo no início do atendimento, garantindo pele limpa, segura e pronta para o procedimento."
      },
      {
        question: "Preciso diluir?",
        answer: "Não. O Assepsis já vem pronto para uso."
      }
    ]
  },
  // ID 8: Pomada Intense Decreína
  {
    id: 8,
    name: "Pomada Intense Decreína",
    description: "Regeneração profunda para pés ressecados e fissurados",
    image: img0281,
    benefits: ["Umectação intensa e prolongada, mantém a pele hidratada por horas", "Ação reparadora"],
    category: "tratamento",
    details: "Atua na reparação e regeneração da pele severamente ressecada. Sua combinação de ureia, aloe vera, calêndula, óleo de girassol e lanolina proporciona:",
    list: [
      "Ação calmante e anti-inflamatória leve, reduzindo o desconforto das fissuras",
      "Regeneração acelerada da barreira cutânea, prevenindo infecções secundárias",
      "Redução rápida da aspereza e melhora estética da pele",
      "Aumento da elasticidade da pele, prevenindo o reaparecimento de rachaduras e asperezas."
    ],
    highlights: [
      "Umectação intensa e prolongada, mantém a pele hidratada por horas",
      "Ação reparadora"
    ],
    faqs: [
      {
        question: "O que diferencia da versão hidratante?",
        answer: "Enquanto o Hidratante Decreína atua na prevenção e manutenção, a Pomada Intense age como tratamento corretivo para condições severas de ressecamento."
      }
    ]
  },
  // ID 9: Esfoliante Decreína
  {
    id: 9,
    name: "Esfoliante Decreína",
    description: "Renovação e suavização da pele dos pés",
    image: img0122,
    benefits: ["Com partículas de cascas de noz", "Estimula a renovação da pele", "Granulometria controlada e pH fisiológico"],
    category: "esfoliação",
    details: "Remove suavemente as células mortas e estimula a renovação cutânea, deixando a pele lisa, uniforme e preparada para hidratação. Com micropartículas de sílica e cascas de noz, ele oferece:",
    list: [
      "Esfoliação física eficaz e segura",
      "Suavização das áreas endurecidas",
      "Melhora imediata da textura da pele",
      "Toque leve, aroma cítrico e efeito revitalizante."
    ],
    highlights: [
      "Com partículas de cascas de noz",
      "Estimula a renovação da pele",
      "Granulometria controlada e pH fisiológico"
    ],
    faqs: [
      {
        question: "Qual o papel do esfoliante no atendimento?",
        answer: "Remover células mortas e preparar a pele para melhor absorção dos hidratantes e cremes de tratamento."
      },
      {
        question: "Ele pode ser usado em qualquer pele?",
        answer: "Sim, mas deve-se evitar em áreas com fissuras abertas ou feridas."
      }
    ]
  },
  // ID 10: Emoliente Concentrado Decreína
  {
    id: 10,
    name: "Emoliente Concentrado Decreína",
    description: "Amolecimento de Calosidades e Hidratação",
    image: img0167,
    benefits: ["Ação emoliente, sem agredir a pele", "Rendimento de 2L", "Livre de soda cáustica (hidróxidos de potássio e de cálcio)"],
    category: "emoliência",
    details: "Emoliente de base aquosa, com formulação que associa glicerina, alecrim, hortelã e aloe vera, proporcionando:",
    list: [
      "Amolecimento rápido e uniforme das áreas espessadas",
      "Sensação imediata de frescor e conforto",
      "Hidratação prolongada sem resíduo oleoso",
      "Textura líquida e prática, facilitando a aplicação profissional."
    ],
    highlights: [
      "Ação emoliente, sem agredir a pele",
      "Rendimento de 2L",
      "Livre de soda cáustica (hidróxidos de potássio e de cálcio)"
    ],
    faqs: [
      {
        question: "Qual a principal vantagem do Emoliente Decreína?",
        answer: "Ele promove emoliência rápida e intensa, facilitando a remoção de cutículas e calosidades sem esforço, otimizando o tempo do atendimento e a prática profissional."
      },
      {
        question: "Esse emoliente causa queimaduras ou irritação na pele?",
        answer: "O Emoliente Decreína foi desenvolvido para garantir o conforto e bem-estar dos pés. Sua fórmula não possui Hidróxido de Potássio ou Hidróxido de Sódio (soda cáustica), produtos comumente relacionados às queimaduras e irritações."
      }
    ]
  },
  // ID 11: Balm Decreína
  {
    id: 11,
    name: "Balm Decreína",
    description: "Nutrição Profunda e Reparadora Para as Mãos",
    image: img0225,
    benefits: ["Formulação dermoprotetora", "Ideal para mãos", "Ação recondicionante, recupera a elasticidade da pele"],
    category: "hidratação",
    details: "Atua na hidratação prolongada para as mãos, com toque não oleoso, revitalizando a integridade da pele. Sua formulação foi desenvolvida com ativos naturais, que:",
    list: [
      "Promovem nutrição intensa e duradoura (manteigas amazônicas de murumuru, cupuaçu e tucumã)",
      "Restauram a suavidade e melhoram a elasticidade da pele (óleo de babaçu e malva)"
    ],
    highlights: [
      "Formulação dermoprotetora",
      "Ideal para mãos",
      "Ação recondicionante, recupera a elasticidade da pele"
    ],
    faqs: [
      {
        question: "Esse produto também é para os pés?",
        answer: "Não, ele é específico para as mãos. Foi desenvolvido com manteigas vegetais da Amazônia para nutrir intensamente a pele das mãos."
      },
      {
        question: "Em que momento a podóloga pode oferecer?",
        answer: "Como complemento em atendimentos dos pés, o cuidado das mãos amplia as possibilidades para a podologia, elevando a experiência do cliente e o bem-estar final. Ele é, também, uma boa sugestão de revenda premium."
      }
    ]
  },
  // ID 12: Relaxante Decreína
  {
    id: 12,
    name: "Relaxante Decreína",
    description: "Alívio imediato e conforto para pés e pernas cansadas",
    image: img0165,
    benefits: ["Alivia tensões, inchaço e fadiga muscular", "Refrescância e conforto imediato", "Ideal para finalizar o atendimento profissional"],
    category: "massagem",
    details: "Combina ativos com efeito refrescante, revitalizante e calmante, proporcionando alívio e relaxamento imediato. Com uma formulação equilibrada de mentol, cânfora e aloe vera, o produto:",
    list: [
      "Estimula a circulação local e melhora a sensação de leveza",
      "Reduz a sensação de inchaço e peso",
      "Promove frescor e relaxamento muscular",
      "Apresenta toque seco e não gorduroso."
    ],
    highlights: [
      "Alivia tensões, inchaos e fadiga muscular",
      "Refrescância e conforto imediato",
      "Ideal para finalizar o atendimento profissional"
    ],
    faqs: [
      {
        question: "Em quais situações o podólogo pode usar?",
        answer: "Na finalização de atendimentos, como diferencial de conforto e bem-estar."
      },
      {
        question: "Como indicar para uso domiciliar?",
        answer: "Para clientes que passam muito tempo em pé, praticam atividades físicas ou sofrem de cansaço frequente nas pernas."
      }
    ]
  },
  // ID 13: Higienize Concentrado Decreína
  {
    id: 13,
    name: "Higienize Concentrado Decreína",
    description: "Purificação e Preparação da Pele para o Atendimento",
    image: img0176,
    benefits: ["Limpeza eficaz, sem agredir", "Mais controle e segurança", "Segurança e praticidade, com alto rendimento (até 2L após diluição)"],
    category: "higienização",
    details: "Possui ação purificante e higienizante, formulado para assegurar a limpeza e a preparação ideal da pele antes do atendimento. Com hortelã, aloe vera e alecrim, sua fórmula proporciona:",
    list: [
      "Higienização eficiente da pele e das unhas",
      "Sensação de frescor e conforto imediato",
      "Ação calmante e purificadora, ideal para o início dos protocolos profissionais",
      "Segurança e praticidade, com alto rendimento (até 2L após diluição)."
    ],
    highlights: [
      "Limpeza eficaz, sem agredir",
      "Mais controle e segurança"
    ],
    faqs: [
      {
        question: "Qual é o objetivo deste produto?",
        answer: "Higienizar e preparar os pés antes do procedimento, eliminando microrganismos e deixando a pele fresca."
      },
      {
        question: "Qual a diferença em relação ao Assepsis?",
        answer: "O Higienize é específico para limpeza e assepsia inicial, enquanto o Assepsis também promove emoliência."
      },
      {
        question: "Posso utilizar o produto diluído em mais de um dia?",
        answer: "Não. Deve-se diluir a quantidade necessária para um dia de uso."
      }
    ]
  },
  // ID 14: Óleo de Massagem Decreína
  {
    id: 14,
    name: "Óleo de Massagem Decreína",
    description: "Ativação Circulatória e Relaxamento para Pés e Pernas",
    image: img0192,
    benefits: ["Alívio da fadiga e sensação de frescor", "Massagens relaxantes, drenantes e terapias podais", "Absorção controlada, toque seco"],
    category: "massagem",
    details: "Desenvolvido para ativar a microcirculação, aliviar a sensação de cansaço e refrescar a pele durante massagens podais ou de membros inferiores. Sua fórmula reúne óleo de semente de uva, extrato de calêndula, mentol e cânfora, proporcionando:",
    list: [
      "Sensação imediata de leveza e frescor",
      "Conforto muscular e relaxamento, especialmente após longos períodos em pé",
      "Melhora do aspecto da pele, com toque macio e sedoso",
      "Deslizamento ideal para manobras de massagem, sem excesso de oleosidade."
    ],
    highlights: [
      "Alívio da fadiga e sensação de frescor",
      "Massagens relaxantes, drenantes e terapias podais",
      "Absorção controlada, toque seco"
    ],
    faqs: [
      {
        question: "Qual a diferença para o Relaxante?",
        answer: "O óleo é específico para protocolos de massagem. Ele ativa a circulação e ajuda a reduzir edemas, além de relaxar a musculatura."
      },
      {
        question: "Ele deixa a pele oleosa?",
        answer: "Apesar de ser um óleo, sua textura é leve e de fácil absorção, proporcionando frescor sem excesso de oleosidade, que favorece a sensação de conforto após o uso."
      }
    ]
  },
  // ID 15: Fresh Feet Decreína
  {
    id: 15,
    name: "Fresh Feet Decreína",
    description: "Controle da transpiração e de odores, com frescor prolongado",
    image: img0131,
    benefits: ["Atendimentos mais confortáveis", "Reduz a transpiração", "Ação desodorante", "Efeito refrescante"],
    category: "higienização",
    details: "Formulado para reduzir a transpiração excessiva e neutralizar odores desagradáveis, combina ativos que combatem fungos e bactérias presentes nos pés e nos calçados. Proporciona frescor imediato, mantendo os pés secos, protegidos e confortáveis durante e após o atendimento.",
    highlights: [
      "Atendimentos mais confortáveis",
      "Reduz a transpiração",
      "Ação desodorante",
      "Efeito refrescante"
    ],
    faqs: [
      {
        question: "Em que momento do atendimento devo usar o Fresh Feet?",
        answer: "No início do protocolo, após a higienização, para eliminar odores e controlar a transpiração, garantindo conforto durante todo o atendimento."
      },
      {
        question: "Posso indicar para o uso domiciliar?",
        answer: "Sim. É ideal para pessoas que transpiram muito, usam sapatos fechados diariamente ou têm odores recorrentes nos pés e calçados."
      }
    ]
  }
];