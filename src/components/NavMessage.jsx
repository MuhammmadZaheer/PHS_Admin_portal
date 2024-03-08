import React from 'react'

function NavMessage() {
    return (
        <li className='nav-item dropdown'>
            <a href="#" className='nav-link nav-icon' data-bs-toggle="dropdown">
                <i className='bi bi-chat-left-text'></i>
                <span className='badge bg-success badge-number'>3</span>
            </a>

            <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow messages'>
                <li className='dropdown-header'>
                    you have 3 messages
                    <a href="#">
                        <span className='badge rounded-pill bg-primary p-2 ms-2'>
                            view all
                        </span>
                    </a>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>
                <li className='message-item'>
                    <a href="#">
                        <img src="#" alt="img-1" className='rounded-circle' />
                        <div>
                            <h4>Ramzan</h4>
                            <p>when will you reach here?</p>
                            <p>4 hours ago </p>
                        </div>
                    </a>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>

                <li className='message-item'>
                    <a href="#">
                        <img src="#" alt="img-2" className='rounded-circle' />
                        <div>
                            <h4>Ashraf</h4>
                            <p>come back mr.</p>
                            <p>6 hours ago </p>
                        </div>
                    </a>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>
                <li className='message-item'>
                    <a href="#">
                        <img src="#" alt="img-3" className='rounded-circle' />
                        <div>
                            <h4>Saleem</h4>
                            <p>come back mr.</p>
                            <p>I will not come office today </p>
                        </div>
                    </a>
                </li>












            </ul>

        </li>
    )
}

export default NavMessage