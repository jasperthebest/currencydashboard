import React from 'react';
import Slider from 'react-slick';
import CountUp from 'react-countup';

class Mainbar extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	stateSlider: 1
	    }
	    this.next = this.next.bind(this);
	    this.previous = this.previous.bind(this);
	}
	next(e) {
    	this.slider.slickNext();  	
  	}
  	previous(e) {
    	this.slider.slickPrev();
  	}
	render() {
		var settings = {
		  arrows: false,
	      dots: false,
	      centerMode: true,
	      infinite: true,
	      focusOnSelect: true,
	      speed: 500,
	      slidesToShow: 2,
	      slidesToScroll: 1
	    };
	    const dots = '<i className="fa fa-circle" aria-hidden="true"></i>';
	    const carddata = [{name: "Bitg", cword: "MF1v", coin: "ETH/USD", user: "Brandom Lucas"}, {name: "Bitrex", cword: "GHL1", coin: "ETH/USD", user: "Brandom Lucas"}, {name: "Bitg", cword: "MF1v", coin: "ETH/USD", user: "Brandom Lucas"}, {name: "Bitrex", cword: "GHL1", coin: "ETH/USD", user: "Brandom Lucas"}, {name: "Bitg", cword: "MF1v", coin: "ETH/USD", user: "Brandom Lucas"}, {name: "Bitrex", cword: "GHL1", coin: "ETH/USD", user: "Brandom Lucas"}];
	    const cardhtml = carddata.map((card, index) => {
	    	return (<div key={index}><div className="boxCoin">
	        <h3>{card.name}</h3>
	        <span>{card.cword} <i className="fa fa-circle" aria-hidden="true"></i><i className="fa fa-circle" aria-hidden="true"></i><i className="fa fa-circle" aria-hidden="true"></i><i className="fa fa-circle" aria-hidden="true"></i> <i className="fa fa-circle" aria-hidden="true"></i><i className="fa fa-circle" aria-hidden="true"></i><i className="fa fa-circle" aria-hidden="true"></i><i className="fa fa-circle" aria-hidden="true"></i> <i className="fa fa-circle" aria-hidden="true"></i><i className="fa fa-circle" aria-hidden="true"></i><i className="fa fa-circle" aria-hidden="true"></i><i className="fa fa-circle" aria-hidden="true"></i></span>
	        <div className="twowaySide">
	        <div>
	        <strong>{card.coin}</strong>
	        </div>
	        <div>
	        <small>{card.user}</small>
	        </div>
	        </div>
	        </div></div>);
	    });  
		const operation = [{name: "Sell", icon: "arrow-up"}, {name: "Buy", icon: "arrow-down"}, { name: "Order", icon: "newspaper-o"}];
		const shortgra = [{name: "Your today revenue", price: 3766}, {name: "Current order volume", price: 7653}];
		const shortgraphhtml = shortgra.map((sht, index) => {
			return(<div key={index}>
			<span className="headReven">{sht.name}</span>
			<span className="priceUp"><small>+$</small><CountUp className="CountUp" start={0} end={sht.price} duration={3} redraw={true} /></span>
			</div>);
		});
		const operationhtml = operation.map((opert, index) => {
			return <li key={index}><a href="#"><i className={"fa fa-" + opert.icon} aria-hidden="true"></i><span>{opert.name}</span></a></li>;
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
			<div>
			<h4>My accounts</h4>
			<ul>
			<li><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></li>
			<li><a href="#"><i className="fa fa-sort-amount-desc" aria-hidden="true"></i></a></li>
			</ul>
			</div>
			<div>
			<ul>
			<li><span className="sliderArr nextSlider" onClick={this.previous}><i className="fa fa-angle-left" aria-hidden="true"></i></span></li>
			<li className="actNumber activeSlider">02</li>
			<li className="actNumber">03</li>
			<li><span className="sliderArr prevSlider" onClick={this.next}><i className="fa fa-angle-right" aria-hidden="true"></i></span></li>
			</ul>
			</div>
			</div>
			<Slider ref={c => this.slider = c } {...settings}>
	        {cardhtml}
		    </Slider>
			</div>
			</div>
		);
	}
}

export default Mainbar;