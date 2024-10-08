/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class", '[data-theme="dark"]'],
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			screens: {
				'xs': '500px'
			},
			colors: {
				dark: "#111111",
				light: "#FFFFFF",
				blue: "#33d2ff",
				gray: "#C4C4C4",
			},
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				outfit: ["Outfit", "sans-serif"],
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
};
