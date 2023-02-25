import Image from "next/image";


export default function test() {
  return (
    <div className="space-y-6">
        <div className="relative w-full h-96 sm:h-[450px] lg:h=[600px]">
            <Image className="object-contain" src={"https://images.unsplash.com/photo-1676763133944-1738fb369107?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"} fill alt="test"/>
        </div>
    </div>
  )
}

