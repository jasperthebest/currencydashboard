import React from 'react';

class Sidebar extends React.Component {
	render() {
		return(
			<div className="sidebar">
				<ul>
				<li><a href="#"><i className="fa fa-home" aria-hidden="true"></i></a></li>
				<li><a href="#"><i className="fa fa-envelope" aria-hidden="true"></i></a></li>
				<li><a href="#"><i className="fa fa-cloud-download" aria-hidden="true"></i></a></li>
				<li><a href="#"><i className="fa fa-users" aria-hidden="true"></i></a></li>
				<li><a href="#"><i className="fa fa-cogs" aria-hidden="true"></i></a></li>
				<li><a href="#"><i className="fa fa-sign-out" aria-hidden="true"></i></a></li>
				</ul>
			</div>
		);
	}
}

export default Sidebar;