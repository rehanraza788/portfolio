# Mohd Rehan Raza - Professional Portfolio

A premium, interactive personal portfolio website designed and built with **React 19**, **Vite 7**, and **Tailwind CSS v4** to showcase frontend development skills, professional work experience, and completed projects.

Live Demo: [https://rehanraza788.github.io/portfolio](https://rehanraza788.github.io/portfolio)

---

## 🚀 Features

- **Dynamic Typing Animation**: Interactive header text in the Hero section displaying key professional roles.
- **Responsive Navigation**: Scroll-aware header transitions (transparent to gradient) with an interactive mobile hamburger menu.
- **Vibrant Background Animations**: Micro-animations using custom CSS and floating elements for a premium, interactive user experience.
- **Skill Visualizations**: Dynamic SVG circular progress charts showing skill levels with custom linear gradients.
- **Project Grid**: Structured showcase for highlighted projects including tech stack tags, external links, and repository access.
- **Responsive Contact Section**: Integrated contact form and detailed info section (email, location, etc.).
- **Deploy Ready**: Fully configured deployment pipeline to GitHub Pages.

---

## 🛠️ Tech Stack & Dependencies

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 7](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (using `@tailwindcss/vite` plugin for CSS-first configuration)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Libraries Available**: [Framer Motion](https://www.framer.com/motion/) (pre-installed, ready for implementation), [React Router DOM](https://reactrouter.com/)

---

## 📂 Project Structure

```text
portfolio/
├── .github/
├── public/                 # Static assets
└── src/
    ├── assets/             # Images and local media assets
    ├── components/         # Reusable React components
    │   ├── Header.jsx      # Navigation bar (fixed, desktop & mobile menu)
    │   ├── Home.jsx        # Hero section with typing effect
    │   ├── About.jsx       # Biography and floating bubbles
    │   ├── Skill.jsx       # SVG-based circular skill trackers
    │   ├── Experience.jsx  # Professional work timeline (Noble Wave)
    │   ├── Project.jsx     # Grid displaying highlighted works
    │   ├── Contact.jsx     # Contact form and details
    │   └── Footer.jsx      # Social profiles and copyrights
    ├── App.css             # Main styling
    ├── App.jsx             # Main App component structuring the single-page layout
    ├── index.css           # Global Tailwind directive imports
    └── main.jsx            # React root entry point
```

---

## 💻 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (recommended version >= 18).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rehanraza788/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running Locally

To run the application in development mode with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### Production Build

To build the application for production deployment:
```bash
npm run build
```
The compiled build output will be stored in the `/dist` directory.

### Previewing the Production Build

To preview the production build locally:
```bash
npm run preview
```

---

## 🚀 Deployment

The project is configured for deployment on GitHub Pages. To deploy the build:

```bash
npm run deploy
```
This runs the `predeploy` script automatically (`npm run build`) and publishes the contents of the `/dist` folder to your GitHub Pages branch.

---

## 📝 License

This project is open source and available under the MIT License.
