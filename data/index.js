export const about = [
  `
    I'm 18 years old, I graduated with a computer technician and I study Information Systems at Uniasselvi in ​​Blumenau-SC. 
    In addition, I am always studying web and mobile development in my spare time, because I love it.
  `,
  `I also like and have been taking on freelance jobs, helping people with solutions and having fun programming.`,
  `
    I started professionally not too long ago, in March 2019. 
    Since then, I had the opportunity to work with very experienced professionals who are great at what they do, and who undoubtedly contributed a lot to me.
  `
]

export const skills = [
  {
    name: 'Node.js',
    image: 'nodejs.svg',
    level: 77,
    color: '#8CC84B'
  },
  {
    name: 'Typescript',
    image: 'typescript.svg',
    level: 79,
    color: '#007ACC'
  },
  {
    name: 'React',
    image: 'react.svg',
    level: 76,
    color: '#61DAFB'
  },
  {
    name: 'Vue',
    image: 'vue.svg',
    level: 44,
    color: '#4DBA87'
  },
  {
    name: 'HTML & CSS',
    image: 'htmlcss.svg',
    level: 80,
    color: '#E44D26'
  },
  {
    name: 'Java',
    image: 'java.svg',
    level: 60,
    color: '#CA3132'
  },
  {
    name: 'GIT',
    image: 'git.svg',
    level: 71,
    color: '#DE4C36'
  },
  {
    name: 'Docker',
    image: 'docker.svg',
    level: 35,
    color: '#0091E2'
  },
  {
    name: 'NoSQL',
    image: 'nosql.svg',
    level: 69,
    color: '#499D4A'
  },
  {
    name: 'SQL',
    image: 'sql.svg',
    level: 73,
    color: '#00546B'
  }
]

export const jobs = [
  {
    image: "philips.svg",
    name: "Philips",
    role: "Full Stack Developer",
    content: "I started here in March 2019 as an intern and was hired in October of the same year. This is my current job, I develop a health system using Javascript, Java, Delphi and PL/SQL."
  },
  {
    image: "autoaprova.svg",
    name: "AutoAprova",
    role: "Full Stack Web Developer",
    content: "I worked at AutoAprova temporarily (3 months) as a freelancer developing a web platform for vehicle financing using technologies such as Adonis.js, React and MongoDB."
  },
  {
    image: "logo.svg",
    imageSize: "-left-0 -top-5 lg:-left-6 lg:-top-6 w-28 lg:w-40",
    name: "Freelance",
    role: "Full Stack Web Developer",
    content: "Before I started working in any company, I developed small websites for businesses in order to obtain exercise.",
  }
]

