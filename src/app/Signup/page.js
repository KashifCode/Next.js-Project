"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import signUpImg from "@/assets/signUpImage.png"
import academyLogo from "@/assets/acadLogo.png"
import "@/components/signup.css"
import RightSectionLoginSignup from '@/components/RightSectionLoginSignup'
import InputField from '@/components/InputField'
import { resetForm, acceptUser } from '@/Redux/Features/auth-slice'
import { useState, createContext } from 'react'
import { useDispatch } from 'react-redux'

export const signUpContext = createContext();
const Signup = () => {
    const [allStates, setAllStates] = useState({})
    const dispatch = useDispatch();
    const onErrorOccured = () => {
        setAllStates(dispatch(resetForm()))
    }
    const onSuccessEnter = () => {
        dispatch(acceptUser(allStates))
    }
    console.log(allStates);
    return (
        <>
            <signUpContext.Provider value={{allStates, setAllStates}}>
                <div className="signUpOuter w-full md:h-screen flex justify-center items-center overflow-hidden">

                    <div className="signUpLeft w-full md:w-1/2 h-screen md:h-full flex items-center flex-col">

                        <div className="leftHeader w-full flex flex-col justify-center items-center mt-2">
                            <Image
                                alt='Logo'
                                src={academyLogo}
                                width={110}
                                height={110} />
                            <h1 className='text-black font-bold text-2xl pt-3'>Registration</h1>
                        </div>

                        <div className="leftForm w-4/5 h-4/5">
                            <form action=''>

                                <div className='flex justify-between'>
                                    <InputField inputLabel={"First Name"} inputType={"text"} inputName={"fname"} Addclasses={"setCustomWidth"} />
                                    <InputField inputLabel={"Last Name"} inputType={"text"} inputName={"lname"} Addclasses={"setCustomWidth"} />
                                </div>

                                <InputField inputLabel={"Email"} inputType={"email"} inputName={"email"} Addclasses={"w-full mt-2"} />

                                <div className='flex flex-col items-start w-full mt-2'>
                                    <label htmlFor="location" className="fieldColor pb-2 font-semibold">Location</label>
                                    <select className='inputField fieldColor border-2 rounded-md w-full' id="location" required>
                                        <option value="">--Select--</option>
                                        <option value="lahore">Lahore</option>
                                        <option value="lahore">Islamabad</option>
                                        <option value="lahore">Karachi</option>
                                    </select>
                                </div>

                                <InputField inputLabel={"Password"} inputType={"password"} inputName={"pass"} Addclasses={"w-full mt-2"} />

                                <InputField inputLabel={"Confirm Password"} inputType={"password"} inputName={"cnfrmPass"} Addclasses={"w-full mt-2"}/>

                                <p className='fieldColor mt-2'>Register as:</p>
                                <div className='flex justify-between'>
                                    <InputField inputLabel={"Student/Find a Tutor"} inputType={"radio"} inputName={"registerAs"} Addclasses={"setCustomProperty mt-1"} />
                                    <InputField inputLabel={"Teacher/Become a Tutor"} inputType={"radio"} inputName={"registerAs"} Addclasses={"setCustomProperty mt-1"} />
                                </div>

                                <input type='submit' value="Next" className='buttonStyle font-semibold border w-full mt-2' onClick={(e) => {e.preventDefault(); onSuccessEnter()}}/>

                                <p className='fieldColor mt-1'>Already Registered? <Link href="/Login"><strong className='colorRedirect'>Login Now</strong></Link></p>

                            </form>
                        </div>
                    </div>
                    <RightSectionLoginSignup image={signUpImg} addImgClass={"rightImageStyle"} setDivHeight={"signUpRight"} />
                </div>

                <div>
                    
                </div>
            </signUpContext.Provider>
        </>
    )
}

export default Signup