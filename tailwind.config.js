module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: 'var(--primary)',
                secondary: 'var(--secondary)',
                tertiary: 'var(--tertiary)',
                'light-color': 'var(--light-color)',
            },
            borderWidth: {
                '3': '3px',
            },
        },
    },
    plugins: [],
}
