import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Method (props) {
    return (
        <div>
<FontAwesomeIcon icon={props.icon} />
        <div>Method</div>
        </div>
    )
};

export default Method;