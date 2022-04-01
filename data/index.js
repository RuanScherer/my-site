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
    role: "Tests Analyst at Philips",
    content: `
      Ruan is an excellent professional, always concerned with doing his best and carrying out his activities with excellence.
      He's a great developer, always with constructive criticism and great solutions, constantly demonstrating extensive knowledge.
      I had the privilege of working with him on projects and he's a person who is great to work in a team, as he's open to exchanging ideas and sharing knowledge, always adding and contributing to the team.
      [...]
      A top-notch professional, who has a bright future ahead of him and those who can work with him will certainly have a great experience.
      [...]
    `
  },
  {
    name: "Vilson Moro",
    role: "Professor at UDESC",
    content: `
      I worked as Ruan's teacher, while he was studying Computer Technician at Cedup Hermann Hering. He's a person with a great interpersonal relationship. 
      He has an attitude, he doesn't wait for things to happen, he actively participates. He always sought to achieve excellence in all proposed activities. 
      In class, he always tried to do more than what was proposed in class. Always questioning, seeking to innovate in the proposal of solutions for the presented problems.
    `
  },
  {
    name: "Brigiane Cardoso",
    role: "Tests Analyst at Philips",
    content: `
      I worked with Ruan on a data protection law project, besides being a great programmer, Ruan is always concerned with helping us to create a better quality product together.
    `
  }
]

export const awardsAndRecongition = [
  {
    title: "Revelation Project",
    institution: "Hackathon Shift Community",
    content: 'My teams and I were awarded in the "Revelation Projects" category with the OpaFood and Konectando projects.'
  },
  {
    title: "Top 3",
    institution: "NASA Space Apps COVID-19 Challenge",
    content: 'We developed a project that was among the top 3 of the NASA Space Apps COVID-19 Challenge "The Isolation Solution".'
  },
  {
    title: "Connecty Pay Challenge Winner",
    institution: "Hack Pela Gastronomia",
    content: "We developed a complete solution for restaurants thinking about user experience, safety in times of pandemic, sustainablity and agilty."
  },
  {
    title: "Second place",
    institution: "Inter Hack Shift",
    content: "With a sustainable and accessible electronic point project, my team and I achieved second place in this hackathon.",
    hidden: true
  },
  {
    title: "Maximum grade",
    institution: "TCC",
    content: "I got the maximum grade on my computer technician course conclusion work.",
    hidden: true
  },
  {
    title: "Winner",
    institution: "Hackathon Shift Smart Cities",
    content: "That was my first hackathon, where my team and I developed a small solution to track stolen vehicles",
    hidden: true
  }
]