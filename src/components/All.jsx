import React from 'react'
import Main from './Main'
import Aside from './Aside'

const All = () => {
    return (
        <div className="grid grid-cols-[350px_1fr] h-screen">
            <Aside/>
            <Main />
        </div>
    )
}

export default All
