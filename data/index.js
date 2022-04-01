export const menuLinks = [
  {
    href: "where-i-worked",
    name: "Experience"
  },
  {
    href: "about-me",
    name: "About me"
  },
  {
    href: "skills",
    name: "Skills"
  },
  {
    href: "say-about-me",
    name: "Recommendations"
  },
  {
    href: "awards-recognition",
    name: "Achievements"
  },
  {
    href: "projects",
    name: "Projects"
  }
]

export const about = [
  `
    I am a 19 years old senior fullstack developer, Informatics Technician, studying Information Systems at Uniasselvi in Blumenau-SC.
    I am always studying about web and mobile application development (because I love it).
  `,
  `Also, I like and have worked on freelance projects, helping people with smart solutions and being happy with what I do.`,
  `
    I started professionally not too much ago, on March 2020.
    Since then, I had a lot of opportunities to work with exclent and experient professionals who contributed so much for my own development.
  `
]

export const skills = [
  {
    name: 'Node.js',
    image: 'nodejs.svg',
    color: '#8CC84B'
  },
  {
    name: 'Typescript',
    image: 'typescript.svg',
    color: '#007ACC'
  },
  {
    name: 'React',
    image: 'react.svg',
    color: '#61DAFB'
  },
  {
    name: 'Vue',
    image: 'vue.svg',
    color: '#4DBA87'
  },
  {
    name: 'HTML & CSS',
    image: 'htmlcss.svg',
    color: '#E44D26'
  },
  {
    name: 'Java',
    image: 'java.svg',
    color: '#CA3132'
  },
  {
    name: 'GIT',
    image: 'git.svg',
    color: '#DE4C36'
  },
  {
    name: 'Docker',
    image: 'docker.svg',
    color: '#0091E2'
  },
  {
    name: 'NoSQL',
    image: 'nosql.svg',
    color: '#499D4A'
  },
  {
    name: 'SQL',
    image: 'sql.svg',
    color: '#00546B'
  }
]

export const jobs = [
  {
    image: "philips.svg",
    name: "Philips",
    role: "Programador Full Stack",
    content: "Iniciei em março de 2020 como estagiário e fui efetivado em outubro do mesmo ano. Esse é meu emprego atual, eu ajudo as pessoas desenvolvendo um sistema para a área da saúde usando Javascript, Java, Delphi e PL/SQL."
  },
  {
    image: "autoaprova.svg",
    name: "AutoAprova",
    role: "Programador Web Full Stack",
    content: "Trabalhei no AutoAprova temporariamente (3 meses) como freelancer desenvolvendo uma plataforma web para financiamento de veículos usando tecnologias como Adonis.js, React e MongoDB."
  },
  {
    image: "logo.svg",
    name: "Freelance",
    role: "Programador Full Stack Web",
    content: "Antes de começar a trabalhar em qualquer empresa eu desenvolvi alguns websites para comércios pequenos com finalidade de obter experiência. É um trabalho que gosto muito e ainda venho fazendo quando surgem oportunidades.",
  }
]

