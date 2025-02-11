/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,jsx,ts,tsx,md,mdx}',
      './components/**/*.{js,jsx,ts,tsx,md,mdx}',
      "./node_modules/flyonui/dist/js/*.js",
      "./node_modules/flyonui/dist/js/accordion.js",
      'node_modules/preline/dist/*.js',
   
      // Or if using `src` directory:
      './src/**/*.{js,jsx,ts,tsx,md,mdx}'
    ],
    theme: {
      extend: {
        animation: {
          "shiny-text": "shiny-text 8s infinite",
        },
        keyframes: {
          "shiny-text": {
            "0%, 90%, 100%": {
              "background-position": "calc(-100% - var(--shiny-width)) 0",
            },
            "30%, 60%": {
              "background-position": "calc(100% + var(--shiny-width)) 0",
            },
          },
        },
      }
    },
    plugins: [
      require("flyonui"),
      require("flyonui/plugin"),
      require('preline/plugin'),
    ]
  }