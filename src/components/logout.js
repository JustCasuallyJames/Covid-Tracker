import React from 'react';
import { useHistory } from 'react-router';

const LogOut = () => {
    let history = useHistory();

    function handleOnClick() {
        history.push("/");
    }

    return (
        <div style={{float:"left", position:"fixed", bottom:"0px"}}>
            <button type="button" className="btn btn-link" onClick={handleOnClick}>Log Out</button>
        </div>
    )
}

export default LogOut;
