/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primaryBg: 'rgba(172, 221, 249, 0.1)',
				primaryBg3: 'rgba(172, 221, 249, 0.3)',
				primaryBg5: '#acddf980',
				primaryBg9: '#aedef9e6',
				primary: 'rgb(172, 221, 249)',
				dark: 'rgba(50, 50, 50, 0.8)'
			},
			fontFamily: {
				sourceCode: 'var(--source-code)',
				robotoCondensed: 'var(--roboto)'
			}
		}
	},
	plugins: []
};
