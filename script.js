const h = React.createElement;
const content = window.PORTFOLIO_STRINGS;

const pages = [
  { id: 'home', label: content.navigation.home, href: '#home' },
  { id: 'about', label: content.navigation.about, href: '#about' },
  { id: 'projects', label: content.navigation.projects, href: '#projects' },
  { id: 'skills', label: content.navigation.skills, href: '#skills' },
  { id: 'contact', label: content.navigation.contact, href: '#contact' }
];

const projects = content.projects.map((project, index) => ({
  ...project,
  cover: project.preview
    ? { src: project.preview }
    : project.media.find((item) => item.type === 'image'),
  slug: project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
  number: String(index + 1).padStart(2, '0')
}));
const skillGroups = content.skillGroups;

function Arrow({ diagonal = false }) {
  return h('span', { 'aria-hidden': true, className: 'arrow-icon' }, diagonal ? '↗' : '→');
}

function Header({ page, dark, onThemeToggle }) {
  return h('header', { className: 'site-header shell' },
    h('a', { className: 'wordmark', href: '#home', 'aria-label': content.navigation.homeLinkLabel },
      h('img', { className: 'wordmark-mark', src: 'src/JC_iconlogo.png', alt: '' }),
      h('span', null, content.site.owner.toLowerCase(), h('small', null, content.site.role))
    ),
    h('nav', { className: 'main-nav', 'aria-label': content.navigation.ariaLabel },
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
      'aria-label': dark ? content.navigation.themeToLight : content.navigation.themeToDark,
      'aria-pressed': dark
    }, h('span', { 'aria-hidden': true }, dark ? '☼' : '◐'))
  );
}

