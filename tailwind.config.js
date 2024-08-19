/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				bgt: 'var(--bgt)',
				primary: 'var(--primary)',
				neutral: 'var(--neutral)',
				base: 'var(--base)',
				pinkPrimary: '#f0d5de',
				orangePrimary: '#f5c299',
				greenPrimary: '#e2efd2'
			},
			borderRadius: {
				primary: 'var(--primaryRadius)',
				secondary: 'var(--secondaryRadius)'
			},
			fontFamily: {
				sourceCode: 'var(--source-code)',
				robotoCondensed: 'var(--roboto)'
			}
		}
	},
	plugins: []
};
