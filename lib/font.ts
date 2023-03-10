import { Montserrat } from "@next/font/google"
import { Poppins } from '@next/font/google'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ["400", "700"],
    variable: "--font-poppins"
})

const monstserrat = Montserrat({
    subsets: ['latin'],
    weight: ["400", "700"],
    variable: "--font-montserrat"
})


