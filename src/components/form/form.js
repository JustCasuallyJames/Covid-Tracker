import React from 'react';
import './form.css'

const Form = () => {
    

    return (
        <div>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css"/>
            <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital@1&display=swap" rel="stylesheet"/>
            
            <form id="daily-form" className="d-flex flex-column">       
                <h2>How Have You Been?</h2>
                <input type="date" className="form-control" id="date"  required/>
                <textarea type="text" className="form-control" id="symptoms" placeholder="Symptoms" required/>
                <textarea type="text" className="form-control" id="notes" placeholder="Notes"/>
                <input type="submit" className="btn btn-primary" id="submitButton" value="Submit"/>   
            </form>
        </div>
    )
}

export default Form;