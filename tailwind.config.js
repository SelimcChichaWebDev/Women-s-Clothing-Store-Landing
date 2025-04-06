/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		screens: {
			'2xl': { max: '1535px' },
			// => @media (max-width: 1535px) { ... }

			xl: { max: '1279px' },
			// => @media (max-width: 1279px) { ... }

			lg: { max: '1023px' },
			// => @media (max-width: 1023px) { ... }

			md: { max: '768px' },
			// => @media (max-width: 767px) { ... }

			sm: { max: '639px' },
			// => @media (max-width: 639px) { ... }

			xs: { max: '425px' },
			// => @media (max-width: 425px) { ... }

			xxs: { max: '375px' },
			// => @media (max-width: 425px) { ... }

			xxsm: { max: '320px' },
			// => @media (max-width: 425px) { ... }
		},
		// colors: {
		// 	colorYellowLight: '#E6C744',
		// 	colorWhite: '#FFFFFF',
		// 	colorBlack: '#000000',
		// 	colorGray: '#C2C8DA',
		// 	colorMainBg: '#F4F6F5',
		// },
	},
	plugins: [],
}
