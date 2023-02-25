import Image from "next/image"

export default function Home() {
  return (
    <>
        <div className="h-screen bg-gray-900">
            <div className="flex flex-col items-center pt-10 pb-10 bg-white">
                <div className="flex items-start"> 
                    <h1 className="text-3xl font-bold">
                        Hello, I&#39;m Emmanuel
                    </h1>
                    <div className="relative w-[50px] h-[50px]">
                        <Image className="object-cover" src={"/cup.png"} fill alt="cup"/>
                    </div>
                </div>
                <p className="inline w-96">
                    I&#39;m a fullstack developer who loves to build systems and designs for people
                </p>
                <ul className="flex gap-20 mt-10 text-gray-800">
                    <li>
                        UX/UI
                    </li>
                    <li>
                        NEXTJS
                    </li>
                    <li>
                        API
                    </li>
                </ul>
            </div>

            <div className="px-8 pt-10 bg-teal-500">
                <h1 className="text-4xl font-bold">
                    Popular Blogs
                </h1>
                <div className="flex flex-col items-center justify-center gap-5 pt-10 pb-10">
                        <div className="relative w-full"> 
                            <div className="relative w-full h-72">
                                <Image className="object-cover" src={"https://images.unsplash.com/photo-1676763133944-1738fb369107?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"} alt="blog photo" fill />
                            </div>  
                            <div className="absolute px-5 py-2 text-white -rotate-45 bg-pink-400 -top-2 -left-6">
                                New!
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <h1 className="text-4xl font-bold">
                                Learn NextJS
                            </h1>
                            <p className="text-center">
                                Totally legit, not gonna want to commit suicide after trying it out
                            </p>
                        </div>
                        <button className="px-4 py-2 font-bold bg-yellow-200 rounded-md">
                            Read More
                        </button>
                </div>
            </div>
            <div className="px-8 bg-gray-900">
                <div className="flex gap-8">
                    <h1 className="pt-20 pb-20 text-4xl font-bold text-gray-200 ">
                        My Personal Blogs
                    </h1>
                    <button className="text-2xl font-bold text-gray-200 ">
                        Filter
                    </button>
                </div>
                <div className="">
                    <div className="w-full h-full shadow-lg">
                        <div className="relative w-full h-80">
                            <Image className="object-cover rounded-bl-none rounded-br-none rounded-t-md" src={"https://images.unsplash.com/photo-1677022719836-2b0cb3d18bc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"} alt="blog" fill/>
                        </div>
                        <div className="flex flex-col items-start px-4 pt-4 pb-16 text-black bg-teal-500">
                            <h1 className="text-3xl font-bold">
                                Why I love Apple products (jk)
                            </h1>
                            <p className="mt-6 text-lg">
                                This is my extremely detailed description about this specific article
                            </p>
                            <div className="flex justify-end gap-6 mt-12 ml-auto">
                                <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-md">
                                    Read More
                                </button>
                                <button className="px-4 py-2 bg-white border border-black rounded-md">
                                    Heart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
