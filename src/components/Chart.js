import { BarChart, Bar, XAxis, YAxis,CartesianGrid, Tooltip,Legend } from 'recharts';
import React from 'react';
import '../styles/chart.css';

const data = [
    {
      "name": "Page A",
      "Number of Covid-19 cases": 4000,
      "Number of Covid-19 deaths": 2400
    },
    {
      "name": "Page B",
      "Number of Covid-19 cases": 3000,
      "Number of Covid-19 deaths": 1398
    },
    {
      "name": "Page C",
      "Number of Covid-19 cases": 2000,
      "Number of Covid-19 deaths": 9800
    },
    {
      "name": "Page D",
      "Number of Covid-19 cases": 2780,
      "Number of Covid-19 deaths": 3908
    },
    {
      "name": "Page E",
      "Number of Covid-19 cases": 1890,
      "Number of Covid-19 deaths": 4800
    },
    {
      "name": "Page F",
      "Number of Covid-19 cases": 2390,
      "Number of Covid-19 deaths": 3800
    },
    {
      "name": "Page G",
      "Number of Covid-19 cases": 3490,
      "Number of Covid-19 deaths": 4300
    }
]

class ChartPanel extends React.Component{
    constructor(props){
        super(props);
    
    }
    render(){
        return (
            <div className="whole-barChart">
            <h1>Number of Covid Cases By</h1>
            <BarChart width={1200} height={450} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Number of Covid-19 cases" fill="#8884d8" />
                <Bar dataKey="Number of Covid-19 deaths" fill="#82ca9d" />
            </BarChart>
            </div>
        );
    }
}

export default ChartPanel;