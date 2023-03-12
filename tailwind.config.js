

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontSize: {
                "3xl" : "2rem",
                "4xl" : "2.5rem",
            },
            fontFamily: {
                montserrat: ["Montserrat"],
                poppins: ["Poppins"]
                
            }
        },
    },
    plugins: [],
}
