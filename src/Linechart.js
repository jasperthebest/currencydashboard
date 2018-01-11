import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

const data = [{
  labels: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
  datasets: [
    {
      label: 'Year',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0)',
      borderColor: '#255af4',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#255af4',
      pointBackgroundColor: '#255af4',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#255af4',
      pointHoverBorderColor: '#255af4',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 55, 79, 75, 73, 76, 69, 67, 61, 58, 65, 71]
    }
  ]
},
{
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [
    {
      label: 'Month',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0)',
      borderColor: '#255af4',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#255af4',
      pointBackgroundColor: '#255af4',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#255af4',
      pointHoverBorderColor: '#255af4',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [98, 82, 91, 75, 85, 76, 63, 65, 69, 58, 51, 71]
    }
  ]
},
{
  labels: ['1st Week', '2nd Week', '3rd Week', '4th Week'],
  datasets: [
    {
      label: 'Week',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0)',
      borderColor: '#255af4',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#255af4',
      pointBackgroundColor: '#255af4',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#255af4',
      pointHoverBorderColor: '#255af4',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [76, 69, 87, 77]
    }
  ]
},
{
  labels: ['1', '2', '3', '4', '5', '6', '7'],
  datasets: [
    {
      label: 'Year',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0)',
      borderColor: '#255af4',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#255af4',
      pointBackgroundColor: '#255af4',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#255af4',
      pointHoverBorderColor: '#255af4',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [75, 85, 76, 73, 61, 92, 58]
    }
  ]
}];
let annotation = {
    annotations: [{
        type: 'line',
        mode: 'horizontal',
        scaleID: 'x-axis-label',
        borderColor: '#b6fcd5',
        borderWidth: 2,
        value:'March'
    }],
    drawTime: "afterDraw"
};

let options = {
  maintainAspectRatio: true,
  annotation: annotation,
  responsive: true,
  legend: {
            display: false
         },
  title:{
        display:false,
        text:'Chart.js Line Chart'
      },
  tooltips: {
        mode: 'index',
        intersect: false,
      },
  hover: {
        mode: 'nearest',
        intersect: true
      },
  scales: {
      xAxes: [{
              display: true,
              gridLines: {
                    display: false,
                },
              scaleLabel: {
                  display: false,
                  labelString: 'Month'
              }
          }],
      yAxes: [{
              display: true,
              gridLines: {
                drawBorder: false,
              },
              scaleLabel: {
                  display: false,
                  labelString: 'Value'
              }
          }]
      }
};

class Linechart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1
    }
    this.change = this.change.bind(this);
  }
  change(i, e) {
    this.setState({
      index: i
    });
  }
  render() {
    var listdata = ['Year', 'Month', 'Week', 'Day'];
    var listItems = listdata.map((value, index) => (
      <li
        key={value} 
        className={index === this.state.index ? 'active' : ''} onClick={this.change.bind(this, index)}>
        {value}
      </li>
    ));
    return (<div className="graphArea">
      <div className="graphToparea">
      <div className="graphHead">
      <h5>Ethereum Charts <span>ETH/USD</span></h5>
      </div>
      <div className="graphSide text-right">
      <ul>
      {listItems}
      </ul>
      </div>
      </div>
      <Line data={data[this.state.index]} height={50} options={options} />
    </div>);
  }
}

export default Linechart;
