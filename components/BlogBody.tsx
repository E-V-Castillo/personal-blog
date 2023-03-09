import { PortableText } from "@portabletext/react"
import Image from "next/image"
import { urlFor } from "root/lib/client"


const components={
    types: {
        image: ({value}:any) => {
            return (
                <div className="relative w-full h-[720px]">
                    <Image className="object-contain" alt="image" src={urlFor(value).url()} fill />
                </div>
            )
        },
    },
    marks: {
        strong: ({children}:any) => {
            return(
                <em className="font-bold">{children}</em>
            )
        }
    },
    block: {
        h1: ({children}:any) => {
            return <h1 className="py-4 text-2xl font-bold ">{children}</h1>
        },
        h2: ({children}:any) => {
            return <h2 className="text-xl font-bold">{children}</h2>
        },
        h3: ({children}:any) => {
            return <h3 className="text-lg font-bold">{children}</h3>
        },
        h4: ({children}:any) => {
            return <h4 className="text-base font-bold">{children}</h4>
        }
    }
    

}


export default function BlogBody({body}:any) {
    return (
        <div>
            <PortableText
                value={body}
                components={components}
            />
        </div>
    )
}
