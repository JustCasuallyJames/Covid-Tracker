import React from 'react';
import { useHistory } from 'react-router';
import Card from '../containers/card';

function LogsList() {

    let history = useHistory();

    function handleOnClick() {
        history.push("/dashboard")
    }

    return (
        <div className="logs-wrapper">
            <div style={{paddingLeft: "10px"}}>
                <button type="button" className="btn btn-secondary" onClick={handleOnClick} style={{float:"left", padding:"10px", backgroundColor:"#5e7982", color: "white", borderRadius:"5px"}}>Go Back</button>
            </div>
            <div className="cards">
            <Card 
                    covid="no"
                    date="1/31/21"
                    city="Montery Park"
                    state="CA"
                    symptoms="Fatigue, Soreness"
                    notes="I'm probably just tired from hacking" />
                <Card 
                    covid="no"
                    date="12/24/2020"
                    city="Baldwin Park"
                    state="CA"
                    symptoms="Congestion, Shortness of Breath"
                    notes="I don't think I have covid since I already got tested just a couple weeks ago." />
                <Card 
                    covid="no"
                    date="12/24/2020"
                    city='Irvine'
                    state='CA'
                    symptoms="None"
                    notes="I've been negative for covid for quite a while and been testing every month to check"/>
                <Card 
                    covid="yes"
                    date="11/28/2020"
                    city='Irvine'
                    state='CA'
                    symptoms="Cough, Loss of taste/smell, chills, fever"
                    notes="Pain"/>
                <Card 
                    covid="no"
                    date="11/24/2020"
                    city='Irvine'
                    state='CA'
                    symptoms="None"
                    notes="Went to the market today"/>
            </div>
        </div>
    )
}

export default LogsList;
