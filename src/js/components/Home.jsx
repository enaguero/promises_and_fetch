import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

function generateDatabaseDateTime(date) {
	return date.toISOString().replace("T"," ").substring(0, 19);
}

const callMe = (seconds) => {
	alert("The function callMe is being executed!!! ")

	setTimeout(() => {
		let currentDateTime = new Date();
		console.log("I am calling you !!!! at : " + generateDatabaseDateTime(currentDateTime));
	},seconds)
}

//create your first component
const Home = () => {
	return (
		<div className="text-center">
            

			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>

			<button onClick={ ()=> callMe(5000)}> Call me in 5 seconds</button><br/><br/>
			<h1>Introduce el numero correcto cual llamar:</h1>
			<input onChange={(evt)=>{
				let target = evt.target;

				let promiseToCallYou = new Promise((resolve, reject) => {
					setTimeout(() => {
						if(target.value === "666"){
							console.log("I am calling you!!!")
							resolve("The call has been done sucessfully");
						}
						else{
							reject(new Error("The number is not correct"));
						}
					},2000)
				})

				promiseToCallYou.then((message) => {
					console.log(message)
				})
				
			} } placeholder="Please introduce correct number to call" /><br/><br/>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;