import Image from "next/image"
import Link from "next/link"

export default function Header(){
    return(
        <header className="flex items-center justify-center w-full h-20 p-4 text-white bg-gray-900">
            <div className="flex items-center justify-between w-full md:max-w-6xl">
                <Link href={"/"} className="relative w-20 h-16">
                    <Image src={"/bunny.svg"} fill  alt="logo"/>
                </Link>
                <nav>
                    <ul className="hidden gap-4 md:text-base md:flex">
                        <li>
                            <Link className="font-poppins" href={"#blogs"}>Blogs</Link>
                        </li>
                        <li>
                            <a className="font-poppins" href="">About</a>
                        </li>
                        <li>
                            <a className="font-poppins" href="">Profile</a>
                        </li>
                        <li>
                            <a className="font-poppins" href="">Something</a>
                        </li>
                    </ul>
                    <button className="md:hidden">
                        <svg width="48px" height="48px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <title>Menu</title>
                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g id="Menu">
                                    <rect id="Rectangle" fillRule="nonzero" x="0" y="0" width="24" height="24" stroke="">

                                    </rect>
                                    <line x1="5" y1="7" x2="19" y2="7" id="Path" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round">

                                    </line>
                                    <line x1="5" y1="17" x2="19" y2="17" id="Path" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round">

                                    </line>
                                    <line x1="5" y1="12" x2="19" y2="12" id="Path" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round">
                                    </line>
                                </g>
                            </g>
                        </svg>
                    </button>
                </nav>
            </div>
        </header>
    )
}