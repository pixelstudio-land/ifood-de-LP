// ==========================================================================
// PIXEL STUDIO - MOTOR DINÂMICO DE PERSONALIZAÇÃO CONTEXTUAL & CATÁLOGO
// ==========================================================================

const PERSONAL_WHATSAPP_PHONE = '5511913393797'; // WhatsApp Pessoal para fechamento

// CATÁLOGO COMPLETO DE MODELOS ESTRUTURADOS POR NICHO COM IMAGENS HD
const MODELS_CATALOG = [
  {
    "id": "odonto-estetica",
    "category": "odontologia",
    "title": "Odonto Prime — Estética & Lentes",
    "desc": "Estrutura de luxo focada em procedimentos de alto valor: lentes de contato em cerâmica pura, facetas em resina e clareamento a laser.",
    "tag": "Mais Procurado",
    "previewImg": "assets/mockups/odonto-prime.jpg",
    "liveUrl": "modelos/odonto-prime/index.html?foco=estetica",
    "highlights": [
      "Agendamento no WhatsApp",
      "Antes e Depois Interativo",
      "Carregamento em 0.8s",
      "Depoimentos de Pacientes"
    ]
  },
  {
    "id": "odonto-implantes",
    "category": "odontologia",
    "title": "Implantodontia Digital & Cirurgia Guiada",
    "desc": "Página cirúrgica focada em segurança, anestesia computadorizada sem dor, carga imediata (dentes no mesmo dia) e tomografia 3D.",
    "tag": "Alto Ticket",
    "previewImg": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=700&q=80",
    "liveUrl": "modelos/odonto-prime/index.html?foco=implantes",
    "highlights": [
      "Anestesia Sem Dor",
      "Tomografia 3D Computadorizada",
      "Próteses com Carga Imediata",
      "Recuperação Acelerada"
    ]
  },
  {
    "id": "odonto-alinhadores",
    "category": "odontologia",
    "title": "Ortodontia Digital & Alinhadores Invisíveis",
    "desc": "Apresentação moderna focada em correção ortodôntica com discrição total, escaneamento intraoral 3D e comparação antes e depois.",
    "tag": "Tendência 2026",
    "previewImg": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=700&q=80",
    "liveUrl": "modelos/odonto-prime/index.html?foco=alinhadores",
    "highlights": [
      "Simulador 3D do Sorriso",
      "Sem Peças Metálicas",
      "Previsibilidade de Resultados",
      "Parcelamento em 12x"
    ]
  },
  {
    "id": "odonto-pediatria",
    "category": "odontologia",
    "title": "Odontopediatria Acolhedora & Espaço Kids",
    "desc": "Visual acolhedor e reconfortante para tranquilizar mães e pais. Consultório lúdico, check-up preventivo infantil e atendimento sem medo.",
    "tag": "Público Família",
    "previewImg": "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=700&q=80",
    "liveUrl": "modelos/odonto-prime/index.html?foco=pediatria",
    "highlights": [
      "Ambiente Lúdico Sem Traumas",
      "Orientações Preventivas",
      "Consultório Infantil",
      "Dentistas Especialistas"
    ]
  },
  {
    "id": "odonto-clinica-geral",
    "category": "odontologia",
    "title": "Clínica Odontológica Multidisciplinar",
    "desc": "Ideal para clínicas completas com múltiplos consultórios: tratamento de canal moderno, restaurações imperceptíveis, profilaxia e próteses.",
    "tag": "Clínica Completa",
    "previewImg": "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=700&q=80",
    "liveUrl": "modelos/odonto-prime/index.html?foco=geral",
    "highlights": [
      "Equipe Multidisciplinar",
      "Atendimento Emergencial",
      "Diagnóstico Digital",
      "Atendimento Humanizado"
    ]
  },
  {
    "id": "odonto-hof",
    "category": "odontologia",
    "title": "Harmonização Orofacial (HOF)",
    "desc": "Página com paleta editorial de alto padrão para dentistas que realizam toxina botulínica preventiva, bioestimuladores e preenchimento labial.",
    "tag": "Alto Padrão",
    "previewImg": "https://images.unsplash.com/photo-1512290903671-2432eed4a84b?auto=format&fit=crop&w=700&q=80",
    "liveUrl": "modelos/odonto-prime/index.html?foco=hof",
    "highlights": [
      "Harmonia Orofacial Natural",
      "Protocolos Exclusivos",
      "Produtos Anvisa de Ponta",
      "Avaliação Facial 3D"
    ]
  },
  {
    "id": "clinica-medica-integrada",
    "category": "saude",
    "title": "Policlínica Médica & Exames",
    "desc": "Apresentação de especialidades médicas (cardiologia, ginecologia, dermatologia, ultrassom e exames laboratoriais).",
    "tag": "Alta Demanda",
    "previewImg": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=700&q=80",
    "liveUrl": null,
    "highlights": [
      "Múltiplas Especialidades",
      "Agendamento Unificado",
      "Resultados de Exames",
      "Estrutura Completa"
    ]
  },
  {
    "id": "fisioterapia-pilates",
    "category": "saude",
    "title": "Studio de Pilates & Fisioterapia",
    "desc": "Alívio de dores nas costas, reabilitação postural, fisioterapia esportiva e pilates clínico com avaliação individual.",
    "tag": "Saúde & Bem-Estar",
    "previewImg": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80",
    "liveUrl": null,
    "highlights": [
      "Avaliação Postural Gratuita",
      "Turmas de até 3 Alunos",
      "Reabilitação de Coluna",
      "Fisioterapeutas Dedicados"
    ]
  },
  {
    "id": "psicologia-terapia",
    "category": "saude",
    "title": "Clínica de Psicologia & Psicoterapia",
    "desc": "Ambiente seguro e acolhedor para terapia individual, de casal e online, com foco em ansiedade, burnout e autoconhecimento.",
    "tag": "Acolhimento",
    "previewImg": "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=700&q=80",
    "liveUrl": "modelos/psicologia-clinica/index.html",
    "highlights": [
      "Atendimento Online e Presencial",
      "Sigilo Ético Absoluto",
      "Terapia Cognitivo-Comportamental",
      "Primeira Sessão Acessível"
    ]
  },
  {
    "id": "burger-delivery",
    "category": "gastronomia",
    "title": "Burger Artesanal & Smash Burger",
    "desc": "Página moderna focada em fotos apetitosas e recepção de pedidos no WhatsApp com cardápio interativo e sem taxas de app.",
    "tag": "Mais Pedido",
    "previewImg": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80",
    "liveUrl": "modelos/burger-artesanal/index.html",
    "highlights": [
      "Cardápio Interativo com Fotos",
      "Pedido Direto no WhatsApp",
      "Cálculo de Entrega por Bairro",
      "Zero Comissão de Apps"
    ],
    "demoContent": {
      "headline": "O melhor smash burger artesanal da cidade na sua casa",
      "sub": "Pão brioche selado, blend de carnes frescas e queijo derretido de verdade.",
      "ctaText": "Fazer Pedido no WhatsApp",
      "services": [
        {
          "title": "Smash Duplo Cheddar Bacon",
          "desc": "Dois discos de 90g ultra esmagados com crosta perfeita e muito bacon."
        },
        {
          "title": "Clássico Artesanal da Casa",
          "desc": "Blend 160g suculento, cebola caramelizada e maionese secreta."
        },
        {
          "title": "Batata Rústica com Páprica",
          "desc": "Crocante por fora e macia por dentro com molho especial."
        }
      ]
    }
  },
  {
    "id": "pizzaria-tradicional",
    "category": "gastronomia",
    "title": "Pizzaria Forno a Lenha & Delivery",
    "desc": "Cardápio visual com escolha de 2 sabores, bordas recheadas, refrigerantes e fechamento direto no WhatsApp.",
    "tag": "Alta Conversão",
    "previewImg": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80",
    "liveUrl": "modelos/pizzaria-forno/index.html",
    "highlights": [
      "Montagem Meio a Meio",
      "Seletor de Borda Recheada",
      "Promoções Diárias",
      "Tempo Médio de Entrega"
    ],
    "demoContent": {
      "headline": "Pizzas artesanais de fermentação lenta assadas no forno a lenha",
      "sub": "Massa crocante, molho de tomate pelado italiano e queijo de verdade.",
      "ctaText": "Ver Cardápio e Pedir no WhatsApp",
      "services": [
        {
          "title": "Pizzas Tradicionais e Especiais",
          "desc": "Mais de 30 sabores clássicos com ingredientes selecionados."
        },
        {
          "title": "Bordas Vulcão e Recheadas",
          "desc": "Catupiry original, cheddar cremoso e chocolate belga."
        },
        {
          "title": "Combos Família com Refrigerante",
          "desc": "Pizza grande + broto doce + guaraná com super desconto."
        }
      ]
    }
  },
  {
    "id": "sushi-bar",
    "category": "gastronomia",
    "title": "Sushi Contemporâneo & Comida Japonesa",
    "desc": "Design refinado e sofisticado com foco em combinados de salmão fresco, hot rolls e festivais orientais.",
    "tag": "Gourmet",
    "previewImg": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=700&q=80",
    "liveUrl": "modelos/sushi-contemporaneo/index.html",
    "highlights": [
      "Embalagens Térmicas Premium",
      "Salmão Fresco do Dia",
      "Combinados para Casal e Família",
      "Opções Vegetarianas"
    ],
    "demoContent": {
      "headline": "A melhor experiência da culinária japonesa na sua mesa",
      "sub": "Peixes frescos selecionados diariamente, cortes precisos e sabor inigualável.",
      "ctaText": "Pedir Combinado Japonês no WhatsApp",
      "services": [
        {
          "title": "Combinado do Chef 40 Peças",
          "desc": "Variedade impecável de sashimis, uramakis, niguiris e jows especiais."
        },
        {
          "title": "Hot Rolls Crocantes com Cream Cheese",
          "desc": "Empanados na hora com molho tarê artesanal e cebolinha."
        },
        {
          "title": "Temakis Especiais sem Arroz",
          "desc": "Puro salmão em cubos com cream cheese e amêndoas laminadas."
        }
      ]
    }
  },
  {
    "id": "churrascaria-espetaria",
    "category": "gastronomia",
    "title": "Churrascaria, Espetaria & Carnes Nobres",
    "desc": "Fotos de picanha na brasa, cortes nobres, marmitex executivas de churrasco e acompanhamentos caprichados.",
    "tag": "Sucesso Local",
    "previewImg": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=700&q=80",
    "liveUrl": "modelos/burger-artesanal/index.html?estilo=churrasco",
    "highlights": [
      "Cortes de Carnes Selecionados",
      "Espetos Assados na Hora",
      "Marmitex Executiva de Churrasco",
      "Farofa e Vinagrete da Casa"
    ],
    "demoContent": {
      "headline": "Churrasco no ponto certo entregue quentinho na sua casa",
      "sub": "Cortes premium, espetos artesanais e acompanhamentos tradicionais.",
      "ctaText": "Pedir Churrasco no WhatsApp",
      "services": [
        {
          "title": "Espetos Artesanais Variados",
          "desc": "Mais de 15 opções de espetos assados na brasa na hora."
        },
        {
          "title": "Marmita Churrasco Picanha",
          "desc": "Arroz, feijão tropeiro, vinagrete, mandioca na manteiga e picanha suculenta."
        },
        {
          "title": "Kits Churrasco para Fim de Semana",
          "desc": "Carnes temperadas prontas para assar com carvão e acompanhamentos."
        }
      ]
    }
  },
  {
    "id": "marmitaria-fit",
    "category": "gastronomia",
    "title": "Marmitaria Saudável & Comida Fit Congelada",
    "desc": "Cardápio semanal de marmitas fitness ultracongeladas, cálculo de calorias e kits de 10, 14 ou 28 refeições práticas.",
    "tag": "Alta Recorrência",
    "previewImg": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80",
    "liveUrl": "modelos/marmitaria-fit/index.html",
    "highlights": [
      "Kits Semanais e Mensais",
      "Ingredientes 100% Naturais",
      "Congelamento Ultrarrápido",
      "Entrega Programada"
    ],
    "demoContent": {
      "headline": "Alimentação saudável, prática e deliciosa para a sua semana",
      "sub": "Marmitas fit elaboradas por nutricionistas sem conservantes artificiais.",
      "ctaText": "Ver Cardápio da Semana no WhatsApp",
      "services": [
        {
          "title": "Kits Low Carb & Emagrecimento",
          "desc": "Combinações leves ricas em fibras e proteínas selecionadas."
        },
        {
          "title": "Linha Hipertrofia & Ganho de Massa",
          "desc": "Porções generosas de frango, carne magra, batata doce e arroz integral."
        },
        {
          "title": "Opções Vegetarianas & Veganas",
          "desc": "Cores, nutrientes e sabores equilibrados com grão-de-bico e lentilha."
        }
      ]
    }
  },
  {
    "id": "confeitaria-doces",
    "category": "gastronomia",
    "title": "Doceria Gourmet, Bolos & Festas",
    "desc": "Vitrine visual para bolos decorados de aniversário, fatias gourmet, brigadeiros artesanais e encomendas de eventos.",
    "tag": "Visual Encantador",
    "previewImg": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80",
    "liveUrl": "modelos/marmitaria-fit/index.html?estilo=doces",
    "highlights": [
      "Encomenda de Bolos Personalizados",
      "Docinhos Finos para Festas",
      "Cardápio de Pronta-Entrega",
      "Embalagens para Presente"
    ],
    "demoContent": {
      "headline": "Bolos e doces artesanais que transformam qualquer momento em festa",
      "sub": "Ingredientes de alta qualidade, recheios fartos e acabamento impecável.",
      "ctaText": "Fazer Encomenda no WhatsApp",
      "services": [
        {
          "title": "Bolos Decorados sob Medida",
          "desc": "Massa fofinha, recheios nobres e decoração artística personalizada."
        },
        {
          "title": "Cento de Brigadeiros Gourmet",
          "desc": "Pistache, ninho com nutella, belga ao leite e churros artesanal."
        },
        {
          "title": "Fatias Supremas e Sobremesas",
          "desc": "Disponíveis diariamente para pronta-entrega rápida na sua casa."
        }
      ]
    }
  },
  {
    "id": "cafeteria-brunch",
    "category": "gastronomia",
    "title": "Cafeteria Especial & Brunch",
    "desc": "Cardápio de cafés especiais, métodos de extração, croissants folhados e ambiente agradável para encontros e trabalho.",
    "tag": "Experiência",
    "previewImg": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=700&q=80",
    "liveUrl": "modelos/burger-artesanal/index.html?estilo=cafe",
    "highlights": [
      "Grãos 100% Arábica Premiados",
      "Croissants e Toast Artesanais",
      "Ambiente com Wi-Fi Rápido",
      "Opções Veganas e Sem Lactose"
    ],
    "demoContent": {
      "headline": "O café perfeito para desacelerar o seu dia com aconchego",
      "sub": "Grãos especiais de pequenos produtores e confeitaria artesanal diária.",
      "ctaText": "Ver Cardápio Completo no WhatsApp",
      "services": [
        {
          "title": "Métodos de Extração Filtrados",
          "desc": "V60, Chemex, Prensa Francesa e Aeropress com notas sensoriais únicas."
        },
        {
          "title": "Croissants Folhados na Manteiga",
          "desc": "Massa leve e crocante com opções doces e salgadas recheadas na hora."
        },
        {
          "title": "Combos de Café da Manhã e Brunch",
          "desc": "Toast de avocado com ovos mexidos, suco natural e cappuccino cremoso."
        }
      ]
    }
  },
  {
    "id": "acai-sorveteria",
    "category": "gastronomia",
    "title": "Açaíterias, Sorvetes & Taças Recheadas",
    "desc": "Montador interativo de copo de açaí (tamanho, acompanhamentos e caldas) com pedido calculado direto no WhatsApp.",
    "tag": "Jovem & Refrescante",
    "previewImg": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=700&q=80",
    "liveUrl": "modelos/marmitaria-fit/index.html?estilo=acai",
    "highlights": [
      "Açaí Puro Sem Xarope",
      "Mais de 30 Acompanhamentos",
      "Copos de 300ml a 1 Litro",
      "Entrega Rápida Sem Derreter"
    ],
    "demoContent": {
      "headline": "O açaí mais cremoso e recheado do seu bairro no WhatsApp",
      "sub": "Monte do seu jeito com frutas frescas, cremes artesanais e coberturas crocantes.",
      "ctaText": "Montar Meu Copo no WhatsApp",
      "services": [
        {
          "title": "Copo Tradicional de Açaí",
          "desc": "Escolha seu tamanho e adicione leite condensado, paçoca e granola crocante."
        },
        {
          "title": "Taças Vulcão Especiais",
          "desc": "Nutella pura, morangos selecionados, leite ninho e bombons triturados."
        },
        {
          "title": "Sorvetes Artesanais por Quilo",
          "desc": "Potes de 1 litro e 2 litros com sabores clássicos e exclusivos da casa."
        }
      ]
    }
  },
  {
    "id": "barbearia-premium",
    "category": "beleza",
    "title": "Barbearia Vintage & Espaço Masculino",
    "desc": "Ambiente clássico masculino com foco em corte degradê, barba na toalha quente, cerveja artesanal e agendamento sem espera.",
    "tag": "Mais Pedido",
    "previewImg": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=700&q=80",
    "liveUrl": "modelos/barbearia-vintage/index.html",
    "highlights": [
      "Agendamento em 2 Cliques",
      "Tabela de Serviços & Valores",
      "Barba Terapia com Toalha Quente",
      "Avaliações de Clientes"
    ],
    "demoContent": {
      "headline": "O cuidado que seu visual merece com estilo, cerveja e tradição",
      "sub": "Barbeiros experientes, navalha afiada e ambiente exclusivo para você relaxar.",
      "ctaText": "Agendar Meu Horário no WhatsApp",
      "services": [
        {
          "title": "Corte Cabelo Degradê Navalhado",
          "desc": "Acabamento milimétrico, fade moderno e finalização com pomada modeladora."
        },
        {
          "title": "Barboterapia com Toalha Quente",
          "desc": "Esfoliação, óleo nutritivo, massagem facial e navalha tradicional."
        },
        {
          "title": "Combo Cabelo + Barba + Sobrancelha",
          "desc": "Visual completo alinhado com desconto especial no pacote."
        }
      ]
    }
  },
  {
    "id": "estetica-facial",
    "category": "beleza",
    "title": "Clínica de Estética & Harmonização Facial",
    "desc": "Visual refinado com foco em procedimentos como botox, preenchimento labial, bioestimuladores e limpeza de pele profunda.",
    "tag": "Alta Conversão",
    "previewImg": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=700&q=80",
    "liveUrl": "modelos/clinica-estetica/index.html",
    "highlights": [
      "Antes e Depois com Alta Resolução",
      "Exclusividade e Privacidade",
      "Produtos Originais Certificados",
      "Avaliação Individualizada"
    ],
    "demoContent": {
      "headline": "Realce sua beleza natural com segurança, elegância e sutileza",
      "sub": "Procedimentos estéticos avançados realizados por profissionais biomédicos e dermatologistas.",
      "ctaText": "Agendar Consulta Estética no WhatsApp",
      "services": [
        {
          "title": "Toxina Botulínica Preventiva e Reparadora",
          "desc": "Suavização de rugas de expressão na testa, glabela e pés de galinha."
        },
        {
          "title": "Preenchimento Labial com Ácido Hialurônico",
          "desc": "Volume, contorno definido e hidratação sem perder a naturalidade."
        },
        {
          "title": "Bioestimuladores de Colágeno",
          "desc": "Firmeza e rejuvenescimento profundo da pele com durabilidade de até 2 anos."
        }
      ]
    }
  },
  {
    "id": "studio-beleza",
    "category": "beleza",
    "title": "Studio Hair, Loiras & Mega Hair",
    "desc": "Ideal para cabeleireiros especialistas em mechas, loiro platinado, morena iluminada, cronograma capilar e mega hair.",
    "tag": "Público Feminino",
    "previewImg": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=700&q=80",
    "liveUrl": "modelos/studio-hair/index.html",
    "highlights": [
      "Galeria de Loiras e Mechas",
      "Avaliação de Saúde do Fio",
      "Tratamentos de Reconstrução",
      "Equipe de Cabeleireiros"
    ],
    "demoContent": {
      "headline": "O loiro dos seus sonhos com máxima saúde capilar e brilho",
      "sub": "Técnicas exclusivas de mechas sem quebra com produtos internacionais de ponta.",
      "ctaText": "Solicitar Teste de Mecha no WhatsApp",
      "services": [
        {
          "title": "Mechas Criativas & Morena Iluminada",
          "desc": "Degradê suave que valoriza o tom de pele sem marcas grosseiras."
        },
        {
          "title": "Alisamento Orgânico Sem Formol",
          "desc": "Cabelos lisos com brilho espelhado, balanço natural e zero agressão."
        },
        {
          "title": "Mega Hair Fita Invisível",
          "desc": "Volume e comprimento instantâneos com acabamento imperceptível ao toque."
        }
      ]
    }
  },
  {
    "id": "lash-sobrancelhas",
    "category": "beleza",
    "title": "Lash Designer & Micropigmentação",
    "desc": "Foco na extensão de cílios (volume russo, fio a fio, híbrido), design de sobrancelhas e nanoblading natural.",
    "tag": "Mais Vendido",
    "previewImg": "https://images.unsplash.com/photo-1512290900672-1f55a1532f6a?auto=format&fit=crop&w=700&q=80",
    "liveUrl": "modelos/lash-sobrancelhas/index.html",
    "highlights": [
      "Técnicas de Alta Durabilidade",
      "Fios Leves de Seda",
      "Design Personalizado para seu Rosto",
      "Cuidados Pós-Aplicação"
    ],
    "demoContent": {
      "headline": "Olhar marcante, prático e acordar pronta todos os dias",
      "sub": "Extensão de cílios com isolamento perfeito e nanoblading hiper-realista.",
      "ctaText": "Agendar Meus Cílios no WhatsApp",
      "services": [
        {
          "title": "Extensão de Cílios Volume Russo",
          "desc": "Fans montados à mão com leveza e densidade na medida certa."
        },
        {
          "title": "Nanoblading Fio a Fio Realista",
          "desc": "Desenho de fios ultrafinos que preenchem falhas com total naturalidade."
        },
        {
          "title": "Lash Lifting & Hidratação de Fios",
          "desc": "Curvatura e coloração dos próprios cílios naturais sem necessidade de cola."
        }
      ]
    }
  },
  {
    "id": "esmalteria-unhas",
    "category": "beleza",
    "title": "Esmalteria & Spa dos Pés",
    "desc": "Unhas em gel, fibra de vidro, blindagem de diamante, nail art e spa dos pés com esfoliação e hidratação profunda.",
    "tag": "Sucesso Local",
    "previewImg": "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=700&q=80",
    "liveUrl": "modelos/lash-sobrancelhas/index.html?servico=unhas",
    "highlights": [
      "Alongamento em Fibra de Vidro",
      "Materiais Esterilizados em Autoclave",
      "Coleção de Esmaltes Importados",
      "Horários Flexíveis"
    ],
    "demoContent": {
      "headline": "Unhas longas, resistentes e impecáveis por semanas a fio",
      "sub": "Alongamento em fibra de vidro e esmaltação em gel sem descascar.",
      "ctaText": "Agendar Horário de Manicure no WhatsApp",
      "services": [
        {
          "title": "Alongamento em Fibra de Vidro",
          "desc": "Resistência incomparável, curvatura natural e formato impecável."
        },
        {
          "title": "Blindagem de Diamante",
          "desc": "Camada protetora para unhas naturais crescerem sem quebras constantes."
        },
        {
          "title": "Spa dos Pés com Parafina",
          "desc": "Remoção de calosidades, esfoliação relaxante e hidratação profunda."
        }
      ]
    }
  },
  {
    "id": "depilacao-laser",
    "category": "beleza",
    "title": "Clínica de Depilação a Laser & LED",
    "desc": "Livre-se dos pelos e da foliculite com ponteira resfriada sem dor para mulheres e homens.",
    "tag": "Tecnologia",
    "previewImg": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=700&q=80",
    "liveUrl": "modelos/clinica-estetica/index.html?servico=laser",
    "highlights": [
      "Ponteira Ultrarresfriada Sem Dor",
      "Pacotes para Axilas, Pernas e Barba",
      "Atendimento Masculino e Feminino",
      "Fim da Foliculite"
    ],
    "demoContent": {
      "headline": "Pele lisa e livre de pelos definitivamente sem dor",
      "sub": "Laser com tecnologia de resfriamento duplo seguro para todos os fototipos.",
      "ctaText": "Garantir Pacote Promocional no WhatsApp",
      "services": [
        {
          "title": "Depilação a Laser Axilas e Virilha",
          "desc": "Redução progressiva de 90% dos pelos já nas primeiras sessões."
        },
        {
          "title": "Barba Masculina e Contorno de Pescoço",
          "desc": "Fim dos pelos encravados, vermelhidão e irritações de gilete."
        },
        {
          "title": "Pacote Pernas Inteiras",
          "desc": "Liberdade total em viagens e no dia a dia com pele acetinada."
        }
      ]
    }
  },
  {
    "id": "spa-massoterapia",
    "category": "beleza",
    "title": "Spa Urbano, Drenagem & Massagens",
    "desc": "Experiência de relaxamento profundo, drenagem linfática pós-operatória, massagem relaxante com pedras quentes e reflexologia.",
    "tag": "Relaxamento",
    "previewImg": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=700&q=80",
    "liveUrl": "modelos/clinica-estetica/index.html?servico=spa",
    "highlights": [
      "Ambiente com Cromoterapia e Aromas",
      "Drenagem Linfática Certificada",
      "Day Spa para Casais e Noivas",
      "Vale-Presente Disponível"
    ],
    "demoContent": {
      "headline": "Desconecte da rotina e renove suas energias corporais",
      "sub": "Massoterapeutas qualificadas em ambiente silencioso, aromatizado e acolhedor.",
      "ctaText": "Agendar Sessão de Massagem no WhatsApp",
      "services": [
        {
          "title": "Massagem Relaxante com Pedras Quentes",
          "desc": "Alívio instantâneo de dores musculares, estresse mental e insônia."
        },
        {
          "title": "Drenagem Linfática Método Renata França",
          "desc": "Eliminação imediata de retenção de líquidos e sensação de inchaço."
        },
        {
          "title": "Day Spa Individual ou Casal",
          "desc": "Ritual completo com esfoliação corporal, banho de imersão e massagem."
        }
      ]
    }
  },
  {
    "id": "advocacia-corporativa",
    "category": "servicos",
    "title": "Escritório de Advocacia Corporativa & Cível",
    "desc": "Design sóbrio e imponente de alto padrão com foco em consultoria empresarial, contratos, compliance e causas estratégicas.",
    "tag": "Mais Pedido",
    "previewImg": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=80",
    "liveUrl": "modelos/advocacia-corporativa/index.html",
    "highlights": [
      "Conformidade com Provimento OAB",
      "Atendimento Rápido e Sigiloso",
      "Especialistas por Área de Atuação",
      "Consultoria Preventiva"
    ],
    "demoContent": {
      "headline": "Soluções jurídicas estratégicas para proteger sua empresa e patrimônio",
      "sub": "Assessoria jurídica com rigor técnico, ética e foco em resultados concretos.",
      "ctaText": "Agendar Consulta com Advogado no WhatsApp",
      "services": [
        {
          "title": "Direito Empresarial & Contratos Comerciais",
          "desc": "Blindagem de sócios, elaboração e revisão segura de contratos complexos."
        },
        {
          "title": "Contencioso Cível Estratégico",
          "desc": "Defesa vigorosa de interesses em litígios e cobranças empresariais."
        },
        {
          "title": "Planejamento Sucessório e Patrimonial",
          "desc": "Proteção de bens e transmissão de patrimônio com economia tributária."
        }
      ]
    }
  },
  {
    "id": "advocacia-trabalhista",
    "category": "servicos",
    "title": "Advocacia Trabalhista & Previdenciária",
    "desc": "Página voltada para orientação sobre direitos do trabalhador, horas extras, rescisão indireta, acidentes de trabalho e INSS.",
    "tag": "Alta Conversão",
    "previewImg": "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=700&q=80",
    "liveUrl": "modelos/advocacia-corporativa/index.html?area=trabalhista",
    "highlights": [
      "Tira-Dúvidas Rápido no WhatsApp",
      "Atendimento Online para todo o Brasil",
      "Cálculo de Rescisão Trabalhista",
      "Planejamento de Aposentadoria"
    ],
    "demoContent": {
      "headline": "Defenda seus direitos trabalhistas e previdenciários com quem entende",
      "sub": "Análise detalhada do seu caso com agilidade e transparência total.",
      "ctaText": "Analisar Meu Caso no WhatsApp",
      "services": [
        {
          "title": "Ações Trabalhistas & Rescisão de Contrato",
          "desc": "Cálculo exato de horas extras, adicionais de insalubridade e verbas rescisórias."
        },
        {
          "title": "Aposentadorias e Benefícios do INSS",
          "desc": "Concessão, revisão de benefício negado e planejamento previdenciário seguro."
        },
        {
          "title": "Indenização por Acidente de Trabalho",
          "desc": "Suporte completo para estabilidade profissional e reparações financeiras."
        }
      ]
    }
  },
  {
    "id": "imobiliaria-vitrine",
    "category": "servicos",
    "title": "Imobiliária Prime & Corretores de Luxo",
    "desc": "Catálogo de imóveis residenciais e comerciais de alto padrão com galeria fotográfica, tour em vídeo e botão de visita.",
    "tag": "Alto Padrão",
    "previewImg": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=700&q=80",
    "liveUrl": "modelos/imobiliaria-prime/index.html",
    "highlights": [
      "Filtro por Faixa de Preço e Bairro",
      "Fotos em Altíssima Definição",
      "Tour Virtual e Vídeos do Imóvel",
      "Agendamento Direto de Visita"
    ],
    "demoContent": {
      "headline": "Os melhores imóveis de alto padrão na região mais nobre da cidade",
      "sub": "Casas em condomínio fechado, coberturas exclusivas e apartamentos de luxo.",
      "ctaText": "Falar com Corretor Especialista no WhatsApp",
      "services": [
        {
          "title": "Casas em Condomínio Fechado",
          "desc": "Segurança armada 24h, lazer completo e projetos arquitetônicos assinados."
        },
        {
          "title": "Apartamentos & Coberturas Duplex",
          "desc": "Varanda gourmet, vista panorâmica e acabamento de alto padrão construtivo."
        },
        {
          "title": "Avaliação Mercadológica de Imóveis",
          "desc": "Precificação precisa para venda rápida e segura com assessoria jurídica."
        }
      ]
    }
  },
  {
    "id": "arquitetura-interiores",
    "category": "servicos",
    "title": "Studio de Arquitetura & Interiores",
    "desc": "Projetos residenciais e comerciais com maquetes 3D foto-realistas, gerenciamento de obras e design de interiores refinado.",
    "tag": "Criativo & Luxo",
    "previewImg": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=700&q=80",
    "liveUrl": "modelos/arquitetura-interiores/index.html",
    "highlights": [
      "Imagens 3D Foto-Realistas",
      "Acompanhamento do Início ao Fim da Obra",
      "Otimização de Espaço e Iluminação",
      "Orçamento Detalhado Sem Surpresas"
    ],
    "demoContent": {
      "headline": "Projetos arquitetônicos inteligentes que transformam sonhos em realidade",
      "sub": "Design de interiores moderno, funcionalidade e harmonia para seu lar ou empresa.",
      "ctaText": "Solicitar Projeto Arquitetônico no WhatsApp",
      "services": [
        {
          "title": "Projeto Arquitetônico Completo 3D",
          "desc": "Plantas executivas, aprovação na prefeitura e imagens realistas do espaço."
        },
        {
          "title": "Design de Interiores Residencial",
          "desc": "Escolha de paleta de cores, mobiliário, iluminação cênica e marcenaria sob medida."
        },
        {
          "title": "Gerenciamento e Reforma sem Estresse",
          "desc": "Fiscalização de mão de obra, cumprimento de prazos e controle de custos."
        }
      ]
    }
  },
  {
    "id": "marcenaria-fina",
    "category": "servicos",
    "title": "Marcenaria Fina & Móveis Sob Medida",
    "desc": "Móveis planejados 100% MDF para cozinhas gourmet, dormitórios, closets e escritórios com ferragens importadas.",
    "tag": "Artesanal",
    "previewImg": "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=700&q=80",
    "liveUrl": "modelos/marcenaria-fina/index.html",
    "highlights": [
      "MDF 100% Tratado Contra Umidade",
      "Ferragens com Amortecedores Soft-Close",
      "Garantia de 5 Anos de Fábrica",
      "Projeto 3D Antes de Fabricar"
    ],
    "demoContent": {
      "headline": "Móveis planejados de alto padrão sob medida para cada centímetro",
      "sub": "Acabamentos nobres, precisão milimétrica e pontualidade rigorosa na entrega.",
      "ctaText": "Solicitar Orçamento de Móveis no WhatsApp",
      "services": [
        {
          "title": "Cozinhas Planejadas e Ilhas Gourmet",
          "desc": "Aproveitamento inteligente de cada canto com torres de eletros integradas."
        },
        {
          "title": "Closets e Dormitórios com LED Embutido",
          "desc": "Divisões perfeitas para roupas, sapatos e acessórios com portas de vidro."
        },
        {
          "title": "Painéis Ripada e Home Theater",
          "desc": "Elegância para sala de estar com passagem oculta de fiações e fitas de LED."
        }
      ]
    }
  },
  {
    "id": "contabilidade-consultiva",
    "category": "servicos",
    "title": "Contabilidade Consultiva & Abertura de Empresas",
    "desc": "Abertura grátis de CNPJ, transição de MEI para ME, economia de impostos legal e suporte financeiro humanizado.",
    "tag": "Alta Conversão",
    "previewImg": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=700&q=80",
    "liveUrl": "modelos/contabilidade-consultiva/index.html",
    "highlights": [
      "Abertura de Empresa Rápida e Grátis",
      "Planejamento Tributário para Pagar Menos",
      "Atendimento Direto no WhatsApp Sem Chatbot",
      "Emissor de Notas Fiscais Incluso"
    ],
    "demoContent": {
      "headline": "A contabilidade descomplicada que faz sua empresa lucrar e crescer",
      "sub": "Reduza impostos dentro da lei e livre-se da burocracia contábil com especialistas.",
      "ctaText": "Abrir CNPJ ou Migrar de Contador no WhatsApp",
      "services": [
        {
          "title": "Abertura de CNPJ em até 48 Horas",
          "desc": "Processo 100% digital, sem dor de cabeça e com assessoria completa."
        },
        {
          "title": "Redução Legal de Impostos (Simples & Lucro Presumido)",
          "desc": "Enquadramento tributário cirúrgico para você reter mais lucro na empresa."
        },
        {
          "title": "Gestão de Folha e Rotinas Fiscais",
          "desc": "Cumprimento rigoroso de obrigações com tranquilidade perante a Receita Federal."
        }
      ]
    }
  },
  {
    "id": "energia-solar",
    "category": "servicos",
    "title": "Energia Solar Fotovoltaica & Engenharia",
    "desc": "Simulador interativo de economia na conta de luz (até 95% de redução), financiamento facilitado e instalação homologada.",
    "tag": "Sustentabilidade",
    "previewImg": "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=700&q=80",
    "liveUrl": "modelos/energia-solar/index.html",
    "highlights": [
      "Redução de até 95% na Conta de Luz",
      "Financiamento que se Paga com a Economia",
      "Instalação e Homologação na Concessionária",
      "Painéis com 25 Anos de Garantia"
    ],
    "demoContent": {
      "headline": "Gere sua própria energia elétrica e economize até 95% todos os meses",
      "sub": "Projetos de energia solar residencial, comercial e rural com engenharia de ponta.",
      "ctaText": "Simular Minha Economia no WhatsApp",
      "services": [
        {
          "title": "Sistemas Solares Residenciais",
          "desc": "Instalação rápida no telhado com monitoramento da geração em tempo real pelo celular."
        },
        {
          "title": "Usinas Fotovoltaicas para Empresas e Indústrias",
          "desc": "Redução drástica de custos operacionais com rápido retorno do investimento (ROI)."
        },
        {
          "title": "Manutenção e Limpeza de Painéis",
          "desc": "Aumento da eficiência de geração com inspeção preventiva especializada."
        }
      ]
    }
  },
  {
    "id": "limpeza-higienizacao",
    "category": "servicos",
    "title": "Higienização de Estofados & Impermeabilização",
    "desc": "Lavagem a seco de sofás, colchões, tapetes e bancos automotivos, eliminando 99,9% de ácaros, fungos e odores de pets.",
    "tag": "Alta Procura",
    "previewImg": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=700&q=80",
    "liveUrl": null,
    "highlights": [
      "Atendimento a Domicílio com Hora Marcada",
      "Secagem Rápida em até 4 Horas",
      "Impermeabilização com Laudo de Não Inflamável",
      "Produtos Biodegradáveis Seguros para Crianças e Pets"
    ],
    "demoContent": {
      "headline": "Seu sofá limpo, cheiroso e livre de ácaros como novo outra vez",
      "sub": "Higienização profunda com extração profissional e produtos certificados pela Anvisa.",
      "ctaText": "Pedir Orçamento com Foto no WhatsApp",
      "services": [
        {
          "title": "Higienização & Lavagem de Sofás",
          "desc": "Remoção de manchas, odores de pets e ácaros com proteção das fibras."
        },
        {
          "title": "Impermeabilização Anti-Líquidos",
          "desc": "Barreira protetora que impede a penetração de sucos, café e refrigerantes."
        },
        {
          "title": "Higienização de Colchões e Cabeceiras",
          "desc": "Desinfecção profunda para garantir noites de sono saudáveis e livres de alergias."
        }
      ]
    }
  },
  {
    "id": "oficina-mecanica",
    "category": "comercio",
    "title": "Oficina Mecânica & AutoCenter com Scanner",
    "desc": "Diagnóstico eletrônico computadorizado, revisão preventiva, freios, suspensão, troca de óleo e SOS emergência mecânica.",
    "tag": "Mais Pedido",
    "previewImg": "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=700&q=80",
    "liveUrl": "modelos/oficina-autocenter/index.html",
    "highlights": [
      "Scanner Eletrônico de Última Geração",
      "Orçamento Aprovado por Vídeo/WhatsApp",
      "Peças com Nota Fiscal e Garantia",
      "Mecânicos Certificados"
    ],
    "demoContent": {
      "headline": "Mecânica automotiva de confiança com diagnóstico eletrônico preciso",
      "sub": "Revisão preventiva, motor, câmbio e suspensão para você rodar com segurança.",
      "ctaText": "Falar com Mecânico no WhatsApp",
      "services": [
        {
          "title": "Revisão Preventiva & Check-up de Viagem",
          "desc": "Checagem completa de mais de 40 itens essenciais para segurança na estrada."
        },
        {
          "title": "Troca de Óleo, Filtros e Fluidos",
          "desc": "Lubrificantes originais recomendados pelo fabricante para longevidade do motor."
        },
        {
          "title": "Diagnóstico de Injeção Eletrônica",
          "desc": "Localização exata de falhas no painel sem adivinhações ou troca inútil de peças."
        }
      ]
    }
  },
  {
    "id": "clinica-veterinaria",
    "category": "comercio",
    "title": "Hospital Veterinário 24h & Pet Care",
    "desc": "Consultas de rotina, vacinação importada, cirurgias, exames laboratoriais, internação monitorada e banho e tosa carinhoso.",
    "tag": "Alta Conversão",
    "previewImg": "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=700&q=80",
    "liveUrl": "modelos/pet-veterinaria/index.html",
    "highlights": [
      "Plantão Veterinário de Emergência 24h",
      "Equipe de Médicos Veterinários Especialistas",
      "Centro Cirúrgico e Exames no Local",
      "Táxi Pet com Segurança"
    ],
    "demoContent": {
      "headline": "Todo o carinho e medicina de ponta que seu pet merece",
      "sub": "Equipe veterinária qualificada para cuidar da saúde e do bem-estar do seu melhor amigo.",
      "ctaText": "Agendar Consulta Veterinária no WhatsApp",
      "services": [
        {
          "title": "Consultas Clínicas e Vacinação Ética",
          "desc": "Protocolos vacinais individualizados e prevenção ativa de doenças caninas e felinas."
        },
        {
          "title": "Cirurgias com Anestesia Inalatória",
          "desc": "Castração segura, cirurgias ortopédicas e monitoramento multiparamétrico contínuo."
        },
        {
          "title": "Banho & Tosa com Produtos Hipoalergênicos",
          "desc": "Cuidado afetuoso com toalhas esterilizadas individuais e corte de unhas incluso."
        }
      ]
    }
  },
  {
    "id": "estetica-automotiva",
    "category": "comercio",
    "title": "Detailing Automotivo & Vitrificação 9H",
    "desc": "Polimento técnico espelhado, vitrificação de pintura cerâmica, lavagem detalhada de chassi e proteção de interiores.",
    "tag": "Alto Padrão",
    "previewImg": "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=700&q=80",
    "liveUrl": "modelos/estetica-automotiva/index.html",
    "highlights": [
      "Vitrificação com até 3 Anos de Garantia",
      "Estúdio Climatizado com Iluminação LED Grid",
      "Remoção de Riscos e Hologramas",
      "Proteção Hidrorrepelente de Vidros"
    ],
    "demoContent": {
      "headline": "O brilho espelhado e a proteção que seu carro merece",
      "sub": "Estética automotiva de precisão para quem é apaixonado por carros impecáveis.",
      "ctaText": "Pedir Orçamento Detalhado no WhatsApp",
      "services": [
        {
          "title": "Polimento Técnico com Brilho Profundo",
          "desc": "Eliminação de marcas de lavagem, micro riscos e oxidações na pintura."
        },
        {
          "title": "Vitrificação Cerâmica 9H",
          "desc": "Camada de quartzo com proteção contra raios UV, fezes de aves e repelência extrema."
        },
        {
          "title": "Higienização Interna & Oxi-Sanitização",
          "desc": "Limpeza profunda de bancos, carpetes e eliminação de odores desagradáveis."
        }
      ]
    }
  },
  {
    "id": "otica-visao",
    "category": "comercio",
    "title": "Ótica Conceito, Armações de Grife & Lentes",
    "desc": "Exames de vista com optometrista, armações internacionais e nacionais, lentes digitais multifocais e garantia de adaptação.",
    "tag": "Estilo & Saúde",
    "previewImg": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80",
    "liveUrl": "modelos/otica-prime/index.html",
    "highlights": [
      "Armações de Grifes Famosas",
      "Lentes Digitais com Antirreflexo",
      "Exame de Vista no Local",
      "Garantia de Adaptação Total"
    ],
    "demoContent": {
      "headline": "Enxergue o mundo com clareza, estilo e conforto visual",
      "sub": "As marcas mais desejadas de armações e a mais alta tecnologia em lentes corretivas.",
      "ctaText": "Consultar Modelos e Preços no WhatsApp",
      "services": [
        {
          "title": "Armações de Grau Modernas",
          "desc": "Modelos leves em acetato nobre, titânio e metal com design sofisticado."
        },
        {
          "title": "Lentes Multifocais Digitais Personalizadas",
          "desc": "Transição suave entre perto e longe com campos visuais ampliados."
        },
        {
          "title": "Óculos de Sol com Proteção UV400",
          "desc": "Modelos clássicos e tendências com lentes polarizadas antirreflexo."
        }
      ]
    }
  },
  {
    "id": "loja-roupas-boutique",
    "category": "comercio",
    "title": "Boutique de Moda Feminina & Lookbook",
    "desc": "Catálogo de roupas e tendências, lookbook em carrossel, tabela de medidas e atendimento estilo personal shopper pelo WhatsApp.",
    "tag": "Tendência",
    "previewImg": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=700&q=80",
    "liveUrl": null,
    "highlights": [
      "Coleções Exclusivas por Estação",
      "Atendimento Personalizado de Consultoria",
      "Envio Rápido para Todo o Brasil",
      "Troca Fácil e Descomplicada"
    ],
    "demoContent": {
      "headline": "Looks modernos e elegantes selecionados para destacar sua beleza",
      "sub": "Peças com caimento perfeito, tecidos confortáveis e estilo contemporâneo.",
      "ctaText": "Ver Novidades da Semana no WhatsApp",
      "services": [
        {
          "title": "Conjuntos e Vestidos de Alfaiataria",
          "desc": "Elegância para o trabalho e eventos especiais com tecidos nobres."
        },
        {
          "title": "Moda Casual e Jeans Premium",
          "desc": "Calças com modelagem empina bumbum, t-shirts em algodão egípcio e blazers."
        },
        {
          "title": "Consultoria de Estilo Online",
          "desc": "Nossas vendedoras te ajudam a montar composições perfeitas pelo WhatsApp."
        }
      ]
    }
  },
  {
    "id": "academia-personal",
    "category": "comercio",
    "title": "Academia & Treinamento Personalizado",
    "desc": "Planos sem taxa de matrícula, musculação climatizada, treinos funcionais, aulas coletivas e acompanhamento por aplicativo.",
    "tag": "Fitness",
    "previewImg": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=700&q=80",
    "liveUrl": null,
    "highlights": [
      "Zero Taxa de Adesão e Matrícula",
      "Aparelhos Biomecânicos Importados",
      "Horário Estendido de Segunda a Domingo",
      "Avaliação Física com Bioimpedância"
    ],
    "demoContent": {
      "headline": "Transforme seu corpo e sua energia com o melhor suporte fitness",
      "sub": "Estrutura completa com professores presentes no salão para orientar cada movimento.",
      "ctaText": "Ganhar Free Pass de 3 Dias no WhatsApp",
      "services": [
        {
          "title": "Musculação & Hipertrofia",
          "desc": "Máquinas de última geração que isolam a musculatura e previnem lesões."
        },
        {
          "title": "Treinamento Funcional e HIIT",
          "desc": "Aulas dinâmicas que queimam até 800 calorias em 45 minutos."
        },
        {
          "title": "Aulas de Dança, Luta e Spinning",
          "desc": "Música empolgante, turmas motivadas e professores com energia contagiante."
        }
      ]
    }
  },
  {
    "id": "escola-cursos",
    "category": "comercio",
    "title": "Escola de Idiomas & Cursos Profissionalizantes",
    "desc": "Matrículas abertas com bolsa de estudos, método focado em conversação rápida, professores nativos e turmas reduzidas.",
    "tag": "Educação",
    "previewImg": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=700&q=80",
    "liveUrl": null,
    "highlights": [
      "Conversação desde a Primeira Aula",
      "Turmas Reduzidas de até 8 Alunos",
      "Certificado Válido Nacionalmente",
      "Condições Especiais de Matrícula"
    ],
    "demoContent": {
      "headline": "Fale um novo idioma com confiança e conquiste novas oportunidades",
      "sub": "Metodologia prática focada em situações reais do cotidiano e do mercado profissional.",
      "ctaText": "Fazer Teste de Nível Gratuito no WhatsApp",
      "services": [
        {
          "title": "Inglês Rápido para Adultos",
          "desc": "Foco em destravar a conversação para viagens, reuniões e entrevistas de emprego."
        },
        {
          "title": "Cursos de Tecnologia e Gestão",
          "desc": "Capacitação prática em áreas com alta demanda e vagas abertas no mercado."
        },
        {
          "title": "Aulas Particulares VIP (1 para 1)",
          "desc": "Cronograma 100% moldado às necessidades e horários individuais do aluno."
        }
      ]
    }
  },
  {
    "id": "distribuidora-bebidas",
    "category": "comercio",
    "title": "Adega, Distribuidora & Bebidas Geladas",
    "desc": "Cervejas, destilados, vinhos, gelo e carvão entregues gelados em minutos para festas, churrascos e fins de semana.",
    "tag": "Entrega Rápida",
    "previewImg": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=700&q=80",
    "liveUrl": null,
    "highlights": [
      "Bebidas Trincando de Geladas",
      "Entrega Rápida em até 35 Minutos",
      "Preços Competitivos de Distribuidora",
      "Barril de Chopp para Eventos"
    ],
    "demoContent": {
      "headline": "A bebida trincando de gelada na porta da sua casa em minutos",
      "sub": "Cervejas especiais, destilados importados, gelo e carvão para o seu churrasco.",
      "ctaText": "Pedir Bebidas no WhatsApp",
      "services": [
        {
          "title": "Cervejas Long Neck e Latas Geladas",
          "desc": "Grandes marcas e cervejas artesanais prontas para consumo imediato."
        },
        {
          "title": "Combos de Gin, Whisky e Vodka",
          "desc": "Bebidas originais acompanhadas de energéticos e copos descartáveis."
        },
        {
          "title": "Kits para Churrasco de Emergência",
          "desc": "Carvão selecionado, acendedor, sacos de gelo filtrado e descartáveis."
        }
      ]
    }
  }
];

