import React from 'react'

function NavNotice() {
    return (
        <li className='nav-item dropdown'>
            <a href="#" className='nav-link nav-icon' data-bs-toggle="dropdown">
                <i className='bi bi-bell'></i>
                <span className='badge bg-primary badge-number'>4</span>
            </a>
            <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications'>
                <li className='dropdown-header'>
                    You have 4 Notifications!
                    <a href="#">
                        <span className='badge rounded-pill bg-primary p-2 ms-2'>
                            View All
                        </span>
                    </a>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>
                <li className='notification-item'>
                    <i className='bi bi-exclamation-circle text-warning'></i>
                    <div>
                        <h4>Lorem Ipsum</h4>
                        <p>Hello this is the notification</p>
                        <p>30 minutes ago</p>
                    </div>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>
                <li className='notification-item'>
                    <i className='bi bi-x-circle text-danger'></i>
                    <div>
                        <h4>This is the second notification</h4>
                        <p>this is hterhfjhsk gjalghaha lgha</p>
                        <p>1 hour ago</p>
                    </div>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>
                <li className='notification-item'>
                    <i className='bi bi-check text-success'></i>
                    <div>
                        <h4>This successfull notification</h4>
                        <p>this is hterhfjhsk gjalghaha lgha</p>
                        <p>2 hours ago</p>
                    </div>
                </li>

                <li>
                    <hr className='dropdown-divider' />
                </li>
                <li className='notification-item'>
                    <i className='bi bi-info-circle text-primary'></i>
                    <div>
                        <h4>Notifications 4</h4>
                        <p>this is hterhfjhsk gjalghaha lgha</p>
                        <p>4 hours ago</p>
                    </div>
                </li>

                <li>
                    <hr className='dropdown-divider' />
                </li>
                <li className='dropdown-footer'>
                    <a href="#">Show all Notifications</a>
                </li>
            </ul>
        </li>
    )
}

export default NavNotice