"use client"
import React from 'react'
import "@/components/signup.css"
import { useContext } from 'react'
import { signUpContext } from '@/app/Signup/page'

const InputField = ({ inputLabel, inputType, inputName, Addclasses }) => {
    const { allStates, setAllStates } = useContext(signUpContext)
    const addToObject = (e) => {
        let val = e.target.value;
        let newPair = Object.defineProperty(allStates, `${inputName}`, {
            value: val,
            enumerable: true,
            configurable: true,
            writable: true
        });
        setAllStates({ ...allStates, ...newPair })
    }

    return (
        <div className={`flex flex-col items-start fieldColor ${Addclasses}`}>
            <label htmlFor={inputName} className="pb-2 font-semibold">{inputLabel}</label>
            <input onChange={addToObject}
            className='inputField border-2 rounded-md w-full' type={inputType} name={inputName} required />
        </div>
    )
}

export default InputField