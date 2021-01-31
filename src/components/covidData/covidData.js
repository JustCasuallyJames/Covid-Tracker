import axios from 'axios';
import React, { useState } from 'react';
import './covidData.css';

const CovidData = () => {
    const [viewState, setViewState] = useState(false)
    const [state, setState] = useState('')
    const baseURL = 'https://api.covidtracking.com/v1';

    const viewUS = async () => {
        try{
            document.getElementById("date").disabled = true;
            const response = await axios.get(`${baseURL}/us/current.json`);
            console.log(response.data[0]);
        } catch (err) {
            console.log(err)
        }
    } 
    
    const viewByState = async (state) => {
        try {
            setViewState(true);
            setState(state);
            document.getElementById("date").disabled = false;
            const response = await axios.get(`${baseURL}/states/${state}/current.json`);
            console.log(response.data);
        } catch (err) {
            console.log(err)
        }
    }

    const viewByDate = async (date) => {
        if (viewState) {
            try{
                date = date.replace('-', '');
                date = date.replace('-', '')
                const response = await axios.get(`${baseURL}/states/${state}/${date}.json`);
                console.log(response.data)
            } catch (err) {
                console.log(err)
            }
        } else {
            alert('Please select a state first')
        }
    }

    return (
        <div className="data-wrapper">
            <div className="view-buttons-wrapper">
                <button id="view" value="allUS" className="form-control" onClick={viewUS}>All US data</button>
                <select id="view" name="byState" className="form-control" onChange={(e) => viewByState(e.target.value)}>
                    <option value="none" aria-selected >State Data</option>
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
                <input id="date" type="date" className="form-control" onChange={(e) => viewByDate(e.target.value)}/>
            </div>
        </div>
    )
}

  export default CovidData;
