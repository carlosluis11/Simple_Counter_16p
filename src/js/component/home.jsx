import React from "react";



//create your first component
const Home = ({time}) => {
	return (
		<div className="col-2 border bg-dark rounded text-center text-light fs-1">
			{time}
		</div>
	);
};

export default Home;
