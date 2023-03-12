import Image from "next/image"
import { urlFor } from "root/lib/client"
import Link from "next/link"

export default function Posts({posts}:any) {
  return (
    <div className="flex flex-col items-center">
        <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-flow-col sm:grid-cols-2 lg:grid-cols-3">                                       
            {posts?.map((post:any)=>{
                return (                    
                    <div key={post._id} className="w-full">
                        <Link className="flex flex-col gap-4"  href={`/blogs/${post.slug.current}`}>
                            <div  className="relative w-full h-60">
                                <Image className="object-cover rounded-md" src={urlFor(post.mainImage).url()} alt="blog" fill/>
                            </div>                            
                            <h1 className="text-2xl font-bold text-white font-poppins">
                                {post.title}
                            </h1>
                        </Link>
                        <div className="flex items-center gap-4 py-4 font-poppins">
                            <Link className="px-3 py-2 bg-white rounded-lg font-poppins grow-0 " href={"#something"}>CSS</Link>
                            <Link className="px-3 py-2 bg-white rounded-lg font-poppins grow-0 " href={"#react"}>React</Link>
                        </div>
                    </div>
                )
            })}                     
        </div>
    </div>
  )
}
