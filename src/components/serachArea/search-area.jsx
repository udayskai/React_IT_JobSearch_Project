import React, { Component, Fragment } from 'react'
import Input from '../input/input-component';
import './searchArea.css'


export default class SarchArea extends Component {

    constructor(props) {
        super(props)
        this.state = {
            jobSearch: "",
            locationSearch: "",
            arrayData: {}
        }
    }


    componentDidMount() {
        console.log("did mount");

    }

    // Onchange Method
    onChnageMethod = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }


    // Submit Method
    onSubmitMethod = (event) => {
        event.preventDefault();


        fetch(`https://api.adzuna.com/v1/api/jobs/in/search/1?app_id=676a2fe3&app_key=9179830580f086ad10d03d11fd587da8%09&results_per_page=50&what=${this.state.jobSearch}&title_only=${this.state.jobSearch}}&where=${this.state.locationSearch}}&distance=20`)
            .then((res) => res.json())
            .then((data) => this.setState({ arrayData: data }))

    }

    render() {
        console.log(this.state.arrayData, "Submit is clicked")

        let data = this.state.arrayData;

        // if (data.results) {
        //     console.log("licked")
        //     data.results.map((items) =>
        //         console.log(items.company.display_name)
        //     )
        // }




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

                    {/* test start */}
                    {
                        data.results ?
                            <div>
                                {
                                    data.results.map((e) => {
                                        return (
                                            <ul key={e.id} >
                                                <li className="kingo">
                                                    <h4>
                                                        {e.company.display_name}
                                                    </h4>
                                                </li>
                                                <br></br>
                                            </ul>
                                        )
                                    })
                                }
                            </div>
                            : null
                    }
                    {/* test end */}
                </div>
            </Fragment>
        )
    }
}
