

import React, { Fragment } from 'react';
import ReactHtmlParser from 'react-html-parser';
import './array-map-list.css';
import LocationSvg from '../../upload/iconfinder_Maps_Maps_Navigation_Gps_Pin_Location-02_3915752.png';


export default function ArrayMapList(props) {

    let data = props.apiData;
    console.log(data, "Araay-map-comp")
    return (
        <Fragment>
            {
                data.results ?
                    <>
                        {
                            data.results.map((e) => {

                                return (
                                    <ul className="ul-map-list" key={e.id}  >
                                        <li className="kingo">
                                            <div>

                                                <h1 className="p-title">
                                                    <strong>{ReactHtmlParser(e.title)}</strong>;
                                                 </h1>

                                                <h4 className="company-name">
                                                    {e.company.display_name}
                                                </h4>
                                                <br></br>

                                                <p className="p-des">
                                                    {ReactHtmlParser(e.description)}
                                                </p>
                                                <br></br>
                                            </div>


                                            <p className="locationP">{e.location.display_name}
                                                <span className="spanLocation"><img alt="location" src={LocationSvg} /></span>
                                            </p>
                                        </li>
                                        <br></br>
                                    </ul>
                                )
                            })
                        }
                    </>
                    : <h1> comoing from array-map Loading</h1>
            }
        </Fragment>
    )
}



