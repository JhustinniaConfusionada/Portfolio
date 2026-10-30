# Jhustine Cortuna — Portfolio

**Student:** Cortuna, Jhustine L.  
**School:** National University, College of Computing and Information Technologies  
**Category:** Portfolio  
**Live site:** [https://jhustinniaconfusionada.github.io/webProject/](https://jhustinniaconfusionada.github.io/webProject/)

---

## About

A responsive, single-page personal portfolio introducing Jhustine Cortuna and showcasing selected projects, skills, experience, certifications, and contact information. The five sections—Home, About, Projects, Skills, and Contact—are navigated from the site’s navigation bar using URL hash routes.

The interface is built with HTML, CSS, and React using its browser-ready CDN builds. Portfolio text and project data are kept in `strings.js` for easier editing.

## Sections

| Section | What it contains |
|---|---|
| Home | Introduction, featured projects, and calls to action |
| About | Personal introduction, background, and design values |
| Projects | Filterable project cards that open project context pages |
| Skills | Skill groups, experience, and certifications |
| Contact | Email, social links, and a contact form |

## Features

- Responsive layouts for smaller and larger screens
- Hash-based navigation between sections, including browser back/forward support
- Project collections are organized into Animation, Audio, Digital & Traditional Arts, Publication Materials, Photography, Concept Art, and 3D Models
- Project cards filter by category and open context pages with image, video, or audio assets
- Categories without uploaded work show an empty-state message
- Light/dark theme toggle; theme preference is saved in local storage
- Contact form validates required fields and email format, then opens a prefilled message in the visitor's email app
- Sending requires the visitor to have an email app configured and press Send; the static site does not store or send messages itself
- Project cards and page copy are rendered from JavaScript data
- Project cards preview interactive GLB models and include audio playback controls for audio projects
- 3D project pages display interactive GLB models with drag-to-rotate and pinch/scroll zoom controls

## Technologies

| Technology | Use |
|---|---|
| HTML5 | Page structure and metadata |
| CSS3 | Styling, responsive layout, themes, and color palette |
| JavaScript (ES6) | Navigation, filtering, theme preference, and form interactions |
| React 18 | Rendering the portfolio interface and interactive sections |
| `<model-viewer>` | Loading and interacting with GLB models |
| Local Storage | Persisting the light/dark theme selection |
| GitHub Pages | Static site hosting |

## Project files

```text
webProject/
├── index.html       # Single HTML entry point
├── script.js        # React components and interactions
├── strings.js       # Editable page copy and project data
├── styles.css       # Theme, layout, and responsive styling
├── README.md
└── src/
    ├── jc_logo.png
    ├── Anim/
    ├── Aud/
    ├── Certi/
    ├── DigArt/
    │   └── download1.png  # Home-page portrait
    ├── Photog/
    ├── PubMats/
    └── TraArt/
```

## Color palette

| Color | Hex |
|---|---|
| Lavender blue | `#cbd1e7` |
| Deep crimson | `#a9232b` |
| Soft coral | `#f47779` |

## Run locally

Open `index.html` in a browser, or serve the folder with a local static server such as the VS Code Live Server extension. React, the fonts, and `<model-viewer>` are loaded from CDNs, so an internet connection is needed for those external resources. The contact form opens a prefilled email using the visitor's configured email app.

## Deploy with GitHub Pages

1. Push the site files to the repository branch used for Pages.
2. In the repository, open **Settings → Pages**.
3. Select the branch and folder containing `index.html`, `styles.css`, `strings.js`, and `script.js`.
4. Save the settings and wait for the deployment to finish.

Keep all four site files together in the published folder; the HTML loads the JavaScript and stylesheet using relative paths.

## Author

**Jhustine L. Cortuna**  
GitHub: [@JhustinniaConfusionada](https://github.com/JhustinniaConfusionada)  
Email: [Jhustinel.cortuna@gmail.com](mailto:Jhustinel.cortuna@gmail.com)

## Acknowledgments

- National University, College of Computing and Information Technologies
- Google Fonts: DM Mono, DM Sans, and Manrope
- React 18 distribution hosted on unpkg
