import Image from "next/image"
import { urlFor } from "root/lib/client"

export default function Posts({posts}:any) {
  return (
    <div>
        <div className="px-8 bg-gray-900">
                <div className="flex gap-8">
                    <h1 className="pt-20 pb-20 text-4xl font-bold text-gray-200 ">
                        My Personal Blogs
                    </h1>
                    <button className="text-2xl font-bold text-gray-200 ">
                        Filter
                    </button>
                </div>
                <div className="flex flex-col gap-y-20">                    
                        {posts?.map((post:any)=>{
                            return (
                            <div key={post._id} className="w-full h-full transition shadow-lg hover:scale-105" >
                                <div  className="relative w-full h-96">
                                    <Image className="object-cover rounded-bl-none rounded-br-none rounded-t-md" src={urlFor(post.mainImage).url()} alt="blog" fill/>
                                    <div className="absolute bottom-0 w-full px-4 bg-black bg-opacity-20 backdrop-blur-sm">
                                        <h1 className="mt-4 text-2xl font-bold text-gray-200">
                                            {post.title}
                                        </h1>
                                        <p className="mt-4 mb-4 font-mono text-gray-200">
                                            {post.publishedAt}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                        })}                     
                </div>  
                <div className="bg-gray-900 mt-[500px]">
                        <p> sa</p>
                </div>
            </div>
    </div>
  )
}
