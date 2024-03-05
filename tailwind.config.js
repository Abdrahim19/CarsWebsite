/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'header-text': '#093c5f',
        'paragraph-text': '#666666',
        'background-1': '#e3f6ff',
        'background-2': '#fff2f1',
        'accent-color-1': '#fea07d',
        'accent-color-2': '#f86761',
        'accent-color-3': '#8c68c8',
        'accent-color-4': '#4b66ba',
        "Gray-800":"#D9D9D9",
        "gray-light":"#999999"
      },
      gradients: {
        'cta': 'linear-gradient(0deg, #f86761 0%, #fea07d 100%)',
        'shape-1': 'linear-gradient(0deg, #4b66ba 0%, #8c68c8 100%)',
      },
      boxShadow: {
        'subtle': '10px 40px 50px 0 rgba(232, 232, 232, 0.48)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        Italiana:[ "Italiana", 'sans-serif'],
        Inria :["Inria Serif", "serif"],
        FellGreat:["IM Fell Great Primer" , "serif"],
        Inika:["Inika", "serif"],
        Imprima:['Imprima' , "sans-serif" ],
        inkFree: ['Ink Free', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('./public/heroImge.png')",
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        mobile: "600px",
        tablet: "900px",
        desktop: "1000px",
      },
    },
  },
  plugins: [],
}