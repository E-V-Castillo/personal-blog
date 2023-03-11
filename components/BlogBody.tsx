import { PortableText } from "@portabletext/react"
import Image from "next/image"
import { urlFor } from "root/lib/client"


const components={
    types: {
        image: ({value}:any) => {
            return (
                <div className="relative w-full my-4 h-96">
                    <Image className="object-cover rounded-md" alt="image" src={urlFor(value).url()} fill/>
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
            return <h1 className="my-4 text-3xl font-bold font-poppins">{children}</h1>
        },
        h2: ({children}:any) => {
            return <h2 className="my-4 text-xl font-bold font-poppins">{children}</h2>
        },
        h3: ({children}:any) => {
            return <h3 className="my-4 text-lg font-bold font-poppins">{children}</h3>
        },
        h4: ({children}:any) => {
            return <h4 className="my-4 text-base font-bold font-poppins">{children}</h4>
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
