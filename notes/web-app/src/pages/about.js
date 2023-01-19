import React, { useEffect } from 'react';
import  { useState } from 'react'

function FormExample() {
	const [formData, setFormData] = useState({
	  name: "",
	  email: "",
	  password: ""
	});
	
	const handleChange = event => {
		setFormData({
		  ...formData,
		  [event.target.name]: event.target.value
		});
	  };
	  const handleSubmit = event => {
		event.preventDefault();
		console.log(formData);
		// send formData to the server or do something else with it here
	  };
const About = () => {
	let x = new Array() ; 
	useEffect(() => {
	  fetch('http://localhost:5001/api/notes')
	  .then(response => response.json())
	  .then(json => {
		  document.getElementById("greeting").innerHTML = json[0].category;

		  console.log(json);x=json})
	  }, []);

	return (<div>
		Mama aici
	</div>
	);
	
	// <div
	// style={{
	// 	display: 'flex',
	// 	justifyContent: 'Left',
	// 	alignItems: 'Right',
	// 	height: '100vh'
	// }}
	// >
	// 	 <div>
    //       <p id="greeting">Info about student</p>
    //      </div>
	// <h1>Something</h1>
	// </div>
}
};











  
export default FormExample;