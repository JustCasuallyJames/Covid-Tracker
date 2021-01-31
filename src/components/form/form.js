import React from 'react';
import './form.css'

function Form() {
    

    return (
        <div>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css"/>
            <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital@1&display=swap" rel="stylesheet"/>
            
            <form id="daily-form" className="d-flex flex-column">       
                <h2 id="prompt">How Have You Been?</h2>
                <div id="header-line"></div>
                <div id="covid-div">
                    <h4 id="covid-question">Do you have currently have Covid?</h4>
                    <div id="diagnosis-options">
                        <input id="positive" type="radio" name="diagnosis" value="positive" checked />
                        <label for="positive"><span></span>Yes</label >
                        <input id="negative" type="radio" name="diagnosis" value="negative" />
                        <label for="negative"><span></span>No</label>
                    </div>
                </div>
                <input type="date" className="form-control" id="date" name="date" required/>
                <div id="location">
                    <input type="text"  className="form-control" id="city" name="city" placeholder="City"/>
                    <select id="state" className="form-control" name="state" >
                        <option value="none" aria-selected >Select State</option>
                        <option value='AL'>Alabama</option>
                        <option value='AK'>Alaska</option>
                        <option value='AZ'>Arizona</option>
                        <option value='AR'>Arkansas</option>
                        <option value='CA' >California</option>
                        <option value='CO'>Colorado</option>
                        <option value='CT'>Connecticut</option>
                        <option value='DE'>Delaware</option>
                        <option value='DC'>District of Columbia</option>
                        <option value='FL'>Florida</option>
                        <option value='GA'>Georgia</option>
                        <option value='HI'>Hawaii</option>
                        <option value='ID'>Idaho</option>
                        <option value='IL'>Illinois</option>
                        <option value='IN'>Indiana</option>
                        <option value='IA'>Iowa</option>
                        <option value='KS'>Kansas</option>
                        <option value='KY'>Kentucky</option>
                        <option value='LA'>Louisiana</option>
                        <option value='ME'>Maine</option>
                        <option value='MD'>Maryland</option>
                        <option value='MA'>Massachusetts</option>
                        <option value='MI'>Michigan</option>
                        <option value='MN'>Minnesota</option>
                        <option value='MS'>Mississippi</option>
                        <option value='MO'>Missouri</option>
                        <option value='MT'>Montana</option>
                        <option value='NE'>Nebraska</option>
                        <option value='NV'>Nevada</option>
                        <option value='NH'>New Hampshire</option>
                        <option value='NJ'>New Jersey</option>
                        <option value='NM'>New Mexico</option>
                        <option value='NY'>New York</option>
                        <option value='NC'>North Carolina</option>
                        <option value='ND'>North Dakota</option>
                        <option value='OH'>Ohio</option>
                        <option value='OK'>Oklahoma</option>
                        <option value='OR'>Oregon</option>
                        <option value='PA'>Pennsylvania</option>
                        <option value='RI'>Rhode Island</option>
                        <option value='SC'>South Carolina</option>
                        <option value='SD'>South Dakota</option>
                        <option value='TN'>Tennessee</option>
                        <option value='TX'>Texas</option>
                        <option value='UT'>Utah</option>
                        <option value='VT'>Vermont</option>
                        <option value='VA'>Virginia</option>
                        <option value='WA'>Washington</option>
                        <option value='WV'>West Virginia</option>
                        <option value='WI'>Wisconsin</option>
                        <option value='WY'>Wyoming</option>
                    </select>
                </div>
                <textarea type="text" className="form-control" id="symptoms" name="symptoms"
                    placeholder="How did you feel? Did you experience any symptoms?" required
                />
                <textarea type="text" className="form-control" id="notes" name="notes" placeholder="Notes"/>
                <input type="submit" className="btn btn-primary" id="submitButton" value="Submit"/>   
            </form>
        </div>
    )
}

export default Form;