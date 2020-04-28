import React, { Component, Fragment } from 'react';

import Navbar from '../components/navbar/navbar'
import './home.css'
import backgroundImg from '../upload/bg-img.svg'


class Home extends Component {
    render() {
        return (
            <Fragment>
                <div className="home-root">
                    {/* nav bar  */}
                    <div className="navbar-box">
                        <Navbar />
                    </div>


                    {/* mid area */}
                    <div className="mid-box">
                        {/* left */}
                        <div className="left-area">
                            {/* text */}
                            <div className="text-area">
                                <h1 className="left-h1">
                                    Find your IT job better and faster
                                 </h1>
                                <p className="ptag">
                                    Set your tech career in motion with AS
                                 </p>
                            </div>
                            {/* inputs */}
                            <div className="input-area">
                                <input type="search" name="search" placeholder="Job by title,skill ..." />
                                <select name="loction" value="king" id="loction" >
                                    <option name="loction" value="react">react</option>
                                    <option name="loction" value="map">Map</option>
                                    <option name="loction" value="coponent">make Component</option>
                                </select>

                            </div>
                        </div>

                        {/* right */}
                        <div className="right-area">
                            <img src={backgroundImg} alt="background" className="right-imagebg" />
                        </div>
                    </div>
                </div>


            </Fragment>
        )
    }
}

export default Home;