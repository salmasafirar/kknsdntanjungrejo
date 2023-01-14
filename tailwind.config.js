module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./slices/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		container: {
			padding: {
				DEFAULT: '5%',
				sm: '32px',
			},
		},
		extend: {
			fontFamily: {
				main: 'futura-lt',
				montserrat: 'Montserrat, sans-serif',
			},
			screens: {
				'-2xl': { raw: '(max-width: 1535px)' },
				'-xl': { raw: '(max-width: 1279px)' },
				'-lg': { raw: '(max-width: 1023px)' },
				'-md': { raw: '(max-width: 767px)' },
				'-sm': { raw: '(max-width: 639px)' },
			},
		},
	},
	plugins: [],
};

