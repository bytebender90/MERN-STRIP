import React from "react";
import PropTypes from "prop-types";
const myImageStyle = {  height: '400px' };

const Funnel = ({ FunnelObject}) => (
	<div className="card mt-7 h-40">
	<div className="card-header p-3 pt-2 text-center">
	<img src={FunnelObject.Image} alt={FunnelObject.Title} style={myImageStyle} className="w-100" />
	  <div className="text-center pt-1">
		<h2 className="mb-0 text-dark"> {FunnelObject.Title}</h2>
	  </div>
	</div>
	<hr className="dark horizontal my-0"/>
	<div className="card-footer p-3 text-center">
		<a className="btn btn-warning m-2 col-5 h6" href={FunnelObject.GHL} target="_blank"> Go Hight Level</a>
		<a className="btn btn-dark  m-2 col-5 h6" href={FunnelObject.Link} target="_blank"> Click Funnel</a>

	</div>
  </div>
);



export default Funnel;

