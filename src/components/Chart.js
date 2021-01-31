import { BarChart, Bar, XAxis, YAxis,CartesianGrid, Tooltip,Legend } from 'recharts';
import React from 'react';
import '../styles/chart.css';

const data = [
    {
      "name": "California",
      "Number of Covid-19 cases": 3309463,
      "Number of Covid-19 deaths": 40694
    },
    {
      "name": "Illinois",
      "Number of Covid-19 cases": 1126448,
      "Number of Covid-19 deaths": 19263
    },
    {
      "name": "New York",
      "Number of Covid-19 cases": 1408955,
      "Number of Covid-19 deaths": 38015
    },
    {
      "name": "Texas",
      "Number of Covid-19 cases": 2362817,
      "Number of Covid-19 deaths": 23222
    },
    {
      "name": "Georgia",
      "Number of Covid-19 cases": 881740,
      "Number of Covid-19 deaths": 12250
    },
    {
      "name": "Florida",
      "Number of Covid-19 cases": 1713581,
      "Number of Covid-19 deaths": 26359
    },
    {
      "name": "Tennessee",
      "Number of Covid-19 cases":  	710748,
      "Number of Covid-19 deaths": 1949
    }
]

class ChartPanel extends React.Component{
    render(){
        return (
          <div className="entire-chart-panel">
            <div className="whole-barChart">
              <h1 className="chart-title">States with the number of Highest Covid Cases</h1>
              <BarChart width={1100} height={350} data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Number of Covid-19 cases" fill="#8884d8" />
                  <Bar dataKey="Number of Covid-19 deaths" fill="#82ca9d" />
              </BarChart>
            </div>
            <div className="whole-barChart">
              <h1 className="chart-title">States with the number of deaths by Covid</h1>
                <BarChart width={1100} height={350} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Number of Covid-19 deaths" fill="#82ca9d" />
                </BarChart>
            </div>
          </div>
            
        );
    }
}

export default ChartPanel;
