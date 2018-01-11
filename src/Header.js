import React from 'react';
/* eslint-disable */
class Header extends React.Component {
	render() {
		return(
			<header>
				<div className="faceUser">
				<img src="images/face.jpg" alt="Userface"/>
				<span>8</span>
				</div>
				<div className="headOptions clearfix">
				<div className="fL">
				<div>
				<a href="#"><i className="fa fa-angle-left" aria-hidden="true"></i></a>
				</div>
				<span>Accounts overview</span>
				</div>
				<div className="fR">
				<ul>
				<li>Page style</li>
				<li><a href="#"><i className="fa fa-th-large" aria-hidden="true"></i></a></li>
				<li><a href="#" className="active"><i className="fa fa-list-ul" aria-hidden="true"></i></a></li>
				</ul>
				</div>
				</div>
			</header>
		);
	}
}

export default Header;