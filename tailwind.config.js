/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        background: 'rgb(var(--background) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        'surface-2': 'rgb(var(--surface-2) / <alpha-value>)',
        sidebar: 'rgb(var(--sidebar) / <alpha-value>)',
        hover: 'rgb(var(--hover) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)',

        // Primary
        primary: {
          DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
          hover: 'rgb(var(--primary-hover) / <alpha-value>)',
          pressed: 'rgb(var(--primary-pressed) / <alpha-value>)',
          light: 'rgb(var(--primary-light) / <alpha-value>)',
        },

        // Text
        text: {
          DEFAULT: 'rgb(var(--text) / <alpha-value>)',
          secondary: 'rgb(var(--text-secondary) / <alpha-value>)',
          muted: 'rgb(var(--text-muted) / <alpha-value>)',
          disabled: 'rgb(var(--text-disabled) / <alpha-value>)',
        },

        // Status
        success: 'rgb(var(--success) / <alpha-value>)',
        warning: 'rgb(var(--warning) / <alpha-value>)',
        danger: 'rgb(var(--danger) / <alpha-value>)',
        info: 'rgb(var(--info) / <alpha-value>)',

        // Charts
        chart: {
          1: '#6D6AFE',
          2: '#8B5CF6',
          3: '#22C55E',
          4: '#F59E0B',
          5: '#06B6D4',
        },
      },

      fontFamily: {
        sans: ['Geist', 'Inter', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
      },

      borderRadius: {
        xs: '6px',
        sm: '8px',
        md: '12px',
        lg: '14px',
        xl: '20px',
        '2xl': '24px',
        full: '9999px',
      },

      boxShadow: {
        card: 'var(--shadow-card)',
        button: 'var(--shadow-button)',
        modal: 'var(--shadow-modal)',
      },

      backgroundImage: {
        'primary-gradient':
          'linear-gradient(135deg, rgb(var(--primary)) 0%, rgb(var(--primary-light)) 100%)',
      },

      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
      },

      transitionDuration: {
        180: '180ms',
        250: '250ms',
      },

      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
