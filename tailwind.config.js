/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				Primarys: 'rgba(226, 239, 210, 1)',
				'green-300': 'rgb(63, 80, 69)',
				bgt: 'var(--bgt)'
			},
			fontFamily: {
				sourceCode: 'var(--source-code)',
				robotoCondensed: 'var(--roboto)'
			}
		}
	},
	plugins: [daisyui],
	daisyui: {
		logs: false,
		themes: [
			{
				green: {
					primary: '#e2efd2',
					'primary-focus': '#c2dea1',
					'primary-content': '#34392d',

					secondary: '#cc949f',
					'secondary-focus': '#debac1',
					'secondary-content': '#2b1c1e',

					accent: '#96cc94',
					'accent-focus': '#7cb87a',
					'accent-content': '#1d2b1c',

					neutral: '#18191b',
					'neutral-focus': '#303236',
					'neutral-content': '#e2e4e9',

					'base-100': '#34392d',
					'base-200': '#414738',
					// 'bgt': 'rgba(52,57,45,0.3)',
					'base-content': '#f6eeee',

					info: '#5b91be',
					success: '#4f928b',
					warning: '#9e7100',
					error: '#9b3146',

					'--rounded-box': '.1rem',
					'--rounded-btn': '.1rem',
					'--rounded-badge': '.4px',

					'--animation-btn': '.25s',
					'--animation-input': '.2s',

					'--btn-text-case': 'uppercase',
					'--navbar-padding': '.5rem',
					'--border-btn': '.1rem'
				}
			}
		]
	}
};
