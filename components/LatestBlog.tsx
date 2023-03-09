import Image from "next/image"

export default function LatestBlog() {
  return (
    <div>
        <div className="relative w-full h-64">
            {/* <Image fill src={{put something here}} alt="Blog Image"/> */}
        </div>
        <div>
            <h1  className="text-xl">
                The Power of React
            </h1>
            <p>
                2023/03/03 1:50 PM
            </p>
            <p>
                React has dominated the world of technology for the past two decades. I would like to discuss why it has done so and what certain things have happened in the...
            </p>
        </div>
    </div>
  )
}
