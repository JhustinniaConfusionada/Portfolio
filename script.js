const h = React.createElement;

const pages = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'contact', label: 'Contact', href: '#contact' }
];

const projects = [
  {
    number: '01',
    title: 'Sunday Studio',
    category: 'Brand & web design',
    type: 'Design',
    description: 'A warm, editorial home for an independent creative studio.',
    className: 'project-art-sunday',
    artwork: 'SUNDAY',
    detail: 'Identity · Digital design'
  },
  {
    number: '02',
    title: 'Daybreak',
    category: 'Product design',
    type: 'Product',
    description: 'A calmer way to build routines that actually fit your day.',
    className: 'project-art-daybreak',
    artwork: 'make room<br />for the good',
    detail: 'Strategy · UI/UX · React'
  },
  {
    number: '03',
    title: 'Fieldnotes',
    category: 'E-commerce',
    type: 'Development',
    description: 'A small-shop experience for objects made to last.',
    className: 'project-art-fieldnotes',
    artwork: 'FIELD<br />NOTES',
    detail: 'Art direction · Development'
  },
  {
    number: '04',
    title: 'Common Ground',
    category: 'Community platform',
    type: 'Product',
    description: 'Making it easier for neighbors to find and join local events.',
    className: 'project-art-common',
    artwork: 'Better<br />together.',
    detail: 'Research · Product design'
  }
];

const skillGroups = [
  {
    title: 'Design',
    items: ['Product design', 'UI & visual design', 'Prototyping', 'Design systems', 'Figma', 'Art direction']
  },
  {
    title: 'Development',
    items: ['HTML & CSS', 'JavaScript', 'React', 'Responsive interfaces', 'Accessibility', 'Git']
  },
  {
    title: 'In practice',
    items: ['Creative direction', 'User research', 'Clear communication', 'Thoughtful details', 'Team collaboration', 'Curiosity']
  }
];

function Arrow({ diagonal = false }) {
  return h('span', { 'aria-hidden': true, className: 'arrow-icon' }, diagonal ? '↗' : '→');
}

function Header({ page, dark, onThemeToggle }) {
  return h('header', { className: 'site-header shell' },
    h('a', { className: 'wordmark', href: '#home', 'aria-label': 'Alex Morgan, home' },
      h('span', { className: 'wordmark-mark' }, 'A'),
      h('span', null, 'alex morgan', h('small', null, 'DESIGNER & DEVELOPER'))
    ),
    h('nav', { className: 'main-nav', 'aria-label': 'Main navigation' },
      pages.map((item) => h('a', {
        key: item.id,
        href: item.href,
        className: page === item.id ? 'nav-link active' : 'nav-link',
        'aria-current': page === item.id ? 'page' : undefined
      }, item.label))
    ),
    h('button', {
      type: 'button',
      className: 'theme-toggle',
      onClick: onThemeToggle,
      'aria-label': `Switch to ${dark ? 'light' : 'dark'} theme`,
      'aria-pressed': dark
    }, h('span', { 'aria-hidden': true }, dark ? '☼' : '◐'))
  );
}

function Footer() {
  return h('footer', { className: 'site-footer shell' },
    h('span', null, `© ${new Date().getFullYear()} Alex Morgan`),
    h('span', { className: 'footer-note' }, 'Made with care, and a little bit of coffee.'),
    h('a', { href: 'mailto:hello@alexmorgan.design' }, 'Say hello ', h(Arrow, { diagonal: true }))
  );
}

function SectionHeading({ eyebrow, title, children }) {
  return h('div', { className: 'section-heading' },
    h('div', null,
      eyebrow && h('span', { className: 'eyebrow' }, eyebrow),
      h('h2', null, title)
    ),
    children && h('div', { className: 'section-heading-aside' }, children)
  );
}

