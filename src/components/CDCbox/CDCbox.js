import React from 'react';
import './CDCbox.css';

function CDCbox() {
    return (
        <div className="box-wrapper">
            <div className="box-container" id="CDCbox">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css"/>
                <div className="box-text"> 
                    <h4>COVID-19</h4>
                    <h6>Get the latest infromation from the CDC about COVID-19.</h6>
                </div>
                <button 
                    href="https://www.cdc.gov/coronavirus/2019-ncov/index.html" 
                    className="btn btn-secondary"
                    onClick={() => {window.location.href="https://www.cdc.gov/coronavirus/2019-ncov/index.html"}}
                    >LEARN MORE
                </button>
            </div>
        </div>
    )
}

export default CDCbox;