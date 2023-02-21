import Image from "next/image";

export default function Header(){
    return(
        <header className="h-24 text-white bg-gray-900 ">
            <div className="flex items-center justify-between px-6 py-6">
                <div className="">
                    <h1 className="text-2xl font-bold">Logo</h1>
                </div>
                <nav className="flex items-end gap-5">
                    <li className="list-none">
                        <a className="" href="#">
                            Blogs
                        </a>
                    </li>
                    <li className="list-none">
                        <a href="#">
                            About
                        </a>
                    </li>
                    <li className="px-4 py-2 list-none rounded-md bg-cyan-800">
                        <a href="#">
                            Login
                        </a>
                    </li>
                    <li className="px-4 py-2 list-none rounded-md bg-cyan-800">
                        <a href="#">
                            Signup
                        </a>
                    </li>
                </nav>
            </div>
        </header>
    )
}