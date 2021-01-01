import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';


function Method(props) {
    return (
        <div className="col-12 col-md-6 col-lg-3 mt-5">

            <div className="row">
                <div className="col">
                    <a href={props.link} target="_blank" className="contactIcon"><FontAwesomeIcon icon={props.icon} className="contactIcon"/></a>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h4 className="text">{props.title}</h4>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <p className="text">{props.handle}</p>
                </div>
            </div>

        </div>
    )
};

export default Method;