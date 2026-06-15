/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
    extend: {
    colors: {
        'dark-mate': '#121212',
        'azul-profundo': '#1a1f2c',
        'dorado': '#d4af37',
    }
    },
},
plugins: [],
}