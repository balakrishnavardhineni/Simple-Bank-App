import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../Styles/Login.css";
import { Nav, Navbar } from "react-bootstrap";
import Axios from "axios";

export default function Login(props) {
	const [ userId, setUserId ] = useState("");
	const [ password, setPassword ] = useState("");
	const [ state, setState ] = useState({});
	let isAuthenticated = localStorage.getItem("isAuthenticated");

	useEffect(() => {
		return () => {};
	}, []);

	const validateForm = () => {
		return userId.length > 0 && password.length > 0;
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		Axios.post("http://localhost:8080/login", {
			userId: userId,
			password: password
		})
			.then((response) => {
				if (response.data) {
					localStorage.setItem("isAuthenticated", response.data);
					props.history.push({ pathname: "/home", state: { message: "hello, im a passed message!" } });
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};
	const handleLogout = (event) => {
		event.preventDefault();
		localStorage.removeItem("isAuthenticated");
		isAuthenticated = false;
	};
	return (
		<div className="container">
			<Navbar bg="primary" variant="dark">
				<Navbar.Brand className="font-weight-bold" href="#">
					New Bank
				</Navbar.Brand>
				<Navbar.Collapse className="mr-auto">
					{isAuthenticated ? (
						<Nav.Link className="login" href="#" onTouchTap={handleLogout}>
							Log Out
						</Nav.Link>
					) : (
						<Nav.Link className="login" href="#">
							Log In
						</Nav.Link>
					)}
				</Navbar.Collapse>
			</Navbar>
			<div className="Login">
				<Form onSubmit={handleSubmit}>
					<Form.Group size="lg" controlId="userId">
						<Form.Label>User Id</Form.Label>
						<Form.Control
							autoFocus
							type="text"
							value={userId}
							onChange={(e) => setUserId(e.target.value)}
						/>
					</Form.Group>
					<Form.Group size="lg" controlId="password">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
					</Form.Group>
					<Button block size="lg" type="submit" disabled={!validateForm}>
						Login
					</Button>
				</Form>
			</div>
		</div>
	);
}
