"use client"
import React from 'react'
import "@/components/signup.css"
import { useContext } from 'react'
import { signUpContext } from '@/app/Signup/page'
import ErrorPopOver from '@/components/ErrorPopOver'

const InputField = ({ inputLabel, inputType, inputName, Addclasses, errorMessage }) => {
    const { allStates, setAllStates, register } = useContext(signUpContext)
    const addToObject = (e) => {
        console.log("hi");
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
        <div className={`${Addclasses} relative`}>
            <div className={`flex flex-col items-start fieldColor`}>
                <label htmlFor={inputName} className="pb-2 font-semibold">{inputLabel}</label>
                <input onChange={addToObject}
                className='inputField border-2 rounded-md w-full' type={inputType} {...register(`${inputName}`)}/>
            </div>
            <ErrorPopOver message={errorMessage} isError={errorMessage == undefined ? false : true}/>
        </div>

    )
}

export default InputField