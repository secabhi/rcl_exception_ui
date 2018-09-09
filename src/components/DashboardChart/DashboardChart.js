import React, { Component } from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import './DashboardChart.scss';
class DashboardChart extends Component{
  constructor(props){
    super(props);
    this.state = {
      data : {
        labels: [
          'Exceptions'
        ],
        datasets: [
          {
            data: [215],
            label: 'LINKAGE',
            stack: 'stack0',
            backgroundColor: '#3E51B5',
            hoverBackgroundColor: '#3E51B5'
          },
          {
            data: [130],
            label: 'CONFORMITY',
            stack: 'stack0',
            backgroundColor:'#982AAE',
            hoverBackgroundColor:'#982AAE'
          },
          {
            data: [365],
            label: 'BUSINESS VALIDATION',
            stack: 'stack0',
            backgroundColor: '#E72061',
            hoverBackgroundColor: '#E72061'
          },
          {
            data: [589],
            label: 'TECHNICAL VALIDATION',
            stack: 'stack0',
            backgroundColor: '#FF9702',
            hoverBackgroundColor: '#FF9702'
          }
        ]
      }
    }
  }
  render() {
    const data = this.state.data;
    return (
      <div className="DashboardChart">
        <HorizontalBar
          data={data}
          width={300}
          height={150}
          options={{
            maintainAspectRatio: false,
            reponsive: true,
            title:{
              display: true,
              position: 'top',
              text: 'EXCEPTIONS'
            },
            layout:{
              padding:{
                left: 0,
                right: 0,
                top:0,
                bottom: 0
              }
            },
            scales: {
              xAxes: [{
                stacked: true,
                display: false,
                ticks: {
                  max: 1299
                }
              }],
              yAxes: [{
                stacked: true,
                display: false,
                barPercentage: 0.5
              }],
              gridLines:{
                display: false
              }
            }
          }}
          legend={{
            "display": true,
            "position": "bottom",
            "fullWidth": true,
            "reverse": false,
            "onClick": (e) => e.stopPropagation()
          }}
        />
      </div>
    );
  }
}

export default DashboardChart;
