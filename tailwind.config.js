/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			heading: ['Libre Baskerville', 'serif'],
			body: ['Source Sans Pro', 'sans-serif'],
			script: ['WindSong', 'sans-serif'],
		},
		extend: {},
	},
	plugins: [],
};
