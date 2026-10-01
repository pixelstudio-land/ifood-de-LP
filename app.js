// ==========================================================================
// VITRINE PRO - MOTOR DINÂMICO DE PERSONALIZAÇÃO CONTEXTUAL & CATÁLOGO
// ==========================================================================

const PERSONAL_WHATSAPP_PHONE = '5511913393797'; // WhatsApp Pessoal para fechamento

// CATÁLOGO COMPLETO DE MODELOS ESTRUTURADOS POR NICHO (40+ OPÇÕES)
const MODELS_CATALOG = [
  // ========================================================================
  // 1. ODONTOLOGIA & SAÚDE
  // ========================================================================
  {
    id: 'odonto-estetica',
    category: 'odontologia',
    title: 'Odonto Prime (Estética & Implantes)',
    desc: 'Estrutura de luxo focada em procedimentos de alto valor: clareamento dental a laser, facetas em resina, lentes de contato e implantes guiados.',
    tag: 'Mais Pedido',
    liveUrl: 'modelos/odonto-prime/index.html',
    highlights: [
      'Galeria de tratamentos com fotos em alta definição',
      'Botão flutuante de agendamento no WhatsApp',
      'Carregamento em 0.8s no 4G',
      'Área com depoimentos de pacientes e FAQ'
    ],
    demoContent: {
      headline: 'Transforme o seu sorriso com estética dental avançada',
      sub: 'Atendimento humanizado, tecnologia de ponta e especialistas prontos para cuidar do seu sorriso.',
      ctaText: 'Agendar Consulta de Avaliação no WhatsApp',
      services: [
        { title: 'Lentes e Facetas de Contato', desc: 'Harmonia perfeita e naturalidade para o seu sorriso.' },
        { title: 'Implantes Dentários Guiados', desc: 'Recuperação estética e mastigatória sem dor.' },
        { title: 'Clareamento Dental a Laser', desc: 'Resultados visíveis e seguros desde a primeira sessão.' }
      ]
    }
  },
  {
    id: 'odonto-clinica-geral',
    category: 'odontologia',
    title: 'Clínica Odontológica & Família',
    desc: 'Ideal para clínicas com múltiplos dentistas, abrangendo desde odontopediatria até prótese, limpeza preventiva e ortodontia.',
    tag: 'Alta Conversão',
    highlights: [
      'Apresentação do corpo clínico completo',
      'Tabela simplificada de convênios ou formas de pagamento',
      'Localização integrada com Google Maps',
      'Botão direto de tira-dúvidas com a recepção'
    ],
    demoContent: {
      headline: 'Cuidado odontológico completo para toda a sua família',
      sub: 'Clínica multidisciplinar com horários flexíveis e atendimento emergencial.',
      ctaText: 'Falar com a Recepção no WhatsApp',
      services: [
        { title: 'Ortodontia & Alinhadores Invisíveis', desc: 'Correção rápida e discreta para adultos e jovens.' },
        { title: 'Odontopediatria sem Traumas', desc: 'Cuidado lúdico e acolhedor para os pequenos.' },
        { title: 'Tratamento de Canal & Restaurações', desc: 'Alívio imediato e máxima conservação dental.' }
      ]
    }
  },
  {
    id: 'odonto-alinhadores',
    category: 'odontologia',
    title: 'Ortodontia Digital & Alinhadores Invisíveis',
    desc: 'Focada na venda de tratamentos ortodônticos modernos, com escaneamento intraoral e comparação antes x depois.',
    tag: 'Tecnologia',
    highlights: [
      'Simulador visual do tratamento ortodôntico',
      'Foco em estética e praticidade no dia a dia',
      'Depoimentos em vídeo de pacientes',
      'Condições de parcelamento facilitadas'
    ],
    demoContent: {
      headline: 'Alinhe seus dentes com total discrição e conforto',
      sub: 'Sem peças metálicas, sem dor e com tecnologia de escaneamento 3D.',
      ctaText: 'Solicitar Simulação 3D no WhatsApp',
      services: [
        { title: 'Alinhadores Invisíveis Removíveis', desc: 'Liberdade para comer e higienizar sem incômodos.' },
        { title: 'Escaneamento Digital em 15 Minutos', desc: 'Veja a previsão do seu novo sorriso na primeira consulta.' },
        { title: 'Aparelhos Autoligados Estéticos', desc: 'Movimentação rápida e porcelana transparente.' }
      ]
    }
  },
  {
    id: 'odonto-pediatria',
    category: 'odontologia',
    title: 'Odontopediatria & Espaço Kids',
    desc: 'Visual lúdico, colorido e reconfortante para mães e pais agendarem a primeira consulta odontológica dos filhos sem medo.',
    tag: 'Público Família',
    highlights: [
      'Ambiente humanizado livre de estresse infantil',
      'Dicas rápidas de higiene para os pais',
      'Apresentação da sala temática infantil',
      'Agendamento rápido em horários convenientes'
    ],
    demoContent: {
      headline: 'O primeiro dentinho do seu filho cuidado com carinho e amor',
      sub: 'Dentistas especializados em odontopediatria com atendimento acolhedor.',
      ctaText: 'Agendar Consulta Infantil no WhatsApp',
      services: [
        { title: 'Check-up Preventivo Baby & Kids', desc: 'Prevenção de cáries e orientação precoce para os pais.' },
        { title: 'Aplicação de Flúor & Selantes', desc: 'Proteção reforçada para os dentes de leite e permanentes.' },
        { title: 'Tratamento Sem Dor e Lúdico', desc: 'Adaptação comportamental com brinquedoteca interativa.' }
      ]
    }
  },
  {
    id: 'clinica-medica-integrada',
    category: 'odontologia',
    title: 'Clínica Médica & Consultas Populares',
    desc: 'Voltada para policlínicas e consultórios particulares que oferecem consultas acessíveis e exames rápidos no mesmo local.',
    tag: 'Mais Vendido',
    highlights: [
      'Lista completa de especialidades médicas',
      'Tabela de exames laboratoriais e de imagem',
      'Agendamento sem filas pelo WhatsApp',
      'Credenciais do responsável técnico'
    ],
    demoContent: {
      headline: 'Consultas médicas e exames com agilidade e preço justo',
      sub: 'Mais de 15 especialidades com atendimento humanizado sem mensalidade.',
      ctaText: 'Consultar Especialidades no WhatsApp',
      services: [
        { title: 'Clínica Geral & Cardiologia', desc: 'Check-ups, eletrocardiograma e acompanhamento preventivo.' },
        { title: 'Ginecologia & Ultrassonografia', desc: 'Saúde da mulher com exames diagnósticos no mesmo dia.' },
        { title: 'Exames de Sangue & Laboratório', desc: 'Resultados rápidos disponíveis online com alta precisão.' }
      ]
    }
  },
  {
    id: 'fisioterapia-pilates',
    category: 'odontologia',
    title: 'Fisioterapia, RPG & Studio de Pilates',
    desc: 'Design focado em bem-estar, reabilitação física, alívio de dores na coluna e condicionamento postural.',
    tag: 'Bem-Estar',
    highlights: [
      'Apresentação dos aparelhos e do espaço',
      'Planos mensais e pacotes de sessões',
      'Foco em alívio de dores crônicas',
      'Agendamento de aula experimental'
    ],
    demoContent: {
      headline: 'Livre-se das dores nas costas e recupere sua mobilidade',
      sub: 'Fisioterapia personalizada e Pilates em aparelhos com turmas reduzidas.',
      ctaText: 'Agendar Aula Experimental no WhatsApp',
      services: [
        { title: 'Pilates Clínico em Aparelhos', desc: 'Fortalecimento do core e correção de postura guiada.' },
        { title: 'Tratamento de Coluna & Hérnia de Disco', desc: 'Técnicas manuais e tração para alívio imediato da dor.' },
        { title: 'Reabilitação Ortopédica & Pós-Operatório', desc: 'Recuperação funcional completa com fisioterapeutas dedicados.' }
      ]
    }
  },
  {
    id: 'psicologia-terapia',
    category: 'odontologia',
    title: 'Psicologia Clínica & Terapia Online / Presencial',
    desc: 'Página sóbria e acolhedora para psicólogos e terapeutas, transmitindo sigilo, confiança e empatia.',
    tag: 'Acolhimento',
    liveUrl: 'modelos/psicologia-clinica/index.html',
    highlights: [
      'Explicação clara de como funciona a primeira sessão',
      'Opções de atendimento online e presencial',
      'Abordagens terapêuticas (TCC, Psicanálise)',
      'Canal 100% sigiloso no WhatsApp'
    ],
    demoContent: {
      headline: 'Um espaço seguro para cuidar da sua saúde mental e emocional',
      sub: 'Atendimento psicológico individual para ansiedade, estresse e autoconhecimento.',
      ctaText: 'Agendar Sessão Inicial no WhatsApp',
      services: [
        { title: 'Terapia para Ansiedade e Burnout', desc: 'Ferramentas práticas para recuperar o equilíbrio na rotina.' },
        { title: 'Terapia de Casal & Relacionamentos', desc: 'Comunicação assertiva e resolução de conflitos conjugais.' },
        { title: 'Sessões Online para Todo o Brasil', desc: 'Comodidade e sigilo diretamente do conforto da sua casa.' }
      ]
    }
  },

  // ========================================================================
  // 2. GASTRONOMIA & DELIVERY
  // ========================================================================
  {
    id: 'burger-delivery',
    category: 'gastronomia',
    title: 'Hamburgueria Artesanal & Smash Burger',
    desc: 'Página escura, moderna e focada em abrir o apetite do cliente e receber o pedido no WhatsApp sem taxa do iFood.',
    tag: 'Zero Taxas',
    liveUrl: 'modelos/burger-artesanal/index.html',
    highlights: [
      'Cardápio digital com fotos grandes dos lanches',
      'Montador de combos e adicionais interativo',
      'Cálculo automático de taxa de entrega',
      'Pedido chega formatado no WhatsApp'
    ],
    demoContent: {
      headline: 'O melhor hambúrguer artesanal da cidade na sua mesa',
      sub: 'Carnes nobres grelhadas no fogo, pães artesanais e molhos exclusivos.',
      ctaText: 'Ver Cardápio & Pedir no WhatsApp',
      services: [
        { title: 'Smash Burgers Crocantes', desc: 'Pão brioche, blend duplo e queijo cheddar derretido.' },
        { title: 'Burgers Especiais de Picanha', desc: 'Cortes premium com cebola caramelizada e bacon crocante.' },
        { title: 'Batatas Rústicas & Shakes', desc: 'Acompanhamentos exclusivos para completar seu pedido.' }
      ]
    }
  },
  {
    id: 'pizzaria-tradicional',
    category: 'gastronomia',
    title: 'Pizzaria Forno a Lenha & Delivery',
    desc: 'Perfeita para pizzarias que buscam pedidos rápidos, separando pizzas salgadas, doces, bordas recheadas e bebidas.',
    tag: 'Mais Vendido',
    liveUrl: 'modelos/pizzaria-forno/index.html',
    highlights: [
      'Divisão fácil de 2 sabores na mesma pizza',
      'Tempo estimado de entrega na tela',
      'Botão de atendimento telefônico e WhatsApp',
      'Carregamento instantâneo no celular'
    ],
    demoContent: {
      headline: 'Pizzas artesanais com fermentação natural e forno à lenha',
      sub: 'Massa leve, queijos selecionados e entrega rápida e quentinha na sua casa.',
      ctaText: 'Fazer Pedido Direto no WhatsApp',
      services: [
        { title: 'Pizzas Tradicionais e Especiais', desc: 'Mais de 40 sabores entre clássicas e criações da casa.' },
        { title: 'Bordas Recheadas Gourmet', desc: 'Catupiry original, cheddar cremoso e chocolate.' },
        { title: 'Combos Família com Refrigerante', desc: 'Economia e qualidade para o jantar de toda a família.' }
      ]
    }
  },
  {
    id: 'sushi-bar',
    category: 'gastronomia',
    title: 'Restaurante Japonês & Sushi Bar',
    desc: 'Visual contemporâneo sofisticado (preto e dourado) para combinados de sushi, sashimi, temakis e rodízio.',
    tag: 'Design Premium',
    liveUrl: 'modelos/sushi-contemporaneo/index.html',
    highlights: [
      'Cardápio premium de combinados e festivais',
      'Destaque para peixes frescos diários (salmão, atum)',
      'Reserva de mesas para o salão e delivery exclusivo',
      'Opções de pratos quentes (Yakisoba, Guioza)'
    ],
    demoContent: {
      headline: 'A autêntica culinária japonesa com peixes frescos selecionados',
      sub: 'Experiência gastronômica única no salão e delivery com embalagens térmicas.',
      ctaText: 'Pedir Combinado de Sushi no WhatsApp',
      services: [
        { title: 'Combinados de Salmão & Atum', desc: 'Sashimis fatiados na hora, niguiris e uramakis especiais.' },
        { title: 'Temakis Especiais & Hot Rolls', desc: 'Algas crocantes e recheios generosos com cream cheese.' },
        { title: 'Festivais & Rodízio Completo', desc: 'Variedade ilimitada com entradas quentes e sobremesas.' }
      ]
    }
  },
  {
    id: 'churrascaria-espetaria',
    category: 'gastronomia',
    title: 'Churrascaria, Espetaria & Carnes Nobres',
    desc: 'Destaque para cortes nobres na brasa, guarnições de churrasco, marmitex executivo e chopp gelado.',
    tag: 'Alta Conversão',
    highlights: [
      'Fotos apetitosas de picanha e cortes na brasa',
      'Cardápio de almoço executivo diário',
      'Reserva de confraternizações e aniversários',
      'Combos de carnes com arroz, farofa e vinagrete'
    ],
    demoContent: {
      headline: 'O verdadeiro sabor do churrasco feito no fogo forte',
      sub: 'Cortes premium, espetos artesanais e acompanhamentos que todo mundo ama.',
      ctaText: 'Pedir Marmitex ou Churrasco no WhatsApp',
      services: [
        { title: 'Picanha na Brasa & Cortes Nobres', desc: 'Ancho, fraldinha e costela com ponto perfeito.' },
        { title: 'Espetos Artesanais Variados', desc: 'Mais de 15 opções de espetos assados na hora.' },
        { title: 'Almoço Executivo Completo', desc: 'A melhor refeição do meio-dia entregue rapidinho.' }
      ]
    }
  },
  {
    id: 'confeitaria-doces',
    category: 'gastronomia',
    title: 'Confeitaria Gourmet, Bolos & Doces Finos',
    desc: 'Paleta delicada em tons pastéis para bolos de festa decorados, bentô cakes, brigadeiros gourmet e sobremesas de taça.',
    tag: 'Visual Encantador',
    highlights: [
      'Catálogo de bolos temáticos para festas',
      'Tabela de tamanhos por número de fatias',
      'Encomendas programadas com antecedência',
      'Sobremesas prontas para entrega imediata'
    ],
    demoContent: {
      headline: 'Doces artesanais que transformam qualquer momento em celebração',
      sub: 'Bolos decorados sob encomenda e sobremesas individuais irresistíveis.',
      ctaText: 'Encomendar Bolo de Aniversário no WhatsApp',
      services: [
        { title: 'Bolos de Festa & Casamento', desc: 'Decorações personalizadas com chantininho ou pasta americana.' },
        { title: 'Docinhos Gourmet & Brigadeiros', desc: 'Cento de doces finos para festas e eventos corporativos.' },
        { title: 'Fatias & Taças da Felicidade', desc: 'Sobremesas caprichadas para matar a vontade hoje mesmo.' }
      ]
    }
  },
  {
    id: 'marmitaria-fit',
    category: 'gastronomia',
    title: 'Marmitas Saudáveis, Fit & Congeladas',
    desc: 'Focada em quem busca praticidade, perda de peso ou ganho de massa com kits semanais e mensais de refeições congeladas.',
    tag: 'Recorrência',
    liveUrl: 'modelos/marmitaria-fit/index.html',
    highlights: [
      'Cardápio semanal com contagem de calorias e macros',
      'Kits econômicos de 10, 14 e 20 refeições',
      'Embalagens próprias para micro-ondas livres de BPA',
      'Entrega programada no domingo ou segunda-feira'
    ],
    demoContent: {
      headline: 'Comida de verdade, saudável e saborosa na sua rotina corrida',
      sub: 'Marmitas congeladas ultrarrápidas sem conservantes. É só aquecer e saborear.',
      ctaText: 'Pedir Kit Semanal no WhatsApp',
      services: [
        { title: 'Linha Low Carb & Emagrecimento', desc: 'Refeições equilibradas com vegetais frescos e proteínas magras.' },
        { title: 'Linha Hipertrofia & Ganho de Massa', desc: 'Porções reforçadas de frango, patinho e carboidratos complexos.' },
        { title: 'Sopas & Cremes Funcionais', desc: 'Jantares leves e nutritivos para noites práticas.' }
      ]
    }
  },
  {
    id: 'cafeteria-brunch',
    category: 'gastronomia',
    title: 'Cafeteria Especial, Brunch & Padaria Artesanal',
    desc: 'Ambiente aconchegante para cafés filtrados especiais, pães de fermentação natural, croissants e brunch.',
    tag: 'Design Moderno',
    highlights: [
      'Cardápio de cafés especiais e métodos de extração',
      'Vitrine de pães artesanais e folhados',
      'Combos matinais e da tarde',
      'Horários de atendimento e fotos do ambiente'
    ],
    demoContent: {
      headline: 'Pausa perfeita para o seu café da manhã ou da tarde',
      sub: 'Grãos selecionados de pequenos produtores e receitas artesanais feitas todo dia.',
      ctaText: 'Ver Cardápio & Reservar Mesa no WhatsApp',
      services: [
        { title: 'Cafés Especiais & Bebidas Autorais', desc: 'Espressos, cappuccinos e cold brews com grãos 100% arábica.' },
        { title: 'Pães Artesanais & Croissants', desc: 'Fermentação longa natural com textura crocante por fora e macia por dentro.' },
        { title: 'Combos de Brunch & Sanduíches', desc: 'Opções completas com ovos mexidos, bacon e sucos naturais.' }
      ]
    }
  },
  {
    id: 'acai-sorveteria',
    category: 'gastronomia',
    title: 'Açaíteria & Gelateria Express',
    desc: 'Montador rápido de copo de açaí (tamanho, acompanhamentos, frutas e coberturas) com envio direto para o delivery.',
    tag: 'Venda Rápida',
    highlights: [
      'Seletor simples de acompanhamentos ilimitados',
      'Cremes especiais (ninho, nutella, pistache)',
      'Entrega térmica que não deixa derreter',
      'Fidelidade com pontos por pedido'
    ],
    demoContent: {
      headline: 'O açaí mais cremoso e geladinho entregue na sua porta',
      sub: 'Açaí puro do Pará com dezenas de adicionais para você montar do seu jeito.',
      ctaText: 'Montar Meu Copo no WhatsApp',
      services: [
        { title: 'Copos e Tigelas de 300ml a 1 Litro', desc: 'Monte com camadas fartas das suas frutas e doces favoritos.' },
        { title: 'Cremes Especiais & Frutas Frescas', desc: 'Creme de cupuaçu, pitaya, morango, banana e leite em pó.' },
        { title: 'Potes Família de 2 Litros', desc: 'Ideal para ter no freezer e servir para toda a família.' }
      ]
    }
  },

  // ========================================================================
  // 3. BARBEARIA, BELEZA & ESTÉTICA
  // ========================================================================
  {
    id: 'barbearia-premium',
    category: 'beleza',
    title: 'Barbearia Vintage & Gentlemen Club',
    desc: 'Visual masculino premium com couro escuro e madeira, com tabela de serviços e botão para marcar horário.',
    tag: 'Mais Pedido',
    liveUrl: 'modelos/barbearia-vintage/index.html',
    highlights: [
      'Tabela clara de corte, barba e tratamentos',
      'Integração com sistema de agendamento',
      'Horário de funcionamento e mapa',
      'Espaço para fotos da equipe de barbeiros'
    ],
    demoContent: {
      headline: 'Tradição, estilo e cuidado com a sua imagem',
      sub: 'Cortes clássicos e modernos, barba com toalha quente e ambiente com chopp gelado.',
      ctaText: 'Agendar Horário no WhatsApp',
      services: [
        { title: 'Corte Cabelo & Fade', desc: 'Degradê na navalha, tesoura ou máquina com acabamento impecável.' },
        { title: 'Barboterapia Tradicional', desc: 'Toalha quente, óleos essenciais e navalha afiada.' },
        { title: 'Combo Cabelo + Barba + Sobrancelha', desc: 'Alinhamento completo do seu visual.' }
      ]
    }
  },
  {
    id: 'estetica-facial',
    category: 'beleza',
    title: 'Clínica de Estética & Harmonização Facial',
    desc: 'Layout sofisticado com tons neutros e foco visual em Botox, preenchimento labial, bioestimuladores e fios de sustentação.',
    tag: 'Design Premium',
    liveUrl: 'modelos/clinica-estetica/index.html',
    highlights: [
      'Visual minimalista e elegante',
      'Seção de perguntas frequentes (FAQ)',
      'Formulário rápido de pré-agendamento',
      'Integração direta com o Instagram'
    ],
    demoContent: {
      headline: 'Realce sua beleza natural com procedimentos seguros',
      sub: 'Harmonização facial, bioestimuladores de colágeno e tratamentos personalizados.',
      ctaText: 'Solicitar Avaliação Personalizada',
      services: [
        { title: 'Toxina Botulínica (Botox)', desc: 'Prevenção e suavização de linhas de expressão.' },
        { title: 'Preenchimento com Ácido Hialurônico', desc: 'Volume e contorno labial com extrema naturalidade.' },
        { title: 'Bioestimuladores de Colágeno', desc: 'Firmeza e rejuvenescimento duradouro da pele.' }
      ]
    }
  },
  {
    id: 'studio-beleza',
    category: 'beleza',
    title: 'Studio Hair, Loiros & Mega Hair',
    desc: 'Design moderno e requintado para cabeleireiros especialistas em loiras, morenas iluminadas, mega hair e noivas.',
    tag: 'Alta Conversão',
    liveUrl: 'modelos/studio-hair/index.html',
    highlights: [
      'Galeria de transformações antes x depois',
      'Apresentação de mechas com teste de mecha seguro',
      'Depoimentos de clientes satisfeitas',
      'Botão de consulta de orçamento no WhatsApp'
    ],
    demoContent: {
      headline: 'Sua melhor versão com profissionais especialistas em beleza',
      sub: 'Coloração, mechas, tratamentos capilares intensivos e cuidados para o seu dia a dia.',
      ctaText: 'Solicitar Orçamento no WhatsApp',
      services: [
        { title: 'Loiras & Mechas Personalizadas', desc: 'Técnicas modernas que preservam a saúde dos fios.' },
        { title: 'Tratamentos de Cronograma Capilar', desc: 'Nutrição, hidratação e reconstrução profunda.' },
        { title: 'Mega Hair Invisível Nanopele', desc: 'Comprimento e volume imediato com fios 100% humanos.' }
      ]
    }
  },
  {
    id: 'lash-sobrancelhas',
    category: 'beleza',
    title: 'Lash Designer, Extensão de Cílios & Sobrancelhas',
    desc: 'Voltada para profissionais de extensão de cílios, lash lifting, design de sobrancelhas e micropigmentação.',
    tag: 'Tendência',
    liveUrl: 'modelos/lash-sobrancelhas/index.html',
    highlights: [
      'Guia visual de técnicas de cílios (Fio a Fio, Volume Russo)',
      'Orientações de cuidados pós-aplicação',
      'Tabela de manutenção e primeira colocação',
      'Agendamento rápido de horário'
    ],
    demoContent: {
      headline: 'Olhar marcante e sofisticado todos os dias ao acordar',
      sub: 'Extensão de cílios com isolamento perfeito e design estratégico de sobrancelhas.',
      ctaText: 'Agendar Horário no WhatsApp',
      services: [
        { title: 'Extensão Fio a Fio & Volume Brasileiro', desc: 'Volume leve e natural que valoriza o formato dos seus olhos.' },
        { title: 'Volume Russo & Efeito Fox Eyes', desc: 'Densidade elegante com fios ultra-leves e curvatura perfeita.' },
        { title: 'Design com Henna & Brow Lamination', desc: 'Alinhamento dos fios naturais para sobrancelhas encorpadas.' }
      ]
    }
  },
  {
    id: 'esmalteria-unhas',
    category: 'beleza',
    title: 'Esmalteria & Alongamento de Unhas em Gel',
    desc: 'Layout elegante e feminino focado em alongamento em fibra de vidro, gel moldado, blindagem e nail art.',
    tag: 'Mais Vendido',
    highlights: [
      'Fotos detalhadas de formatos (Stiletto, Almond, Quadrada)',
      'Tabela de colocação inicial vs manutenção mensal',
      'Protocolos rígidos de esterilização em autoclave',
      'Agendamento de combos mão + pé'
    ],
    demoContent: {
      headline: 'Unhas impecáveis, resistentes e com acabamento de joia',
      sub: 'Alongamento em fibra de vidro e blindagem com esmaltação de alta durabilidade.',
      ctaText: 'Agendar Manutenção no WhatsApp',
      services: [
        { title: 'Alongamento em Fibra de Vidro', desc: 'Resistência máxima e espessura ultrafina imperceptível.' },
        { title: 'Blindagem de Unhas Naturais', desc: 'Camada protetora para o esmalte durar até 20 dias sem descascar.' },
        { title: 'Nail Art & Francesinha Reversa', desc: 'Decorações exclusivas, encapsuladas e elegantes.' }
      ]
    }
  },
  {
    id: 'depilacao-laser',
    category: 'beleza',
    title: 'Clínica de Depilação a Laser & Cuidados Corporais',
    desc: 'Estrutura comercial com foco em pacotes de sessões de laser, criolipólise, drenagem linfática e combate à celulite.',
    tag: 'Pacotes & Recorrência',
    highlights: [
      'Calculadora de áreas do corpo com desconto em pacotes',
      'Tecnologia de ponteira resfriada sem dor',
      'Sessão experimental gratuita para novos clientes',
      'Agendamento de avaliação corporal'
    ],
    demoContent: {
      headline: 'Diga adeus às lâminas e à dor com depilação a laser definitiva',
      sub: 'Pele lisa, sem foliculite e com a tecnologia mais moderna e confortável do mercado.',
      ctaText: 'Garantir Sessão Experimental no WhatsApp',
      services: [
        { title: 'Depilação a Laser com Ponteira Resfriada', desc: 'Sessões rápidas e confortáveis para todas as tonalidades de pele.' },
        { title: 'Drenagem Linfática Pós-Operatório & Detox', desc: 'Eliminação de retenção de líquidos e alívio do inchaço.' },
        { title: 'Tratamentos para Gordura Localizada', desc: 'Protocolos combinados para modelar o contorno corporal.' }
      ]
    }
  },
  {
    id: 'spa-massoterapia',
    category: 'beleza',
    title: 'SPA Urbano, Massoterapia & Relaxamento',
    desc: 'Página zen com cores quentes e relaxantes, perfeita para vendas de massagens relaxantes, pedras quentes e day spa.',
    tag: 'Alto Ticket',
    highlights: [
      'Menu sensorial de massagens com duração em minutos',
      'Vouchers de presentes (Gift Card Day SPA)',
      'Ambiente com aromaterapia e banhos de imersão',
      'Agendamento individual ou para casal'
    ],
    demoContent: {
      headline: 'Desconecte da correria e recarregue suas energias vitais',
      sub: 'Terapias corporais, massagens relaxantes e rituais de bem-estar em um refúgio de paz.',
      ctaText: 'Reservar Sessão de Massagem no WhatsApp',
      services: [
        { title: 'Massagem Relaxante com Óleos Essenciais', desc: 'Alívio profundo de tensões musculares e redução do estresse.' },
        { title: 'Terapia com Pedras Quentes Vulcânicas', desc: 'Melhora da circulação e relaxamento térmico profundo.' },
        { title: 'Day SPA Individual ou para Casal', desc: 'Circuito completo com banho de ofurô, esfoliação e massagem.' }
      ]
    }
  },

  // ========================================================================
  // 4. ADVOCACIA, IMÓVEIS & SERVIÇOS
  // ========================================================================
  {
    id: 'advocacia-corporativa',
    category: 'servicos',
    title: 'Escritório de Advocacia & Consultoria',
    desc: 'Visual sóbrio, formal e corporativo transmitindo autoridade, seriedade e facilidade de contato jurídico em conformidade com a OAB.',
    tag: 'Corporativo',
    liveUrl: 'modelos/advocacia-corporativa/index.html',
    highlights: [
      'Apresentação das áreas de atuação do escritório',
      'Perfil e credenciais dos advogados (OAB)',
      'Canal de atendimento confidencial no WhatsApp',
      'Artigos e publicações do escritório'
    ],
    demoContent: {
      headline: 'Segurança jurídica e atuação estratégica para seus direitos',
      sub: 'Soluções especializadas em Direito Empresarial, Trabalhista, Cível e Previdenciário.',
      ctaText: 'Falar com um Advogado no WhatsApp',
      services: [
        { title: 'Direito Civil & Sucessões', desc: 'Contratos, inventários, divórcios e planejamento patrimonial.' },
        { title: 'Assessoria Trabalhista Empresarial', desc: 'Prevenção de passivos e defesa técnica contenciosa.' },
        { title: 'Consultoria Tributária e Societária', desc: 'Planejamento e estruturação eficiente para empresas.' }
      ]
    }
  },
  {
    id: 'imobiliaria-vitrine',
    category: 'servicos',
    title: 'Horizon Prime Imóveis & Alto Padrão',
    desc: 'Página focada em captar proprietários para anunciar imóveis e compradores buscando lançamentos, condomínios fechados ou locação.',
    tag: 'Alto Valor',
    liveUrl: 'modelos/imobiliaria-prime/index.html',
    highlights: [
      'Destaque para imóveis selecionados com fotos e m²',
      'Filtro rápido por tipo, bairro e faixa de valor',
      'Canal exclusivo para avaliação e venda de imóveis',
      'Credenciais do CRECI e suporte jurídico completo'
    ],
    demoContent: {
      headline: 'Encontre o imóvel perfeito para morar ou investir',
      sub: 'Casas em condomínio, apartamentos e lançamentos com assessoria completa.',
      ctaText: 'Consultar Imóveis Disponíveis no WhatsApp',
      services: [
        { title: 'Venda de Imóveis Residenciais', desc: 'As melhores opções nos bairros mais valorizados da cidade.' },
        { title: 'Lançamentos na Planta', desc: 'Condições facilitadas direto com as melhores construtoras.' },
        { title: 'Avaliação Imobiliária Gratuita', desc: 'Descubra o valor real de mercado para vender seu imóvel com rapidez.' }
      ]
    }
  },
  {
    id: 'advocacia-trabalhista',
    category: 'servicos',
    title: 'Advocacia Trabalhista & Previdenciária (INSS)',
    desc: 'Estrutura direta focada no trabalhador e segurado, facilitando triagem de rescisões, horas extras, acidentes e aposentadorias.',
    tag: 'Alta Demanda',
    highlights: [
      'Calculadora simplificada de direitos',
      'Exemplos comuns de abusos e verbas não pagas',
      'Agendamento rápido de análise documental',
      'Atendimento 100% online sem necessidade de deslocamento'
    ],
    demoContent: {
      headline: 'Garanta seus direitos trabalhistas e seu benefício do INSS',
      sub: 'Análise detalhada do seu caso por advogados especialistas com resposta rápida.',
      ctaText: 'Analisar Meu Caso no WhatsApp',
      services: [
        { title: 'Rescisão Indireta & Horas Extras', desc: 'Cobrança de direitos atrasados, desvio de função e adicional noturno.' },
        { title: 'Acidentes de Trabalho & Doenças Ocupacionais', desc: 'Indenizações e estabilidade para o trabalhador lesionado.' },
        { title: 'Aposentadoria & Revisão da Vida Toda', desc: 'Planejamento previdenciário para obter o maior valor de aposentadoria.' }
      ]
    }
  },
  {
    id: 'arquitetura-interiores',
    category: 'servicos',
    title: 'Escritório de Arquitetura & Design de Interiores',
    desc: 'Design contemporâneo e minimalista com portfólio visual de projetos residenciais, reformas comerciais e renderizações 3D.',
    tag: 'Design Moderno',
    liveUrl: 'modelos/arquitetura-interiores/index.html',
    highlights: [
      'Galeria de projetos residenciais e comerciais entregues',
      'Passo a passo do processo (Briefing, 3D, Projeto Executivo, Obra)',
      'Depoimentos de clientes satisfeitos',
      'Orçamento direto com a equipe de arquitetos'
    ],
    demoContent: {
      headline: 'Projetos arquitetônicos únicos que refletem a sua história',
      sub: 'Arquitetura inteligente, funcional e estética para transformar a forma como você vive.',
      ctaText: 'Conversar Sobre Meu Projeto no WhatsApp',
      services: [
        { title: 'Projetos Residenciais Completos', desc: 'Da planta baixa ao detalhamento de marcenaria e iluminação.' },
        { title: 'Design de Interiores & Reformas', desc: 'Otimização de espaços existentes com economia e sofisticação.' },
        { title: 'Acompanhamento e Gestão de Obras', desc: 'Sua obra entregue no prazo sem dores de cabeça com fornecedores.' }
      ]
    }
  },
  {
    id: 'marcenaria-fina',
    category: 'servicos',
    title: 'Marcenaria & Móveis Planejados Sob Medida',
    desc: 'Destaque visual para cozinhas planejadas, dormitórios, closets e home offices com 100% MDF e ferragens com amortecimento.',
    tag: 'Mais Vendido',
    liveUrl: 'modelos/marcenaria-fina/index.html',
    highlights: [
      'Galeria de ambientes planejados entregues',
      'Diferenciais de materiais e garantia de 5 anos',
      'Envio rápido de planta baixa no WhatsApp para orçamento',
      'Projetos 3D realistas antes da produção'
    ],
    demoContent: {
      headline: 'Móveis planejados sob medida com acabamento de alto padrão',
      sub: 'Aproveitamento inteligente de cada centímetro da sua casa com design contemporâneo.',
      ctaText: 'Enviar Planta e Pedir Orçamento no WhatsApp',
      services: [
        { title: 'Cozinhas Planejadas & Ilhas Gourmet', desc: 'Funcionalidade e sofisticação para o coração da sua casa.' },
        { title: 'Dormitórios & Closets Inteligentes', desc: 'Organização impecável pensada para sua rotina diária.' },
        { title: 'Home Office & Ambientes Corporativos', desc: 'Móveis ergonômicos e elegantes para trabalhar com produtividade.' }
      ]
    }
  },
  {
    id: 'contabilidade-consultiva',
    category: 'servicos',
    title: 'Escritório de Contabilidade & BPO Financeiro',
    desc: 'Página corporativa moderna para atração de novas empresas, abertura grátis de CNPJ, transição de contador e redução de impostos.',
    tag: 'B2B',
    liveUrl: 'modelos/contabilidade-consultiva/index.html',
    highlights: [
      'Abertura de empresa com taxa zero de honorários',
      'Simulador de economia tributária (Simples Nacional vs Lucro Presumido)',
      'Terceirização do setor financeiro (BPO)',
      'Atendimento humanizado sem robôs impessoais'
    ],
    demoContent: {
      headline: 'Contabilidade consultiva para sua empresa lucrar mais e pagar menos impostos',
      sub: 'Cuidamos de toda a burocracia contábil e fiscal para você focar em fazer seu negócio crescer.',
      ctaText: 'Falar com um Contador no WhatsApp',
      services: [
        { title: 'Abertura Rápida de CNPJ Gratuita', desc: 'Estruturação do seu negócio em poucos dias sem complicação.' },
        { title: 'Planejamento Tributário Legal', desc: 'Enquadramento correto para pagar o mínimo possível de tributos.' },
        { title: 'BPO Financeiro Terceirizado', desc: 'Emissão de notas fiscais, contas a pagar e fluxo de caixa pontual.' }
      ]
    }
  },
  {
    id: 'energia-solar',
    category: 'servicos',
    title: 'Energia Solar Fotovoltaica & Instalações',
    desc: 'Layout focado em conversão de orçamentos para residências, comércios e indústrias que desejam reduzir até 95% na conta de luz.',
    tag: 'Alto Ticket',
    liveUrl: 'modelos/energia-solar/index.html',
    highlights: [
      'Simulador rápido de economia mensal na conta de energia',
      'Projetos homologados com a concessionária local',
      'Equipamentos com 25 anos de garantia de eficiência',
      'Opções de financiamento onde a economia paga a parcela'
    ],
    demoContent: {
      headline: 'Reduza em até 95% a sua conta de luz com energia solar fotovoltaica',
      sub: 'Gere sua própria energia limpa e valorize o seu imóvel imediatamente.',
      ctaText: 'Simular Economia no WhatsApp',
      services: [
        { title: 'Sistemas Residenciais On-Grid', desc: 'Placas solares com tecnologia moderna para zerar seu consumo residencial.' },
        { title: 'Instalações Comerciais e Industriais', desc: 'Redução drástica nos custos fixos operacionais da sua empresa.' },
        { title: 'Manutenção e Limpeza de Painéis', desc: 'Garantia de geração máxima e conservação dos módulos solares.' }
      ]
    }
  },
  {
    id: 'limpeza-higienizacao',
    category: 'servicos',
    title: 'Higienização de Estofados & Limpeza Pós-Obra',
    desc: 'Página ágil com foco em fotos de sofás limpos antes x depois, remoção de ácaros, lavagem de colchões e pós-obra pesada.',
    tag: 'Serviço Rápido',
    highlights: [
      'Vídeos curtos de extração de sujeira profunda',
      'Produtos biodegradáveis e bactericidas certificados',
      'Secagem rápida em até 2 horas',
      'Orçamento instantâneo com envio de foto do estofado'
    ],
    demoContent: {
      headline: 'Seu sofá e estofados renovados, cheirosos e livres de bactérias',
      sub: 'Higienização profissional a seco com maquinário extrator de alta potência no seu domicílio.',
      ctaText: 'Enviar Foto e Pedir Orçamento no WhatsApp',
      services: [
        { title: 'Higienização & Lavagem de Sofás', desc: 'Remoção de manchas, odores de pets e ácaros com proteção das fibras.' },
        { title: 'Impermeabilização de Tecidos', desc: 'Blindagem contra derramamento acidental de líquidos e sujeiras.' },
        { title: 'Limpeza Pós-Obra Detalhada', desc: 'Remoção de tintas, rejuntes e poeira fina para entrega da sua obra.' }
      ]
    }
  },

  // ========================================================================
  // 5. COMÉRCIO LOCAL, AUTOMOTIVO & PETS
  // ========================================================================
  {
    id: 'oficina-mecanica',
    category: 'comercio',
    title: 'AutoCenter Mecânica & Diagnóstico Computadorizado',
    desc: 'Foco em transmitir honestidade, equipamentos modernos de diagnóstico por scanner, socorro rápido e agilidade na revisão.',
    tag: 'Mais Vendido',
    liveUrl: 'modelos/oficina-autocenter/index.html',
    highlights: [
      'Lista dos principais serviços mecânicos com garantia',
      'Alerta para revisão preventiva antes de viagens',
      'Botão de socorro rápido e guincho no WhatsApp',
      'Orçamento transparente aprovado antes do conserto'
    ],
    demoContent: {
      headline: 'Manutenção mecânica de confiança para o seu veículo',
      sub: 'Diagnóstico computadorizado, peças originais e garantia em todos os serviços executados.',
      ctaText: 'Agendar Revisão no WhatsApp',
      services: [
        { title: 'Revisão Preventiva Geral', desc: 'Freios, suspensão, correias e troca de óleo rápida.' },
        { title: 'Diagnóstico Eletrônico por Scanner', desc: 'Identificação precisa de falhas na injeção eletrônica.' },
        { title: 'Alinhamento 3D e Balanceamento', desc: 'Direção segura e economia de combustível para seus pneus.' }
      ]
    }
  },
  {
    id: 'clinica-veterinaria',
    category: 'comercio',
    title: 'Hospital Veterinário 24h & Pet Care',
    desc: 'Design afetuoso e acolhedor para hospitais veterinários 24h, consultas de rotina, vacinação, cirurgias, exames e banho e tosa.',
    tag: '24 Horas',
    liveUrl: 'modelos/pet-veterinaria/index.html',
    highlights: [
      'Plantão veterinário de emergência 24 horas',
      'Laboratório próprio de exames e raio-x digital',
      'Banho e tosa com toalhas esterilizadas individuais',
      'Táxi pet para busca e entrega com segurança'
    ],
    demoContent: {
      headline: 'Todo o carinho e medicina de ponta que seu pet merece',
      sub: 'Equipe veterinária qualificada para cuidar da saúde e do bem-estar do seu melhor amigo.',
      ctaText: 'Agendar Consulta Veterinária no WhatsApp',
      services: [
        { title: 'Consultas & Vacinas Importadas', desc: 'Protocolo vacinal completo com acompanhamento rigoroso.' },
        { title: 'Centro Cirúrgico & Anestesia Inalatória', desc: 'Máxima segurança e monitorização contínua para cirurgias.' },
        { title: 'Estética Animal & Banhos Terapêuticos', desc: 'Produtos hipoalergênicos em ambiente climatizado sem estresse.' }
      ]
    }
  },
  {
    id: 'estetica-automotiva',
    category: 'comercio',
    title: 'Estética Automotiva & Car Detailing',
    desc: 'Visual moderno escuro focado em vitrificação cerâmica de pintura, polimento técnico, lavagem detalhada e higienização interna.',
    tag: 'Visual Premium',
    liveUrl: 'modelos/estetica-automotiva/index.html',
    highlights: [
      'Fotos impressionantes de reflexo espelhado na lataria',
      'Certificados de vitrificação de até 3 anos',
      'Proteção contra chuva ácida e raios UV',
      'Agendamento rápido de vaga'
    ],
    demoContent: {
      headline: 'Devolva o brilho de zero km com polimento técnico e vitrificação',
      sub: 'Cuidado artesanal com cada detalhe do seu carro utilizando produtos importados.',
      ctaText: 'Solicitar Orçamento de Estética no WhatsApp',
      services: [
        { title: 'Polimento Técnico & Espelhamento', desc: 'Eliminação de riscos superficiais e marcas de lavagem.' },
        { title: 'Vitrificação de Pintura Cerâmica', desc: 'Camada de proteção hidrorrepelente que facilita a limpeza por anos.' },
        { title: 'Higienização Interna & Oxi-Sanitização', desc: 'Limpeza profunda de bancos, carpetes e eliminação de odores.' }
      ]
    }
  },
  {
    id: 'loja-roupas-boutique',
    category: 'comercio',
    title: 'Boutique de Moda Feminina & Lookbook',
    desc: 'Catálogo visual dinâmico com fotos de looks da semana, tamanhos disponíveis e link direto para fechar a compra no WhatsApp.',
    tag: 'Moda & Tendência',
    highlights: [
      'Lookbook semanal com fotos reais em modelos',
      'Envio para todo o Brasil ou retirada na loja física',
      'Tabela de medidas simplificada',
      'Atendimento consultivo com vendedora no WhatsApp'
    ],
    demoContent: {
      headline: 'Tendências e peças exclusivas para realçar seu estilo',
      sub: 'Coleções pensadas para mulheres elegantes que valorizam qualidade e caimento impecável.',
      ctaText: 'Ver Coleção e Comprar no WhatsApp',
      services: [
        { title: 'Looks Casuais & Alfaiataria', desc: 'Peças versáteis para o trabalho e momentos de lazer.' },
        { title: 'Vestidos de Festa & Ocasiões Especiais', desc: 'Modelagens exclusivas para casamentos, formaturas e jantares.' },
        { title: 'Acessórios & Bolsas Selecionadas', desc: 'O complemento ideal para deixar qualquer visual marcante.' }
      ]
    }
  },
  {
    id: 'otica-visao',
    category: 'comercio',
    title: 'Ótica Especializada & Armações Premium',
    desc: 'Foco na escolha de armações de marcas famosas, lentes multifocais digitais, antirreflexo e teste visual no local.',
    tag: 'Alta Conversão',
    liveUrl: 'modelos/otica-prime/index.html',
    highlights: [
      'Catálogo de armações femininas, masculinas e infantis',
      'Lentes com filtro de luz azul para telas',
      'Entrega expressa de óculos prontos',
      'Condições especiais para aposentados e estudantes'
    ],
    demoContent: {
      headline: 'Enxergue o mundo com clareza, conforto e estilo',
      sub: 'As melhores marcas de armações e tecnologia em lentes com garantia de adaptação.',
      ctaText: 'Consultar Armações e Valores no WhatsApp',
      services: [
        { title: 'Lentes Multifocais Digitais Personalizadas', desc: 'Visão nítida para perto, meia distância e longe sem distorções.' },
        { title: 'Armações de Marcas Reconhecidas', desc: 'Ray-Ban, Oakley, Vogue e opções exclusivas com design leve.' },
        { title: 'Lentes BlueProtect para Computador e Celular', desc: 'Alívio da fadiga ocular e dores de cabeça causadas por telas.' }
      ]
    }
  },
  {
    id: 'escola-cursos',
    category: 'comercio',
    title: 'Escola de Cursos Profissionalizantes & Idiomas',
    desc: 'Página persuasiva para captação de matrículas em cursos de inglês, informática, beleza ou formação técnica.',
    tag: 'Matrículas Abertas',
    highlights: [
      'Apresentação da grade curricular e certificado reconhecido',
      'Metodologia prática com foco no mercado de trabalho',
      'Isenção de taxa de matrícula para contatos rápidos',
      'Aulas presenciais e híbridas'
    ],
    demoContent: {
      headline: 'Aprenda uma nova profissão e conquiste melhores oportunidades',
      sub: 'Cursos práticos com professores atuantes no mercado e certificado reconhecido.',
      ctaText: 'Garantir Bolsa Promocional no WhatsApp',
      services: [
        { title: 'Cursos de Idiomas com Foco em Conversação', desc: 'Inglês e espanhol do básico ao fluente sem enrolação.' },
        { title: 'Formação em Tecnologia & Informática', desc: 'Excel avançado, design gráfico e programação prática.' },
        { title: 'Cursos Rápidos com Empregabilidade', desc: 'Capacitação ágil para ingressar no mercado de trabalho com segurança.' }
      ]
    }
  },
  {
    id: 'distribuidora-bebidas',
    category: 'comercio',
    title: 'Distribuidora de Bebidas, Chopp & Gelo Express',
    desc: 'Catálogo de bebidas geladas, barris de chopp para eventos, carvão, gelo e combos para festas com entrega rápida.',
    tag: 'Entrega Rápida',
    highlights: [
      'Cervejas, destilados e refrigerantes sempre na temperatura certa',
      'Locação de chopeiras elétricas completas para fins de semana',
      'Tabela de preços por engradado no atacado e varejo',
      'Entrega em até 30 minutos na sua casa'
    ],
    demoContent: {
      headline: 'Sua bebida estalando de gelada entregue na porta da sua festa',
      sub: 'Cervejas especiais, chopp artesanal, destilados e tudo para o seu churrasco em minutos.',
      ctaText: 'Pedir Bebidas Geladas no WhatsApp',
      services: [
        { title: 'Barris de Chopp de 30L e 50L com Chopeira', desc: 'Instalação completa e chopp artesanal fresquinho para sua festa.' },
        { title: 'Combos de Destilados & Energéticos', desc: 'Vodka, gin, whisky e gelo de sabor para o seu final de semana.' },
        { title: 'Cervejas no Engradado com Preço de Atacado', desc: 'Economia real para abastecer o freezer ou evento.' }
      ]
    }
  }
];

// INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', () => {
  const params = getUrlParams();
  applyContextualPersonalization(params);
  renderCatalog(params);
  attachEventListeners(params);
});

// 1. LER PARÂMETROS DA URL
function getUrlParams() {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    nicho: urlParams.get('nicho') || '',
    cidade: urlParams.get('cidade') || '',
    empresa: urlParams.get('empresa') || '',
    porte: (urlParams.get('porte') || 'PEQUENO').toUpperCase()
  };
}

// 2. APLICAR PERSONALIZAÇÃO CONTEXTUAL NO SITE
function applyContextualPersonalization(params) {
  const { nicho, cidade, empresa, porte } = params;

  // Atualiza Título da Página
  if (nicho) {
    document.getElementById('page-title').innerText = `Modelos de Sites para ${capitalize(nicho)} | Pixel Studio`;
  }

  // Hero Badge
  const badgeEl = document.getElementById('hero-badge');
  if (cidade) {
    badgeEl.innerText = `Modelos Verificados para Empresas em ${cidade}`;
  } else {
    badgeEl.innerText = `Modelos Verificados para Alta Conversão`;
  }

  // Hero H1
  const titleEl = document.getElementById('hero-title');
  if (nicho && cidade) {
    titleEl.innerText = `Sites e Landing Pages de Alta Conversão para ${capitalize(nicho)} em ${cidade}`;
  } else if (nicho) {
    titleEl.innerText = `Sites e Landing Pages de Alta Conversão para ${capitalize(nicho)}`;
  } else {
    titleEl.innerText = `Sites e Landing Pages de Alta Conversão para Pequenas e Médias Empresas`;
  }

  // Hero Subtitle
  const subEl = document.getElementById('hero-subtitle');
  if (empresa) {
    subEl.innerText = `Projetados sob medida para empresas como a ${empresa} conquistarem mais clientes e agendamentos diretos pelo WhatsApp.`;
  }

  // Ajusta Seção de Preços de acordo com o porte
  applyDynamicPricing(porte, params);
}

