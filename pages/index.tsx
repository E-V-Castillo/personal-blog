import Image from "next/image"

export default function Home() {
  return (
    <>
        <div className="h-screen bg-gray-900">
            <div className="bg-white">
                <div>
                    <div className="">
                        {/* <img src="/../public/cup.png" alt="cup"/> */}
                    </div>
                    <h1>
                        Hello I&#39;m Emmanuel
                    </h1>
                </div>
                <ul>
                    <li>Fullstack Web Developer</li>
                    <li>Web Designer</li>
                    <li>Nextjs Enthusiast</li>
                </ul>
            </div>

            <div className="bg-teal-500">
                <div className="flex flex-col items-center justify-center gap-5 px-8 pt-10 pb-10">
                        <div className="relative"> 

                            <img className="rounded-md w-80" src="https://images.unsplash.com/photo-1676763133944-1738fb369107?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt="blog photo" />
                            <div className="absolute px-5 py-2 text-white -rotate-45 bg-pink-400 -bottom-2 -right-8">
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
        </div>
    </>
  )
}
