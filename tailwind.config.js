/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#D2042D',
        'candy': '#DC0430',
        'primary-3': '#C8042B',
        'primary-2': '#EF0D3A',
        'primary-1': '#FF9FB3',
        'neutral-6': '#22050B',
        'neutral-5': '#3D131C',
        'neutral-4': '#683C45',
        'neutral-3': '#996E77',
        'neutral-2': '#BCACAF',
        'neutral-1': '#EAE8E8',
        'neutral-0': '#F6F3F4'
      },
      fontFamily: {
        'outfit': ['"Outfit"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}