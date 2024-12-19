import { fromJSON } from 'postcss';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: "#1c1c22",
			accent: {
				DEFAULT: "#00ff99",
				hover: '#00e187',
				
			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		keyframes: {
			"accordion-down": {
				from: {height: "0"},
				to: {height: "var(--radix-accordion-content-height)"},
			},
			"accordion-up": {
				from: {height: "var(--radix-accordion-contenx-height)"},
				to: {height: "0"}	 
			}
		}
  	},
	container: {
		center: true,
		padding: "15px",
	},
	screens: {
		sm: "640px",
		md: "768px",
		lg: "960px",
		xl: "1200px",
	},
	fontFamily: {
		primary: "var(--font-jetbrainsMono)",

	}
  },
  plugins: [require("tailwindcss-animate")],
};
