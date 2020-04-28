

import React, { Fragment } from 'react'
import ResumeLogo from '../../upload/resumeIcon.svg';
import './navbar.css'




export default function Navbar() {
    return (
        <Fragment>
            <div className="navbar-container">
                <div className="logo-box">
                    LOGO
                </div>

                <nav className="nav-box">
                    <ul className="ul-box">
                        <li className="list">
                            <a href="la" className="links">HOME</a>
                        </li>
                        <li className="list">
                            <a href="la" className="links">CATEGORY</a>
                        </li>
                        <li className="list">
                            <a href="la" className="links">LOGIN IN</a>
                        </li>
                        <li className="list">
                            <a href="la" className="links signUp">SIGN UP</a>
                        </li>
                        <li className="list">
                            <a href="la" className="links">
                                <img src={ResumeLogo} alt="resume upload" className="img-box" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </Fragment>
    )
}
