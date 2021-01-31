import React from 'react';
import { motion } from "framer-motion";
import './card.css';

function Card({covid, date, city, state, symptoms, notes}) {
    return (
        <div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1],
        }}
        transition={{
          duration: 0.2,
          delay: 2 * 0.1
        }} className="card">
            <div>
                <h1>{date}</h1>
                <h2>{city}, {state}</h2>
                <h5>Covid: {covid}</h5>
                <p style={{textDecoration:"underline"}}> Symptoms</p>
                <p>{symptoms}</p>
                <br />
                <p style={{textDecoration:"underline"}}>Notes</p>
                <p>{notes}</p>
            </div>
        </div>
    )
}

export default Card;
