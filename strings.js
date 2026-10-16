// Edit this file to update portfolio copy, labels, descriptions, and metadata.
window.PORTFOLIO_STRINGS = {
  site: {
    owner: 'Jhustine Cortuna',
    role: 'CONCEPT DESIGNER & ARTIST',
    email: 'Jhustinel.cortuna@gmail.com',
    pageTitle: 'Jhustine Cortuna — Concept Designer & Artist',
    description: 'Jhustine Cortuna is a 4th-year BSIT student from National University-Manila, interested in creating art and designing! Conceptualizing one-step at a time.',
    // footerNote: '',
    emailLinkLabel: 'Email me!'
  },
  navigation: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contacts',
    ariaLabel: 'Main Navigation',
    homeLinkLabel: 'Jhustine Cortuna, home',
    themeToLight: 'Switch to light theme',
    themeToDark: 'Switch to dark theme'
  },
  home: {
    titleFirst: 'Hello, I’m Jhustine',
    titleSecond: '& This is my PORTFOLIO.',
    description: 'I am an aspiring concept designer and an artist, currently a 4th-year BSIT student from National University-Manila. I am interested in creating art and designing! Conceptualizing one-step at a time.',
    projectsLink: 'Check out my work',
    aboutLink: 'Get to know me here!', //<--add a shadow effect when hovering over all button link
    profileImageAlt: 'Portrait illustration of a red-haired person wearing a pink animal hat',
    // visualLabel: 'Abstract illustration of a creative workspace',
    visualStamp: 'J / C',
    // visualTitleFirst: 'Useful things.',
    // visualTitleSecond: 'Beautifully.',
    // visualCaption: 'A little structure, a lot of imagination.',
    introEyebrow: 'A CREATIVE PARTNER',
    intro: 'Canva · Figma · Adobe Photoshop · Adobe Illustrator · Adobe After Effects · Blender · Unity · Clip Studio Paint',

    selectedWork: 'SELECTED WORK · 2023—2026',
    selectedTitle: 'A few things I’ve made.',
    allProjectsLink: 'All projects',
    ctaEyebrow: 'GOT SOMETHING IN MIND? WANNA TALK ABOUT IT? ',
    ctaFirst: 'Hey! You should',
    ctaSecond: 'commision me ;)',
    ctaLink: 'Message ME'
  },
  about: {
    eyebrow: 'CHECK THIS OUT',
    titleFirst: 'Still Learning, Growing,',
    titleSecond: 'And Discovering.',
    description: 'I am Jhustine Cortuna, a multidisciplinary designer and an aspiring artist who cares about making and creating things.',
    imageLabel: 'Abstract sun and shapes in warm colors',
    imageWord: 'stay curious',
    imageNote: 'Somewhere between logic & magic',
    storyEyebrow: 'THE SHORT VERSION',
    storyTitle: 'Good work starts with listening.',
    paragraphs: [
      'I work at the intersection of design and technology, helping people and teams turn complex ideas into digital products that feel simple, useful, and a little unexpected.',
      'My process is collaborative and considered: ask better questions, make room for different perspectives, and sweat the small things that make an experience feel just right.',
      'Outside of work, you’ll find me looking for a new walking route, collecting cookbooks, or attempting to keep a houseplant alive.'
    ],
    valuesEyebrow: 'WHAT I BELIEVE',
    valuesTitle: 'The way matters, too.',
    values: [
      { title: 'People first', description: 'The best solutions begin with real needs, honest conversations, and a little empathy.' },
      { title: 'Keep it curious', description: 'Stay open, question assumptions, and make space for ideas you didn’t expect.' },
      { title: 'Details add up', description: 'Small, thoughtful decisions turn a usable experience into a memorable one.' }
    ],
    ctaPrompt: 'Have a good feeling about this?',
    ctaLink: 'Let’s talk about it'
  },
  projectsPage: {
    // eyebrow: 'A SELECTION OF RECENT WORK',
    titleFirst: 'Good ideas,',
    titleSecond: 'made real.',
    description: 'A few collaborations, experiments, and little internet things I’m proud of.',
    filterLabel: 'Filter projects',
    filters: ['All', 'Design', 'Product', 'Development'],
    // note: 'Want to see a case study or learn more about a project?',
    noteLink: 'Just ask.'
  },

  //categories: [
  // 'Animation', 
  // 'Audio', 
  // 'Digital & Traditional Arts', 
  // 'Publication Materials',
  // 'Photography',
  // 'Concept Art',
  // '3D Models'
  // ],

  projectDetailPage: {
    backLink: 'Return',
    contextTitle: 'What was this about?',
    categoryLabel: 'Category',
    focusLabel: 'Focus'
  },
  projects: [
    {
      title: 'Sunday Studio',
      category: 'Brand & web design',
      type: 'Publication Materials',
      description: 'A warm, editorial home for an independent creative studio.',
      className: 'project-art-sunday',
      artwork: ['SUNDAY'],
      detail: 'Identity · Digital design'
    },
    {
      title: 'Daybreak',
      category: 'Product design',
      type: 'Product',
      description: 'A calmer way to build routines that actually fit your day.',
      className: 'project-art-daybreak',
      artwork: ['make room', 'for the good'],
      detail: 'Strategy · UI/UX · React'
    },
    {
      title: 'Fieldnotes',
      category: 'E-commerce',
      type: 'Development',
      description: 'A small-shop experience for objects made to last.',
      className: 'project-art-fieldnotes',
      artwork: ['FIELD', 'NOTES'],
      detail: 'Art direction · Development'
    },
    {
      title: 'Common Ground',
      category: 'Community platform',
      type: 'Product',
      description: 'Making it easier for neighbors to find and join local events.',
      className: 'project-art-common',
      artwork: ['Better', 'together.'],
      detail: 'Research · Product design'
    }
  ],
  skillsPage: {
    // eyebrow: 'A TOOLKIT, NOT A CHECKLIST', <-- remove this
    titleFirst: 'Jack of all trades,',
    titleSecond: 'Master of different things...',
    description: 'With these mix of skills and experience, I can help bring your ideas to life.',
    // experienceEyebrow: 'A FEW CHAPTERS', <-- remove this
    experienceTitle: 'Experiences and Accomplishments so far.',
    certificationsTitle: 'Certifications',
    certifications: [
     { date: '2022', title: 'UX Design Certificate · Google', description: 'A professional certificate program covering the foundations of UX design.' },
     { date: '2021', title: 'Front-End Web Development Certificate · freeCodeCamp', description: 'A self-paced program covering HTML, CSS, JavaScript, and React.' }
    ],
    experience: [
      { date: '2022 — NOW', role: 'Independent Designer & Developer', description: 'Working with kind people to make useful digital products.' },
      { date: '2020 — 2022', role: 'Product Designer · Brightside Studio', description: 'Led product design across early-stage web and mobile projects.' },
      { date: '2016 — 2020', role: 'B.A. Visual Communication · Northshore University', description: 'Built a foundation in design, research, and creative practice.' }
    ],
    // ctaPrompt: 'A good fit is about more than a skill list.',  <-- remove this
    ctaLink: 'Let’s find out together'
  },
  skillGroups: [
    { title: 'Design', items: ['Product design', 'UI & visual design', 'Prototyping', 'Design systems', 'Figma', 'Art direction'] },
    { title: 'Development', items: ['HTML & CSS', 'JavaScript', 'React', 'Responsive interfaces', 'Accessibility', 'Git'] },
    { title: 'In practice', items: ['Creative direction', 'User research', 'Clear communication', 'Thoughtful details', 'Team collaboration', 'Curiosity'] }
  ],
  contact: {
    // eyebrow: 'YOUR TURN', <--remove this 
    titleFirst: 'Have a good',
    titleSecond: 'one in mind?',
    description: 'A new project, a collaboration, or just a friendly hello — my inbox is open. Tell me a little about what you’re thinking.',
    availability: 'Currently taking on select projects.',
    socialMediaLabel: 'Social media links',
    socialMedia: [
      { name: 'Twitter', url: 'https://twitter.com' },
      { name: 'LinkedIn', url: 'https://linkedin.com' },
      { name: 'Dribbble', url: 'https://dribbble.com' },
      { name: 'Instagram', url: 'https://www.instagram.com/ct.jhxx/' }
    ],
    nameLabel: 'Your name',
    namePlaceholder: 'What should I call you?',
    emailLabel: 'Email address',
    emailPlaceholder: 'you@example.com',
    messageLabel: 'A little about your project',
    messagePlaceholder: 'What are you working on?',
    submitLabel: 'Send your note',
    successMessage: 'Thanks for reaching out! This demo form is ready to connect to your email service.'
  }
};
