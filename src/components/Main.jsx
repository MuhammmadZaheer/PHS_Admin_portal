import React from 'react'
import './main.css'
import Dashboard from './Dashboard'


function Add() {
    return (
        <>  
        <main id='main'>
        
            <h1 className='heading'>Admin-Dashboard
                <i className='bi bi-house-door'></i>
            </h1>
            <Dashboard />
        </main>
       
        </>
    )
}

export default Add