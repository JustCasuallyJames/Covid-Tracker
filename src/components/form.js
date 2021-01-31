import React, { useState } from 'react';
import Checkbox from './Checkbox.js'; //for symptoms
import '../styles/form.css'

const Form = () => {
    // TO DO: set up database to send these value on form submit to the db
    const [positive, setPositive] = useState(true);
    const [city, setCity] = useState('')
    const [state, setState] = useState('');
    const [date, setDate] = useState('');
    const [notes, setNotes] = useState('');
    const[checkedSymptoms, setCheckedSymptoms] = useState({});
    
    const handleChange = (e) => {
        setCheckedSymptoms({...checkedSymptoms, [e.target.value]:e.target.checked});
    }

    const checkboxes = [
        {
            name: 'symptom',
            value: 'fever',
            label: 'Fever',
        },
        {
            name: 'symptom',
            value: 'cough',
            label: 'Cough',
        },
        {
            name: 'symptom',
            value: 'nausea',
            label: 'Nausea',
        },
        {
            name: 'symptom',
            value: 'chills',
            label: 'Chills',
        },
        {
            name: 'symptom',
            value: 'shortBreath',
            label: 'Shortness of Breath',
        },
        {
            name: 'symptom',
            value: 'fatigue',
            label: 'Fatigue',
        },
        {
            name: 'symptom',
            value: 'congestion',
            label: 'Congestion',
        },
        {
            name: 'symptom',
            value: 'bodyAches',
            label: 'Muscle or body aches',
        },
        {
            name: 'symptom',
            value: 'headache',
            label: 'Headache',
        },
        {
            name: 'symptom',
            value: 'diarrhea',
            label: 'Diarrhea',
        },
        {
            name: 'symptom',
            value: 'lossSense',
            label: 'Loss of taste/smell',
        },
        {
            name: 'symptom',
            value: 'soreThroat',
            label: 'Sore throat',
        },
    ]
    console.log('-------- FORM VALUES --------')
    console.log("positive: ", positive);
    console.log("city: ", city);
    console.log("state: ", state);
    console.log("date: ", date);
    console.log("symptoms: ", checkedSymptoms);
    console.log("notes: ", notes);
    console.log("------------------------------")


    const handleFormSubmit = () => {
        // post into database
        // at the end, clear the form
        clearForm();
    }

    const clearForm = () => {
        setPositive(true);
        setCity('');
        setState('');
        setDate('');
        setCheckedSymptoms({});
        setNotes('');
    }

    return (
        <div>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css"/>
            <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital@1&display=swap" rel="stylesheet"/>
            
            <form id="daily-form" className="d-flex flex-column" method="POST" action="/add">       
                <h2 id="prompt">How Have You Been?</h2>
                <div id="header-line"></div>
                <div id="covid-div">
                    <h4 className="covid-question">Do you have currently have Covid?</h4>
                    <div id="diagnosis-options">
                        <input id="positive" type="radio" name="diagnosis" value="positive" onClick={()=>setPositive(true)} defaultChecked />
                        <label htmlFor="positive"><span></span>Yes</label >
                        <input id="negative" type="radio" name="diagnosis" value="negative" onClick={()=>setPositive(false)}/>
                        <label htmlFor="negative"><span></span>No</label>
                    </div>
                </div>
                
                <input type="date" className="form-control" id="date" name="date" onChange={(e) => setDate(e.target.value)}required/>
                <div id="location">
                    <input type="text"  className="form-control" id="city" name="city" onChange={(e) => setCity(e.target.value)} placeholder="City" />
                    <select id="state" className="form-control" name="state" onChange={(e) => setState(e.target.value)}>
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
                <div id="symptoms-div">
                    <h4 className="covid-question">Do you have any of the following symptoms?</h4>
                    {checkboxes.map(item => (
                        <label className="symptom-label">
                            {item.label}
                            <Checkbox
                                name={item.name}
                                value={item.value}
                                checked={checkedSymptoms[item.value]}
                                onChange={handleChange}
                            />
                        </label>
                    ))}
                </div>
                <textarea type="text" className="form-control" id="notes" name="notes" placeholder="Notes" onChange={(e) => setNotes(e.target.value)}/>
                <input type="submit" className="btn btn-primary" id="submitButton" value="Submit"/>
                   
            </form>
        </div>
    )
};

export default Form;