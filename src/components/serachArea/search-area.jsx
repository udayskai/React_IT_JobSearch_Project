import React, { Component, Fragment } from 'react'
import Input from '../input/input-component';
import './searchArea.css'


export default class SarchArea extends Component {

    constructor(props) {
        super(props)
        this.state = {
            jobSearch: "",
            locationSearch: "Mumbai"
        }
    }


    // Onchange Method
    onChnageMethod = (e) => {
        console.log(e.target.name, "---")
        this.setState({ [e.target.name]: e.target.value })
    }


    // Submit Method
    onSubmitMethod = (event) => {
        event.preventDefault();
        let data = {
            job: this.state.jobSearch,
            location: this.state.locationSearch
        }
        console.log(data, "Submit is clicked")
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

                        <input type="submit" value="Submit" className="submit" />
                    </form>
                </div>
            </Fragment>
        )
    }
}
