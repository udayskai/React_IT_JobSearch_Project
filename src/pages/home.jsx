import React, { Component, Fragment } from 'react';

import Navbar from '../components/navbar/navbar';
import SarchArea from '../components/serachArea/search-area';
import ArrayMapList from '../components/list-with-arrayMap/arrayMapList';

import './home.css'
import backgroundImg from '../upload/bg-img.svg'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            api: {},

        }
    }

    // get job data method on submit 
    getDataFromChild = (data) => {
        this.setState({ api: data });
        console.log(this.state.api, "-----home state main Parent");
    }


    render() {
        return (
            <Fragment>
                <div className="home-root">
                    {/* nav bar  */}
                    <div className="navbar-box">
                        <Navbar />
                    </div>

                    <div className="body">
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
                                    <SarchArea cb={this.getDataFromChild} />
                                </div>
                            </div>

                            {/* right */}
                            <div className="right-area">
                                <img src={backgroundImg} alt="background" className="right-imagebg" />
                            </div>
                        </div>

                        {/*  -------------------  { cart down area  }---------------------*/}
                        <div className="bottom-cart">
                            {
                                this.state.api.results
                                    ?
                                    <>
                                        {this.state.api.results.length === 0 ? <p className="ptag-down"> No result for this search </p> : null}
                                        <div className="root-down-cart">
                                            <ArrayMapList apiData={this.state.api} />
                                        </div>
                                    </>
                                    :
                                    null
                            }
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Home;




