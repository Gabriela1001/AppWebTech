import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '././Home/Home.js';
import AnnualReport from './pages/annual';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import Form from './Auth/Auth.js';
import About from './pages/about'
function App() {
   
return (
        
	<Router>
	<Navbar />

		<Route path='/' exact component={Home} />
		<Route path='/about' component={About}/>
		<Route path='/annual' component={AnnualReport} />
		<Route path='/team' component={Teams} />
		<Route path='/blogs' component={Blogs} />
	
	</Router>
   
);
}

export default App;
