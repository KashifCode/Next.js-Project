import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LogInImg from "@/assets/LogInImage.png"
import academyLogo from "@/assets/acadLogo.png"
import "@/components/signup.css"
import RightSectionLoginSignup from '@/components/RightSectionLoginSignup'
import InputField from '@/components/InputField'


const Login = () => {
    return (
        <>
            <div className="signUpOuter w-full md:h-screen flex justify-center items-center overflow-hidden">

                <div className="signUpLeft w-full md:w-1/2 h-screen md:h-full flex items-center flex-col">

                    <div className="leftHeader w-full flex flex-col justify-center items-center mt-2">
                        <Image
                            src={academyLogo}
                            width={110}
                            height={110} />
                        <h1 className='text-black font-bold text-2xl pt-3'>Log in</h1>
                    </div>

                    <div className="LoginForm w-4/5 h-4/5">
                        <form className='w-full' action=''>
                            <InputField inputLabel={"Username/Email"} inputType={"email"} inputName={"email"} Addclasses={"w-full mt-2"} />

                            <InputField inputLabel={"Password"} inputType={"password"} inputName={"pass"} Addclasses={"w-full mt-2"} />

                            <div className='flex justify-between items-center mt-3'>
                                <InputField inputLabel={"Remember Me"} inputType={"checkbox"} inputName={"remember"} Addclasses={"setCustomProperty w-full"} />
                                <strong className='colorRedirect'>Forgot Password?</strong>
                            </div>

                            <input type='submit' value="Login" className='buttonStyle font-semibold border w-full mt-4' />

                            <p className='fieldColor mt-1'>Not Registered Yet? <Link href="/Signup"><strong className='colorRedirect'>Sign Up Now</strong></Link></p>

                        </form>
                    </div>
                </div>
                <RightSectionLoginSignup image={LogInImg} addImgClass={"loginImageStyle"} setDivHeight={"signUpRight loginDivHeight"}/>
            </div>
        </>
    )
}

export default Login