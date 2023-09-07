import React from "react";
const Dashwidg = ({ link , text , imagelink }) => (
	<div className="card mt-7">
	<div className="card-header p-3 pt-2 text-center">

	  <div className="text-center pt-1">
		<h4 className="mb-0"> Join Our 	<img src="https://logohistory.net/wp-content/uploads/2022/10/Facebook-Logo.svg" alt="facebooklogo" width={100}/>
 Group</h4>
	  </div>
	</div>
	<hr className="dark horizontal my-0"/>
	<div className="card-footer p-3 text-center">
		<a className="btn btn-info" href="https://www.facebook.com/groups/funnelhackerlabs" target="_blank"> JOIN HERE</a>
	</div>
  </div>
);



export default Dashwidg;

