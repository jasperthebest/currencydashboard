import React from 'react';
import Slider from 'react-slick';
import CountUp from 'react-countup';

class Mainbar extends React.Component {
	render() {
		const operation = [{name: "Sell", icon: "arrow-up"}, {name: "Buy", icon: "arrow-down"}, { name: "Order", icon: "newspaper-o"}];
		const shortgra = [{name: "Your today revenue", price: 3766}, {name: "Current order volume", price: 7653}];
		const shortgraphhtml = shortgra.map((sht, index) => {
			return(<div>
			<span className="headReven">{sht.name}</span>
			<span className="priceUp"><small>+$</small><CountUp className="CountUp" start={0} end={sht.price} duration={3} redraw={true} /></span>
			</div>);
		});
		const operationhtml = operation.map((opert, index) => {
			return <li><a href="#"><i className={"fa fa-" + opert.icon} aria-hidden="true"></i><span>{opert.name}</span></a></li>;
		});
		return (
			<div className="dashBoard">
			<div>
			<h2>Balance</h2>
			<div className="coinBox">
			<div className="coinShow">
			<div><small>BTC</small><CountUp className="CountUp" start={0} end={14.0392} decimals={4} duration={3} redraw={true} /></div>
			<span>$ <CountUp className="CountUp" start={0} end={7670.63} decimals={2} duration={3} redraw={true} /><small>1.06%</small></span>
			</div>
			<div className="orderSellbuy">
			<ul>
			{operationhtml}
			</ul>
			</div>
			</div>
			<div className="shortGraph">
			{shortgraphhtml}
			</div>
			</div>
			<div className="actMy">
			<div className="headAct">
			<h4>My accounts</h4>
			<ul>
			<li><a href="#"><i class="fa fa-search" aria-hidden="true"></i></a></li>
			<li><a href="#"><i class="fa fa-sort-amount-desc" aria-hidden="true"></i></a></li>
			</ul>
			</div>
			</div>
			</div>
		);
	}
}

export default Mainbar;