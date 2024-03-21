import React from 'react'
import Header from '../../components/Header/Header'
import "./main.css"
function Main({ children }) {
    return (
        <>
            <Header></Header>
            <main className='main'>
                {children}
            </main>
        </>
    )
}

export default Main