// 3. TABELA DE PREÇOS DINÂMICA POR PORTE
function applyDynamicPricing(porte, params) {
  let setupVal = '50';
  let monthlyVal = '20';
  let tierName = 'Plano Ativação Rápida (Micro e Pequeno Comércio)';

  if (porte === 'ALTO') {
    setupVal = '350';
    monthlyVal = '49';
    tierName = 'Plano Profissional Completo (Clínicas e Escritórios)';
  } else if (porte === 'MEDIO') {
    setupVal = '150';
    monthlyVal = '35';
    tierName = 'Plano Comercial (Restaurantes, Delivery e Estética)';
  } else {
    setupVal = '50';
    monthlyVal = '20';
    tierName = 'Plano Ativação Popular (Micro-empresas e Autônomos)';
  }

  document.getElementById('pricing-tier-name').innerText = tierName;
  document.getElementById('pricing-setup-val').innerText = setupVal;
  document.getElementById('pricing-monthly-text').innerText = `+ apenas R$ ${monthlyVal}/mês de hospedagem rápida e manutenção técnica`;

  // Botão de CTA de Preço
  const ctaBtn = document.getElementById('btn-pricing-cta');
  const msg = `Olá! Estava navegando na vitrine e quero ativar a minha página no ${tierName} por R$ ${setupVal} + R$ ${monthlyVal}/mês para ${params.empresa || 'minha empresa'} em ${params.cidade || 'minha cidade'}.`;
  ctaBtn.href = buildWhatsAppUrl(msg);

  // Botão no Header
  const headerWa = document.getElementById('btn-header-wa');
  headerWa.href = buildWhatsAppUrl(`Olá! Gostaria de tirar dúvidas sobre os modelos de sites para ${params.nicho || 'meu nicho'}.`);
}

