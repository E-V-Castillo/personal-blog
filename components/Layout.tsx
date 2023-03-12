import Footer from "./Footer"
import Header from "./Header"

export default function Layout({ children }: any) {
    return (
      <div className="flex flex-col">
        <Header />
        <main className="font-montserrat">
            {children}
        </main>
        <Footer />
      </div>
    )
}