import 'root/styles/globals.css'
import Layout from 'root/components/Layout'
import { Montserrat } from "@next/font/google"
import { Poppins } from '@next/font/google'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ["400", "700", "900"],
    variable: "--font-poppins"
})

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '700',],
    variable: "--font-montserrat"
})



import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout >
        <main className={`${montserrat.variable} ${poppins.variable}`}>
            <Component {...pageProps} />
        </main>
    </Layout>
  )
}
