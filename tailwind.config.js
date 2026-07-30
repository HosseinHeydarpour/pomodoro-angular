/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        background: '#0B1220',
        surface: '#111827',
        'surface-2': '#172033',
        sidebar: '#0F172A',
        hover: '#1C2940',
        border: '#23314A',

        // Primary
        primary: {
          DEFAULT: '#6D6AFE',
          hover: '#7F7CFF',
          pressed: '#5956F4',
          light: '#8E8BFF',
        },

        // Text
        text: {
          DEFAULT: '#F8FAFC',
          secondary: '#CBD5E1',
          muted: '#94A3B8',
          disabled: '#64748B',
        },

        // Status
        success: '#22C55E',
        warning: '#F59E0B',
        danger: '#EF4444',
        info: '#3B82F6',

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
        card: '0 10px 30px rgba(0,0,0,.35)',
        button: '0 0 30px rgba(109,106,254,.25)',
        modal: '0 25px 70px rgba(0,0,0,.55)',
      },

      backgroundImage: {
        'primary-gradient': 'linear-gradient(135deg, #6D6AFE 0%, #8B5CF6 100%)',
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