function Footer() {
  return h('footer', { className: 'site-footer shell' },
    h('span', null, `© ${new Date().getFullYear()} ${content.site.owner}`),
    h('span', { className: 'footer-note' }, content.site.footerNote),
    h('a', { href: '#contact' }, content.site.emailLinkLabel, ' ', h(Arrow, { diagonal: true }))
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
  const projectHref = `#item-content/${project.slug}`;
  const previewModel = project.media.find((item) => item.type === 'model');
  const previewAudio = project.category === 'Audio'
    ? project.media.find((item) => item.type === 'audio' || item.type === 'video')
    : undefined;

  return h('article', { className: 'project-card' },
    h('div', { className: 'project-collection-preview' },
      project.cover
        ? h('a', { className: 'project-card-link project-preview-image', href: projectHref, 'aria-label': `${project.title} — ${content.projectDetailPage.contextTitle}` },
          h('img', { src: project.cover.src, alt: '', loading: 'lazy' }),
          h('span', { className: 'project-art-corner', 'aria-hidden': true }, '↗')
        )
        : previewModel
          ? h('model-viewer', {
            src: previewModel.src,
            alt: previewModel.label,
            'camera-controls': '',
            'touch-action': 'pan-y',
            'interaction-prompt': 'auto',
            loading: 'lazy',
            'shadow-intensity': '1'
          })
          : previewAudio
            ? h('audio', {
              className: 'project-audio-preview',
              controls: true,
              preload: 'none',
              'aria-label': previewAudio.label
            }, h('source', { src: previewAudio.src }))
            : h('a', { className: 'project-card-link project-preview-image', href: projectHref, 'aria-label': `${project.title} — ${content.projectDetailPage.contextTitle}` },
              h('span', { className: 'project-collection-placeholder' }, project.category),
              h('span', { className: 'project-art-corner', 'aria-hidden': true }, '↗')
            ),
      (previewModel || previewAudio) && h('a', {
        className: 'project-art-corner',
        href: projectHref,
        'aria-label': `${project.title} — ${content.projectDetailPage.contextTitle}`
      }, '↗')
    ),
    h('a', { className: 'project-card-link project-card-content', href: projectHref, 'aria-label': `${project.title} — ${content.projectDetailPage.contextTitle}` },
      h('div', { className: 'project-info' },
        h('div', null,
          h('span', { className: 'project-number' }, project.number),
          h('h3', null, project.title)
        ),
        h('span', { className: 'project-category' }, project.category)
      ),
      h('p', { className: 'project-description' }, project.description)
    )
  );
}

function HomePage() {
  const copy = content.home;
  return h('main', { className: 'home-main' },
    h('section', { className: 'hero shell' },
      h('div', { className: 'hero-copy' },
        h('h1', null, copy.titleFirst, h('br'), h('span', null, copy.titleSecond)),
        h('p', { className: 'hero-intro' }, copy.description),
        h('div', { className: 'hero-actions' },
          h('a', { className: 'button button-dark', href: '#projects' }, copy.projectsLink, ' ', h(Arrow)),
          h('a', { className: 'text-link', href: '#about' }, copy.aboutLink, ' ', h(Arrow, { diagonal: true }))
        )
      ),
      h('div', { className: 'hero-visual' },
        h('img', { src: 'src/DigArt/download1.png', alt: copy.profileImageAlt })
      )
    ),
    h('section', { className: 'intro-strip shell' },
      h('span', { className: 'eyebrow' }, copy.introEyebrow),
      h('p', null, copy.intro)
    ),
    h('section', { className: 'featured-section shell' },
      h(SectionHeading, { eyebrow: copy.selectedWork, title: copy.selectedTitle },
        h('a', { className: 'text-link', href: '#projects' }, copy.allProjectsLink, ' ', h(Arrow, { diagonal: true }))
      ),
      h('div', { className: 'project-grid home-project-grid' },
        projects.slice(0, 2).map((project) => h(ProjectCard, { key: project.number, project }))
      )
    ),
    h('section', { className: 'home-cta shell' },
      h('div', null,
        h('span', { className: 'eyebrow' }, copy.ctaEyebrow),
        h('h2', null, copy.ctaFirst, ' ', h('span', null, copy.ctaSecond))
      ),
      h('a', { className: 'button button-light', href: '#contact' }, copy.ctaLink, ' ', h(Arrow, { diagonal: true }))
    )
  );
}

function AboutPage() {
  const copy = content.about;
  return h('main', { className: 'page-main shell' },
    h('section', { className: 'page-intro about-intro' },
      h('span', { className: 'eyebrow' }, copy.eyebrow),
      h('h1', null, copy.titleFirst, h('br'), h('span', null, copy.titleSecond)),
      h('p', null, copy.description)
    ),
    h('section', { className: 'about-story' },
      h('div', { className: 'about-art' },
        h('img', { className: 'about-art-image', src: 'src/about-strawberry.png', alt: copy.imageLabel }),
        h('span', { className: 'about-art-word' }, copy.imageWord),
        h('span', { className: 'about-art-note' }, copy.imageNote)
      ),
      h('div', { className: 'story-copy' },
        h('span', { className: 'eyebrow' }, copy.storyEyebrow),
        h('h2', null, copy.storyTitle),
        copy.paragraphs.map((paragraph) => h('p', { key: paragraph }, paragraph))
      )
    ),
    copy.values && h('section', { className: 'values-section' },
      h(SectionHeading, { eyebrow: copy.valuesEyebrow, title: copy.valuesTitle }),
      h('div', { className: 'values-grid' },
        copy.values.map((value, index) => h('article', { className: 'value-card', key: value.title },
          h('span', { className: 'project-number' }, String(index + 1).padStart(2, '0')),
          h('h3', null, value.title),
          h('p', null, value.description)
        ))
      )
    )
  );
}

function ProjectsPage() {
  const copy = content.projectsPage;
  const [filter, setFilter] = React.useState(copy.allFilter);
  const filters = [copy.allFilter, ...content.categories];
  const visibleProjects = filter === copy.allFilter
    ? projects
    : projects.filter((project) => project.category === filter);
  return h('main', { className: 'page-main shell' },
    h('section', { className: 'page-intro projects-intro' },
      h('span', { className: 'eyebrow' }, copy.eyebrow),
      h('h1', null, copy.titleFirst, ' ', h('span', null, copy.titleSecond)),
      h('p', null, copy.description)
    ),
    h('section', { className: 'projects-section' },
      h('div', { className: 'filter-bar', 'aria-label': copy.filterLabel },
        filters.map((category) => h('button', {
          type: 'button',
          key: category,
          className: filter === category ? 'filter-button selected' : 'filter-button',
          onClick: () => setFilter(category),
          'aria-pressed': filter === category
        }, category))
      ),
      h('div', { className: 'project-grid all-project-grid' },
        visibleProjects.length
          ? visibleProjects.map((project) => h(ProjectCard, { key: project.number, project }))
          : h('p', { className: 'projects-empty' }, copy.emptyCategory)
      ),
      h('p', { className: 'projects-note' }, copy.note, ' ', h('a', { href: '#contact' }, copy.noteLink))
    )
  );
}

function ProjectDetailPage({ project }) {
  const copy = content.projectDetailPage;
  return h('main', { className: 'page-main shell project-detail-page' },
    h('a', { className: 'text-link project-back-link', href: '#projects' },
      h('span', { 'aria-hidden': true }, '←'), ' ', copy.backLink
    ),
    h('section', { className: 'project-detail-intro' },
      h('span', { className: 'eyebrow' }, project.category),
      h('h1', null, project.title)
    ),
    project.media.length
      ? h('section', { className: 'project-asset-grid', 'aria-label': project.category },
        project.media.map((asset) => h('figure', { className: 'project-asset', key: asset.src },
          asset.type === 'model'
            ? h('model-viewer', {
              src: asset.src,
              alt: asset.label,
              'camera-controls': '',
              'touch-action': 'pan-y',
              'interaction-prompt': 'auto',
              loading: 'lazy',
              'shadow-intensity': '1'
            })
            : asset.type === 'image'
            ? h('img', { src: asset.src, alt: asset.label, loading: 'lazy' })
            : asset.type === 'video'
              ? h('video', { controls: true, preload: 'metadata' },
                h('source', { src: asset.src, type: 'video/mp4' })
              )
              : h('audio', { controls: true, preload: 'metadata' },
                h('source', { src: asset.src, type: 'audio/mp4' })
              ),
          h('figcaption', null, asset.label)
        ))
      )
      : h('p', { className: 'projects-empty project-detail-empty' }, content.projectsPage.emptyCategory),
    h('section', { className: 'project-context' },
      h('span', { className: 'eyebrow' }, copy.contextTitle),
      h('p', null, project.description),
      h('dl', { className: 'project-context-details' },
        h('div', null, h('dt', null, copy.categoryLabel), h('dd', null, project.category)),
        h('div', null, h('dt', null, copy.focusLabel), h('dd', null, project.detail))
      )
    )
  );
}

function SkillsPage() {
  const copy = content.skillsPage;
  return h('main', { className: 'page-main shell' },
    h('section', { className: 'page-intro skills-intro' },
      h('span', { className: 'eyebrow' }, copy.eyebrow),
      h('h1', null, copy.titleFirst, ' ', h('span', null, copy.titleSecond)),
      h('p', null, copy.description)
    ),
    h('section', { className: 'skills-section' },
      h('div', { className: 'skill-groups' },
        skillGroups.map((group, index) => h('article', { className: 'skill-group', key: group.title },
          h('div', { className: 'skill-group-heading' },
            h('span', { className: 'project-number' }, `0${index + 1}`),
            h('h2', null, group.title)
          ),
          h('ul', { className: 'skill-list' },
            group.items.map((item) => h('li', { key: item }, item))
          )
        ))
      )
    ),
    h('section', { className: 'experience-section' },
      h(SectionHeading, { eyebrow: copy.experienceEyebrow, title: copy.experienceTitle }),
      h('div', { className: 'experience-list' },
        copy.experience.map((item) => h('article', { className: 'experience-item', key: item.role },
          h('span', { className: 'eyebrow' }, item.date),
          h('div', null, h('h3', null, item.role), h('p', null, item.description))
        ))
      )
    ),
    h('section', { className: 'experience-section education-section' },
      h(SectionHeading, { title: copy.educationTitle }),
      h('div', { className: 'experience-list' },
        copy.education.map((item) => h('article', { className: 'experience-item', key: item.title },
          h('span', { className: 'eyebrow' }, item.date),
          h('div', null, h('h3', null, item.title), h('p', null, item.description))
        ))
      )
    ),
    h('section', { className: 'experience-section certifications-section' },
      h(SectionHeading, { title: copy.certificationsTitle }),
      h('div', { className: 'experience-list' },
        copy.certifications.map((item) => h('article', { className: 'experience-item', key: item.title },
          h('span', { className: 'eyebrow' }, item.date),
          h('div', null, h('h3', null, item.title), h('p', null, item.description))
        ))
      )
    )
  );
}

function ContactPage() {
  const [submitted, setSubmitted] = React.useState(false);
  const copy = content.contact;

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = `Portfolio inquiry from ${formData.get('name')}`;
    const body = [
      `Name: ${formData.get('name')}`,
      `Email: ${formData.get('email')}`,
      '',
      'Message:',
      formData.get('message')
    ].join('\n');

    window.location.href = `mailto:${content.site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return h('main', { className: 'page-main shell' },
    h('section', { className: 'contact-layout' },
      h('div', { className: 'contact-copy' },
        h('span', { className: 'eyebrow' }, copy.eyebrow),
        h('h1', null, copy.titleFirst, ' ', h('span', null, copy.titleSecond)),
        h('p', null, copy.description),
        h('a', { className: 'contact-email', href: `mailto:${content.site.email}` }, content.site.email, ' ', h(Arrow, { diagonal: true })),
        h('nav', { className: 'social-links', 'aria-label': copy.socialMediaLabel },
          copy.socialMedia.map((social) => h('a', {
            key: social.name,
            href: social.url,
            target: '_blank',
            rel: 'noopener noreferrer'
          }, social.name, h(Arrow, { diagonal: true })))
        ),
        h('div', { className: 'contact-aside-note' },
          h('span', { className: 'availability-dot' }),
          h('p', null, copy.availability)
        )
      ),
      h('form', { className: 'contact-form', onSubmit: handleSubmit },
        h('label', null, copy.nameLabel, h('input', { name: 'name', type: 'text', placeholder: copy.namePlaceholder, autoComplete: 'name', required: true })),
        h('label', null, copy.emailLabel, h('input', { name: 'email', type: 'email', placeholder: copy.emailPlaceholder, autoComplete: 'email', required: true })),
        h('label', null, copy.messageLabel, h('textarea', { name: 'message', rows: 5, placeholder: copy.messagePlaceholder, required: true })),
        h('button', { className: 'button button-dark submit-button', type: 'submit' }, copy.submitLabel, ' ', h(Arrow, { diagonal: true })),
        submitted && h('p', { className: 'form-success', role: 'status' }, copy.successMessage)
      )
    )
  );
}

function App() {
  const getCurrentRoute = () => {
    const [currentPage, projectSlug] = window.location.hash.slice(1).split('/');
    if (currentPage === 'item-content') {
      const project = projects.find((item) => item.slug === projectSlug);
      return project ? { page: currentPage, project } : { page: 'projects', project: null };
    }
    return {
      page: pages.some((item) => item.id === currentPage) ? currentPage : 'home',
      project: null
    };
  };
  const [route, setRoute] = React.useState(getCurrentRoute);
  const [dark, setDark] = React.useState(() => localStorage.getItem('portfolio-theme') === 'dark');

  React.useEffect(() => {
    document.body.classList.toggle('dark-theme', dark);
    localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light');
  }, [dark]);

  React.useEffect(() => {
    document.title = content.site.pageTitle;
    document.querySelector('meta[name="description"]').content = content.site.description;
  }, []);

  React.useEffect(() => {
    const handleNavigation = () => {
      setRoute(getCurrentRoute());
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
    contact: h(ContactPage),
    'item-content': route.project && h(ProjectDetailPage, { project: route.project })
  }[route.page] || h(HomePage);

  return h(React.Fragment, null,
    h(Header, { page: route.page, dark, onThemeToggle: () => setDark((value) => !value) }),
    pageContent,
    h(Footer)
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(h(App));
