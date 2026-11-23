// Knowledge base for the portfolio chatbot (read by api/chat.js).
// Anything marked TODO is still a placeholder: fill it in so the bot can answer
// with real details. Empty/TODO fields are treated as "unknown" by the bot.

const profile = {
  name: 'Ivant Fred Ondoy',
  brand: 'VantixFlow',
  tagline: 'Full Stack & AI Automation Developer',
  roles: ['Full Stack Developer', 'AI Automation Developer'],

// TODO: write a short real bio (education, background, what you enjoy).

bio: 'I am an Information Technology graduate with a specialization in Information Management from Central Mindanao University, where I graduated Cum Laude. I have experience in software development, automation, and AI-powered applications. I enjoy building practical systems, improving workflows, and using technology and AI to solve real-world problems.',

// TODO: real years of experience, education, work history.

experience: [
  {
    role: 'Full Stack and Automation Developer',
    company: 'Lumen & Forge',
    period: 'March 2026 – July 2026',
    description: 'Built the Bid Vault System (React, TypeScript, Supabase), automated workflows with Make and Google Cloud, built CRM pipelines in GoHighLevel and Airtable, and integrated AI voice and chat agents using LLM technologies.'
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

  // Skills grouped the way the resume does, AI Automation first.
  skillGroups: [
    {
      title: 'AI Automation',
      items: ['Make.com', 'GoHighLevel', 'Zapier', 'Airtable', 'AI Voice & Chat Agents',
        'Prompt Engineering', 'OpenAI & Gemini APIs', 'Prism PHP'],
    },
    {
      title: 'Full Stack Development',
      items: ['React', 'TypeScript', 'Vue.js', 'Laravel', 'Livewire', 'PHP', 'JavaScript',
        'Python', 'HTML & CSS', 'Tailwind CSS'],
    },
    {
      title: 'Databases & Backend',
      items: ['Supabase', 'MongoDB', 'MySQL', 'FastAPI', 'REST APIs', 'API Integrations'],
    },
    {
      title: 'Cloud & DevOps',
      items: ['Google Cloud Platform', 'Docker', 'Git & GitHub', 'Vercel'],
    },
    {
      title: 'Data & Machine Learning',
      items: ['Data Analysis', 'Machine Learning', 'Deep Learning'],
    },
    {
      title: 'Design',
      items: ['Canva'],
    },
  ],

  services: [
    {
      title: 'AI & Automation',
      desc: 'Smarter workflows that save hours of repetitive work.',
      points: ['Make, GoHighLevel & Zapier workflows', 'AI chat & voice agents', 'CRM & pipeline automation'],
    },
    {
      title: 'Web Development',
      desc: 'Fast, responsive websites and web apps built end to end.',
      points: ['React, Vue.js & Laravel apps', 'REST APIs & Supabase backends', 'Deployment with Docker'],
    },
    {
      title: 'Graphic Design',
      desc: 'On-brand visuals that make your business look the part.',
      points: ['Social media graphics', 'Presentations & documents', 'Brand kits in Canva'],
    },
  ],

  projects: [
    {
      title: 'Document Tracking System (DTMS)',
      description: "Designed and developed for the Secretariat of the Mayor's Office using Laravel, in coordination with the IT Department Manager.",
      tech: ['Laravel', 'Livewire', 'MySQL'],
      code: 'https://github.com/AybanFred/lgu-file-tracking',
      demo: 'https://drive.google.com/file/d/1Cl8q2XKppyaoKEpzmYAobNPWgzhl7FrQ/view?usp=sharing',
    },
    {
      title: 'Remind Me',
      description: 'Productivity web app with a task list, Kanban board, calendar, Pomodoro timer and an AI coach. Built with Vue 3 and Supabase.',
      tech: ['Vue 3', 'Supabase', 'Tailwind CSS'],
      code: 'https://github.com/AybanFred/remind-me',
    },
    {
      title: 'VantixFit AI',
      description: 'AI job-hunting app that matches a job description to your profile and generates a tailored resume and cover letter. Built with Ionic, Vue 3, FastAPI and Supabase.',
      tech: ['Vue 3', 'FastAPI', 'Supabase', 'Ionic'],
      code: 'https://github.com/AybanFred/jobfit-ai',
    },
  ],

  // AI automation and professional work (client details kept private).
  caseStudies: [
    {
      title: 'Workflow Automation: Make, GoHighLevel & Airtable',
      description: 'Built automated pipelines that connect CRMs, databases and Google Cloud services with Make, GoHighLevel and Airtable, so data stays in sync across platforms.',
    },
    {
      title: 'AI Voice & Chat Agents',
      description: 'Integrated LLM-powered voice and chat agents for conversational support and workflow assistance, and built ChatGPT/Gemini-powered chatbots with Prompt Engineering and Prism PHP.',
    },
    {
      title: 'Bid Vault System',
      description: 'Full-stack secure document-management web app for business workflows, built with React, TypeScript and Supabase.',
    },
    {
      title: 'Advanced Path Analysis System',
      description: 'Web platform for data processing and visualization, built with Laravel, Vue.js, MongoDB and Python.',
    },
  ],

  contact: {
    email: 'ivantondoy199@gmail.com',
    phone: '+63 992 698 4808',
    location: 'Quezon, Bukidnon, Philippines',
    socials: [
      { name: 'GitHub', url: 'https://github.com/AybanFred' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ivantfredondoy/' },
    ],
  },
}

export default profile
