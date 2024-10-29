/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,jsx,ts,tsx,md,mdx}',
      './components/**/*.{js,jsx,ts,tsx,md,mdx}',
      "./node_modules/flyonui/dist/js/*.js",
      "./node_modules/flyonui/dist/js/accordion.js",
   
      // Or if using `src` directory:
      './src/**/*.{js,jsx,ts,tsx,md,mdx}'
    ],
    theme: {
      extend: {}
    },
    plugins: [
      require("flyonui"),
      require("flyonui/plugin")
    ]
  }