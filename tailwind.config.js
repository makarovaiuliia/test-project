/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            violet: '#512689',
            white: '#ffffff',
            black: '#000000',
            'grey-light': '#F8F8F8',
            gray: '#808185',
        },
        fontFamily: {
            'main-font': ['Roboto', 'sans-serif'],
        },
        extend: {},
    },
    plugins: [],
};
