import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Friend } from "./Friend";
import { Number } from "./Number";

//create your first component
const Home = () => {
	
		const friendsComponents = [];
		const friends = ["Ernesto", "Kurt", "Kris", "Jimmy"];
		const numbers = [954, 297, 56, 52];

		// for(const friend of friends){
		// 	friendsComponents.push((
		// 		<h2 key={index}>{friend}</h2>
		// 	));
		// }

		// for (let index =0; index < friends.length; index++){
		// 	friendsComponents.push((
		// 		<h2 key={index}>{friends[index]}</h2>
		// 	));
		// }
	
	
	return (
		<div className="text-center">
            

			<h1 className="text-center mt-5">My Friends!</h1>
			{friends.map(
				(friend, index) => {
					return <Friend friend={friend} key={index} />
				}
			)}
			<br></br>
			
			{/* <h2 className="displayName">Phone Numbers:</h2>
			{numbers.map((number, index) => {
				return <h2>{number}</h2>
			}
		
			)} */}

			<h2 className="displayName">Phone Numbers:</h2>
			{numbers.map((number, index) => {
				return <Number number={number} key={index} />
			}
		
			)}

		</div>
	);
};

export default Home;