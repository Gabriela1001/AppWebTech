import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from "./NavBarElements.js";

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/annual' >
			See details about you
		</NavLink>
		<NavLink to='/team' >
			Teams
		</NavLink>
		<NavLink to='/blogs' >
			Blogs
		</NavLink>
	
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		{/* <NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn> */}
	</Nav>
	</>
);
};

export default Navbar;
