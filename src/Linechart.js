import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
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
};

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
  componentDidMount() {
    this.refs.chart.chart_instance.canvas.addEventListener("mousemove", this.crossHair.bind(this));
  }
  crossHair(e) {
      const myChartConfig = this.refs.chart.chart_instance
      const points = myChartConfig.getElementsAtXAxis(e);
      annotation.annotations[0].value = myChartConfig.config.data.labels[points[0]._index];
      myChartConfig.update();
  }
  render() {
    return (<div className="graphArea">
      <div className="graphHead">
      <h5>Ethereum Charts <span>ETH/USD</span></h5>
      </div>
      <Line data={data} height={50} options={options} ref='chart' />
    </div>);
  }
}

export default Linechart;
