// Knowledge base for the portfolio chatbot (read by api/chat.js).
// Anything marked TODO is still a placeholder: fill it in so the bot can answer
// with real details. Empty/TODO fields are treated as "unknown" by the bot.

const profile = {
  name: 'Ivant',
  tagline: 'Full Stack Developer, Data Analyst & Virtual Assistant',
  roles: ['Full Stack Developer', 'Virtual Assistant', 'Data Analyst'],

// TODO: write a short real bio (education, background, what you enjoy).

bio: 'I am an Information Technology graduate with a specialization in Information Management from Central Mindanao University, where I graduated Cum Laude. I have experience in software development, automation, data analytics, and AI-powered applications. I enjoy building practical systems, improving workflows, working with data, and using technology and AI to solve real-world problems.',

// TODO: real years of experience, education, work history.

experience: [
  {
    role: 'Full Stack and Automation Developer',
    company: 'Lumen & Forge',
    period: 'March 2026 – July 2026',
    description: 'Worked on web applications, business automation, CRM workflows, AI voice and chat agents, and internal systems using technologies such as React, TypeScript, Supabase, Airtable, Make, and Google Cloud.'
  },
  {
    role: 'Computer Programmer',
    company: 'Split Second Software Services',
    period: 'November 2024 – March 2026',
    description: 'Developed and maintained software applications, worked with Laravel and Vue, Python, databases, APIs, Docker, GitHub, and AI-powered applications. Contributed to the development of a ChatGPT-powered chatbot system.'
  }
],

education: [
  {
    degree: 'Bachelor of Science in Information Technology – Information Management',
    school: 'Central Mindanao University',
    period: '2020 – 2024',
    achievement: 'Cum Laude'
  },
  {
    degree: 'Senior High School',
    school: 'Kiburiao National High School',
    period: '2014 – 2020',
    achievement: 'With High Honor'
  }
],

  // Self-rated proficiency, 0-100 (same values as the Skills section).
  skills: [
    { name: 'Laravel', level: 90 },
    { name: 'Vue.js', level: 85 },
    { name: 'PHP', level: 88 },
    { name: 'Python', level: 80 },
    { name: 'MongoDB', level: 78 },
    { name: 'MySQL', level: 82 },
    { name: 'Docker', level: 70 },
    { name: 'Git & GitHub', level: 85 },
    { name: 'AI Integration', level: 82 },
    { name: 'Canva', level: 88 },
  ],

  services: [
    {
      title: 'Web Development',
      desc: 'Fast, responsive websites and web apps built end to end.',
      points: ['Laravel & Vue.js apps', 'REST APIs & databases', 'Deployment with Docker'],
    },
    {
      title: 'Virtual Assistance',
      desc: 'Reliable day-to-day support so you can focus on growth.',
      points: ['Inbox & calendar management', 'Customer support', 'Research & admin tasks'],
    },
    {
      title: 'Data Analysis',
      desc: 'Turning raw data into clear, decision-ready insights.',
      points: ['Data cleaning & reporting', 'Dashboards & visuals', 'Python-based analysis'],
    },
    {
      title: 'Graphic Design',
      desc: 'On-brand visuals that make your business look the part.',
      points: ['Social media graphics', 'Presentations & documents', 'Brand kits in Canva'],
    },
    {
      title: 'AI & Automation',
      desc: 'Smarter workflows that save hours of repetitive work.',
      points: ['AI tool integration', 'Workflow automation', 'Chatbot setup'],
    },
  ],

  // TODO: replace with real projects (title, description, tech, link).
  projects: [],

  // TODO: real contact details. The site's contact form is the fallback.
  contact: {
    email: '',
    phone: '',
    location: '',
    socials: [],
  },
}

export default profile
