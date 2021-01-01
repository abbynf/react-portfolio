import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Method(props) {
    return (
        <div class="col-12 col-md-6 col-lg-3 mt-5">

            <div class="row">
                <div class="col">
                    <a href={props.link} target="_blank"><FontAwesomeIcon icon={props.icon} /></a>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <h4 class="text">{props.title}</h4>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <p class="text">{props.handle}</p>
                </div>
            </div>

        </div>
    )
};

export default Method;