# Mario Casas - Portfolio Website

A modern, terminal-themed portfolio website showcasing projects, experience, and skills. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Live Demo

[View Live Site](https://your-portfolio-url.vercel.app)

## ✨ Features

- **Terminal Aesthetic**: Unique retro terminal theme with typing effects
- **Multi-Category Projects**: 15+ projects across 6 categories (Full-Stack Web, AI & Machine Learning, Game Development, Mobile Development, Data Visualization, Research Tools)
- **Responsive Design**: Mobile-first with bottom navigation on mobile, side navigation on desktop
- **Dark/Light Theme**: Toggle between dark and light modes
- **Interactive UI**: Smooth animations, popout effects, and hover states
- **Project Showcases**: Detailed project pages with videos, demos, and GitHub links

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Routing**: React Router v7
- **Build Tool**: Vite 7
- **Deployment**: Vercel

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/NotAPlumber505/Portfolio.git

# Navigate to project directory
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🚀 Deployment to Vercel

### Quick Deploy

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

### Manual Configuration

If needed, use these settings:
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

The `vercel.json` file is already configured for proper routing.

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── assets/          # Project logos and images
│   └── portfolio_logo.png
├── src/
│   ├── assets/          # Profile picture and other assets
│   ├── components/      # Reusable components (MobileNav, ShellTerminalNav)
│   ├── context/         # Theme context
│   ├── data/            # JSON data (projects, about, education, etc.)
│   ├── hooks/           # Custom hooks
│   ├── pages/           # Route pages
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── vercel.json
```

## 🎨 Customization

### Update Personal Information

Edit `src/data/about.json`:
```json
{
  "name": "Your Name",
  "bio": "Your bio...",
  "email": "your@email.com",
  "phone": "(123) 456-7890",
  "github": "github.com/yourusername",
  "linkedin": "linkedin.com/in/yourprofile"
}
```

### Add Projects

Edit `src/data/projects.json` and add your project details. Include logos in `public/assets/`.

### Theme Colors

Modify CSS variables in `src/index.css` for custom colors.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 👤 Author

**Mario Casas**
- GitHub: [@NotAPlumber505](https://github.com/NotAPlumber505)
- LinkedIn: [mario-casas](https://www.linkedin.com/in/mario-casas-08491b21b/)
- Email: MCasas548@gmail.com

---

Built with ❤️ using React + Vite
