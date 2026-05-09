/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        /* Primary Colors */
        primary: {
          background: "var(--primary-background)",
          foreground: "var(--primary-foreground)",
        },
        /* Secondary Colors */
        secondary: {
          background: "var(--secondary-background)",
          light: "var(--secondary-light)",
          white: "var(--secondary-white)",
        },
        /* Text Colors */
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          inverse: "var(--text-inverse)",
        },
        /* Background Colors */
        background: {
          main: "var(--bg-main)",
          cream: "var(--bg-cream)",
          white: "var(--bg-white)",
          black: "var(--bg-black)",
          overlay: {
            light: "var(--bg-overlay-light)",
            white: "var(--bg-overlay-white)",
            medium: "var(--bg-overlay-white-medium)",
          }
        },
        /* Border Colors */
        border: {
          light: "var(--border-light)",
          white: "var(--border-white)",
        },
        /* Component Specific Colors */
        header: {
          background: "var(--header-background)",
          text: "var(--header-text)",
        },
        button: {
          primary: {
            background: "var(--button-primary-bg)",
            text: "var(--button-primary-text)",
          },
          secondary: {
            background: "var(--button-secondary-bg)",
            text: "var(--button-secondary-text)",
          },
          ghost: {
            background: "var(--button-ghost-bg)",
            text: "var(--button-ghost-text)",
          },
          border: "var(--button-border)",
        },
        link: {
          primary: "var(--link-primary)",
          secondary: "var(--link-secondary)",
          inverse: "var(--link-inverse)",
        },
        card: {
          background: "var(--card-background)",
          border: "var(--card-border)",
        },
        divider: "var(--divider-color)",
        iconButton: {
          cream: "var(--icon-button-bg-cream)",
          light: "var(--icon-button-bg-light)",
          border: "var(--icon-button-border)",
        },
        expand: {
          border: "var(--expand-border)",
          text: "var(--expand-text)",
          content: "var(--expand-content)",
        }
      },
      /* Typography */
      fontSize: {
        'xs': 'var(--font-size-xs)',
        'sm': 'var(--font-size-sm)',
        'base': 'var(--font-size-base)',
        'md': 'var(--font-size-md)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)',
        '5xl': 'var(--font-size-5xl)',
        '6xl': 'var(--font-size-6xl)',
        '7xl': 'var(--font-size-7xl)',
        '8xl': 'var(--font-size-8xl)',
        'hero': 'var(--font-size-hero)',
      },
      fontWeight: {
        'normal': 'var(--font-weight-normal)',
        'medium': 'var(--font-weight-medium)',
        'semibold': 'var(--font-weight-semibold)',
        'bold': 'var(--font-weight-bold)',
      },
      lineHeight: {
        'xs': 'var(--line-height-xs)',
        'sm': 'var(--line-height-sm)',
        'base': 'var(--line-height-base)',
        'md': 'var(--line-height-md)',
        'lg': 'var(--line-height-lg)',
        'xl': 'var(--line-height-xl)',
        '2xl': 'var(--line-height-2xl)',
        '3xl': 'var(--line-height-3xl)',
        '4xl': 'var(--line-height-4xl)',
        '5xl': 'var(--line-height-5xl)',
        '6xl': 'var(--line-height-6xl)',
        '7xl': 'var(--line-height-7xl)',
        'hero': 'var(--line-height-hero)',
      },
      fontFamily: {
        primary: 'var(--font-primary)',
        secondary: 'var(--font-secondary)',
      },
      /* Spacing */
      spacing: {
        'xxs': 'var(--padding-xxs)',
        'xs': 'var(--padding-xs)',
        'sm': 'var(--padding-sm)',
        'md': 'var(--padding-md)',
        'base': 'var(--padding-base)',
        'lg': 'var(--padding-lg)',
        'xl': 'var(--padding-xl)',
        '2xl': 'var(--padding-2xl)',
        '3xl': 'var(--padding-3xl)',
        '4xl': 'var(--padding-4xl)',
        '5xl': 'var(--padding-5xl)',
        '6xl': 'var(--padding-6xl)',
        '7xl': 'var(--padding-7xl)',
        '8xl': 'var(--padding-8xl)',
        '9xl': 'var(--padding-9xl)',
        '10xl': 'var(--padding-10xl)',
        '11xl': 'var(--padding-11xl)',
        '12xl': 'var(--padding-12xl)',
        '13xl': 'var(--padding-13xl)',
        '14xl': 'var(--padding-14xl)',
      },
      gap: {
        'xxs': 'var(--gap-xxs)',
        'xs': 'var(--gap-xs)',
        'sm': 'var(--gap-sm)',
        'md': 'var(--gap-md)',
        'base': 'var(--gap-base)',
        'lg': 'var(--gap-lg)',
        'xl': 'var(--gap-xl)',
        '2xl': 'var(--gap-2xl)',
        '3xl': 'var(--gap-3xl)',
        '4xl': 'var(--gap-4xl)',
        '5xl': 'var(--gap-5xl)',
        '6xl': 'var(--gap-6xl)',
        '7xl': 'var(--gap-7xl)',
        '8xl': 'var(--gap-8xl)',
        '9xl': 'var(--gap-9xl)',
        '10xl': 'var(--gap-10xl)',
        '11xl': 'var(--gap-11xl)',
        '12xl': 'var(--gap-12xl)',
        '13xl': 'var(--gap-13xl)',
        '14xl': 'var(--gap-14xl)',
        '15xl': 'var(--gap-15xl)',
        '16xl': 'var(--gap-16xl)',
        '17xl': 'var(--gap-17xl)',
        '18xl': 'var(--gap-18xl)',
      },
      /* Border Radius */
      borderRadius: {
        'xs': 'var(--radius-xs)',
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        '3xl': 'var(--radius-3xl)',
        '4xl': 'var(--radius-4xl)',
        '5xl': 'var(--radius-5xl)',
        '6xl': 'var(--radius-6xl)',
      },
      /* Border Width */
      borderWidth: {
        'thin': 'var(--border-width-thin)',
      },
    },
  },
  plugins: []
};