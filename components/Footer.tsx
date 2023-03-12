import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full px-4">
            <div className="flex flex-col items-center gap-8">
                <div>
                    <Image src={"/bunny black.svg"} alt="logo" width={100} height={100}/>
                </div>
                <div className="flex items-start justify-between w-1/2">
                    <div className="flex flex-col gap-4">
                        <h1 className="font-bold">Links</h1>
                        <ul className="flex flex-col gap-2">
                            <Link href="#">Blogs</Link>
                            <Link href="#">Biography</Link>
                            <Link href="#">Portfolio</Link>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="font-bold">Support</h1>
                        <ul className="flex flex-col gap-2">
                            <Link href="#">About Me</Link>
                            <Link href="#">Terms of Use</Link>
                            <Link href="#">Privacy Policy</Link>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-bold">Need a Website Built and Designed?</h1>
                    <ul className="flex flex-col gap-2">
                        <Link href="#">Contact Me</Link>
                        <Link href="#">Upwork</Link>
                    </ul>
                </div>
                <p>Copyright © 2023-present Emmanuel Castillo. ALl Rights Reserved</p>
            </div>
        </footer>
    )
}
