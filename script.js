const libraryBooks = [
  {
    title: 'The Silent Horizon',
    author: 'Eva Hart',
    category: 'Academic',
    rating: '4.8',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=700&q=80'
  },
  {
    title: 'Digital Archives',
    author: 'Nathan Cole',
    category: 'Periodicals',
    rating: '4.7',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=700&q=80'
  },
  {
    title: 'Wonder in the Stacks',
    author: 'Marina Vale',
    category: 'E-Books',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=700&q=80'
  },
  {
    title: 'Designing Knowledge',
    author: 'Owen Blake',
    category: 'Research',
    rating: '4.6',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=700&q=80'
  }
];

const bookRows = [
  'There are many ways to build a thoughtful reading life. A digital library should feel calm, orderly, and welcoming, giving readers a clear path to discover books and return to their favorites with ease.',
  'Each chapter opens with a different lens: the value of archive access, the joy of educational discovery, and the importance of community-driven reading habits that span lifelong learning.',
  'Readers often revisit the same passages, bookmark important chapters, and compare personal notes against a digital copy. The interface should help them move naturally from browsing to studying to saving.',
  'This sample story demonstrates how a modern library page blends content, metadata, and user controls. The experience remains readable across devices, while also supporting detailed reading preferences like color themes and page tracking.'
];

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const themeButton = document.querySelector('[data-theme-toggle]');

  const savedTheme = localStorage.getItem('library-theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark');
  }

  if (themeButton) {
    themeButton.setAttribute('aria-pressed', String(savedTheme === 'dark'));
    themeButton.addEventListener('click', () => {
      body.classList.toggle('dark');
      const nextTheme = body.classList.contains('dark') ? 'dark' : 'light';
      localStorage.setItem('library-theme', nextTheme);
      themeButton.setAttribute('aria-pressed', String(nextTheme === 'dark'));
    });
  }

  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
    }
  });

  const year = document.querySelector('#year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const bookGrid = document.querySelector('[data-book-grid]');
  if (bookGrid) {
    bookGrid.innerHTML = libraryBooks.map((book) => `
      <article class="book-card">
        <div class="book-cover" style="background-image: url('${book.image}')"></div>
        <div class="book-card-content">
          <div class="book-meta">
            <span>${book.category}</span>
            <span class="rating">★ ${book.rating}</span>
          </div>
          <h3>${book.title}</h3>
          <p>by ${book.author}</p>
          <footer>
            <span class="rating">Popular</span>
            <a href="book.html" class="primary-button">Read now</a>
          </footer>
        </div>
      </article>
    `).join('');
  }

  const authTabs = document.querySelectorAll('[data-auth-tab]');
  const authForms = document.querySelectorAll('[data-auth-form]');

  authTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.authTab;
      authTabs.forEach((button) => button.classList.toggle('active', button === tab));
      authForms.forEach((form) => {
        const isActive = form.dataset.authForm === target;
        form.classList.toggle('hidden', !isActive);
      });
    });
  });

  document.querySelectorAll('[data-search-form]').forEach((searchForm) => {
    searchForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const field = searchForm.querySelector('input[type="search"]');
      if (field) {
        const query = field.value.trim();
        if (query.length > 0) {
          alert(`Search for “${query}” in the library catalog.`);
        }
      }
    });
  });

  const quickLinks = document.querySelector('#quick-links');
  if (quickLinks) {
    quickLinks.addEventListener('change', () => {
      if (quickLinks.value) {
        window.location.href = quickLinks.value;
      }
    });
  }

  const readerValue = document.querySelector('[data-reader-page]');
  const readerText = document.querySelector('[data-reader-text]');
  const prevButton = document.querySelector('[data-prev-page]');
  const nextButton = document.querySelector('[data-next-page]');

  if (readerValue && readerText && prevButton && nextButton) {
    let pageIndex = Number(localStorage.getItem('library-reader-page') || 0);
    const maxPage = bookRows.length;

    const renderReaderPage = () => {
      readerValue.textContent = `Page ${pageIndex + 1} of ${maxPage}`;
      readerText.textContent = bookRows[pageIndex];
      localStorage.setItem('library-reader-page', String(pageIndex));
    };

    prevButton.addEventListener('click', () => {
      pageIndex = Math.max(0, pageIndex - 1);
      renderReaderPage();
    });

    nextButton.addEventListener('click', () => {
      pageIndex = Math.min(maxPage - 1, pageIndex + 1);
      renderReaderPage();
    });

    renderReaderPage();
  }

  document.querySelectorAll('[data-form-submit]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Your library profile has been saved.');
    });
  });
});
