import Image from "next/image"
import { client } from "root/lib/client"
import Posts from "root/components/Posts"

export const getServerSideProps = async() => {
    const query =`*[_type == "post"]`
    const posts = await client.fetch(query)
    return {
        props: {posts}
    }
}


export default function Home({posts}:any) {

    return (
        <>
            <div className="h-full bg-gray-900">
                <div>
                    <div className="flex flex-col items-center w-full px-4 pt-8 pb-12 bg-white">
                        <div className="flex flex-col items-center max-w-6xl gap-4">
                            <div className="relative">
                                <h1 className="text-2xl font-bold font-poppins">
                                    Hello, I&#39;m Emmanuel
                                </h1>
                                <div className="hidden sm:inline sm:absolute sm:left-[250px] sm:top-0 sm:w-[50px] sm:h-[50px]">
                                    <Image className="object-cover" src={"/cup.png"} fill alt="cup"/>
                                </div>
                            </div>
                            <p className="w-full sm:max-w-[600px]">
                                I&#39;m a full-stack developer with a passion for serving up top of the line designs and systems for people.
                            </p>
                            <div className="flex flex-col items-center space-y-2 cursor-pointer ">
                                <button>
                                    Long Version
                                </button>
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.5 1.72083C5.813 1.72083 2 5.53383 2 10.2208C2 14.9078 5.813 18.7208 10.5 18.7208C15.187 18.7208 19 14.9078 19 10.2208C19 5.53383 15.187 1.72083 10.5 1.72083ZM10.5 20.2208C4.986 20.2208 0.5 15.7348 0.5 10.2208C0.5 4.70683 4.986 0.220825 10.5 0.220825C16.014 0.220825 20.5 4.70683 20.5 10.2208C20.5 15.7348 16.014 20.2208 10.5 20.2208Z" fill="black"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.5 13.0147C10.301 13.0147 10.109 12.9357 9.96899 12.7937L6.49799 9.3077C6.20499 9.0137 6.20699 8.5387 6.49999 8.2467C6.79399 7.9547 7.26899 7.9547 7.56099 8.2487L10.5 11.2027L13.44 8.2487C13.732 7.9547 14.207 7.9547 14.501 8.2467C14.794 8.5387 14.795 9.0137 14.503 9.3077L11.031 12.7937C10.891 12.9357 10.699 13.0147 10.5 13.0147Z" fill="black"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    {/* This is the Featured Posts Section*/}
                    <div className="flex flex-col items-center px-4 pt-8 pb-16 bg-gray-900">
                        <div className="flex flex-col max-w-6xl gap-6 text-white">
                            <h1 id="blogs" className="text-2xl font-bold font-poppins">
                                Featured Blogs
                            </h1>
                            {/* individual post */}
                            <div className="flex flex-col gap-8 sm:grid-cols-2 sm:grid">
                                <div className="flex flex-col gap-4 grow">
                                    <div className="relative w-full h-60">
                                        <Image className="object-cover rounded-md" src={"https://images.unsplash.com/photo-1676763133944-1738fb369107?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"} alt="blog photo" fill />
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <h1 className="text-2xl font-bold font-poppins">
                                            Learn NextJS
                                        </h1>
                                        <p className="text-base">
                                            React has dominated the world of technology for the past two decades. I would like to discuss why it has done so and what...
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 grow">
                                    <div className="relative w-full h-60">
                                        <Image className="object-cover rounded-md" src={"https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"} alt="blog photo" fill />
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <h1 className="text-2xl font-bold font-poppins">
                                            I want to visit Tokyo so baaad
                                        </h1>
                                        <p className="text-base">
                                            Join me on a virtual journey as I share my burning desire to explore the Land of the Rising Sun...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-6 px-4 pb-8">
                    <h1 className="w-full max-w-6xl text-2xl font-bold text-white">
                        Recent Blogs
                    </h1>
                    <div className="w-full">
                        <Posts posts={posts}/>
                    </div>
                </div>
            </div>
        </>
    )
}
