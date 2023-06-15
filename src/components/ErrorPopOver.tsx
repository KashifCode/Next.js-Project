import React from 'react'
import { NextPage } from 'next';
import "@/components/notification.css"
import { MdOutlineError } from 'react-icons/md';

interface ErrorProps {
    message: string,
    isError: boolean,
}
const ErrorPopOver = ({message, isError}: ErrorProps) => {
    return (
        isError ? (<div className='customStyle'>
            <button data-popover-target="popover-right" data-popover-placement="right" type="button" className=" text-white mb-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onMouseOver={(e) => {
                let element = e.target as HTMLElement;
                while(element.tagName.toLowerCase() != "button") {
                    element = element.parentElement as HTMLElement;
                }
                element = element.nextElementSibling as HTMLElement;
                element.style.setProperty("visibility", "visible", "important")
                element.style.setProperty("opacity", "1", "important")
            }}
            onMouseLeave={(e) => {
                let element = e.target as HTMLElement;
                while(element.tagName.toLowerCase() != "button") {
                    element = element.parentElement as HTMLElement;
                }
                element = element.nextElementSibling as HTMLElement;
                element.style.setProperty("visibility", "hidden", "important")
                element.style.setProperty("opacity", "0", "important")
            }}>
                <MdOutlineError />
            </button>
            <div data-popover id="popover-right" role="tooltip" className="abc absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                <div className="px-3 py-2">
                    <p>{message}</p>
                </div>
                <div data-popper-arrow></div>
            </div>
        </div>) :(<></>)
    )
}

export default ErrorPopOver