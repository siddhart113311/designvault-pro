/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* functional-clarity */
        input: "var(--color-input)", /* white */
        ring: "var(--color-ring)", /* curated-gold */
        background: "var(--color-background)", /* pure-white */
        foreground: "var(--color-foreground)", /* near-black */
        primary: {
          DEFAULT: "var(--color-primary)", /* sophisticated-charcoal */
          foreground: "var(--color-primary-foreground)", /* white */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* warm-canvas */
          foreground: "var(--color-secondary-foreground)", /* near-black */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* helpful-correction */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* subtle-elevation */
          foreground: "var(--color-muted-foreground)", /* clear-hierarchy */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* curated-gold */
          foreground: "var(--color-accent-foreground)", /* white */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* white */
          foreground: "var(--color-popover-foreground)", /* near-black */
        },
        card: {
          DEFAULT: "var(--color-card)", /* white */
          foreground: "var(--color-card-foreground)", /* near-black */
        },
        success: {
          DEFAULT: "var(--color-success)", /* confident-confirmation */
          foreground: "var(--color-success-foreground)", /* white */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* thoughtful-caution */
          foreground: "var(--color-warning-foreground)", /* white */
        },
        error: {
          DEFAULT: "var(--color-error)", /* helpful-correction */
          foreground: "var(--color-error-foreground)", /* white */
        },
        // Brand-specific colors
        'text-primary': "var(--color-text-primary)", /* readable-authority */
        'text-secondary': "var(--color-text-secondary)", /* clear-hierarchy */
        'text-muted': "var(--color-text-muted)", /* subtle-support */
        'trust-builder': "var(--color-trust-builder)", /* muted-blue-gray */
        'cta-primary': "var(--color-cta-primary)", /* antique-gold */
        'cta-primary-foreground': "var(--color-cta-primary-foreground)", /* near-black */
        'surface': "var(--color-surface)", /* subtle-elevation */
      },
      borderRadius: {
        lg: "var(--radius-lg)", /* 12px */
        md: "var(--radius-md)", /* 8px */
        sm: "var(--radius-sm)", /* 4px */
        xl: "var(--radius-xl)", /* 16px */
      },
      fontFamily: {
        headline: ['Playfair Display', 'serif'], /* sophisticated-serif */
        body: ['Inter', 'sans-serif'], /* clean-readability */
        accent: ['Cormorant Garamond', 'serif'], /* elegant-script */
      },
      fontSize: {
        'brand-hero': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'brand-heading': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'brand-subheading': ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.3' }],
        'brand-body': ['1rem', { lineHeight: '1.6' }],
        'brand-caption': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        'brand-xs': 'var(--spacing-xs)', /* 8px */
        'brand-sm': 'var(--spacing-sm)', /* 12px */
        'brand-md': 'var(--spacing-md)', /* 16px */
        'brand-lg': 'var(--spacing-lg)', /* 24px */
        'brand-xl': 'var(--spacing-xl)', /* 32px */
        'brand-2xl': 'var(--spacing-2xl)', /* 48px */
        'brand-3xl': 'var(--spacing-3xl)', /* 64px */
        'brand-4xl': 'var(--spacing-4xl)', /* 96px */
      },
      boxShadow: {
        'brand-subtle': 'var(--shadow-subtle)',
        'brand-moderate': 'var(--shadow-moderate)',
        'brand-elevated': 'var(--shadow-elevated)',
        'brand-floating': 'var(--shadow-floating)',
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "scale-in": "scale-in 0.4s ease-out",
        "reveal": "reveal 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-up": {
          from: { opacity: "0.3", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "reveal": {
          from: { opacity: "0.3", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      aspectRatio: {
        'brand-hero': '16 / 9',
        'brand-portfolio': '4 / 3',
        'brand-square': '1 / 1',
        'brand-golden': '1.618 / 1',
      },
      backdropBlur: {
        'brand': '10px',
      },
      transitionTimingFunction: {
        'brand-reveal': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      transitionDuration: {
        'brand-fast': '200ms',
        'brand-normal': '300ms',
        'brand-slow': '400ms',
        'brand-reveal': '800ms',
      },
      screens: {
        'xs': '475px',
      },
      maxWidth: {
        'brand-container': '1200px',
        'brand-content': '800px',
        'brand-narrow': '600px',
      },
      zIndex: {
        'header': '50',
        'sidebar': '40',
        'modal': '100',
        'tooltip': '110',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
}