export const projects = [
  {
    id: "konectando",
    name: "Konectando",
    color: '#00C2CB',
    type: "Projeto em Equipe",
    repository: "github.com/RuanScherer/konectando-platform",
    description: "Uma plataforma web que conecta pessoas que precisam de dispositivos eletrônicos para educação a distância com pessoas que possuem eletrônicos não utilizados e podem doá-los.",
    logo: "konectando.svg",
    explanation: [
      "Com a pandemia do COVID-19, a equipe encontrou um novo desafio: a inclusão de alunos com baixa condição financeira na educação a distância. Pensamos em como poderíamos ajudar esses alunos a continuar estudando sem serem prejudicados e tendo os mesmos recursos que os outros. Nessa linha, tivemos a ideia de desenvolver uma plataforma que auxiliasse no engajamento em doações de eletrônicos para educação a distância, então nasceu a Konectando.",
      "Na plataforma, o papel da comunidade é simples: navegar entre as instituições cadastradas que estão recebendo doações, escolher uma, obter as informações necessárias na própria plataforma e agendar um horário com o pré-cadastro da doação.",
      "As instituições, por sua vez, recebem/administram as doações, fornecem informações de contato e localização e repassam essas doações aos alunos que realmente precisam delas (porque elas sabem quem os alunos precisam).",
    ],
    stack: [
      {
        name: 'Node.js',
        image: 'nodejs.svg'
      },
      {
        name: 'SQL',
        image: 'sql.svg',
      },
      {
        name: 'Vue',
        image: 'vue.svg',
      },
      {
        name: 'HTML & CSS',
        image: 'htmlcss.svg',
      }
    ]
  },
  {
    id: "opafood",
    name: "OpaFood!",
    color: '#F87652',
    type: "Projeto em Equipe",
    soon: true,
    repository: "github.com/RuanScherer/opa-food",
    description: "Uma solução completa para restaurantes pensando em experiência do usuário, segurança pandêmica, sustentabilidade e agilidade. A solução cobre desde o momento em que o usuário faz a reserva até o momento em que a conta é paga.",
    logo: "opafood.svg",
    explanation: [
      "Pensando em propor soluções para a área gastronômica, principalmente durante a pandemia, a equipe encontrou alguns pontos para trabalhar: segurança, experiência do usuário e agregação de valor aos restaurantes. Trabalhando nisso, desenvolvemos um protótipo de aplicação mobile que atenderia o cliente (do restaurante) desde o momento da reserva da mesa até o pagamento.",
      "De qualquer lugar, o usuário pode navegar entre os restaurantes da plataforma, encontrando o que mais gosta e tendo a possibilidade de reservar mesa (pensando em evitar aglomerações).",
      "Além disso, ao chegar ao restaurante ele escaneia um QR Code encontrado na mesa, que abrirá o cardápio do restaurante e a partir daí é possível fazer e acompanhar seus pedidos (self-service: menos contato com garçons e sem tempo de espera para ser atendido).",
      "Por fim, quando o usuário decidir, poderá visualizar a sua comanda e pagar a conta através do próprio aplicativo (sem aglomerações em filas ou contato com cobradores)."
    ],
    stack: [
      {
        name: 'Node.js',
        image: 'nodejs.svg'
      },
      {
        name: 'Typescript',
        image: 'typescript.svg'
      },
      {
        name: 'NoSQL',
        image: 'nosql.svg',
      },
      {
        name: 'React',
        image: 'react.svg',
      },
      {
        name: 'HTML & CSS',
        image: 'htmlcss.svg',
      }
    ]
  },
  {
    id: "mecsystem",
    name: "MecSystem",
    color: '#0088cc',
    type: "Projeto em Equipe",
    repository: "github.com/RuanScherer/MecSystem_Mobile",
    description: "Sistema de ponto eletrônico completo incluindo sistema embarcado, aplicação mobile, desktop e web, ambos com foco em acessibilidade para pessoas com deficiência e sustentabilidade.",
    logo: "mecsystem.png",
    explanation: [
      "Nesse projeto, a ideia da equipe não era apenas criar um sistema de ponto eletrônico, mas torná-lo sustentável e acessível.",
      "Desenvolvemos uma aplicação desktop onde os administradores podem gerenciar cadastros de funcionários, registros de ponto e relatórios (que podem ser impressos em braille para pessoas com deficiência visual).",
      "Na aplicação mobile, cada funcionário pode visualizar os principais dados de seu cadastro e todos os seus registros de ponto. O aplicativo possui vídeos de ajuda para o uso do aplicativo em linguagem de sinais para pessoas com deficiência auditiva que costumam ter problemas de alfabetização.",
      "Na aplicação web é onde o funcionário pode visualizar seu espelho de ponto (sem a necessidade de impressão para cada funcionário), e lá ele pode aceitar ou rejeitar o que foi apresentado. Relatórios sobre as respostas dos funcionários e/ou questões pendentes em relação ao espelho de ponto serão enviados aos administradores.",
      "E, claro, desenvolvemos um sistema embarcado onde a é feita a marcação do ponto usando cartões RFID."
    ],
    stack: [
      {
        name: 'HTML & CSS',
        image: 'htmlcss.svg',
      },
      {
        name: 'PHP',
        image: 'php.svg',
      },
      {
        name: 'Arduino',
        image: 'arduino.svg',
      },
      {
        name: 'SQL',
        image: 'sql.svg',
      }
    ]
  }
]

