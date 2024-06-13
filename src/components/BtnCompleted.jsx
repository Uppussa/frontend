import React from 'react'
import Done1 from '../assets/Done1.svg'



const BtnCompleted = () => {
    return (
        <>
            <button className="flex items-center justify-between p-4 w-full h-24 bg-green-200 rounded-lg shadow transition duration-300 hover:bg-green-300">
                <span className="text-2xl mr-4 w-10 h-10 bg-white rounded-lg">🎉</span>
                <span className="text-lg flex-1">Task Completed</span>
                <div className="bg-green-200 w-10 h-10 flex items-center justify-center rounded-lg ">
                    <img src={Done1} className="object-contain w-full h-full" />
                </div>
            </button>
        </>
    )
}

export default BtnCompleted
