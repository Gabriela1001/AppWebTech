import  { useState } from "react";
import React, { useEffect } from 'react';

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
  let students = new Array() ; 

  useEffect(() => {
	fetch('http://localhost:5001/apiS/users')
	.then(response => response.json())
	.then(json => {
		document.getElementById("firstName").innerHTML = json[0].firstName;
		document.getElementById("lastName").innerHTML = json[0].lastName;
		document.getElementById("email").innerHTML = json[0].email;
		document.getElementById("createdAt").innerHTML = json[0].createdAt;

		console.log(json);students=json})
	}, []);
  const handleSubmit = event => {
    event.preventDefault();
    console.log(formData);
    // send formData to the server or do something else with it here
  };

  return (
    <form onSubmit={handleSubmit}>
		<label>-----First Name-----</label><br></br>
      <label id="firstName"></label><br></br>
	  <br></br>
	  <label>-----Last Name-----</label><br></br>
	  <label id="lastName"></label><br></br>
	  <br></br>
	  <label>-----Email -----</label><br></br>
      <label id="email"></label><br></br>
	  <br></br>
	  <label>-----Created account at-----</label><br></br>

      <label id="createdAt"></label><br></br>
     
   
	  <p><label >Note:</label></p>
      <button type="submit">Disabled for the moment...</button>
    </form>
  );
}

export default FormExample;