// 1. EXTRAÇÃO DE PARÂMETROS DA URL
function getUrlParams() {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    nicho: urlParams.get('nicho') || '',
    cidade: urlParams.get('cidade') || '',
    empresa: urlParams.get('empresa') || '',
    porte: (urlParams.get('porte') || 'PEQUENO').toUpperCase()
  };
}

// 2. FUNÇÃO NORMALIZADORA DE TEXTO PARA BUSCAS INTELIGENTES
function normalizeText(str) {
  if (!str) return '';
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}

// 3. MOTOR DE ISOLAMENTO DE NICHO (NICHE ISOLATION ENGINE)
function getNicheConfig(nichoParam) {
  if (!nichoParam) return null;
  const n = normalizeText(nichoParam);

  // 1. ODONTOLOGIA
  if (n.includes('odonto') || n.includes('dentista')) {
    return {
      key: 'odontologia',
      name: 'Odontologia',
      category: 'odontologia',
      allowedModelIds: ['odonto-estetica', 'odonto-implantes', 'odonto-alinhadores', 'odonto-pediatria', 'odonto-clinica-geral', 'odonto-hof'],
      heroBadge: 'Showroom Exclusivo para Odontologia',
      getHeroTitle: (empresa, cidade) => {
        if (empresa) return `${empresa}: Estruturas Digitais de Alta Precisão para o Seu Consultório`;
        return `Estruturas Digitais de Alta Precisão para Clínicas Odontológicas e Dentistas`;
      },
      getHeroSubtitle: (empresa, cidade) => {
        const cityPart = cidade ? ` em ${cidade}` : '';
        return `Páginas desenvolvidas com padrão clínico de luxo, velocidade ultra rápida no 4G e funil validado pelo CFO/CRO para atrair pacientes particulares de alto ticket diretamente no seu WhatsApp${cityPart}.`;
      },
      trustPills: [
        '100% Adequado ao CFO/CRO',
        'Carregamento em < 1s no 4G',
        'Agendamento no WhatsApp',
        'Galeria de Casos Reais',
        'Design Médico Premium'
      ],
      searchPlaceholder: 'Buscar por especialidade (Ex: Clareamento, Alinhadores, Implantes, Lentes, Botox, Kids...)',
      subCategories: [
        { id: 'todos', label: 'Todos os Modelos Odonto' },
        { id: 'odonto-estetica', label: 'Estética & Lentes' },
        { id: 'odonto-implantes', label: 'Implantes & Cirurgia' },
        { id: 'odonto-alinhadores', label: 'Ortodontia & Alinhadores' },
        { id: 'odonto-pediatria', label: 'Odontopediatria' },
        { id: 'odonto-clinica-geral', label: 'Clínica Geral & Família' },
        { id: 'odonto-hof', label: 'Harmonização (HOF)' }
      ],
      pricing: {
        badge: 'Condição Especial para Odontologia',
        title: 'Investimento Transparente para o Seu Consultório',
        subtitle: 'Presença digital com autoridade médica, hospedagem segura com SSL e suporte contínuo para atualizações.',
        tierName: 'Plano Consultório Odontológico de Alta Conversão',
        setupVal: '80',
        monthlyVal: '25',
        ctaText: 'Ativar Meu Modelo Odontológico'
      },
      customSaas: [
        {
          badge: 'Redução de Faltas',
          title: 'Confirmação Automática de Consultas (WhatsApp)',
          desc: 'Reduza em até 80% as faltas no seu consultório. O sistema envia lembrete no WhatsApp 24h e 2h antes com botão para o paciente confirmar ou remarcar.',
          bullets: [
            'Confirmação em 1 clique pelo paciente',
            'Alerta em tempo real para a recepção da clínica',
            'Preenchimento ágil de desistências'
          ],
          saasName: 'Confirmação Automática de Consultas Odonto'
        },
        {
          badge: 'Segurança & Praticidade',
          title: 'Prontuário Digital & Ficha Clínica Ágil',
          desc: 'Acesse o histórico de procedimentos, anamnese, fotos de antes/depois e termos de consentimento em uma tela rápida pelo tablet ou computador.',
          bullets: [
            'Odontograma interativo simplificado',
            'Armazenamento de fotos de casos clínicos',
            'Assinatura digital do paciente na tela'
          ],
          saasName: 'Prontuário Digital Odonto'
        },
        {
          badge: 'Fechamento de Alto Ticket',
          title: 'Simulador Visual de Planos de Tratamento',
          desc: 'Apresente orçamentos de lentes, implantes ou alinhadores de forma visual, elegante e com parcelamento transparente para o paciente decidir na hora.',
          bullets: [
            'Simulação de parcelamento em até 24x',
            'Envio de proposta resumida em PDF no WhatsApp',
            'Acompanhamento de orçamentos pendentes'
          ],
          saasName: 'Simulador de Orçamentos Odonto'
        }
      ]
    };
  }

  // 2. GASTRONOMIA & DELIVERY
  if (n.includes('gastronom') || n.includes('restaurante') || n.includes('hamburg') || n.includes('burger') || n.includes('pizza') || n.includes('delivery') || n.includes('sushi') || n.includes('churrasc') || n.includes('doce') || n.includes('fit') || n.includes('cafe') || n.includes('acai') || n.includes('lanchonete')) {
    return {
      key: 'gastronomia',
      name: 'Gastronomia & Delivery',
      category: 'gastronomia',
      allowedModelIds: ['burger-delivery', 'pizzaria-tradicional', 'sushi-bar', 'churrascaria-espetaria', 'marmitaria-fit', 'confeitaria-doces', 'cafeteria-brunch', 'acai-sorveteria'],
      heroBadge: 'Showroom Exclusivo para Gastronomia & Delivery',
      getHeroTitle: (empresa, cidade) => {
        if (empresa) return `${empresa}: Cardápios Digitais & Sites Próprios Sem Taxas de Apps`;
        return `Cardápios Digitais e Sites de Alta Conversão para Restaurantes e Delivery`;
      },
      getHeroSubtitle: (empresa, cidade) => {
        const cityPart = cidade ? ` em ${cidade}` : '';
        return `Páginas ultra rápidas com fotos apetitosas e fechamento direto no WhatsApp. Livre-se das taxas de 27% dos marketplaces e receba o lucro integral dos seus pedidos${cityPart}.`;
      },
      trustPills: [
        'Zero Taxa de Aplicativos (100% Seu Lucro)',
        'Carregamento em < 1s no 4G',
        'Pedido Direto no WhatsApp',
        'Cálculo de Entrega por Bairro',
        'Cardápio Visual com Fotos HD'
      ],
      searchPlaceholder: 'Buscar por culinária (Ex: Burger, Pizza, Sushi, Churrasco, Marmita Fit, Doces, Açaí...)',
      subCategories: [
        { id: 'todos', label: 'Todos os Modelos Gastronomia' },
        { id: 'burger-delivery', label: 'Hamburguerias & Smash' },
        { id: 'pizzaria-tradicional', label: 'Pizzarias & Forno a Lenha' },
        { id: 'sushi-bar', label: 'Sushi & Japonês' },
        { id: 'churrascaria-espetaria', label: 'Churrascarias & Carnes' },
        { id: 'marmitaria-fit', label: 'Marmitaria Fit & Saudável' },
        { id: 'confeitaria-doces', label: 'Docerias & Bolos' },
        { id: 'cafeteria-brunch', label: 'Cafeterias & Brunch' },
        { id: 'acai-sorveteria', label: 'Açaiterias & Sobremesas' }
      ],
      pricing: {
        badge: 'Condição Especial para Restaurantes & Delivery',
        title: 'Seu Canal de Vendas Próprio com Lucro 100% Seu',
        subtitle: 'Pare de deixar até 27% do seu faturamento em comissões de marketplaces. Tenha seu próprio cardápio digital com pedidos organizados no WhatsApp.',
        tierName: 'Plano Delivery Próprio Sem Comissões',
        setupVal: '50',
        monthlyVal: '20',
        ctaText: 'Ativar Cardápio para Meu Restaurante'
      },
      customSaas: [
        {
          badge: 'Zero Comissão',
          title: 'Painel de Pedidos & Comanda de Cozinha',
          desc: 'Receba os pedidos do WhatsApp organizados em uma tela de despacho, com impressão térmica automática para a cozinha e status de entrega.',
          bullets: [
            'Organização automática de adicionais e observações',
            'Cálculo de taxa de entrega automática por bairro',
            'Zero porcentagem sobre o valor dos seus pratos'
          ],
          saasName: 'Painel de Pedidos & Cozinha'
        },
        {
          badge: 'Recompra Ativa',
          title: 'Fidelidade & Cupons Automáticos (WhatsApp)',
          desc: 'Estimule seus clientes a pedirem todo final de semana com cartela de selos digital e disparo de cupons de reativação para quem não pede há 15 dias.',
          bullets: [
            'Cartela de selos 100% digital no WhatsApp',
            'Mensagem automática de reativação com cupom',
            'Aumento comprovado na frequência de pedidos'
          ],
          saasName: 'Fidelidade & Cupons WhatsApp'
        },
        {
          badge: 'Experiência Visual',
          title: 'Montador Interativo Meio a Meio & Combos',
          desc: 'O cliente monta sozinho a pizza meio a meio, o smash burger com opcionais ou o açaí em camadas, com o valor calculado na hora sem erros.',
          bullets: [
            'Seleção de adicionais com limite mínimo e máximo',
            'Fotos apetitosas com zoom em alta resolução',
            'Botão "Repetir Último Pedido" em 1 clique'
          ],
          saasName: 'Montador Interativo de Pedidos'
        }
      ]
    };
  }

  // 3. ADVOCACIA & JURÍDICO
  if (n.includes('advoc') || n.includes('advog') || n.includes('jurid')) {
    return {
      key: 'advocacia',
      name: 'Advocacia',
      category: 'servicos',
      allowedModelIds: ['advocacia-corporativa', 'advocacia-trabalhista'],
      heroBadge: 'Showroom Exclusivo para Advocacia & Jurídico',
      getHeroTitle: (empresa, cidade) => {
        if (empresa) return `${empresa}: Estruturas de Alta Autoridade para o Seu Escritório de Advocacia`;
        return `Estruturas de Alta Autoridade para Escritórios de Advocacia e Advogados`;
      },
      getHeroSubtitle: (empresa, cidade) => {
        const cityPart = cidade ? ` em ${cidade}` : '';
        return `Páginas sóbrias, elegantes e em estrita conformidade com o Código de Ética da OAB. Desenvolvidas para transmitir máxima credibilidade e filtrar clientes qualificados diretamente no seu WhatsApp${cityPart}.`;
      },
      trustPills: [
        '100% Adequado ao Provimento da OAB',
        'Carregamento em < 1s no 4G',
        'Triagem de Clientes no WhatsApp',
        'Design Corporativo Sóbrio',
        'Segurança SSL & LGPD'
      ],
      searchPlaceholder: 'Buscar por área de atuação (Ex: Trabalhista, Previdenciário, Empresarial, Cível...)',
      subCategories: [
        { id: 'todos', label: 'Todos os Modelos Advocacia' },
        { id: 'advocacia-corporativa', label: 'Advocacia Corporativa & Cível' },
        { id: 'advocacia-trabalhista', label: 'Trabalhista & Previdenciário' }
      ],
      pricing: {
        badge: 'Condição Especial para Advocacia',
        title: 'Presença Digital de Alta Autoridade para o Seu Escritório',
        subtitle: 'Estrutura institucional jurídica com triagem rápida e conformidade total com o Código de Ética da OAB.',
        tierName: 'Plano Escritório de Advocacia de Alta Autoridade',
        setupVal: '80',
        monthlyVal: '25',
        ctaText: 'Ativar Página Jurídica para Meu Escritório'
      },
      customSaas: [
        {
          badge: 'Triagem Rápida',
          title: 'Formulário Inteligente de Triagem de Casos',
          desc: 'Filtre e qualifique clientes antes de iniciar o atendimento humano. O cliente responde perguntas-chave e envia os dados organizados no WhatsApp.',
          bullets: [
            'Classificação automática por área do Direito',
            'Economia de tempo com curiosos sem causa',
            'Histórico de triagem organizado por lead'
          ],
          saasName: 'Triagem Inteligente de Clientes'
        },
        {
          badge: 'Controle de Prazos',
          title: 'Mini-CRM Jurídico & Acompanhamento de Processos',
          desc: 'Quadro Kanban simples para acompanhar etapas de negociação com clientes, contratos pendentes e prazos de atendimento.',
          bullets: [
            'Etapas visuais (Primeiro Contato, Proposta, Contrato)',
            'Lembretes de retorno para não perder clientes',
            'Painel leve acessível no celular e tablet'
          ],
          saasName: 'Mini-CRM Jurídico'
        }
      ]
    };
  }

  // 4. BELEZA, BARBEARIAS & ESTÉTICA
  if (n.includes('beleza') || n.includes('barbear') || n.includes('salao') || n.includes('estetic') || n.includes('cabel') || n.includes('lash') || n.includes('unha') || n.includes('spa')) {
    return {
      key: 'beleza',
      name: 'Beleza & Estética',
      category: 'beleza',
      allowedModelIds: ['barbearia-premium', 'estetica-facial', 'studio-beleza', 'lash-sobrancelhas', 'esmalteria-unhas', 'depilacao-laser', 'spa-massoterapia'],
      heroBadge: 'Showroom Exclusivo para Beleza, Barbearias & Estética',
      getHeroTitle: (empresa, cidade) => {
        if (empresa) return `${empresa}: Páginas de Alta Conversão para o Seu Espaço de Beleza`;
        return `Páginas e Sites de Alta Conversão para Salões, Barbearias e Clínicas de Estética`;
      },
      getHeroSubtitle: (empresa, cidade) => {
        const cityPart = cidade ? ` em ${cidade}` : '';
        return `Visual deslumbrante com fotos de procedimentos, tabela de serviços e agendamento instantâneo no seu WhatsApp${cityPart}.`;
      },
      trustPills: [
        'Agendamento em 2 Cliques no WhatsApp',
        'Carregamento em < 1s no 4G',
        'Galeria de Resultados & Antes/Depois',
        'Tabela de Serviços & Pacotes',
        'Design Visual de Alto Impacto'
      ],
      searchPlaceholder: 'Buscar por serviço (Ex: Corte, Fade, Barba, Botox, Mechas, Lash, Unhas, Spa...)',
      subCategories: [
        { id: 'todos', label: 'Todos os Modelos Beleza' },
        { id: 'barbearia-premium', label: 'Barbearias & Espaço Masculino' },
        { id: 'estetica-facial', label: 'Clínica de Estética & Harmonização' },
        { id: 'studio-beleza', label: 'Salão de Beleza & Mega Hair' },
        { id: 'lash-sobrancelhas', label: 'Lash Designer & Sobrancelhas' },
        { id: 'esmalteria-unhas', label: 'Esmalteria & Spa dos Pés' },
        { id: 'depilacao-laser', label: 'Depilação a Laser' },
        { id: 'spa-massoterapia', label: 'Spa Urbano & Massagens' }
      ],
      pricing: {
        badge: 'Condição Especial para Beleza & Estética',
        title: 'Sua Agenda Lotada com um Site Profissional',
        subtitle: 'Estrutura completa com link para bio do Instagram, botão WhatsApp e vitrine de trabalhos.',
        tierName: 'Plano Espaço de Beleza & Barbearia',
        setupVal: '50',
        monthlyVal: '20',
        ctaText: 'Ativar Minha Página de Beleza'
      },
      customSaas: [
        {
          badge: 'Agenda Cheia',
          title: 'Agendamento Automático de Horários com Confirmação',
          desc: 'O cliente escolhe o profissional e o serviço desejado, e a reserva cai confirmada na sua agenda do WhatsApp sem trocas de mensagens.',
          bullets: [
            'Grade flexível por profissional do salão/barbearia',
            'Lembrete automático 2 horas antes do horário marcado',
            'Redução drástica de clientes faltosos'
          ],
          saasName: 'Agendamento Automático Beleza'
        },
        {
          badge: 'Fidelização',
          title: 'Cartela Fidelidade Digital (Corte & Unha)',
          desc: 'Incentive a cliente a fazer as unhas toda semana ou o cliente a cortar o cabelo a cada 15 dias com selos digitais no WhatsApp.',
          bullets: [
            'Cartela 100% digital acumulada no número do WhatsApp',
            'Notificação de premiação ao completar os selos',
            'Aumento direto na recorrência do espaço'
          ],
          saasName: 'Fidelidade Digital Beleza'
        }
      ]
    };
  }

  // 5. VETERINÁRIA & PET
  if (n.includes('pet') || n.includes('veterin')) {
    return {
      key: 'pet',
      name: 'Veterinárias & Pet',
      category: 'comercio',
      allowedModelIds: ['clinica-veterinaria'],
      heroBadge: 'Showroom Exclusivo para Veterinárias & Pet Shops',
      getHeroTitle: (empresa, cidade) => {
        if (empresa) return `${empresa}: Páginas de Alta Conversão para Sua Clínica Veterinária`;
        return `Páginas e Sites de Alta Conversão para Clínicas Veterinárias e Pet Shops`;
      },
      getHeroSubtitle: (empresa, cidade) => {
        const cityPart = cidade ? ` em ${cidade}` : '';
        return `Páginas acolhedoras com agendamento rápido de consultas, vacinas e banho & tosa diretamente no WhatsApp${cityPart}.`;
      },
      trustPills: [
        'Agendamento de Consultas & Vacinas',
        'Carregamento em < 1s no 4G',
        'Botão WhatsApp de Emergência 24h',
        'Tabela de Pacotes de Banho & Tosa',
        'Design Acolhedor'
      ],
      searchPlaceholder: 'Buscar por serviço (Ex: Vacinas, Cirurgia, Banho e Tosa, Emergência...)',
      subCategories: [
        { id: 'todos', label: 'Todos os Modelos Pet' },
        { id: 'clinica-veterinaria', label: 'Hospital & Clínica Veterinária 24h' }
      ],
      pricing: {
        badge: 'Condição Especial para Veterinárias & Pet Shops',
        title: 'Presença Digital Completa para o Seu Negócio Pet',
        subtitle: 'Estrutura leve com agendamento no WhatsApp, mapa e destaques de serviços veterinários.',
        tierName: 'Plano Clínica Veterinária & Pet',
        setupVal: '50',
        monthlyVal: '20',
        ctaText: 'Ativar Página Pet para Meu Negócio'
      },
      customSaas: [
        {
          badge: 'Fidelização Pet',
          title: 'Lembrete Automático de Vacinas & Vermífugos (WhatsApp)',
          desc: 'Disparo automático de aviso no WhatsApp quando a vacina ou vermífugo do pet estiver prestes a vencer, garantindo a volta do tutor.',
          bullets: [
            'Controle por data de vacinação de cada pet',
            'Mensagem carinhosa personalizada com o nome do animal',
            'Aumento imediato na receita recorrente da clínica'
          ],
          saasName: 'Lembrete Automático de Vacinas'
        }
      ]
    };
  }

  // 6. MECÂNICA, AUTOCENTER & DETAILING
  if (n.includes('mecanic') || n.includes('oficin') || n.includes('auto') || n.includes('detail') || n.includes('carro')) {
    return {
      key: 'oficina',
      name: 'Oficinas & Automotivo',
      category: 'comercio',
      allowedModelIds: ['oficina-mecanica', 'estetica-automotiva'],
      heroBadge: 'Showroom Exclusivo para Oficinas & Estética Automotiva',
      getHeroTitle: (empresa, cidade) => {
        if (empresa) return `${empresa}: Estruturas de Alta Conversão para Sua Oficina Mecânica`;
        return `Páginas e Sites de Alta Conversão para Oficinas Mecânicas e AutoCenters`;
      },
      getHeroSubtitle: (empresa, cidade) => {
        const cityPart = cidade ? ` em ${cidade}` : '';
        return `Páginas robustas com foco em confiança mecânica, agendamento de revisão preventiva e orçamentos transparentes no WhatsApp${cityPart}.`;
      },
      trustPills: [
        'Diagnóstico por Scanner Eletrônico',
        'Carregamento em < 1s no 4G',
        'Aprovação de Orçamento por WhatsApp',
        'Peças com Nota Fiscal e Garantia',
        'Design Automotivo Moderno'
      ],
      searchPlaceholder: 'Buscar por serviço (Ex: Freios, Suspensão, Troca de Óleo, Vitrificação, Polimento...)',
      subCategories: [
        { id: 'todos', label: 'Todos os Modelos Automotivos' },
        { id: 'oficina-mecanica', label: 'Oficina Mecânica & AutoCenter' },
        { id: 'estetica-automotiva', label: 'Detailing & Vitrificação 9H' }
      ],
      pricing: {
        badge: 'Condição Especial para Oficinas & AutoCenters',
        title: 'Mais Carros na Sua Oficina com um Site de Confiança',
        subtitle: 'Estrutura completa com localização no mapa, lista de serviços e botão SOS para emergências mecânicas.',
        tierName: 'Plano Oficina & AutoCenter de Confiança',
        setupVal: '50',
        monthlyVal: '20',
        ctaText: 'Ativar Minha Página de Oficina'
      },
      customSaas: [
        {
          badge: 'Transparência Total',
          title: 'Orçamento com Fotos e Vídeos no WhatsApp',
          desc: 'Envie o checklist da revisão do carro com fotos das peças gastas diretamente no WhatsApp do cliente para aprovação em 1 clique.',
          bullets: [
            'Checklist digital com fotos do defeito',
            'Aprovação de orçamento com 1 toque pelo cliente',
            'Zero desconfiança e aumento no ticket médio'
          ],
          saasName: 'Orçamento Visual Automotivo'
        }
      ]
    };
  }

  // 7. IMOBILIÁRIA, ARQUITETURA & MÓVEIS
  if (n.includes('imob') || n.includes('corretor') || n.includes('imovel') || n.includes('arquit') || n.includes('marcen')) {
    return {
      key: 'imobiliaria',
      name: 'Imobiliárias & Arquitetura',
      category: 'servicos',
      allowedModelIds: ['imobiliaria-vitrine', 'arquitetura-interiores', 'marcenaria-fina'],
      heroBadge: 'Showroom Exclusivo para Imobiliárias & Arquitetura',
      getHeroTitle: (empresa, cidade) => {
        if (empresa) return `${empresa}: Vitrines Imobiliárias de Alto Padrão para Seus Imóveis`;
        return `Vitrines Digitais de Alto Padrão para Imobiliárias, Corretores e Arquitetura`;
      },
      getHeroSubtitle: (empresa, cidade) => {
        const cityPart = cidade ? ` em ${cidade}` : '';
        return `Páginas elegantes com fotos panorâmicas em alta resolução, tour de imóveis e agendamento direto de visitas no WhatsApp${cityPart}.`;
      },
      trustPills: [
        'Galeria de Fotos em Alta Resolução',
        'Carregamento em < 1s no 4G',
        'Filtro por Faixa de Valor e Bairro',
        'Agendamento Direto de Visita no WhatsApp',
        'Design Sofisticado'
      ],
      searchPlaceholder: 'Buscar por imóvel ou projeto (Ex: Casa em Condomínio, Cobertura, Reforma, Planejados...)',
      subCategories: [
        { id: 'todos', label: 'Todos os Modelos Imobiliários' },
        { id: 'imobiliaria-vitrine', label: 'Imobiliária Prime & Corretores' },
        { id: 'arquitetura-interiores', label: 'Arquitetura & Interiores 3D' },
        { id: 'marcenaria-fina', label: 'Marcenaria & Móveis Sob Medida' }
      ],
      pricing: {
        badge: 'Condição Especial para Imobiliárias & Corretores',
        title: 'Presença Digital de Prestígio para Seus Lançamentos',
        subtitle: 'Estrutura institucional refinada para destacar imóveis e atrair compradores qualificados.',
        tierName: 'Plano Imobiliária & Corretores Prime',
        setupVal: '80',
        monthlyVal: '25',
        ctaText: 'Ativar Minha Vitrine Imobiliária'
      },
      customSaas: [
        {
          badge: 'Captação & Agendamento',
          title: 'Agendador de Visitas com Triagem de Renda',
          desc: 'O interessado escolhe o dia e horário para visitar o imóvel e informa a faixa de renda, economizando o tempo dos corretores.',
          bullets: [
            'Agendamento sincronizado com o WhatsApp do corretor',
            'Triagem prévia de perfil do comprador',
            'Alerta automático 2h antes da visita'
          ],
          saasName: 'Agendador de Visitas Imobiliárias'
        }
      ]
    };
  }

  // 8. ENERGIA SOLAR & ENGENHARIA
  if (n.includes('solar') || n.includes('fotovolt') || n.includes('energia')) {
    return {
      key: 'solar',
      name: 'Energia Solar',
      category: 'servicos',
      allowedModelIds: ['energia-solar'],
      heroBadge: 'Showroom Exclusivo para Energia Solar Fotovoltaica',
      getHeroTitle: (empresa, cidade) => {
        if (empresa) return `${empresa}: Landing Pages com Simulador de Economia Solar`;
        return `Landing Pages de Alta Conversão com Simulador para Empresas de Energia Solar`;
      },
      getHeroSubtitle: (empresa, cidade) => {
        const cityPart = cidade ? ` em ${cidade}` : '';
        return `Páginas focadas em conversão com calculadora de economia na conta de luz e solicitação rápida de projeto homologado no WhatsApp${cityPart}.`;
      },
      trustPills: [
        'Simulador Interativo de Economia (até 95%)',
        'Carregamento em < 1s no 4G',
        'Pedido de Estudo de Viabilidade Grátis',
        'Destaque para 25 Anos de Garantia',
        'Design Tecnológico Moderno'
      ],
      searchPlaceholder: 'Buscar por termo solar (Ex: Residencial, Comercial, Financiamento, Economia...)',
      subCategories: [
        { id: 'todos', label: 'Modelos Energia Solar' },
        { id: 'energia-solar', label: 'Energia Solar Fotovoltaica' }
      ],
      pricing: {
        badge: 'Condição Especial para Integradores Solares',
        title: 'Mais Contratos Fechados com um Simulador Solar',
        subtitle: 'Estrutura focada em geração de orçamentos quentes para sua equipe de vendas.',
        tierName: 'Plano Energia Solar de Alta Conversão',
        setupVal: '80',
        monthlyVal: '25',
        ctaText: 'Ativar Minha Página Solar'
      },
      customSaas: [
        {
          badge: 'Calculadora de Economia',
          title: 'Simulador Solar com Envio de Proposta em PDF',
          desc: 'O cliente digita quanto paga de luz por mês e o sistema calcula a quantidade de placas necessárias e a economia em 25 anos.',
          bullets: [
            'Cálculo instantâneo baseado na tarifa da concessionária local',
            'Envio de resumo da economia diretamente no WhatsApp',
            'Lead pré-qualificado com valor da conta em mãos'
          ],
          saasName: 'Simulador Solar Interativo'
        }
      ]
    };
  }

  return null;
}

