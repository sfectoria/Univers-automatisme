/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      caveat: ['Caveat', 'cursive'],
  },
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1400px",
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        tertiary: {
          DEFAULT: "hsl(var(--tertiary))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        green: {
          100: "#eaf4c6",
          DEFAULT: "#B8D941",
          600: "#B0D24B",
        },
        orange: {
          50: '#fffaf0',
          100: '#feebc8',
          200: '#fbd38d',
          300: '#f6ad55',
          400: '#ed8936',
          500: '#dd6b20',
          600: '#c05621',
          700: '#9c4221',
          800: '#7b341e',
          900: '#652b19',
        }
        
       
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      backgroundImage: {
        hero: "url(/hero/hero-bg.png)",
        hero_shape: "url(/hero/shape-1.svg)",
        hero_shape2_light: "url(/hero/shape-2-light.svg)",
        hero_shape2_dark: "url(/hero/shape-2-dark.svg)",
        about_shape_light: "url(/about/shape-light.svg)",
        about_shape_dark: "url(/about/shape-dark.svg)",
        dots_light: "url(/dots-light.svg)",
        dots_dark: "url(/dots-dark.svg)",
        work_project_bg_light: "url(/work/project-bg-light.png)",
        work_project_bg_dark: "url(/work/project-bg-dark.png)",
        contact_illustration_light: "url(/contact/illustration-light.svg)",
        contact_illustration_dark: "url(/contact/illustration-dark.svg)",
        customGreenGradient: 'linear-gradient(to right, #b8d941, #b0d24b, #b7d64c)'
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
