// Codes By Mahdi Tasha
// Importing Part
import type {Config} from 'tailwindcss'

// Configs Of TailwindCSS
const config: Config = {
    content: [
        './components/*.{tsx,ts,js,jsx}',
        './components/**/*.{tsx,ts,js,jsx}',
        './chunks/*.{tsx,ts,js,jsx}',
        './chunks/**/*.{tsx,ts,js,jsx}',
        './app/*.{tsx,ts,js,jsx}',
    ],
    theme: {
        colors: {
            themeColor: '#0040FF'
        }
    },
    plugins: [],
}

// Exporting Configs Of TailwindCSS
export default config;