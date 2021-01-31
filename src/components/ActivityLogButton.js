import React from 'react';
import { useHistory } from 'react-router-dom';

const ActivityLogButton = () => {
    let history = useHistory();

    function handleOnClick() {
        history.push("/logs")
    }

    return(
        <div style={{paddingTop:"50px"}}>
            <button type="button" className="btn btn-success" onClick={handleOnClick}>
                Activity Log
            </button>
        </div>

    );

};

export default ActivityLogButton;
