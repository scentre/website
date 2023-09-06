import Image from "next/image";
import React from "react";

type Props = {
    image: string,
    title: string,
    content: string,
    width?:any,
    height?: any
}


export default  function DeveloperCard({image, title, content, width, height}: Props) {
    return (
        <div className="w-full">
            <Image src={image} alt="img" width={width} height={height} />
            <h5 className="text-white text-2xl font-medium pt-3 lg:text-xl">{title}</h5>
            <p className="text-[#b5b5b5] text-base pt-4">{content}</p>
        </div>
    )
}