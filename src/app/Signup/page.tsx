"use client"
import React, {FC} from 'react'
//import { createRoot } from 'react-dom/client';
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
import { SubmitHandler, useForm, UseFormRegister, UseFormRegisterReturn } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import ErrorPopOver from '@/components/ErrorPopOver';
import { AppDispatch } from '@/Redux/store'

interface schoolSchema {
    schoolName: string
}

type schemaShapeType = {
    fname: yup.StringSchema<string>,
    lname: yup.StringSchema<string>,
    email: yup.StringSchema<string>,
    school: yup.ObjectSchema<schoolSchema>,
    pass: yup.StringSchema<string>,
    cnfrmPass: yup.StringSchema<string>,
}

interface FormData {
    fname: string,
    lname: string,
    email: string,
    school: schoolSchema | string,
    pass: string,
    cnfrmPass?: string,
    registerAs: string
}

interface StateData {
    fname: string,
    lname: string,
    email: string,
    school: string,
    pass: string,
    registerAs: string
}

interface registerContext {
    register: UseFormRegister<FormData>,
}

// interface handleSubmitFunction {
//     onSubmit: (data: FormData) => void
// }

export const signUpContext = createContext<registerContext | null>({register: () => ({}) as UseFormRegisterReturn<any>});

const Signup: FC = () => {

    const schema = yup.object().shape<schemaShapeType>({
        fname: yup.string().required("First Name is Required!"),
        lname: yup.string().required("Last Name is Required!"),
        email: yup.string().email("Invalid Email Format").required("E-Mail is Required!"),
        school: yup.object({
            schoolName: yup.string().required("Please select a School!!"),
        }),
        pass: yup.string().min(8).max(16).required("Password is Required!"),
        cnfrmPass: yup.string().oneOf([yup.ref("pass"), ""], "Your Password Does Not Match!").required("Confirm Your Password Again!")
    })
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const initialValue = {
        fname: "",
        lname: "",
        email: "",
        school: "",
        pass: "",
        registerAs: ""
    }

    const [allStates, setAllStates] = useState<StateData>(initialValue)

    const onSubmit:SubmitHandler<FormData> = (data: FormData) => {
        let arr = document.getElementsByClassName('setCustomProperty');
        for (let radio of arr) {
            if ((radio as HTMLInputElement).checked) {
                data.registerAs = (radio as HTMLInputElement).value;
            }
        }
        delete data.cnfrmPass;
        if(typeof data.school !== 'string') {
            data.school = data.school.schoolName;
        }
        console.log(data);
        setAllStates(Object.assign(allStates, data));
        //let parent = document.getElementById("appendComponent")
        //createRoot(parent).render(<Notification message={"Successfully Registered"}/>)
        dispatch(acceptUser(allStates))
    }

    const dispatch = useDispatch<AppDispatch>();
    const onErrorOccured = () => {
        dispatch(resetForm())
    }

    return (
        <>
            {/* <div id='appendComponent'></div>
             */}
            <signUpContext.Provider value={{ register }}>
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
                            <form onSubmit={handleSubmit(onSubmit)} action=''>

                                <div className='flex justify-between'>
                                    <InputField inputLabel={"First Name"} inputType={"text"} inputName={"fname"} Addclasses={"setCustomWidth"} errorMessage={errors.fname?.message} />
                                    <InputField inputLabel={"Last Name"} inputType={"text"} inputName={"lname"} Addclasses={"setCustomWidth"} errorMessage={errors.lname?.message} />
                                </div>

                                <InputField inputLabel={"Email"} inputType={"email"} inputName={"email"} Addclasses={"w-full mt-2"} errorMessage={errors.email?.message} />

                                <div className='flex flex-col items-start w-full mt-2 relative'>
                                    <label htmlFor="school" className="fieldColor pb-2 font-semibold">School</label>
                                    <select className='inputField fieldColor border-2 rounded-md w-full'
                                        {...register("school.schoolName")}>
                                        <option value="">--Select--</option>
                                        <option value="APS">APS</option>
                                        <option value="Fazaia">Fazaia</option>
                                        <option value="Behria">Behria</option>
                                    </select>
                                    {errors.school?.schoolName?.message ?
                                        <ErrorPopOver message={errors.school?.schoolName?.message} isError={true} />
                                        : <></>}

                                </div>

                                <InputField inputLabel={"Password"} inputType={"password"} inputName={"pass"} Addclasses={"w-full mt-2"} errorMessage={errors.pass?.message} />

                                <InputField inputLabel={"Confirm Password"} inputType={"password"} inputName={"cnfrmPass"} Addclasses={"w-full mt-2"} errorMessage={errors.cnfrmPass?.message} />

                                <p className='fieldColor mt-2'>Register as:</p>
                                <div className='flex justify-between'>
                                    <InputField inputLabel={"Student/Find a Tutor"} inputType={"radio"} inputName={"registerAs"} Addclasses={"setCustomProperty mt-1"} isVal={true} val={"Student"}/>
                                    <InputField inputLabel={"Teacher/Become a Tutor"} inputType={"radio"} inputName={"registerAs"} Addclasses={"setCustomProperty mt-1"} isVal={true} val={"Teacher"}/>
                                </div>

                                <input type='submit' value="Next" className='buttonStyle font-semibold border w-full mt-2' />

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