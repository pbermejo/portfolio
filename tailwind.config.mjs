/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            paper: {
                dark: "#0D1117",
                mid: "#484F58",
                light: "#E6EDF3",
                tint: "#008fa8ff",
                border: "#d5d8dbff"
            },
            charcoal: {
                dark: "#1F2328",
                mid: "#8B949E",
                light: "#F8F9FA",
                tint: "#e5ff00",
                border: "#313335ff"
            }
        },
        extend: {
            fontFamily: {
                mono: ['"Space Mono"', 'monospace'],
                sans: ['"Space Mono"', 'monospace'], // Force mono everywhere
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                pulseFade: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.5' },
                }
            },
            animation: {
                fadeIn: 'fadeIn 0.8s ease-out forwards',
                pulseFade: 'pulseFade 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }
        },
	},
	plugins: [],
}