export const socialLinks = [
  {
    href: "https://www.instagram.com/ruan.scherer/",
    title: "Instagram",
    image: 'instagram.svg'
  },
  {
    href: "https://www.linkedin.com/in/ruan-scherer/",
    title: "LinkedIn",
    image: 'linkedin.svg'
  },
  {
    href: "https://www.github.com/RuanScherer/",
    title: "GitHub",
    image: 'github.svg'
  },
  {
    href: "/documents/Ruan-Scherer.pdf",
    title: "Resume",
    image: 'document.png'
  }
]

export const recommendations = [
  {
    name: "Pablo Luiz Rodrigues",
    role: "Analista de Testes Philips",
    content: `
      O Ruan é um excelente profissional, sempre preocupado em fazer o melhor e realizar as suas atividades com excelência.
      Ele é um ótimo desenvolvedor, sempre com criticas construtivas e ótimas soluções, constantemente demonstrando amplo conhecimento.
      Tive o privilégio de atuar com ele em projetos e é uma pessoa que é ótima para trabalhar em equipe, pois é aberto a trocas de ideias e ao compartilhamento de conhecimento, sempre somando, agregando e contribuindo com o time.
      [...]
      Profissional de primeira linha, que tem um futuro brilhante pela frente e aqueles que puderem trabalhar com ele, certamente terão uma grande experiência.
      [...]
    `
  },
  {
    name: "Vilson Moro",
    role: "Professor na UDESC",
    content: `
      Atuei como professor do Ruan, enquanto ele cursava o Técnico de Informática no CedupHH. É uma pessoa com um ótimo relacionamento interpessoal. 
      Tem atitude, não espera as coisas acontecerem, ele participa ativamente. Procurava sempre atingir a excelência em todas as atividades propostas. 
      Nas aulas, sempre procurava fazer, além do que era proposto em sala. Sempre questionador, procurando inovar na proposta de soluções para os problemas apresentados. 
    `
  },
  {
    name: "Brigiane Cardoso",
    role: "Analista de Testes na Philips",
    content: `
      Trabalhei com Ruan num projeto de Lei de proteção de dados, Ruan além de ser um ótimo programador está sempre preocupado com a auxiliar para juntos criarmos um produto de mais qualidade.
    `
  }
]

export const awardsAndRecongition = [
  {
    title: "Projeto Revelação",
    institution: "Hackathon Shift Community",
    content: "Eu e minhas equipes fomos premiados na categoria Projetos Revelação do ano com os projetos OpaFood e Konectando."
  },
  {
    title: "Top 3",
    institution: "NASA Space Apps COVID-19 Challenge",
    content: 'Desenvolvemos um projeto que ficou entre os 3 melhores do Desafio COVID-19 do NASA Space Apps "The Isolation Solution". "'
  },
  {
    title: "Vencedor do Desafio Connecty Pay",
    institution: "Hack Pela Gastronomia",
    content: "Desenvolvemos uma solução completa para restaurantes pensando na experiência do usuário, segurança em tempos de pandemia, sustentabilidade e agilidade."
  },
  {
    title: "Second place",
    institution: "Inter Hack Shift",
    content: "Com um projeto de ponto eletrônico sustentável e acessível, minha equipe e eu alcançamos o segundo lugar neste hackathon.",
    hidden: true
  },
  {
    title: "Maximum grade",
    institution: "TCC",
    content: "Obtive nota máxima no meu trabalho de conclusão de curso de técnico em informática.",
    hidden: true
  },
  {
    title: "Winner",
    institution: "Hackathon Shift Smart Cities",
    content: "Este foi meu primeiro hackathon, onde desenvolvi uma pequena solução com a equipe para rastrear veículos roubados.",
    hidden: true
  }
]