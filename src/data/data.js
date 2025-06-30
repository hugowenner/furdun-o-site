// src/data/data.js

export const headerData = {
  logoText: "Furdunço",
  navLinks: [
    { name: "Início", href: "#home" },
    { name: "Quem Somos", href: "#quem-somos" },
    { name: "Serviços", href: "#servicos" },
    { name: "Alugue um Nicho", href: "#nichos" },
    { name: "Fazer Parte", href: "#fazer-parte" },
  ],
  buttonText: "Fazer Inscrição"
};

export const heroData = {
  mainTitle: "Bem-vindo ao nosso Furdunço",
  subTitle: "Loja Colaborativa",
  description: "Mercado Novo, BH\nEspaço Colaborativo",
  exploreButton: {
    text: "Quem somos nós",
    icon: "Users"
  },
  producerButton: {
    text: "Faça sua inscrição",
    icon: "ArrowRight"
  },
  cards: [
    { icon: "Heart", title: "Essência Colaborativa", desc: "Cada peça é um elo de carinho, unindo produtores e consumidores em uma rede de afeto." },
    { icon: "Leaf", title: "Crescimento Responsável", desc: "Juntos, cultivamos um consumo que respeita a natureza e as pessoas." },
    { icon: "Users", title: "União que Transforma", desc: "Mais que uma loja, somos um espaço de apoio mútuo e prosperidade coletiva." }
  ]
};

export const aboutData = {
  id: "quem-somos",
  title: "QUEM SOMOS",
  description: "No epicentro do agito cultural do Mercado Novo, o Furdunço impulsiona. Somos o ponto de encontro que aproxima a alma criativa de pequenos produtores do público de BH.",
  descriptionPart2: "Oferecemos nichos acessíveis para transformar sua paixão em negócio. Um lugar para expor, vender e crescer, de forma descomplicada. É simples, colaborativo e feito para quem cria.",
  imageSrc: "/assets/mercadonovo03.png" // Adicione o caminho da sua imagem aqui
};

export const servicesData = {
  id: "servicos",
  title: "Serviços",
  description: "Oferecemos todo o suporte para que você, pequeno produtor, possa focar no que faz de melhor: criar. Conheça os benefícios de fazer parte do nosso coletivo.",
  features: [
    { icon: "ShoppingCart", text: "Gestão de Vendas Online", subtext: "Sistema online para cadastro de produtos, gestão de estoque e análise de vendas." },
    { icon: "Users", text: "Vendedores", subtext: "Profissionais engajados e qualificados, atendimento presencial e virtual ao cliente e também ao empreendedor." },
    { icon: "Award", text: "Exposição e Vendas", subtext: "Espaço de destaque no Mercado Novo, parcelamento de vendas e fornecimento de embalagem para os produtos." },
    { icon: "Clock", text: "Oficinas", subtext: "Única loja colaborativa com disponibilidade de aluguel de espaço exclusivo para workshops." }
  ]
};

export const nichosData = {
  id: "nichos",
  title: "Alugue um Nicho",
  rentalInfo: {
    periodLabel: "Período:",
    salesFeeLabel: "Taxa sobre vendas:",
    defaultPeriod: "28 dias",
    defaultSalesFee: "23%"
  },
  items: [
    {
      numero: 1,
      valor: "R$ 180",
      largura: "60 cm",
      altura: "35 cm",
      profundidade: "50 cm",
      imgSrc: "/assets/nicho01.png"
    },
    {
      numero: 2,
      valor: "R$ 280",
      largura: "60 cm",
      altura: "70 cm",
      profundidade: "50 cm",
      imgSrc: "/assets/nicho02.png"
    },
    {
      numero: 3,
      valor: "R$ 200",
      largura: "60 cm",
      altura: "90 cm",
      profundidade: "50 cm",
      imgSrc: "/assets/nicho03.png"
    },
    {
      numero: 4,
      valor: "R$ 320",
      largura: "60 cm",
      altura: "130 cm",
      profundidade: "50 cm",
      imgSrc: "/assets/nicho04.png"
    },
    {
      numero: 5,
      valor: "R$ 380",
      largura: "125 cm",
      altura: "90 cm",
      profundidade: "50 cm",
      imgSrc: "/assets/nicho05.png"
    }
  ]
};


export const ctaData = {
  id: "fazer-parte",
  title: "QUER FAZER PARTE?",
  description: "Clique no botão abaixo e preencha nosso formulário para entrar na lista de espera!",
  mainButton: {
    text: "FAZER INSCRIÇÃO",
    icon: "ArrowRight"
  },
  secondaryButton: {
    text: "Saiba Mais"
  }
};

export const footerData = {
  logoText: "Furdunço",
  description: "Um espaço colaborativo que celebra a criatividade local e a economia consciente, conectando talentos e consumidores em Belo Horizonte.", // Exemplo de descrição mais elaborada
  socialButton: {
    icon: "Instagram",
    text: "Ver no Instagram",
    url: "https://www.instagram.com/furdunco.colaborativa?igsh=emxlOG1uamtqaHI5" // Link real do Instagram
  },
  navigation: [
    { href: "#home", name: "Início" },
    { href: "#about", name: "Quem Somos" },
    { href: "#services", name: "Serviços" },
    { href: "#nichos", name: "Alugue um Nicho" },
    { href: "#participate", name: "Fazer Parte" }, // Adicione o href correto para "Fazer Parte"
  ],
  support: [
    { href: "#help-center", name: "Central de Ajuda" }, // Adicione o href correto
    { href: "#terms", name: "Termos de Uso" }, // Adicione o href correto
    { href: "#privacy", name: "Privacidade" }, // Adicione o href correto
  ],
  contact: {
    email: "contato@furdunco.com.br", // Sugestão de e-mail
    phone: "(31) 9999-9999",       // Sugestão de telefone
    address: "Av. Olegário Maciel, 742 - Loja 2010 - Centro, Belo Horizonte - MG, 30180-110",
    social: [] // Manter vazio para não exibir ícones sociais no contato do rodapé
  },
  copyright: "© 2025 Furdunço Loja Colaborativa. Todos os direitos reservados."
};