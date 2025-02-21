import type { Config } from "tailwindcss";
import tailwindAnimate from 'tailwindcss-animate'
export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				'100': 'var(--primary-100)',
  				'200': 'var(--primary-200)',
  				'300': 'var(--primary-300)'
  			},
  			accent: {
  				'100': 'var(--accent-100)',
  				'200': 'var(--accent-200)'
  			},
  			secondary: {
  				'100': 'var(--text-100)',
  				'200': 'var(--text-200)'
  			},
  			background: {
  				'100': 'var(--bg-100)',
  				'200': 'var(--bg-200)',
  				'300': 'var(--bg-300)'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [tailwindAnimate],
} satisfies Config;
