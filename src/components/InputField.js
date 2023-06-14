"use client"
import React from 'react'
import "@/components/signup.css"
import { useContext } from 'react'
import { signUpContext } from '@/app/Signup/page'
import ErrorPopOver from '@/components/ErrorPopOver'

const InputField = ({ inputLabel, inputType, inputName, Addclasses, errorMessage, isVal, val }) => {
    const { register } = useContext(signUpContext)
    return (
        <div className={`${Addclasses} relative`}>
            <div className={`flex flex-col items-start fieldColor`}>
                <label htmlFor={inputName} className="pb-2 font-semibold">{inputLabel}</label>
                <input className='inputField border-2 rounded-md w-full' type={inputType} name={inputName}
                value={isVal ? val : undefined}
                {...register(`${inputName}`)}/>
            </div>
            <ErrorPopOver message={errorMessage} isError={errorMessage == undefined ? false : true} />
        </div>

    )
}

export default InputField