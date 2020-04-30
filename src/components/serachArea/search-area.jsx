import React, { Component, Fragment } from 'react'
import Input from '../input/input-component';
import './searchArea.css'

import LaodingImg from '../../upload/ring.gif'


export default class SarchArea extends Component {

    constructor(props) {
        super(props)
        this.state = {
            jobSearch: "react",
            locationSearch: "thane",
            showItems: false
        }
    }

    // Onchange Method
    onChnageMethod = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    // Submit Method
    onSubmitMethod = (event) => {
        this.setState({ showItems: true });
        event.preventDefault();
        fetch(`https://api.adzuna.com/v1/api/jobs/in/search/1?app_id=676a2fe3&app_key=9179830580f086ad10d03d11fd587da8%09&results_per_page=50&what=${this.state.jobSearch}&title_only=${this.state.jobSearch}}&where=${this.state.locationSearch}}&distance=20`, { headers: { "Content-Type": "application/json" } })
            .then((res) => res.json())
            .then((data) => {
                this.props.cb(data);
                this.setState({ showItems: false });
            }
            )
    }

    render() {


        return (
            <Fragment>
                <div className="search-area-component">
                    <form onSubmit={this.onSubmitMethod} className="search-area-form">
                        <div className="form-input-container">
                            <Input
                                name="jobSearch"
                                type="text"
                                placeholder="Search by job, skills and company "
                                onChange={this.onChnageMethod}
                                value={this.state.jobSearch}
                            />

                            <Input
                                name="locationSearch"
                                type="text"
                                placeholder="city,state,zip "
                                onChange={this.onChnageMethod}
                                value={this.state.locationSearch}
                            />
                        </div>
                        {/* submit */}
                        <div className="submitBox">

                            <input type="submit" value="Submit" className="submit" />
                            {
                                this.state.showItems
                                    ? <img className="loading-image" src={LaodingImg} alt="loading" />
                                    : null
                            }

                        </div>


                    </form>
                </div>
            </Fragment>
        )
    }
}