function ProjectCard({ project }) {
  return h('article', { className: 'project-card' },
    h('a', { className: `project-art ${project.className}`, href: '#contact', 'aria-label': `Discuss a project like ${project.title}` },
      h('span', { className: 'project-art-label' }, project.detail),
      h('span', { className: 'project-art-title', dangerouslySetInnerHTML: { __html: project.artwork } }),
      h('span', { className: 'project-art-corner', 'aria-hidden': true }, '↗')
    ),
    h('div', { className: 'project-info' },
      h('div', null,
        h('span', { className: 'project-number' }, project.number),
        h('h3', null, project.title)
      ),
      h('span', { className: 'project-category' }, project.category)
    ),
    h('p', { className: 'project-description' }, project.description)
  );
}

function HomePage() {
  return h('main', { className: 'home-main' },
    h('section', { className: 'hero shell' },
      h('div', { className: 'hero-copy' },
        h('div', { className: 'availability' }, h('span', { className: 'availability-dot' }), 'AVAILABLE FOR SELECT PROJECTS'),
        h('h1', null, 'Thoughtful design.', h('br'), h('span', null, 'Made for people.')),
        h('p', { className: 'hero-intro' }, 'I’m Alex — a designer and front-end developer turning big ideas into clear, human digital experiences.'),
        h('div', { className: 'hero-actions' },
          h('a', { className: 'button button-dark', href: '#projects' }, 'Explore my work ', h(Arrow)),
          h('a', { className: 'text-link', href: '#about' }, 'A little about me ', h(Arrow, { diagonal: true }))
        )
      ),
      h('div', { className: 'hero-visual', 'aria-label': 'Abstract illustration of a creative workspace', role: 'img' },
        h('div', { className: 'visual-stamp' }, 'A / M'),
        h('div', { className: 'visual-sun' }),
        h('div', { className: 'visual-orbit' }),
        h('div', { className: 'visual-card' },
          h('span', null, 'CURRENTLY CREATING'),
          h('strong', null, 'Useful things.', h('br'), 'Beautifully.')
        ),
        h('span', { className: 'visual-caption' }, 'A little structure, a lot of imagination.')
      )
    ),
    h('section', { className: 'intro-strip shell' },
      h('span', { className: 'eyebrow' }, 'A CREATIVE PARTNER'),
      h('p', null, 'From the first sketch to the final line of code, I bring thoughtful ideas to life with purpose, personality, and a healthy respect for the details.')
    ),
    h('section', { className: 'featured-section shell' },
      h(SectionHeading, { eyebrow: 'SELECTED WORK · 2022—2026', title: 'A few things I’ve made.' },
        h('a', { className: 'text-link', href: '#projects' }, 'All projects ', h(Arrow, { diagonal: true }))
      ),
      h('div', { className: 'project-grid home-project-grid' },
        projects.slice(0, 2).map((project) => h(ProjectCard, { key: project.number, project }))
      )
    ),
    h('section', { className: 'home-cta shell' },
      h('div', null,
        h('span', { className: 'eyebrow' }, 'HAVE SOMETHING IN MIND?'),
        h('h2', null, 'Let’s make it ', h('span', null, 'matter.'))
      ),
      h('a', { className: 'button button-light', href: '#contact' }, 'Start a conversation ', h(Arrow, { diagonal: true }))
    )
  );
}

