import React from 'react'
import Time from '../assets/Time.svg'


const BtnProgres = () => {
    return (
        <>
            <button className="flex items-center justify-between p-4 w-full h-24 bg-yellow-200 rounded-lg shadow transition duration-300 hover:bg-yellow-300">
                <span className="text-2xl mr-4 w-10 h-10 bg-white rounded-lg  ">⏰</span>
                <span className="text-lg flex-1">Task in Progress</span>
                <div className="bg-yellow-200 w-10 h-10 flex items-center justify-center rounded-lg ">
                    <img src={Time} className="object-contain w-full h-full" />
                </div>
            </button>
        </>
    )
}

export default BtnProgres
