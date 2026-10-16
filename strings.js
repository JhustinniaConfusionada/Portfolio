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
    // visualStamp: 'J / C',
    // visualTitleFirst: 'Useful things.',
    // visualTitleSecond: 'Beautifully.',
    // visualCaption: 'A little structure, a lot of imagination.',
    introEyebrow: 'A CREATIVE PARTNERS',
    intro: 'Canva · Figma · Adobe Photoshop · Adobe Illustrator · Adobe After Effects · Blender · Unity · Clip Studio Paint · Ibis Paint · HTML & CSS · JavaScript · React',

    selectedWork: 'Creative WORKS · 2023—2026',
    selectedTitle: 'My Art works and Projects I’ve been involved in...',
    allProjectsLink: 'Check them out',
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
    description: 'Browse my work by category, from animation and audio to photography and art.',
    filterLabel: 'Filter projects',
    allFilter: 'All',
    emptyCategory: 'No work has been added to this category yet.',
    // note: 'Want to see a case study or learn more about a project?',
    noteLink: 'Just ask.'
  },

  categories: [
    'Animation',
    'Audio',
    'Digital & Traditional Arts',
    'Publication Materials',
    'Photography',
    'Concept Art',
    '3D Models'
  ],

  projectDetailPage: {
    backLink: 'Return',
    contextTitle: 'What was this about?',
    categoryLabel: 'Category',
    focusLabel: 'Focus'
  },
  projects: [
    {
      title: 'Animation Portfolio',
      category: 'Animation',
      description: 'Animation clips, storyboards, and character expression sheets.',
      detail: 'Animation · Storyboards · Character work',
      media: [
        { type: 'video', src: 'src/Anim/CORTUNA_FinalProject_CT3DESGL.mp4', label: 'Cortuna Final Project' },
        { type: 'image', src: 'src/Anim/storyboard.png', label: 'Storyboard' },
        { type: 'image', src: 'src/Anim/Expression sheet.png', label: 'Expression sheet' },
        { type: 'image', src: 'src/Anim/Expression sheet (1).png', label: 'Expression sheet 1' },
        { type: 'image', src: 'src/Anim/Expression sheet (2).png', label: 'Expression sheet 2' },
        { type: 'image', src: 'src/Anim/Expression sheet (3).png', label: 'Expression sheet 3' },
        { type: 'image', src: 'src/Anim/Illustration2 (1).png', label: 'Animation illustration 1' },
        { type: 'image', src: 'src/Anim/Illustration2 (2).png', label: 'Animation illustration 2' },
        { type: 'image', src: 'src/Anim/Illustration2 (3).png', label: 'Animation illustration 3' },
        { type: 'image', src: 'src/Anim/Illustration4.png', label: 'Animation illustration 4' },
        { type: 'image', src: 'src/Anim/Illustration4 (2).png', label: 'Animation illustration 5' },
        { type: 'image', src: 'src/Anim/Illustration4 (3).png', label: 'Animation illustration 6' },
        { type: 'image', src: 'src/Anim/Illustration4 (7).png', label: 'Animation illustration 7' },
        { type: 'video', src: 'src/Anim/Finalproject(no edit).mp4', label: 'Final project' }
      ]
    },
    {
      title: 'Audio Projects',
      category: 'Audio',
      description: 'Audio work from the portfolio collection.',
      detail: 'Audio · Video',
      media: [
        { type: 'video', src: 'src/Aud/lv_0_20260417032506.mp4', label: 'Audio project' }
      ]
    },
    {
      title: 'Digital Portraits',
      category: 'Digital & Traditional Arts',
      description: 'Digital portraits and artwork created in Ibis Paint.',
      detail: 'Digital painting · Portraits',
      media: [
        // { type: 'image', src: 'src/DigArt/download1.png', label: 'Portrait illustration' },
        { type: 'image', src: 'src/DigArt/LS20250702160531.png', label: 'Digital artwork' },
        { type: 'image', src: 'src/DigArt/LS20260402192306.png', label: 'Digital artwork' },
        { type: 'image', src: 'src/DigArt/Untitled110~2.png', label: 'Digital portrait' },
        { type: 'image', src: 'src/DigArt/Untitled111.png', label: 'Digital artwork' },
        { type: 'image', src: 'src/DigArt/Untitled226_20260811211152~2.jpg', label: 'Digital artwork' },
        { type: 'image', src: 'src/DigArt/Untitled118.png', label: 'Portrait illustration' }
      ]
    },
    {
      title: 'NUWC Publications',
      category: 'Publication Materials',
      description: 'Publication and event materials created for NUWC.',
      detail: 'Event publication · Graphic design',
      media: [
        { type: 'image', src: 'src/PubMats/2023 pubmat NUWC.jpg', label: 'NUWC publication material' },
        { type: 'image', src: 'src/PubMats/2023 D1 pubmat NUWC.jpg', label: 'NUWC publication material 1' },
        { type: 'image', src: 'src/PubMats/2023 D2 pubmat NUWC.jpg', label: 'NUWC publication material 2' },
        { type: 'image', src: 'src/PubMats/2023 GA pubmat NUWC.jpg', label: 'NUWC publication material 3' }
      ]
    },
    {
      title: 'Photography Collection',
      category: 'Photography',
      description: 'Photography and travel images from the portfolio collection.',
      detail: 'Photography · Travel',
      media: [
        { type: 'image', src: 'src/Photog/Photography.JPG', label: 'Photography' },
        { type: 'image', src: 'src/Photog/TRAVEL_LAYOUT1.jpg', label: 'Travel photo layout' }
      ]
    },
    {
      title: 'Concept Art',
      category: 'Concept Art',
      description: 'Traditional character concept artwork.',
      detail: 'Character concept · Traditional media',
      media: [
        { type: 'image', src: 'src/TraArt/IMG20250927213138.jpg', label: 'Traditional character concept' }
      ]
    },
    {
      title: '3D Model Showcase',
      category: '3D Models',
      description: '3D modeling work will be added to this collection.',
      detail: '3D modeling',
      media: []
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
