
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
    return (
        <div className='flex flex-col items-center bg-slate-100'>
            <div className='px-4 '>
                <div className='flex flex-col gap-4 pt-4'>
                    <div className='flex max-w-6xl gap-1'>
                        <Link className='font-bold hover:underline' href={"#"}>Home</Link>
                        <p>/</p>
                        <Link className='font-bold hover:underline' href={"#"}>Blogs</Link>
                        <p>/</p>
                        <Link className='font-bold hover:underline' href={"#"}>{post.title}</Link>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <time className='font-bold'>Published: {post.publishedAt}</time>
                        <div className='relative w-full h-[600px]'>
                            <Image alt="banner" src={urlFor(post.mainImage).url()} fill/>
                        </div>
                        <div className='max-w-6xl text-4xl font-bold'>
                            {post.title}
                        </div>
                    </div>
                </div>
                <div className='max-w-6xl'>
                    <BlogBody body={post.body}/>
                </div>
            </div>
        </div>
    )
}
