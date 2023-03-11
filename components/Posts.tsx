import Image from "next/image"
import { urlFor } from "root/lib/client"
import Link from "next/link"

export default function Posts({posts}:any) {
  return (
    <div>
        <div className="flex flex-col gap-6 px-4 bg-gray-900">
                <h1 className="text-2xl font-bold text-white ">
                    Recent Blogs
                </h1>                          
                {posts?.map((post:any)=>{
                    return (                    
                        <div key={post._id}>
                            <Link className="flex flex-col gap-4"  href={`/blogs/${post.slug.current}`}>
                                <div  className="relative w-full h-60">
                                    <Image className="object-cover rounded-bl-none rounded-br-none rounded-t-md" src={urlFor(post.mainImage).url()} alt="blog" fill/>
                                </div>                            
                                <h1 className="text-2xl font-bold text-white font-poppins">
                                    {post.title}
                                </h1>
                            </Link>
                                <div className="flex items-center gap-4 py-4 font-poppins">
                                    <Link className="px-3 py-2 font-bold bg-yellow-400 rounded-lg grow-0 " href={"#something"}>CSS</Link>
                                    <Link className="px-3 py-2 font-bold bg-yellow-400 rounded-lg grow-0 " href={"#react"}>React</Link>
                                </div>
                        </div>
                )})}                     
            </div>
    </div>
  )
}
