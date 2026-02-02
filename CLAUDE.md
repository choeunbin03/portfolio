# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with React showcasing backend development projects and skills. The portfolio features multiple projects (Tranner01, Tranner02, Phraiz) with detailed information about architecture, tech stack, and development experiences.

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm start

# Build for production
npm run build

# Run tests in watch mode
npm test

# Eject from Create React App (one-way operation, use with caution)
npm run eject
```

## Tech Stack

- **Framework**: React 19 with Create React App
- **Routing**: React Router v7 with createBrowserRouter
- **State Management**: TanStack Query (React Query) v5
- **Styling**: Tailwind CSS with custom theme
- **Email**: EmailJS for contact form
- **Animations**: Framer Motion

## Architecture

### Routing Structure

The app uses a nested routing structure with `RootLayout` as the root:

- `/` - Main landing page
- `/aboutme` - About me page with personal info, education, awards
- `/skills` - Skills showcase page
- `/projects` - Projects listing
- `/projects/tranner01` - Tranner01 project details
- `/projects/tranner02` - Tranner02 project details
- `/projects/phraiz` - Phraiz project details

All routes are defined in `src/routes/Router.jsx`.

### Layout Components

**RootLayout** (`src/common/RootLayout.jsx`):
- Wraps all pages with Header and Sidebar
- Includes ScrollToTop component to reset scroll on navigation
- Applies responsive margin for sidebar spacing

**Header** (`src/common/Header.jsx`): Top navigation bar

**Sidebar** (`src/common/Sidebar.jsx`): Right-side navigation on desktop, hidden on mobile

### Data Layer Pattern

The project uses a **custom hooks + data files** pattern instead of traditional API calls:

1. **Data files** (`src/data/*.js`): Export static data objects
   - `aboutMe.js` - Personal information, education, awards, certificates
   - `projects.js` - Project metadata (project01, project02, project03)
   - `projectDetails.js` - Detailed project information (tranner01Data, tranner02Data, phraizData)
   - `skills.js` - Technical skills data
   - `study.js` - Study/learning experiences

2. **Custom hooks** (`src/hooks/*.js`): Encapsulate data access
   - `useAboutMe.js` - Returns aboutMe data
   - `useProjects.js` - Returns projects data
   - `useProjectDetails.js` - Returns project details
   - `useSkills.js` - Returns skills data
   - `useStudy.js` - Returns study data

Components use these hooks to access data. This pattern allows for future integration with fetch/API calls or i18n without changing component code.

### Component Organization

```
src/
├── pages/              # Page-level components
│   ├── MainPage.jsx    # Landing page
│   ├── AboutMe.jsx     # About page
│   ├── Skills.jsx      # Skills page
│   ├── Projects.jsx    # Projects listing
│   └── projectDetails/ # Individual project pages
├── components/         # Reusable components
│   ├── aboutMe/        # About page specific components
│   ├── projects/       # Project-related components
│   ├── SkillItem.jsx
│   ├── StudyCard.jsx
│   ├── ContactModal.jsx
│   └── ...
├── common/             # Layout components
│   ├── RootLayout.jsx
│   ├── Header.jsx
│   ├── Sidebar.jsx
│   └── ScrollToTop.jsx
├── hooks/              # Custom hooks for data access
├── data/               # Static data files
├── routes/             # Router configuration
└── utils/              # Utility functions
```

### Tailwind Theme

Custom colors are defined in `tailwind.config.js`:

```javascript
point: {
  basic: '#0BCDFE',
  hover: '#2A92FE',
  selected: '#495BFF',
  main: '#000070',      // Primary brand color
  dark: '#000050',      // Darker variant
  reverse: '#ffff7f',
}
```

Use these color classes: `text-point-main`, `bg-point-dark`, etc.

## Environment Variables

The project uses EmailJS for the contact form. Required environment variable:

- `REACT_APP_EMAIL_JS_KEY` - EmailJS public key for contact form (`src/components/ContactModal.jsx`)

Create a `.env` file in the root directory with this variable.

## Email Contact Form

**ContactModal** (`src/components/ContactModal.jsx`) handles email sending:

- Uses EmailJS service ID: `choeunbin_contact`
- Template ID: `template_lqscmhe`
- Form fields: `from_email`, `title`, `message`
- ESC key support for closing modal
- Form validation before submission

## Adding New Projects

To add a new project:

1. **Add project metadata** in `src/data/projects.js`:
   ```javascript
   export const project04 = {
     name: 'ProjectName',
     part: 'BE' | 'FE',
     info: 'Short description',
     period: 'YYYY.MM.DD ~ YYYY.MM.DD',
     mainImage: '/projects/project04/main_photo.png',
     headCount: { BE: 2, FE: 2 },
     // ... etc
   };
   ```

2. **Add detailed data** in `src/data/projectDetails.js`:
   ```javascript
   export const project04Data = {
     title: 'ProjectName',
     subtitle: 'Tagline',
     description: '...',
     devStack: { /* ... */ },
     parts: [ /* ... */ ],
     review: { /* ... */ }
   };
   ```

3. **Create project detail page** in `src/pages/projectDetails/Project04.jsx`

4. **Add route** in `src/routes/Router.jsx`:
   ```javascript
   { path: 'projects/project04', element: <Project04 /> }
   ```

5. **Update hook** in `src/hooks/useProjects.js`:
   ```javascript
   return { project01, project02, project03, project04 };
   ```

6. **Add images** to `public/projects/project04/`

## Key Utilities

- `openLink(url)` - Opens external links
- `upperFirstLetter(str)` - Capitalizes first letter
- `formatNumber(num)` - Number formatting utility

## Notes

- This is a Create React App project, so avoid ejecting unless absolutely necessary
- Images are stored in the `public/` directory and referenced with absolute paths (e.g., `/projects/project01/main_photo.png`)
- The project uses responsive design with Tailwind's mobile-first approach
- Desktop layout includes a fixed sidebar (80px width on right)
