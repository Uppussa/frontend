import React from 'react'
import Main from './Main'
import Aside from './Aside'

const All = () => {
    return (
        <div className="grid grid-cols-[350px_1fr] h-screen">
            <Aside className='bg-cyan-800'/>
            <Main />
        </div>
    )
}

export default All