// 4. APLICAR PERSONALIZAÇÃO CONTEXTUAL NO SITE
function applyContextualPersonalization(params) {
  const { nicho, cidade, empresa, porte } = params;
  const nicheConfig = getNicheConfig(nicho);

  // Se o link possui nicho isolado (ex: Odontologia, Gastronomia, Advocacia, etc.)
  if (nicheConfig) {
    // Título da Aba do Navegador
    document.getElementById('page-title').innerText = `${empresa || nicheConfig.name} | Showroom Pixel Studio`;

    // Hero Badge, H1 e Subtítulo
    const badgeEl = document.getElementById('hero-badge');
    const titleEl = document.getElementById('hero-title');
    const subEl = document.getElementById('hero-subtitle');

    if (badgeEl) badgeEl.innerText = nicheConfig.heroBadge;
    if (titleEl) titleEl.innerText = nicheConfig.getHeroTitle(empresa, cidade);
    if (subEl) subEl.innerText = nicheConfig.getHeroSubtitle(empresa, cidade);

    // Trust Pills
    const trustPillsContainer = document.querySelector('.trust-pills-row');
    if (trustPillsContainer) {
      trustPillsContainer.innerHTML = nicheConfig.trustPills.map(p => `
        <span class="trust-pill">${p}</span>
      `).join('');
    }

    // Placeholder da Barra de Busca
    const searchInput = document.getElementById('catalog-search-input');
    if (searchInput) {
      searchInput.placeholder = nicheConfig.searchPlaceholder;
    }

    // Abas de Sub-Especialidades (Substitui as abas globais)
    const tabsContainer = document.getElementById('niche-tabs');
    if (tabsContainer) {
      tabsContainer.innerHTML = nicheConfig.subCategories.map((sub, idx) => `
        <button class="cat-btn ${idx === 0 ? 'active' : ''}" data-subniche="${sub.id}">
          ${sub.label}
        </button>
      `).join('');
    }

    // Título da Seção do Catálogo
    const catTitleEl = document.getElementById('catalog-section-title');
    const catDescEl = document.getElementById('catalog-section-desc');
    if (catTitleEl) catTitleEl.innerText = `Modelos Estruturados para ${nicheConfig.name}`;
    if (catDescEl) catDescEl.innerText = 'Demonstrações interativas com design de alto padrão, adaptadas para celular e WhatsApp.';

    // Precificação Contextual para o Nicho
    applyNichePricing(nicheConfig, porte, params);

    // Módulos SaaS Personalizados para o Nicho
    applyNicheSaas(nicheConfig, params);

    // MODO ISOLAMENTO: Oculta barra de busca e outros filtros para parecer uma agência 100% nichada
    document.querySelector('.categories-bar').style.display = 'none';
    document.querySelector('.search-box-wrapper').style.display = 'none';

    // Botão de Contato no Header
    const headerWa = document.getElementById('btn-header-wa');
    if (headerWa) {
      headerWa.href = buildWhatsAppUrl(`Olá! Gostaria de conversar sobre as estruturas de sites para ${nicheConfig.name.toLowerCase()} da Pixel Studio.`);
    }

    return;
  }

  // Comportamento Geral (sem isolamento de nicho)
  if (nicho) {
    document.getElementById('page-title').innerText = `Modelos de Sites para ${capitalize(nicho)} | Pixel Studio`;
  }

  const badgeEl = document.getElementById('hero-badge');
  if (cidade) {
    badgeEl.innerText = `Modelos Selecionados para Empresas em ${cidade}`;
  } else {
    badgeEl.innerText = `Modelos Verificados de Alta Conversão`;
  }

  const titleEl = document.getElementById('hero-title');
  if (nicho && cidade) {
    titleEl.innerText = `Sites e Landing Pages de Alta Conversão para ${capitalize(nicho)} em ${cidade}`;
  } else if (nicho) {
    titleEl.innerText = `Sites e Landing Pages de Alta Conversão para ${capitalize(nicho)}`;
  } else {
    titleEl.innerText = `Sites e Landing Pages de Alta Conversão para Pequenas e Médias Empresas`;
  }

  const subEl = document.getElementById('hero-subtitle');
  if (empresa) {
    subEl.innerText = `Apresente a ${empresa} com autoridade máxima na internet. Páginas que carregam em menos de 1 segundo no celular e convertem visitantes diretamente em clientes no seu WhatsApp.`;
  }

  const catTitleEl = document.getElementById('catalog-section-title');
  const catDescEl = document.getElementById('catalog-section-desc');
  if (nicho) {
    catTitleEl.innerText = `Modelos Premium para ${capitalize(nicho)}`;
    catDescEl.innerText = `Selecione uma demonstração abaixo para interagir em tempo real no simulador mobile.`;

    // MODO ISOLAMENTO: Oculta filtros e buscas se um nicho solto foi passado
    document.querySelector('.categories-bar').style.display = 'none';
    document.querySelector('.search-box-wrapper').style.display = 'none';
  }

  applyDynamicPricing(porte, params);

  const headerWa = document.getElementById('btn-header-wa');
  if (headerWa) {
    headerWa.href = buildWhatsAppUrl(`Olá! Gostaria de tirar dúvidas sobre os modelos de sites para ${params.nicho || 'meu negócio'}.`);
  }
}

