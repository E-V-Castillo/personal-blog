
import Link from 'next/link'

import BlogBody from 'root/components/BlogBody'
import { client, urlFor } from 'root/lib/client'
import Image from 'next/image'


export const getStaticPaths = async() =>{
    const query = `*[_type == "post"]{slug}`
    const fetchedSlugs = await client.fetch(query)
    /* Take the fetched slugs and map each of them to the paths
        the query looks like this 
        [
            {
                0:{
                    slug:{
                        _type: slug
                        current: Why-I-love-React

                    }
                }
            },
            {
                1:{
                    slug:{
                        _type: slug
                        current: Something Else

                    }
                }
            }
        ]

    */ 
    const paths = fetchedSlugs.map((slugs : any) =>{
        return  {
            params: {
                slug: slugs.slug.current
            }
        }
    })
    return{
        paths,
        fallback:false
    }
}

export const getStaticProps = async({params: { slug }} : {params:{slug:any}}) =>{
    const query = `*[_type == "post" && slug.current == "${slug}"][0]`
    const post = await client.fetch(query)
    return {props:{post}}
}

export default function Blogs({post}:any) {
    console.log(post)
    const shortenedTitle = post.title.split(' ').slice(0, 6).join(' ')
    return (
        <div>
            <div className='flex flex-col'>
                <div className='flex flex-col items-center bg-slate-400'>
                    <div className='flex flex-col items-start w-full max-w-6xl gap-4 px-4 py-4 font-poppins'>
                        <div className='flex flex-col gap-4'>
                            <div className='flex gap-1'>
                                <Link className=' hover:underline' href={"#"}>Home</Link>
                                <p>/</p>
                                <Link className=' hover:underline' href={"#"}>Blogs</Link>
                                <p>/</p>
                                <Link className=' hover:underline' href={"#"} title={`${post.title}`}>
                                    {shortenedTitle}
                                </Link>
                            </div>
                            <div className='max-w-5xl text-3xl font-bold leading-snug md:text-5xl md:leading-normal'>
                                {post.title}
                            </div>
                            <time className=''>
                                Published: {post.publishedAt}
                            </time>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center text-white bg-gray-900'>
                    <div className='flex flex-col items-start w-full max-w-6xl px-4 py-8'>
                        <div className='relative w-full h-[400px] my-4'>
                            <Image className='object-cover rounded-md' alt="banner" src={urlFor(post.mainImage).url()} fill/>
                        </div>
                        <div className='max-w-3xl'>
                            <BlogBody body={post.body}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