// 4. RENDERIZAÇÃO DO CATÁLOGO DE MODELOS COM FILTRO E BUSCA
let currentActiveCategory = null;
let currentSearchTerm = '';

function renderCatalog(params, activeCategory = null, searchTerm = '') {
  const grid = document.getElementById('models-grid');
  const counter = document.getElementById('models-counter');

  // Identifica categoria padrão se um nicho veio na URL
  let targetCategory = activeCategory;
  if (targetCategory === null && params.nicho) {
    const n = params.nicho.toLowerCase();
    if (n.includes('odonto') || n.includes('dentista') || n.includes('saude') || n.includes('clinica') || n.includes('fisio') || n.includes('psico')) {
      targetCategory = 'odontologia';
    } else if (n.includes('restaurante') || n.includes('hamburg') || n.includes('pizza') || n.includes('delivery') || n.includes('sushi') || n.includes('churrasco') || n.includes('doce') || n.includes('fit') || n.includes('cafe') || n.includes('acai')) {
      targetCategory = 'gastronomia';
    } else if (n.includes('barbearia') || n.includes('salao') || n.includes('estetica') || n.includes('cabelo') || n.includes('lash') || n.includes('unha') || n.includes('spa')) {
      targetCategory = 'beleza';
    } else if (n.includes('advocacia') || n.includes('advogado') || n.includes('imob') || n.includes('arquit') || n.includes('marcenaria') || n.includes('contab') || n.includes('solar') || n.includes('limpeza')) {
      targetCategory = 'servicos';
    } else if (n.includes('mecanica') || n.includes('auto') || n.includes('pet') || n.includes('veterin') || n.includes('otica') || n.includes('curso') || n.includes('loja') || n.includes('bebida')) {
      targetCategory = 'comercio';
    }
  }

  currentActiveCategory = targetCategory;
  currentSearchTerm = searchTerm.toLowerCase().trim();

  // Atualiza aba ativa visualmente
  document.querySelectorAll('.cat-btn').forEach(btn => {
    const btnCat = btn.getAttribute('data-niche');
    if (targetCategory && btnCat === targetCategory) {
      btn.classList.add('active');
    } else if ((!targetCategory || targetCategory === 'todos') && btnCat === 'todos') {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Filtra modelos por categoria
  let filtered = MODELS_CATALOG;
  if (targetCategory && targetCategory !== 'todos') {
    filtered = filtered.filter(m => m.category === targetCategory);
  }

  // Filtra modelos por termo de busca
  if (currentSearchTerm) {
    filtered = filtered.filter(m => {
      const matchTitle = m.title.toLowerCase().includes(currentSearchTerm);
      const matchDesc = m.desc.toLowerCase().includes(currentSearchTerm);
      const matchTag = m.tag.toLowerCase().includes(currentSearchTerm);
      const matchServices = m.demoContent && m.demoContent.services.some(s => 
        s.title.toLowerCase().includes(currentSearchTerm) || s.desc.toLowerCase().includes(currentSearchTerm)
      );
      return matchTitle || matchDesc || matchTag || matchServices;
    });
  }

  counter.innerText = `${filtered.length} Modelos Disponíveis`;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: rgba(255,255,255,0.02); border-radius: 16px; border: 1px dashed rgba(255,255,255,0.1);">
        <p style="font-size: 1.1rem; color: #94a3b8; margin-bottom: 12px;">Nenhum modelo encontrado para o termo pesquisado.</p>
        <p style="font-size: 0.85rem; color: #64748b; margin-bottom: 20px;">Tente pesquisar por outros termos como "Dentista", "Hambúrguer", "Advogado", "Pet", "Estética" ou navegue pelas abas acima.</p>
        <button class="btn btn-secondary" onclick="clearSearchFilter()">Ver Todos os Modelos</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(m => {
    const badgeClass = m.tag === 'Mais Pedido' ? 'model-badge-popular' : '';
    const chooseMsg = `Olá! Gostei muito do modelo "${m.title}" na vitrine e quero colocar uma versão dele no ar para ${params.empresa || 'minha empresa'} em ${params.cidade || 'minha cidade'}.`;
    const waUrl = buildWhatsAppUrl(chooseMsg);

    const liveIndicator = m.liveUrl 
      ? `<span class="model-live-indicator"><span class="model-live-dot"></span> Modelo 100% Interativo</span>`
      : '';

    const categorySvgMap = {
      odontologia: '<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M19 10.5V6a2 2 0 0 0-2-2h-3V2h-4v2H7a2 2 0 0 0-2 2v4.5C5 15.5 8 19 12 22c4-3 7-6.5 7-11.5z"/></svg>',
      gastronomia: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2v20M2 2v20M6 2v7a3 3 0 0 0 6 0V2"/></svg>',
      beleza: '<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
      servicos: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
      comercio: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>'
    };
    const categoryIcon = categorySvgMap[m.category] || '<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>';

    const cleanTitle = m.title.split('(')[0].trim();
    const miniHeadline = m.demoContent ? m.demoContent.headline : m.title;
    const miniSub = m.demoContent ? m.demoContent.sub : m.desc;
    const miniCta = m.demoContent ? m.demoContent.ctaText : 'Pedir no WhatsApp';
    const miniChips = m.demoContent && m.demoContent.services
      ? m.demoContent.services.slice(0, 2).map(s => `<span class="mini-chip">${s.title.split('&')[0].trim()}</span>`).join('')
      : '';

    return `
      <div class="model-card">
        <div class="model-preview-box" onclick="openDemoModal('${m.id}')" style="cursor: pointer;">
          <span class="model-badge-top ${badgeClass}">${m.tag}</span>

          <div class="mini-browser-window mini-theme-${m.category}">
            <div class="mini-browser-bar">
              <div class="mini-browser-dots">
                <span class="mini-dot mini-dot-red"></span>
                <span class="mini-dot mini-dot-yellow"></span>
                <span class="mini-dot mini-dot-green"></span>
              </div>
              <div class="mini-browser-url">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-right:4px;vertical-align:-1px;"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>https://${m.id}.com.br
              </div>
            </div>

            <div class="mini-browser-content">
              <div class="mini-page-header">
                <span class="mini-logo-icon">${categoryIcon}</span>
                <span class="mini-brand-name">${cleanTitle}</span>
              </div>
              <div class="mini-hero-headline">${miniHeadline}</div>
              <div class="mini-hero-sub">${miniSub}</div>
              <div style="display: flex; align-items: center; justify-content: space-between; margin-top: auto;">
                <div class="mini-wa-badge">${miniCta.slice(0, 24)}</div>
                <div class="mini-chips-row">${miniChips}</div>
              </div>
            </div>

            <div class="mini-hover-hint">
              <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-right:5px;vertical-align:-2px;"><rect x="5" y="2" width="14" height="20" rx="3"></rect><line x1="12" y1="18" x2="12.01" y2="18" stroke-width="3"></line></svg>Ver Demonstração Interativa</span>
            </div>
          </div>
        </div>

        <div class="model-body">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
            <h3 class="model-title">${m.title}</h3>
          </div>
          ${liveIndicator}
          <p class="model-desc" style="margin-top: 10px;">${m.desc}</p>

          <ul class="model-highlights">
            ${m.highlights.map(h => `<li>${h}</li>`).join('')}
          </ul>

          <div class="model-actions-row">
            <button class="btn btn-secondary btn-sm" onclick="openDemoModal('${m.id}')" style="flex:1;">
              Ver Demonstração
            </button>
            <a href="${waUrl}" target="_blank" class="btn btn-primary btn-sm" style="flex:1;">
              Quero Este Modelo
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function clearSearchFilter() {
  const searchInput = document.getElementById('catalog-search-input');
  const clearBtn = document.getElementById('btn-clear-search');
  if (searchInput) searchInput.value = '';
  if (clearBtn) clearBtn.style.display = 'none';
  const params = getUrlParams();
  renderCatalog(params, 'todos', '');
}

// 5. MODAL DE SIMULADOR DE CELULAR AO VIVO COM SUPORTE A IFRAME & TELA CHEIA
function openDemoModal(modelId) {
  const model = MODELS_CATALOG.find(m => m.id === modelId);
  if (!model) return;

  const params = getUrlParams();
  const screen = document.getElementById('phone-screen-content');
  const activateBtn = document.getElementById('btn-phone-activate');
  const fullscreenBtn = document.getElementById('btn-phone-fullscreen');

  const companyName = params.empresa || 'Sua Empresa Aqui';
  const city = params.cidade ? `${params.cidade}` : '';
  const citySuffix = city ? `em ${city}` : '';

  // Configura botão de ativação no rodapé do modal
  const activateMsg = `Olá! Acabei de testar a demonstração do modelo "${model.title}" no simulador e decidi ativar para ${companyName} ${citySuffix}. Como procedemos?`;
  activateBtn.href = buildWhatsAppUrl(activateMsg);

  // SE O MODELO TEM UM TEMPLATE HTML REAL EM modelos/
  if (model.liveUrl) {
    const liveTargetUrl = `${model.liveUrl}?empresa=${encodeURIComponent(companyName)}&cidade=${encodeURIComponent(city || 'Sua Cidade')}&whatsapp=${encodeURIComponent(PERSONAL_WHATSAPP_PHONE)}`;
    
    // Mostra botão de tela cheia
    if (fullscreenBtn) {
      fullscreenBtn.style.display = 'inline-flex';
      fullscreenBtn.href = liveTargetUrl;
    }

    // Renderiza iframe interativo no celular
    screen.innerHTML = `
      <iframe src="${liveTargetUrl}" class="phone-iframe" title="${model.title}"></iframe>
    `;
  } else {
    // RENDERIZA A EXPERIÊNCIA SIMULADA RICA COM DADOS DO CLIENTE
    if (fullscreenBtn) {
      fullscreenBtn.style.display = 'none';
    }

    const d = model.demoContent;
    screen.innerHTML = `
      <div class="sim-page-hero">
        <span class="sim-page-badge">Atendimento Rápido ${citySuffix}</span>
        <h3 class="sim-page-title">${d.headline}</h3>
        <p class="sim-page-sub">${d.sub}</p>
        <a href="#" class="sim-btn-wa-call" onclick="alert('Na sua página definitiva, este botão abre o WhatsApp direto da sua empresa!'); return false;">
          ${d.ctaText}
        </a>
      </div>

      <div class="sim-page-section">
        <h4 class="sim-section-heading">Nossos Principais Serviços:</h4>
        ${d.services.map(s => `
          <div class="sim-service-item">
            <h5>${s.title}</h5>
            <p>${s.desc}</p>
          </div>
        `).join('')}
      </div>

      <div class="sim-page-section" style="text-align: center;">
        <h4 class="sim-section-heading">Por que escolher a ${companyName}?</h4>
        <p style="font-size: 0.78rem; color:#94a3b8; line-height: 1.5; margin-bottom: 16px;">
          Estrutura de ponta, pontualidade nos atendimentos e compromisso em oferecer a melhor experiência para você ${citySuffix}.
        </p>
        <a href="#" class="sim-btn-wa-call" style="background:#4f46e5;" onclick="alert('Na página real, este botão leva o cliente direto pro seu WhatsApp!'); return false;">
          Tirar Dúvidas com Nossa Equipe
        </a>
      </div>

      <div style="padding: 20px; text-align: center; font-size: 0.7rem; color:#64748b;">
        ${companyName} &copy; 2026. Todos os direitos reservados.
      </div>
    `;
  }

  document.getElementById('modal-demo').style.display = 'flex';
}

function closeDemoModal() {
  const modal = document.getElementById('modal-demo');
  const screen = document.getElementById('phone-screen-content');
  if (modal) modal.style.display = 'none';
  if (screen) screen.innerHTML = ''; // Limpa iframe para economizar memória
}

// 6. EVENTOS
function attachEventListeners(params) {
  // Abas de categorias
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-niche');
      const searchInput = document.getElementById('catalog-search-input');
      const currentSearch = searchInput ? searchInput.value : '';
      renderCatalog(params, cat, currentSearch);
    });
  });

  // Barra de Busca
  const searchInput = document.getElementById('catalog-search-input');
  const clearBtn = document.getElementById('btn-clear-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const val = e.target.value;
      if (clearBtn) {
        clearBtn.style.display = val ? 'inline-block' : 'none';
      }
      renderCatalog(params, currentActiveCategory, val);
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      clearSearchFilter();
    });
  }

  // Fechar modal ao clicar fora do phone frame
  const modal = document.getElementById('modal-demo');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeDemoModal();
      }
    });
  }

  // Botões de SaaS Sob Medida
  document.querySelectorAll('.saas-cta').forEach(btn => {
    const saasName = btn.getAttribute('data-saas');
    const msg = `Olá! Vi na vitrine os Sistemas Sob Medida e gostaria de solicitar um projeto personalizado de "${saasName}" para ${params.empresa || 'minha empresa'} em ${params.cidade || 'minha cidade'}.`;
    btn.href = buildWhatsAppUrl(msg);
    btn.target = '_blank';
  });
}

// 7. HELPERS
function buildWhatsAppUrl(text) {
  return `https://wa.me/${PERSONAL_WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
