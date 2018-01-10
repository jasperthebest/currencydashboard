import React from 'react';
import CountUp from 'react-countup';

class Bottomnumber extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			classchange: false
		};
		this.showUp = this.showUp.bind(this);
	}
	showUp(e) {
		this.setState(prevState => ({
			classchange: !prevState.classchange
		}));
	}
	render() {
		let datacoin = [
			{ name: "ETH/USD", price: 300.78, inflation: +1.09 },
			{ name: "BTC/USD", price: 6438, inflation: +11.23 },
			{ name: "XRP/USD", price: 2510, inflation: -2.73 },
			{ name: "BCH/USD", price: 326.56, inflation: +3.31 },
			{ name: "ZEN/USD", price: 303.33, inflation: -5.85 }
		];
		const outputcoinhtml = datacoin.map((dcoin, index) => {
			let greenRed = (dcoin.inflation < 0 ) ? "red" : "green";
			return (<div key={index}>
			<small>{dcoin.name}</small>
			<span>
			<CountUp className="CountUp" start={0} end={dcoin.price} duration={3} redraw={true} />
		    <small className={greenRed}>{dcoin.inflation}%</small></span>
			</div>);
		});
		let classshow = (this.state.classchange == true) ? "chartBtn active" : "chartBtn";
		let classbotm = (this.state.classchange == true) ? "bottomNum active" : "bottomNum";
		return (
			<div className={classbotm}>
			<span className={classshow} onClick={this.showUp}><i className="fa fa-line-chart" aria-hidden="true"></i></span>
			<div className="numberUp">
			{outputcoinhtml}
			</div>
			</div>
		);
	}
}

export default Bottomnumber;