function AboutPage() {
  return h('main', { className: 'page-main shell' },
    h('section', { className: 'page-intro about-intro' },
      h('span', { className: 'eyebrow' }, 'A BIT ABOUT ME'),
      h('h1', null, 'Curious by nature.', h('br'), h('span', null, 'Thoughtful by design.')),
      h('p', null, 'I’m Alex Morgan, a multidisciplinary designer and developer who cares about making the digital world feel a little more human.')
    ),
    h('section', { className: 'about-story' },
      h('div', { className: 'about-art', role: 'img', 'aria-label': 'Abstract sun and shapes in warm colors' },
        h('span', { className: 'about-art-sun' }),
        h('span', { className: 'about-art-word' }, 'stay curious'),
        h('span', { className: 'about-art-note' }, 'Somewhere between logic & magic')
      ),
      h('div', { className: 'story-copy' },
        h('span', { className: 'eyebrow' }, 'THE SHORT VERSION'),
        h('h2', null, 'Good work starts with listening.'),
        h('p', null, 'I work at the intersection of design and technology, helping people and teams turn complex ideas into digital products that feel simple, useful, and a little unexpected.'),
        h('p', null, 'My process is collaborative and considered: ask better questions, make room for different perspectives, and sweat the small things that make an experience feel just right.'),
        h('p', null, 'Outside of work, you’ll find me looking for a new walking route, collecting cookbooks, or attempting to keep a houseplant alive.')
      )
    ),
    h('section', { className: 'values-section' },
      h(SectionHeading, { eyebrow: 'WHAT I BELIEVE', title: 'The way matters, too.' }),
      h('div', { className: 'values-grid' },
        [
          ['01', 'People first', 'The best solutions begin with real needs, honest conversations, and a little empathy.'],
          ['02', 'Keep it curious', 'Stay open, question assumptions, and make space for ideas you didn’t expect.'],
          ['03', 'Details add up', 'Small, thoughtful decisions turn a usable experience into a memorable one.']
        ].map(([number, title, text]) => h('article', { className: 'value-card', key: number },
          h('span', { className: 'project-number' }, number),
          h('h3', null, title),
          h('p', null, text)
        ))
      )
    ),
    h('section', { className: 'page-cta' },
      h('p', null, 'Have a good feeling about this?'),
      h('a', { className: 'text-link', href: '#contact' }, 'Let’s talk about it ', h(Arrow, { diagonal: true }))
    )
  );
}

function ProjectsPage() {
  const [filter, setFilter] = React.useState('All');
  const categories = ['All', 'Design', 'Product', 'Development'];
  const visibleProjects = filter === 'All' ? projects : projects.filter((project) => project.type === filter);
  return h('main', { className: 'page-main shell' },
    h('section', { className: 'page-intro projects-intro' },
      h('span', { className: 'eyebrow' }, 'A SELECTION OF RECENT WORK'),
      h('h1', null, 'Good ideas, ', h('span', null, 'made real.')),
      h('p', null, 'A few collaborations, experiments, and little internet things I’m proud of.')
    ),
    h('section', { className: 'projects-section' },
      h('div', { className: 'filter-bar', 'aria-label': 'Filter projects' },
        categories.map((category) => h('button', {
          type: 'button',
          key: category,
          className: filter === category ? 'filter-button selected' : 'filter-button',
          onClick: () => setFilter(category),
          'aria-pressed': filter === category
        }, category))
      ),
      h('div', { className: 'project-grid all-project-grid' },
        visibleProjects.map((project) => h(ProjectCard, { key: project.number, project }))
      ),
      h('p', { className: 'projects-note' }, 'Want to see a case study or learn more about a project? ', h('a', { href: '#contact' }, 'Just ask.'))
    )
  );
}

