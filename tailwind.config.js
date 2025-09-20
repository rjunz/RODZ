/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'oklch(0.922 0 0)',
        input: 'oklch(0.922 0 0)',
        ring: 'oklch(0.708 0 0)',
        background: 'oklch(1 0 0)',
        foreground: 'oklch(0.145 0 0)',
        primary: {
          DEFAULT: 'oklch(0.205 0 0)',
          foreground: 'oklch(0.985 0 0)',
        },
        secondary: {
          DEFAULT: 'oklch(0.97 0 0)',
          foreground: 'oklch(0.205 0 0)',
        },
        destructive: {
          DEFAULT: 'oklch(0.577 0.245 27.325)',
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: 'oklch(0.97 0 0)',
          foreground: 'oklch(0.556 0 0)',
        },
        accent: {
          DEFAULT: 'oklch(0.97 0 0)',
          foreground: 'oklch(0.205 0 0)',
        },
        popover: {
          DEFAULT: 'oklch(1 0 0)',
          foreground: 'oklch(0.145 0 0)',
        },
        card: {
          DEFAULT: 'oklch(1 0 0)',
          foreground: 'oklch(0.145 0 0)',
        },
        // Custom colors from your CSS variables
        'discord-blue': '#5865f2',
        'discord-blurple': '#7b5fff',
        'gray-475': '#475467',
        'gray-98': '#98a2b3',
        'gray-101': '#101828',
        'red-error': '#b42318',
        'red-error-bg': '#fee4e2',
        'red-error-border': '#fecdca',
        'gray-border': '#eef0f4',
      },
      fontSize: {
        'text-xs': '0.75rem',
        'text-sm': '0.875rem',
        'text-base': '1rem',
        'text-lg': '1.125rem',
        'text-xl': '1.25rem',
        'text-2xl': '1.5rem',
        'text-3xl': '1.875rem',
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      borderRadius: {
        sm: 'calc(0.625rem - 4px)',
        md: 'calc(0.625rem - 2px)',
        lg: '0.625rem',
        xl: 'calc(0.625rem + 4px)',
      },
    },
  },
  plugins: [],
}
