import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center pt-8 pb-4 bg-slate-100 font-montserrat">
            <div className="grid w-full max-w-6xl grid-cols-2 grid-rows-3 gap-4 px-4 justify-items-center md:grid-rows-2 md:grid-cols-3 ">
                <div className="col-span-2 md:col-span-3">
                    <Image src={"/bunny black.svg"} alt="logo" width={100} height={100}/>                    
                </div>
                              
                <div className="flex flex-col col-span-1 gap-4 justify-self-start">
                    <h1 className="font-bold">Links</h1>
                    <ul className="flex flex-col gap-2">
                        <Link className="" href="#">Home</Link>
                        <Link className="" href="#">Blogs</Link>       
                        <Link href="#">Portfolio</Link>
                    </ul>
                </div>
                <div className="flex flex-col col-span-1 gap-4 justify-self-start">
                    <h1 className="font-bold ">Support</h1>
                    <ul className="flex flex-col gap-2">
                        <Link href="#">About Me</Link>
                        <Link href="#">Terms of Use</Link>
                        <Link href="#">Privacy Policy</Link>
                    </ul>
                </div>
                <div className="flex flex-col col-span-2 gap-4 pt-8 md:pt-0 md:col-span-1 justify-self-start">
                    <h1 className="font-bold ">Want to Hire Me?</h1>
                    <ul className="flex flex-col gap-2">
                        <Link href="#">Contact Me</Link>
                        <Link href="#">Upwork</Link>
                    </ul>
                </div>                
            </div>
            <p className="w-full max-w-6xl px-4 pt-8 text-xs">Copyright © 2023-present Emmanuel Castillo. All Rights Reserved</p>
        </footer>
    )
}
