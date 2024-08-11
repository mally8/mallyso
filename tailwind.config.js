/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				sGreen5: '',
				sGreen7: '',
				sGreen9: '',
				sGreenPrimary: 'rgba(226, 239, 210, 1)',
				sGreenDark: 'rgb(63, 80, 69)',
				sGreenDark9: 'rgba(63, 80, 69, 0.9)'
			},
			fontFamily: {
				sourceCode: 'var(--source-code)',
				robotoCondensed: 'var(--roboto)'
			}
		}
	},
	plugins: []
};