function SkillsPage() {
  return h('main', { className: 'page-main shell' },
    h('section', { className: 'page-intro skills-intro' },
      h('span', { className: 'eyebrow' }, 'A TOOLKIT, NOT A CHECKLIST'),
      h('h1', null, 'A little bit of ', h('span', null, 'everything.')),
      h('p', null, 'The right mix of big-picture thinking and hands-on making to bring an idea all the way to life.')
    ),
    h('section', { className: 'skills-section' },
      h('div', { className: 'skill-groups' },
        skillGroups.map((group, index) => h('article', { className: 'skill-group', key: group.title },
          h('div', { className: 'skill-group-heading' },
            h('span', { className: 'project-number' }, `0${index + 1}`),
            h('h2', null, group.title)
          ),
          h('ul', { className: 'skill-list' },
            group.items.map((item) => h('li', { key: item }, item, h('span', { 'aria-hidden': true }, '↗')))
          )
        ))
      )
    ),
    h('section', { className: 'experience-section' },
      h(SectionHeading, { eyebrow: 'A FEW CHAPTERS', title: 'Experience so far.' }),
      h('div', { className: 'experience-list' },
        [
          ['2022 — NOW', 'Independent Designer & Developer', 'Working with kind people to make useful digital products.'],
          ['2020 — 2022', 'Product Designer · Brightside Studio', 'Led product design across early-stage web and mobile projects.'],
          ['2016 — 2020', 'B.A. Visual Communication · Northshore University', 'Built a foundation in design, research, and creative practice.']
        ].map(([date, role, note]) => h('article', { className: 'experience-item', key: role },
          h('span', { className: 'eyebrow' }, date),
          h('div', null, h('h3', null, role), h('p', null, note))
        ))
      )
    ),
    h('section', { className: 'page-cta' },
      h('p', null, 'A good fit is about more than a skill list.'),
      h('a', { className: 'text-link', href: '#contact' }, 'Let’s find out together ', h(Arrow, { diagonal: true }))
    )
  );
}

function ContactPage() {
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return h('main', { className: 'page-main shell' },
    h('section', { className: 'contact-layout' },
      h('div', { className: 'contact-copy' },
        h('span', { className: 'eyebrow' }, 'YOUR TURN'),
        h('h1', null, 'Have a good ', h('span', null, 'one in mind?')),
        h('p', null, 'A new project, a collaboration, or just a friendly hello — my inbox is open. Tell me a little about what you’re thinking.'),
        h('a', { className: 'contact-email', href: 'mailto:hello@alexmorgan.design' }, 'hello@alexmorgan.design ', h(Arrow, { diagonal: true })),
        h('div', { className: 'contact-aside-note' },
          h('span', { className: 'availability-dot' }),
          h('p', null, 'Currently taking on select projects.')
        )
      ),
      h('form', { className: 'contact-form', onSubmit: handleSubmit },
        h('label', null, 'Your name', h('input', { name: 'name', type: 'text', placeholder: 'What should I call you?', autoComplete: 'name', required: true })),
        h('label', null, 'Email address', h('input', { name: 'email', type: 'email', placeholder: 'you@example.com', autoComplete: 'email', required: true })),
        h('label', null, 'A little about your project', h('textarea', { name: 'message', rows: 5, placeholder: 'What are you working on?', required: true })),
        h('button', { className: 'button button-dark submit-button', type: 'submit' }, 'Send your note ', h(Arrow, { diagonal: true })),
        submitted && h('p', { className: 'form-success', role: 'status' }, 'Thanks for reaching out! This demo form is ready to connect to your email service.')
      )
    )
  );
}

function App() {
  const getCurrentPage = () => {
    const currentPage = window.location.hash.slice(1);
    return pages.some((item) => item.id === currentPage) ? currentPage : 'home';
  };
  const [page, setPage] = React.useState(getCurrentPage);
  const [dark, setDark] = React.useState(() => localStorage.getItem('portfolio-theme') === 'dark');

  React.useEffect(() => {
    document.body.classList.toggle('dark-theme', dark);
    localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light');
  }, [dark]);

  React.useEffect(() => {
    const handleNavigation = () => {
      setPage(getCurrentPage());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleNavigation);
    return () => window.removeEventListener('hashchange', handleNavigation);
  }, []);

  const pageContent = {
    home: h(HomePage),
    about: h(AboutPage),
    projects: h(ProjectsPage),
    skills: h(SkillsPage),
    contact: h(ContactPage)
  }[page] || h(HomePage);

  return h(React.Fragment, null,
    h(Header, { page, dark, onThemeToggle: () => setDark((value) => !value) }),
    pageContent,
    h(Footer)
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(h(App));
