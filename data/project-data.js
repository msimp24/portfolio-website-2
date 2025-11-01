let data = [
  {
    title: 'Effortless HQ – Invoicing Platform',
    desc: 'Small-business invoicing system with automated job → invoice → email workflows, employee accounts, dashboards, and PocketBase authentication.',
    img: '/images/effortlesshq.png',
    tech: ['ExpressJS', 'NodeJS', 'EJS', 'Alpine JS', 'Pocketbase'],
    slug: 'effortless-hq',
    link: 'https://effortless-hq.com',
  },
  {
    title: 'HomR – Real-Estate Platform (In Progress)',
    desc: 'Full-stack real-estate platform for homeowners to list properties, manage offers, and collaborate with service partners.',
    img: '/images/homr-1.png',
    tech: ['NodeJS', 'ExpressJS', 'PocketBase', 'EJS', 'Alpine.js'],
    slug: 'homr',
    link: 'http://159.203.30.183:1000',
  },
  {
    title: 'Hockey Life Abroad',
    desc: 'Full-stack platform helping hockey players research European cities, leagues, and teams before they move there. Includes travel tools, reviews, and user content features.',
    img: '/images/hockey-life-abroad.png',
    tech: ['Node.js', 'Express.js', 'JavaScript', 'SQLite'],
    slug: 'hockey-life-abroad',
    link: 'https://hockeylifeabroad.com',
  },

  {
    title: 'Hockey Training AI App',
    desc: 'AI-powered hockey training tool that generates personalized workouts based on player equipment and skill goals. Built with a lightweight vanilla JS stack.',
    img: '/images/hockey-training-2.png',
    tech: ['Node.js', 'Express.js', 'JavaScript', 'SQLite'],
    slug: 'hockey-ai',
    link: 'https://hockey-training-ai.com',
  },
]

let projectDetails = [
  {
    title: 'Effortless HQ – Invoicing App',
    slug: 'effortless-hq',
    shortDesc:
      'Full-stack invoicing system with user accounts, automated email workflows, and admin dashboards.',
    description:
      'Effortless HQ is a full-stack small-business invoicing platform that automates job completion workflows, invoice creation, and email notifications. The system includes PocketBase authentication, relational data modeling for users, jobs, and invoices, and an admin dashboard for managing teams and operations. Built for real business use, it focuses on clean backend logic, automation, and a simple user-friendly UI.',
    keyFeatures: [
      'PocketBase authentication & admin panel',
      'Automated job → invoice → email workflows',
      'Employee & admin dashboards',
      'Relational data schema for jobs and invoices',
      'Stripe integration for monthly subscription',
      'Production deployment with SSL & domain',
    ],
    tech: [
      'Node.js',
      'Express',
      'PocketBase',
      'EJS',
      'JavaScript',
      'CSS',
      'HTML',
      'REST APIs',
      'Resend',
      'DigitalOcean',
      'Stripe',
    ],
    websiteLink: 'https://effortless-hq.com',
    img: '/images/effortlesshq-2.png',
  },

  {
    title: 'Hockey Life Abroad',
    slug: 'hockey-life-abroad',
    shortDesc:
      'Research destinations, leagues, and lifestyle before signing a hockey contract overseas.',
    description:
      'Hockey Life Abroad is a custom-built platform that helps players evaluate European leagues and cities before signing contracts. Built without frontend frameworks, it includes a relational database, SSR pages, user-generated reviews, and a travel tool powered by Google Maps. Designed for real-world use by players moving overseas, it focuses on speed, simplicity, and practical UX.',
    keyFeatures: [
      'Custom relational DB + API logic',
      'User-generated reviews & discussion boards',
      'Google Maps API travel tool',
      'Stripe integration to get premium features',
      'Fast server-side rendering (no frameworks)',
    ],
    tech: [
      'Node.js',
      'Express',
      'SQLite',
      'EJS',
      'JavaScript',
      'CSS',
      'HTML',
      'Google Maps API',
      'Stripe',
      'DigitalOcean',
    ],
    websiteLink: 'https://hockeylifeabroad.com',
    img: '/images/hockey-life-abroad-2.png',
  },

  {
    title: 'Hockey Training AI App',
    slug: 'hockey-ai',
    shortDesc:
      'AI-powered training assistant generating personalized workout plans for hockey players.',
    description:
      'This AI-powered hockey training app generates structured workout plans based on player equipment and development goals. The platform uses a lightweight tech stack with vanilla JavaScript and Express, integrates Stripe for premium training access, and stores user history in SQLite. Built to demonstrate real-world AI application design, schema planning, and payment workflows.',
    keyFeatures: [
      'AI-generated structured training plans',
      'Equipment-based and skill-goal inputs',
      'Stripe payment system',
      'SQLite user + workout history storage',
      'Lightweight vanilla JS architecture',
    ],
    tech: [
      'Node.js',
      'Express.js',
      'JavaScript',
      'HTML',
      'CSS',
      'SQLite',
      'Stripe API',
      'OpenAI API',
      'DigitalOcean',
    ],
    websiteLink: 'https://hockey-training-ai.com',
    img: '/images/hockey-training-1.png',
  },

  {
    title: 'HomR – Real Estate Platform (In Progress)',
    slug: 'homr',
    shortDesc:
      'Property marketplace with offers, negotiations, and partner workflow system.',
    description:
      'HomR is a full-stack real-estate platform allowing homeowners to list properties, receive offers, and connect with service partners such as lawyers and inspectors. It features listing management, negotiation workflows, and partner onboarding, built with PocketBase authentication and storage. The project demonstrates marketplace design, user roles, and automated operational workflows.',
    keyFeatures: [
      'Property listing and management system',
      'Offer and negotiation flow',
      'Partner onboarding and profiles',
      'PocketBase auth + media storage',
      'Automated backend workflows',
    ],
    tech: [
      'Node.js',
      'Express',
      'PocketBase',
      'EJS',
      'Alpine.js',
      'JavaScript',
      'CSS',
      'HTML',
      'REST APIs',
    ],
    websiteLink: 'http://159.203.30.183:1000',
    img: '/images/homr-2.png',
  },
]

module.exports = { data, projectDetails }
