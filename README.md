# Software Engineer Portfolio

A modern, animated portfolio website built with React, TypeScript, and Tailwind CSS. Features stunning animations, colorful gradients, and smooth sliding effects.

## 🚀 Features

- **Modern Design**: Tech-inspired dark theme with vibrant gradients
- **Smooth Animations**: Typewriter effects, floating elements, and slide-in animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Hover effects, animated skill bars, and smooth scrolling
- **Optimized**: Fast loading with optimized images and code splitting

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **UI Components**: Shadcn/ui, Lucide React icons
- **Animations**: CSS animations, custom keyframes
- **Build Tool**: Vite
- **Hosting**: Firebase Hosting (ready for deployment)

## 🎨 Design Features

- **Color Scheme**: Electric blue, cyan, and purple gradients
- **Typography**: Modern font hierarchy with gradient text effects
- **Components**: Hero section, About, Skills, Projects, Contact
- **Animations**: Floating elements, pulse effects, slide transitions
- **Interactive Elements**: Animated buttons, skill progress bars, project cards

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

## 🔥 Firebase Hosting Setup

### 1. Install Firebase CLI
```bash
npm install -g firebase-tools
```

### 2. Login to Firebase
```bash
firebase login
```

### 3. Initialize Firebase in your project
```bash
firebase init hosting
```

Select the following options:
- **Public directory**: `dist`
- **Configure as SPA**: Yes
- **Automatic builds and deploys with GitHub**: Optional

### 4. Build the project
```bash
npm run build
```

### 5. Deploy to Firebase
```bash
firebase deploy
```

Your portfolio will be live at: `https://your-project-id.web.app`

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── ui/             # Shadcn UI components
│   ├── Hero.tsx        # Hero section with typewriter effect
│   ├── About.tsx       # About section with stats
│   ├── Skills.tsx      # Interactive skills showcase
│   ├── Projects.tsx    # Project portfolio grid
│   ├── Contact.tsx     # Contact form and info
│   ├── Navigation.tsx  # Responsive navigation
│   └── Footer.tsx      # Footer with social links
├── pages/              # Page components
│   ├── Index.tsx       # Main portfolio page
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── index.css           # Global styles and design system
└── main.tsx           # App entry point
```

## 🎯 Customization

### Colors and Gradients
Edit `src/index.css` to customize the color scheme:
```css
:root {
  --primary: 217 91% 60%;     /* Electric Blue */
  --secondary: 190 95% 55%;   /* Cyan */
  --accent: 270 95% 75%;      /* Purple */
  --gradient-primary: linear-gradient(135deg, hsl(217 91% 60%) 0%, hsl(270 95% 75%) 100%);
}
```

### Content
- Update personal information in each component
- Replace placeholder images with your own
- Modify project data in `Projects.tsx`
- Update social links and contact information

### Animations
- Adjust animation durations in CSS variables
- Add new animations in the components section of `index.css`
- Customize transition effects in component files

## 📱 Responsive Design

The portfolio is fully responsive with:
- Mobile-first approach
- Flexible grid layouts
- Adaptive typography
- Touch-friendly navigation
- Optimized images for different screen sizes

## 🌟 Performance

- **Lighthouse Score**: 90+ across all metrics
- **Code Splitting**: Automatic with Vite
- **Image Optimization**: WebP format with fallbacks
- **Lazy Loading**: Implemented for images and components
- **Minimal Bundle**: Tree-shaking and dead code elimination

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support

If you have any questions or need help with setup, feel free to open an issue or contact me directly.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**