export const projects = [
  {
    id: "konectando",
    name: "Konectando",
    color: '#00C2CB',
    type: "Team Project",
    repository: "github.com/RuanScherer/konectando-platform",
    description: "A web platform that connects people who need electronic devices for distance education with people who have unused electronics and can donate them.",
    logo: "konectando.svg",
    explanation: [
      "With the COVID-19 pandemic, the team found a new challenge: the inclusion of students with low financial conditions in distance education. We thought about how we could help these students to continue studying without being harmed and having the same resources as others. Following this line, we had the idea of ​​developing a platform that helps with the engagement in donations of electronics for distance education, so Konectando was born.",
      "On the platform, the community's role is simple: navigate between the registered institutions that are receiving donations, choose one, obtain the necessary information on the platform itself and then schedule a time with pre-registration of the donation.",
      "The institutions for their part will receive/manage donations, provide contact and location information, and pass on these donations to students who really need them (because schools have knowledge about who students are in need).",      
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
    type: "Team Project",
    soon: true,
    repository: "github.com/RuanScherer/opa-food",
    description: "A complete solution for restaurants with a user experience in mind, pandemic safety, sustainability and agility. The solution covers from the moment the user makes the reservation until the moment the bill is paid.",
    logo: "opafood.svg",
    explanation: [
      "Thinking about proposing solutions for the gastronomic area, especially during the pandemic, the team found some points to work on: safety, user experience and adding value to restaurants. Working on this, we developed a prototype of a mobile platform that would serve the customer (from the restaurant) from the moment of table reservation until payment.",
      "From anywhere, the user can navigate between the restaurants on the platform, finding the one he likes best and then having the possibility to book a table (thinking about avoiding crowds).",
      "In addition, when he arrives at the restaurant he scans a QR Code found on the table, which will open the restaurant's menu and from there it is possible to place and track your orders (self-service: less contact with waiters and no waiting time to be served).",
      "Finally, when the user decides, he can view the description and the total of his orders and then pay his bill through the app itself (without agglomerations in queues or contact with collectors)."
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
    type: "Team Project",
    repository: "github.com/RuanScherer/MecSystem_Mobile",
    description: "Complete electronic point system including embedded system, mobile, desktop and web application, both with a focus on accessibility for people with disabilities and sustainability.",
    logo: "mecsystem.png",
    explanation: [
      "In this project, the team's idea was not just to create an electronic point application, but to make it sustainable and accessible.",
      "We have developed a desktop application where administrators can manage employee records, time stamps and reports (which could be printed on braille for people with visual impairments).",
      "In the mobile application, each employee could view the main data of their registration and all their point records. The app has help videos for using the application in sign language for people with hearing impairments who usually have literacy problems.",
      "In the web application is where the employee can view his point mirror (without the need for printing for each employee), and there he can accept or reject what was presented. Reports on the employees' responses and / or pending issues regarding the point mirror will be sent to the administrators.",
      "And, of course, we developed an embedded system where the actual point marking is made using radio frequency cards."
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
    href: "/Ruan-Scherer.pdf",
    title: "Curriculum",
    image: 'document.png'
  }
]

export const recommendations = [
  {
    name: "Pablo Luiz Rodrigues",
    role: "Tests Analyst at Philips",
    content: `
      Ruan is an excellent professional, always concerned with doing the best and carrying out his activities with excellence.
      He is a great developer, always with constructive criticism and great solutions, constantly demonstrating extensive knowledge.
      I had the privilege of working with him on projects and he is a person who is great at working as a team, as he is open to exchanging ideas and sharing knowledge, always adding, adding and contributing to the team.
      [...]
      First-rate professional, who has a bright future ahead and those who can work with him, will certainly have a great experience.
      [...]
    `
  },
  {
    name: "Vilson Moro",
    role: "Professor at UDESC",
    content: `
      I worked as a professor at Ruan, while he was studying Computer Technician at CedupHH. He is a person with a great interpersonal relationship. 
      They have an attitude, they don't expect things to happen, they actively participate. He always sought to achieve excellence in all proposed activities. 
      In classes, he always tried to do more than what was proposed in class. Always questioning, seeking to innovate in the proposal of solutions to the problems presented.
    `
  },
  {
    name: "Brigiane Cardoso",
    role: "Tests Analyst at Philips",
    content: `
      I worked with Ruan on a project, Ruan besides being a great programmer is always concerned with helping us create a better quality product.
    `
  }
]

export const awardsAndRecongition = [
  {
    title: "Revelation Project",
    institution: "Comunidade Hackathon Shift",
    content: "My teams and I were awarded in the category of Revelation Projects of the year with OpaFood and Konectando projects."
  },
  {
    title: "Top 3",
    institution: "NASA Space Apps COVID-19 Challenge",
    content: 'We developed a project that was among the 3 finalists of the NASA Space Apps COVID-19 Challenge "The Isolation Solution" challenge."'
  },
  {
    title: "Connecty Pay Challenge Winner",
    institution: "Hack Pela Gastronomia",
    content: "We have developed a complete solution for restaurants thinking about user experience, safety during pandemic times, sustainability and agility."
  },
  {
    title: "Second Place",
    institution: "Inter Hack Shift",
    content: "With a sustainable and accessible electronic point project, my team and I reached second place in this hackathon.",
    hidden: true
  },
  {
    title: "Maximum Grade",
    institution: "Final Paper",
    content: "I obtained maximum grade in my final paper of the computer technician course.",
    hidden: true
  },
  {
    title: "Winner",
    institution: "Hackathon Shift Smart Cities",
    content: "This was my first hackathon, where I developed a small solution with the team to track stolen vehicles.",
    hidden: true
  }
]