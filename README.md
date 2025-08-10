# DesignVault Pro 🎨

A modern, full-stack portfolio management system for interior and exterior design professionals. Built with React, Supabase, and a sophisticated design system.

![DesignVault Pro](https://img.shields.io/badge/DesignVault-Pro-gold?style=for-the-badge&logo=react)
![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.4.19-purple?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)
![Supabase](https://img.shields.io/badge/Supabase-Database-3ECF8E?style=for-the-badge&logo=supabase)

## ✨ Features

### 🎯 **Portfolio Management**
- **Project Gallery** with advanced filtering and search
- **Project Categories** (Interior, Exterior, Landscape)
- **Material Library** management
- **Image Management** with drag & drop uploads
- **Project Timeline** and progress tracking

### 🎨 **Design System**
- **Custom Color Palette** with sophisticated branding
- **Typography System** (Playfair Display, Inter, Cormorant Garamond)
- **Responsive Design** with mobile-first approach
- **Interactive Components** with smooth animations
- **Glass Morphism** and modern UI effects

### 🔐 **Authentication & Admin**
- **Role-based Access** (Admin, Client, Viewer)
- **Admin Dashboard** with analytics and project management
- **Contact Inquiry** management system
- **User Profile** management

### 📊 **Analytics & Insights**
- **Portfolio Analytics** with charts and statistics
- **Project Performance** tracking
- **Inquiry Management** and lead tracking
- **Content Management** system

## 🚀 Quick Start

### Prerequisites
- Node.js (v14.x or higher)
- npm or yarn
- Supabase account (for backend)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/designvault-pro.git
   cd designvault-pro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file
   echo "VITE_SUPABASE_URL=your_supabase_project_url" > .env
   echo "VITE_SUPABASE_ANON_KEY=your_supabase_anon_key" >> .env
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:4028`

## 🛠️ Tech Stack

### **Frontend**
- **React 18** - Modern React with hooks and functional components
- **Vite** - Lightning-fast build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework with custom design system
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icon library
- **React Hook Form** - Form handling and validation
- **Recharts** - Data visualization

### **Backend & Database**
- **Supabase** - PostgreSQL database with real-time features
- **Row Level Security** - Data protection and access control
- **Supabase Auth** - Authentication and user management
- **Supabase Storage** - File uploads and media management

### **Design System**
- **Custom CSS Variables** - Brand-consistent theming
- **Typography Scale** - Responsive text sizing
- **Spacing System** - Consistent layout spacing
- **Color Palette** - Sophisticated brand colors
- **Component Library** - Reusable UI components

## 📁 Project Structure

```
designvault_pro/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # Base UI components
│   │   └── AppIcon.jsx     # Icon wrapper
│   ├── contexts/           # React contexts
│   ├── lib/               # External service configs
│   ├── pages/             # Route-based pages
│   │   ├── homepage/      # Landing page
│   │   ├── portfolio-gallery/ # Project showcase
│   │   ├── admin-dashboard/   # Admin management
│   │   └── auth/          # Authentication
│   ├── services/          # API service layer
│   ├── styles/            # Global styles
│   └── utils/             # Utility functions
├── supabase/              # Database migrations
├── build/                 # Production build
└── public/               # Static assets
```

## 🎨 Design System

### **Color Palette**
- **Primary**: Sophisticated charcoal (`#2C2C2C`)
- **Secondary**: Warm canvas (`#F8F6F3`)
- **Accent**: Curated gold (`#B8860B`)
- **CTA**: Antique gold (`#D4AF37`)

### **Typography**
- **Headlines**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Accent**: Cormorant Garamond (script)

### **Spacing & Layout**
- **Container**: Max-width 1200px with responsive padding
- **Sections**: Consistent vertical spacing
- **Grid System**: Responsive portfolio grid

## 🗄️ Database Schema

### **Core Tables**
- `user_profiles` - User management with roles
- `projects` - Main project data
- `project_categories` - Project classification
- `project_images` - Image management
- `project_materials` - Material specifications
- `project_tags` - Tagging system
- `contact_inquiries` - Lead management

## 🚀 Deployment

### **Build for Production**
```bash
npm run build
```

### **Deploy to Vercel**
```bash
npm install -g vercel
vercel
```

### **Deploy to Netlify**
```bash
npm install -g netlify-cli
netlify deploy --dir=build --prod
```

### **Deploy to GitHub Pages**
```bash
npm install --save-dev gh-pages
npm run deploy
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm start` - Alias for dev

## 📱 Responsive Design

The application is built with a mobile-first approach and includes:
- **Responsive breakpoints** for all screen sizes
- **Touch-friendly** navigation and interactions
- **Optimized images** and lazy loading
- **Progressive enhancement** for different devices

## 🔒 Security Features

- **Row Level Security** policies for data access
- **Role-based authentication** and authorization
- **Protected admin routes** and dashboard access
- **Secure file upload** with type validation
- **Input sanitization** and validation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Rocket.new](https://rocket.new)
- Powered by React and Vite
- Styled with Tailwind CSS
- Backend by Supabase

---

**DesignVault Pro** - Transform your space with award-winning design services. 🏆

Built with ❤️ for design professionals