// 5. PRECIFICAÇÃO PERSONALIZADA PARA NICHO ISOLADO
function applyNichePricing(nicheConfig, porte, params) {
  const p = nicheConfig.pricing;
  let tierName = p.tierName;
  let setupVal = p.setupVal;
  let monthlyVal = p.monthlyVal;

  if (porte === 'ALTO') {
    tierName = `Plano ${nicheConfig.name} Premium`;
    setupVal = '150';
    monthlyVal = '35';
  } else if (porte === 'MEDIO') {
    tierName = `Plano ${nicheConfig.name} em Crescimento`;
    setupVal = '120';
    monthlyVal = '25';
  }

  const pricingTitle = document.getElementById('pricing-title');
  const pricingSub = document.getElementById('pricing-subtitle');
  const tierEl = document.getElementById('pricing-tier-name');
  const setupEl = document.getElementById('pricing-setup-val');
  const monthlyEl = document.getElementById('pricing-monthly-text');
  const ctaEl = document.getElementById('btn-pricing-cta');

  if (pricingTitle) pricingTitle.innerText = p.title;
  if (pricingSub) pricingSub.innerText = p.subtitle;
  if (tierEl) tierEl.innerText = tierName;
  if (setupEl) setupEl.innerText = setupVal;
  if (monthlyEl) {
    monthlyEl.innerText = `+ apenas R$ ${monthlyVal}/mês de hospedagem rápida e manutenção técnica`;
  }

  const targetName = params.empresa || (nicheConfig ? nicheConfig.name : 'minha empresa');
  const msg = `Olá! Quero ativar minha página de ${nicheConfig.name} no ${tierName} por R$ ${setupVal} de setup + R$ ${monthlyVal}/mês para ${targetName} em ${params.cidade || 'minha cidade'}.`;
  if (ctaEl) {
    ctaEl.href = buildWhatsAppUrl(msg);
    ctaEl.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.974.532 1.831.815 2.796.815 3.183 0 5.769-2.587 5.769-5.767.001-3.18-2.584-5.766-5.769-5.766zm8.969 5.768c0 4.962-4.038 9-9 9-1.554 0-3.003-.396-4.269-1.088l-5.731 1.503 1.529-5.591c-.777-1.328-1.229-2.87-1.229-4.524 0-4.962 4.038-9 9-9s9 4.038 9 9z"/></svg>
      ${p.ctaText}
    `;
  }
}

// 6. SISTEMAS SAAS PERSONALIZADOS PARA NICHO ISOLADO
function applyNicheSaas(nicheConfig, params) {
  if (!nicheConfig.customSaas) return;

  const saasGrid = document.querySelector('.saas-grid');
  const saasSection = document.querySelector('.saas-section');

  if (saasSection) {
    const saasTitle = saasSection.querySelector('.section-title');
    const saasDesc = saasSection.querySelector('.section-desc');
    if (saasTitle) saasTitle.innerText = `Sistemas e Ferramentas Sob Medida para ${nicheConfig.name}`;
    if (saasDesc) saasDesc.innerText = `Não te empurramos softwares genéricos. Desenvolvemos soluções focadas na rotina do seu negócio para economizar tempo da sua equipe e aumentar o fechamento de vendas.`;
  }

  if (saasGrid) {
    saasGrid.innerHTML = nicheConfig.customSaas.map(s => {
      const targetName = params.empresa || (nicheConfig ? nicheConfig.name : 'minha empresa');
      const msg = `Olá! Vi na vitrine da Pixel Studio o sistema "${s.title}" e gostaria de solicitar um projeto personalizado para ${targetName} em ${params.cidade || 'minha cidade'}.`;
      return `
        <div class="saas-card">
          <span class="saas-badge">${s.badge}</span>
          <h3>${s.title}</h3>
          <p>${s.desc}</p>
          <ul class="saas-bullets">
            ${s.bullets.map(b => `<li>${b}</li>`).join('')}
          </ul>
          <a href="${buildWhatsAppUrl(msg)}" target="_blank" class="btn btn-secondary btn-block">Solicitar Projeto Personalizado</a>
        </div>
      `;
    }).join('');
  }
}

// 7. PRECIFICAÇÃO CONTEXTUAL PADRÃO (GLOBAL)
function applyDynamicPricing(porte, params) {
  let tierName = 'Plano Ativação Popular (Micro-Empresas e Autônomos)';
  let setupVal = '50';
  let monthlyVal = '20';

  if (porte === 'ALTO') {
    tierName = 'Plano Estratégico Corporativo';
    setupVal = '150';
    monthlyVal = '35';
  } else if (porte === 'MEDIO') {
    tierName = 'Plano Crescimento Comercial';
    setupVal = '80';
    monthlyVal = '25';
  }

  const tierEl = document.getElementById('pricing-tier-name');
  const setupEl = document.getElementById('pricing-setup-val');
  const monthlyEl = document.getElementById('pricing-monthly-text');
  const ctaEl = document.getElementById('btn-pricing-cta');

  if (tierEl) tierEl.innerText = tierName;
  if (setupEl) setupEl.innerText = setupVal;
  if (monthlyEl) {
    monthlyEl.innerText = `+ apenas R$ ${monthlyVal}/mês de hospedagem rápida e manutenção técnica`;
  }

  const msg = `Olá! Quero ativar a minha página no ${tierName} por R$ ${setupVal} de setup + R$ ${monthlyVal}/mês para ${params.empresa || 'minha empresa'} em ${params.cidade || 'minha cidade'}.`;
  if (ctaEl) {
    ctaEl.href = buildWhatsAppUrl(msg);
  }
}

// 8. DICIONÁRIO DE PALAVRAS-CHAVE PARA BUSCA INTELIGENTE
const MODEL_KEYWORDS = {
  'odonto-estetica': 'dentista odontologia odonto dente dentes clareamento lentes facetas resina porcelana sorriso estética dental estetica dental reabilitacao',
  'odonto-implantes': 'dentista odontologia implante implantes dentes fixos carga imediata cirurgia guiada sem dor anestesia computadorizada protocolo',
  'odonto-alinhadores': 'dentista aparelho alinhador invisivel invisalign ortodontia dentes tortos mordida discreto placa transparente escaneamento 3d',
  'odonto-pediatria': 'dentista infantil odontopediatria dente de leite crianca espaco kids dentinho prevencao baby sem dor acolhimento',
  'odonto-clinica-geral': 'dentista odontologia canal tratamento de canal restauracao limpeza profilaxia protese clinica geral multidisciplinar checkup',
  'odonto-hof': 'dentista harmonizacao orofacial hof botox toxina botulinica preenchimento labial bioestimulador colageno fios de pdo estetica facial',
  'clinica-medica-integrada': 'medico clinica medica policlinica consultas exames cardiologista pediatra dermatologista ultrassom',
  'fisioterapia-pilates': 'fisioterapia fisioterapeuta pilates rpg reabilitacao dor nas costas coluna postura',
  'psicologia-terapia': 'psicologia psicologo psicologa psicoterapia terapia saude mental ansiedade depressao consulta psicologica',
  'burger-delivery': 'hamburguer hamburgueria burger smash lanche lanchonete batata frita delivery fast food artesanal combo burger',
  'pizzaria-tradicional': 'pizza pizzaria forno a lenha delivery calzone massa queijo margherita napolitana combo pizza',
  'sushi-bar': 'sushi sashimi comida japonesa restaurante japones temaki rodizio japones oriental peixe cru salmao salmão niguiri',
  'churrascaria-espetaria': 'churrasco churrascaria espetinho espetaria carnes picanha costela churrasqueiro fogo de chao',
  'marmitaria-fit': 'comida fit marmita fit marmitaria alimentacao saudavel congelados fit marmitas dieta proteina refeicao saudavel',
  'confeitaria-doces': 'confeitaria doceria bolo de aniversario doces gourmet tortas brigadeiro naked cake festa',
  'cafeteria-brunch': 'cafe cafeteria cafe especial brunch graos graos especiais cappuccino barista espresso pao de queijo',
  'acai-sorveteria': 'acai açaí sorvete sorveteria acaiteria picolé sobremesa taca recheada',
  'barbearia-premium': 'barbearia barbeiro corte masculino barba cabelo masculino fade navalha degradê barboterapia toalha quente',
  'estetica-facial': 'estetica estética clinica de estetica harmonizacao botox preenchimento labios pele rejuvenescimento beleza fios de pdo colageno',
  'studio-beleza': 'cabeleireiro cabeleireira salao de beleza salão cabelo mechas loiro loiras corte feminino escova mega hair',
  'lash-sobrancelhas': 'sobrancelha sobrancelhas cilios cílios lash designer micropigmentacao extensao de cilios fio a fio volumao',
  'esmalteria-unhas': 'unhas manicure pedicure esmalteria alongamento de unhas fibra de vidro gel blindagem spa dos pes',
  'depilacao-laser': 'depilacao depilação depilacao a laser laser diodo led pele lisinha foliculite',
  'spa-massoterapia': 'spa massagem massoterapia drenagem linfatica relaxamento massagem relaxante pedras quentes alivio estresse',
  'advocacia-corporativa': 'advogado advogada advocacia escritorio de advocacia direito processo juridico oab causas empresarial tributario societario civel',
  'advocacia-trabalhista': 'advogado trabalhista advocacia direitos do trabalhador previdenciario inss aposentadoria rescisao fgts',
  'imobiliaria-vitrine': 'imobiliaria corretor de imoveis imovel imoveis casa apartamento aluguel compra terreno lote condominio cobertura alto padrao morar',
  'arquitetura-interiores': 'arquiteto arquiteta arquitetura design de interiores decoracao reforma planta projeto 3d luminotecnica',
  'marcenaria-fina': 'marcenaria marceneiro moveis planejados móveis planejados sob medida cozinha planejada armarios mdf closet',
  'contabilidade-consultiva': 'contador contadora contabilidade escritorio contabil abertura de empresa cnpj imposto de renda fiscal emissao de nota bpo financeiro',
  'energia-solar': 'solar energia solar placa solar painel solar fotovoltaica conta de luz reducao economia de energia inversor engenharia eletrica',
  'limpeza-higienizacao': 'lavagem de sofa higienizacao de estofados impermeabilizacao limpeza de tapete estofado colchao impermeabilizar',
  'oficina-mecanica': 'oficina mecanico oficina mecanica auto center mecanica carro automovel conserto de carro freio motor suspensao guincho revisao troca de oleo scanner',
  'clinica-veterinaria': 'pet pet shop veterinario veterinaria veterinário veterinária cachorro gato hospital veterinario vacina pet banho e tosa emergencia pet animais cao',
  'estetica-automotiva': 'estetica automotiva detailing polimento vitrificacao vitrificação cristalizacao lavagem detalhada higienizacao interna protecao de pintura',
  'otica-visao': 'otica ótica oculos óculos oculos de grau oculos de sol armacao lentes de contato visao exame de vista oftamologia',
  'loja-roupas-boutique': 'roupas moda boutique loja de roupas vestidos moda feminina look looks provador provador virtual colecao',
  'academia-personal': 'academia personal trainer musculacao musculação treino fitness crossfit exercicios hipertrofia esteira emagrecimento',
  'escola-cursos': 'escola curso cursos profissionalizantes ingles idiomas aulas matricula certificado conversacao',
  'distribuidora-bebidas': 'bebidas distribuidora adega cerveja cervejas chopp barril de chopp gelo carvao whisky destilados refrigerante'
};

// 9. RENDERIZAÇÃO DO CATÁLOGO DE MODELOS COM ISOLAMENTO
let currentActiveFilter = 'todos';
let currentSearchTerm = '';

function renderCatalog(params, activeFilter = null, searchTerm = '') {
  const grid = document.getElementById('models-grid');
  const counter = document.getElementById('models-counter');
  const nicheConfig = getNicheConfig(params.nicho);

  // Pool inicial de modelos
  let pool = MODELS_CATALOG;
  if (nicheConfig) {
    // ISOLAMENTO ESTRITO: Apenas modelos daquele nicho específico
    if (nicheConfig.allowedModelIds && nicheConfig.allowedModelIds.length > 0) {
      pool = pool.filter(m => nicheConfig.allowedModelIds.includes(m.id));
    } else {
      pool = pool.filter(m => m.category === nicheConfig.category);
    }
  }

  // Define o filtro ativo
  if (activeFilter !== null) {
    currentActiveFilter = activeFilter;
  }

  let filtered = pool;

  // Filtragem por Sub-Aba (Nicho Isolado) ou Aba de Categoria (Global)
  if (nicheConfig) {
    if (currentActiveFilter && currentActiveFilter !== 'todos') {
      filtered = filtered.filter(m => m.id === currentActiveFilter);
    }
  } else {
    if (currentActiveFilter && currentActiveFilter !== 'todos') {
      filtered = filtered.filter(m => m.category === currentActiveFilter);
    }
  }

  // Filtragem por Busca de Texto
  currentSearchTerm = searchTerm ? searchTerm.trim() : '';
  if (currentSearchTerm) {
    const normQ = normalizeText(currentSearchTerm);
    const tokens = normQ.split(/\s+/).filter(Boolean);

    if (tokens.length > 0) {
      filtered = pool.filter(m => {
        const titleNorm = normalizeText(m.title);
        const kwNorm = normalizeText(MODEL_KEYWORDS[m.id] || '');
        const descNorm = normalizeText(m.desc);
        const tagNorm = normalizeText(m.tag || '');
        const highNorm = normalizeText((m.highlights || []).join(' '));

        return tokens.every(tok =>
          titleNorm.includes(tok) ||
          kwNorm.includes(tok) ||
          descNorm.includes(tok) ||
          tagNorm.includes(tok) ||
          highNorm.includes(tok)
        );
      });
    }
  }

  // Atualização visual dos botões de abas
  document.querySelectorAll('.cat-btn').forEach(btn => {
    const btnVal = btn.getAttribute('data-subniche') || btn.getAttribute('data-niche');
    if (btnVal === currentActiveFilter) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Atualiza contador
  if (counter) {
    counter.innerText = `${filtered.length} Modelo${filtered.length === 1 ? '' : 's'} Disponíve${filtered.length === 1 ? 'l' : 'is'}`;
  }

  // Estado Vazio
  if (filtered.length === 0) {
    const resetText = nicheConfig ? `Ver Todos os Modelos de ${nicheConfig.name}` : 'Ver Todos os Modelos';
    grid.innerHTML = `
      <div class="empty-state-box">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="1.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <p class="empty-state-title">Nenhum modelo encontrado para "${currentSearchTerm}".</p>
        <p class="empty-state-desc">Tente pesquisar por outros termos ou veja os modelos disponíveis nas abas acima.</p>
        <button class="btn btn-secondary" onclick="clearSearchFilter()">${resetText}</button>
      </div>
    `;
    return;
  }

  const categoryNames = {
    odontologia: 'Odontologia Especializada',
    saude: 'Saúde & Bem-Estar',
    gastronomia: 'Gastronomia & Delivery',
    beleza: 'Beleza & Estética',
    servicos: 'Serviços & Advocacia',
    comercio: 'Comércio Local & Pets'
  };

  grid.innerHTML = filtered.map(m => {
    const badgeClass = m.tag === 'Mais Procurado' || m.tag === 'Mais Pedido' ? 'model-badge-popular' : '';
    const chooseMsg = `Olá! Gostei muito do modelo "${m.title}" da Pixel Studio e quero colocá-lo no ar para ${params.empresa || 'minha empresa'} em ${params.cidade || 'minha cidade'}.`;
    const waUrl = buildWhatsAppUrl(chooseMsg);

    const liveBadge = m.liveUrl
      ? `<span class="browser-live-badge"><span class="dot-live-sm"></span> Ao Vivo</span>`
      : '';

    const catLabel = categoryNames[m.category] || 'Solução Digital';

    return `
      <div class="model-card">
        <div class="model-preview-box" onclick="openDemoModal('${m.id}')" title="Clique para testar este modelo no celular">
          
          <!-- BARRA SUPERIOR DO NAVEGADOR -->
          <div class="browser-mockup-header">
            <div class="browser-dots">
              <span class="browser-dot dot-red"></span>
              <span class="browser-dot dot-yellow"></span>
              <span class="browser-dot dot-green"></span>
            </div>
            <div class="browser-url-pill">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              <span>${m.id}.pixelstudio.com.br</span>
            </div>
            ${liveBadge}
          </div>

          <!-- IMAGEM DE CAPA COM PREVIEW REAL -->
          <div class="browser-image-container">
            <img src="${m.previewImg}" alt="${m.title}" class="model-cover-image" loading="lazy" />
            <div class="browser-image-overlay">
              <span class="btn-hover-demo">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="5" y="2" width="14" height="20" rx="3"></rect><line x1="12" y1="18" x2="12.01" y2="18" stroke-width="3"></line></svg>
                Testar no Celular
              </span>
            </div>
          </div>
        </div>

        <!-- CORPO DO CARD COM DESIGN BALANCEADO -->
        <div class="model-body">
          <div class="model-meta-line">
            <span class="model-category-label">${catLabel}</span>
            <span class="model-tag-pill ${badgeClass}">${m.tag}</span>
          </div>

          <h3 class="model-title">${m.title}</h3>
          <p class="model-desc">${m.desc}</p>

          <div class="model-feature-chips">
            ${m.highlights.slice(0, 4).map(h => `
              <span class="feature-chip">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                ${h}
              </span>
            `).join('')}
          </div>

          <div class="model-actions-row">
            <button class="btn btn-secondary btn-sm" onclick="openDemoModal('${m.id}')">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              Ver Demonstração
            </button>
            <a href="${waUrl}" target="_blank" class="btn btn-primary btn-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.974.532 1.831.815 2.796.815 3.183 0 5.769-2.587 5.769-5.767.001-3.18-2.584-5.766-5.769-5.766zm8.969 5.768c0 4.962-4.038 9-9 9-1.554 0-3.003-.396-4.269-1.088l-5.731 1.503 1.529-5.591c-.777-1.328-1.229-2.87-1.229-4.524 0-4.962 4.038-9 9-9s9 4.038 9 9z"/></svg>
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

// 10. MODAL DE SIMULADOR DE CELULAR AO VIVO COM SUPORTE A IFRAME & TELA CHEIA
function openDemoModal(modelId) {
  const model = MODELS_CATALOG.find(m => m.id === modelId);
  if (!model) return;

  const params = getUrlParams();
  const screen = document.getElementById('phone-screen-content');
  const activateBtn = document.getElementById('btn-phone-activate');
  const fullscreenBtn = document.getElementById('btn-phone-fullscreen');

  const nicheConfig = getNicheConfig(params.nicho);
  const companyName = params.empresa || (nicheConfig ? nicheConfig.name : (model.title || 'Sua Empresa'));
  const city = params.cidade || '';
  const citySuffix = city ? `em ${city}` : '';

  const activateMsg = `Olá! Acabei de testar o modelo "${model.title}" no simulador da Pixel Studio e decidi ativar para a ${companyName} ${citySuffix}. Como procedemos?`;
  if (activateBtn) {
    activateBtn.href = buildWhatsAppUrl(activateMsg);
  }

  // SE O MODELO TEM UM TEMPLATE HTML REAL EM modelos/
  if (model.liveUrl) {
    const separator = model.liveUrl.includes('?') ? '&' : '?';
    const liveTargetUrl = `${model.liveUrl}${separator}empresa=${encodeURIComponent(companyName)}&cidade=${encodeURIComponent(city)}&whatsapp=${encodeURIComponent(PERSONAL_WHATSAPP_PHONE)}`;

    if (fullscreenBtn) {
      fullscreenBtn.style.display = 'inline-flex';
      fullscreenBtn.href = liveTargetUrl;
    }

    screen.innerHTML = `
      <iframe src="${liveTargetUrl}" class="phone-iframe" title="${model.title}"></iframe>
    `;
  } else {
    if (fullscreenBtn) {
      fullscreenBtn.style.display = 'none';
    }

    screen.innerHTML = `
      <div class="sim-page-hero">
        <span class="sim-page-badge">Demonstração Interativa</span>
        <h3 class="sim-page-title">${model.title}</h3>
        <p class="sim-page-sub">${model.desc}</p>
        <a href="${buildWhatsAppUrl(activateMsg)}" target="_blank" class="sim-btn-wa-call">
          Ativar Este Modelo no WhatsApp
        </a>
      </div>
    `;
  }

  const modal = document.getElementById('modal-demo');
  if (modal) modal.style.display = 'flex';
}

function closeDemoModal() {
  const modal = document.getElementById('modal-demo');
  const screen = document.getElementById('phone-screen-content');
  if (modal) modal.style.display = 'none';
  if (screen) screen.innerHTML = '';
}

// 11. EVENTOS & LISTENERS COM DELEGAÇÃO DE EVENTOS
function attachEventListeners(params) {
  // Delegação de eventos nas abas de filtro (suporta abas globais e sub-abas de nicho)
  const tabsContainer = document.getElementById('niche-tabs');
  if (tabsContainer) {
    tabsContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.cat-btn');
      if (!btn) return;

      const filterVal = btn.getAttribute('data-subniche') || btn.getAttribute('data-niche');
      const searchInput = document.getElementById('catalog-search-input');
      const clearBtn = document.getElementById('btn-clear-search');
      if (searchInput) searchInput.value = '';
      if (clearBtn) clearBtn.style.display = 'none';

      renderCatalog(params, filterVal, '');
    });
  }

  // Barra de Busca Inteligente
  const searchInput = document.getElementById('catalog-search-input');
  const clearBtn = document.getElementById('btn-clear-search');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const val = e.target.value;
      if (clearBtn) {
        clearBtn.style.display = val.trim() ? 'inline-block' : 'none';
      }
      renderCatalog(params, null, val);
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      clearSearchFilter();
    });
  }

  // Fechar modal ao clicar fora ou na tecla ESC
  const modal = document.getElementById('modal-demo');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeDemoModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDemoModal();
    }
  });

  // Botões de SaaS Sob Medida genéricos (se presentes)
  document.querySelectorAll('.saas-cta').forEach(btn => {
    const saasName = btn.getAttribute('data-saas');
    const msg = `Olá! Vi na vitrine da Pixel Studio os Sistemas Sob Medida e gostaria de solicitar um projeto personalizado de "${saasName}" para a ${params.empresa || 'minha empresa'} em ${params.cidade || 'minha cidade'}.`;
    btn.href = buildWhatsAppUrl(msg);
    btn.target = '_blank';
  });
}

// 12. HELPERS
function buildWhatsAppUrl(text) {
  return `https://wa.me/${PERSONAL_WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// 13. INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', () => {
  const params = getUrlParams();
  applyContextualPersonalization(params);
  renderCatalog(params);
  attachEventListeners(params);
});
