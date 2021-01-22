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