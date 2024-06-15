/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            width: {
                '500px': '500px',
                '100dvw': '100dvw',
                '100%': '100%',
            },
            colors: {
                violet: '#512689',
                white: '#ffffff',
                black: '#000000',
                'grey-light': '#F8F8F8',
                grey: '#808185',
                red: '#FF6161',
            },
            fontFamily: {
                'main-font': ['Roboto', 'sans-serif'],
            },
            fontSize: {
                sm: '0.88rem',
                base: '1rem',
                xl: '1.25rem',
                '2xl': '1.25rem',
                '3xl': '4rem',
                '4xl': '0.63rem',
                '32px': '32px'
            },
            minHight: {
                '100dvh': '100dvh',
                '100%': '100%'
            },
            padding: {
                '300px': '300px',
            },
            borderWidth: {
                '1px': '1px',
            },
        },
    },
    plugins: [],
};
