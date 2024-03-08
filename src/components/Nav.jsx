import React from 'react'
import './nav.css'
import NavNotice from './NavNotice'
import NavMessage from './NavMessage'
import NavAvatar from './NavAvatar'

function Nav() {
    return (
        <nav className='header-nav ms-auto' id='header1'>
            <ul className='d-flex align-items-center'>
                <NavNotice />
                <NavMessage />
                <NavAvatar />
            </ul>

        </nav>
    )
}

export default Nav