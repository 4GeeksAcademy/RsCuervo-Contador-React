import React from "react";
import SecondsCounter from "./SecondsCounter";


//create your first component
const Home = ({ seconds }) => {
	return (
		<div className="container mt-5 text-center">
			<h1>{seconds}</h1>	
		</div>
	);
};

export default Home;
