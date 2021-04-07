import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const handleLogout = () => {
	localStorage.removeItem("isAuthenticated");
};
function AppNavBar() {
	return (
		<Navbar bg="primary" variant="dark">
			<Navbar.Brand className="nav-header1" href="#">
				New Bank
			</Navbar.Brand>
			<Navbar.Collapse className="mr-auto">
				<Nav.Link className="nav-header" href="#home">
					Home
				</Nav.Link>
				<NavDropdown title="Transactions" className="nav-header" id="collasible-nav-dropdown">
					<NavDropdown.Item href="#addTransaction">Add Cash</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.2">Withdraw Cash</NavDropdown.Item>
				</NavDropdown>
				<NavLink className="nav-header" to="/" onClick={handleLogout}>
					Log Out
				</NavLink>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default AppNavBar;
