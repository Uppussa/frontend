import React from 'react'
import Time from '../assets/Time.svg'
import Done1 from '../assets/Done1.svg'
import close from '../assets/close.svg'
import Add from '../assets/Add.svg'


const Main = () => {
    return (
        <main className="grid-area-main bg-white p-5">
            <section className="w-full max-w-2xl mx-auto">
                <header className="text-center mb-5">
                    <h1 className="text-2xl mb-1">My Task Board</h1>
                    <p className="text-lg text-gray-600">Tasks to keep organised</p>
                </header>

                <div className="flex flex-col gap-4">
                    <button className="flex items-center justify-between p-4 w-full h-24 bg-yellow-200 rounded-lg shadow transition duration-300 hover:bg-yellow-300">
                        <span className="text-2xl mr-4 w-10 h-10 bg-white rounded-lg  ">⏰</span>
                        <span className="text-lg flex-1">Task in Progress</span>
                        <div className="bg-yellow-200 w-10 h-10 flex items-center justify-center rounded-lg ">
                            <img src={Time} className="object-contain w-full h-full" />
                        </div>
                    </button>
                    <button className="flex items-center justify-between p-4 w-full h-24 bg-green-200 rounded-lg shadow transition duration-300 hover:bg-green-300">
                        <span className="text-2xl mr-4 w-10 h-10 bg-white rounded-lg">🎉</span>
                        <span className="text-lg flex-1">Task Completed</span>
                        <div className="bg-green-200 w-10 h-10 flex items-center justify-center rounded-lg ">
                            <img src={Done1} className="object-contain w-full h-full" />
                        </div>
                    </button>
                    <button className="flex items-center justify-between p-4 w-full h-24 bg-red-200 rounded-lg shadow transition duration-300 hover:bg-red-300">
                        <span className="text-2xl mr-4 w-10 h-10 bg-white rounded-lg">☕</span>
                        <span className="text-lg flex-1">Task Won’t Do</span>
                        <div className="bg-red-200 w-10 h-10 flex items-center justify-center rounded-lg ">
                            <img src={close} className="object-contain w-full h-full" />
                        </div>
                    </button>
                    <button className="flex flex-col items-start justify-between p-4 w-full h-24 bg-gray-200 rounded-lg shadow transition duration-300 hover:bg-gray-300">
                        <div className="flex items-center w-full">
                            <span className="text-2xl mr-4 w-10 h-10 bg-white rounded-lg">📚</span>
                            <span className="text-lg flex-1">Task To Do</span>
                        </div>
                        <span className="text-base text-gray-600">Work on a Challenge on devChallenges.io, learn TypeScript.</span>
                    </button>
                    <button className="flex items-center justify-between p-4 w-full h-24 bg-orange-200 rounded-lg shadow transition duration-300 hover:bg-orange-300">
                    <div className="bg-orange-200 w-10 h-10 flex items-center justify-center rounded-lg ">
                            <img src={Add} className="object-contain w-full h-full" />
                        </div>
                        <span className="text-lg flex-1">Add new task</span>
                    </button>
                </div>
            </section>
        </main>
    )
}

export default Main
