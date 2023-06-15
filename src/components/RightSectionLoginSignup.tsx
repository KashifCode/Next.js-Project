import React from 'react'
import Image, { StaticImageData } from 'next/image'
import "@/components/signup.css"

interface RightImageProps {
    image: StaticImageData,
    addImgClass: string,
    setDivHeight: string
}

const RightSectionLoginSignup = ({ image, addImgClass, setDivHeight }: RightImageProps) => {
    return (
        <div className={`${setDivHeight} w-full md:w-1/2 h-full flex flex-col justify-center items-center`}>
            <div className="rightText w-full h-1/2 flex justify-center items-center">
                <h2 className='text-4xl font-semibold w-4/5 text-center pt-4 leading-snug'>Welcome to<br />Online Academy Tutuion</h2>
            </div>
            <div className="rightImage mx-auto flex w-full h-1/4 md:h-1/2 justify-center items-center md:shrink-0">
                <Image
                    alt='Sign Up Page Image'
                    src={image}
                    className={`${addImgClass}`}
                />
            </div>
        </div>
    )
}

export default RightSectionLoginSignup