/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				body: ["var(--font-josefin-sans)", ...defaultTheme.fontFamily.sans],
				headline: ["var(--font-philosopher)", ...defaultTheme.fontFamily.serif],
			},
			colors: {
				red: "#ac2229",
				brown: "#bb6f3f",
				green: "#469159",
				yellow: "#ede1c8",
				"sub-red": "#8b1c22",
				"sub-brown": "#8f5632",
				"sub-yellow": "#dfc879",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
