import Axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import AppNavBar from "./AppNavBar";

function AddTransaction(props) {
	const [ accountNumber, setAccountNumber ] = useState("");
	const [ amount, setAmount ] = useState("");
	const validateForm = () => {
		return accountNumber.length > 0 && amount.length > 0;
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		Axios.post("http://localhost:8080/transactions/add", {
			accountNumber: accountNumber,
			amount: amount
		})
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className="container">
			<AppNavBar />
			<div className="Login">
				<Form onSubmit={handleSubmit}>
					<Form.Group size="lg" controlId="userId">
						<Form.Label>Account Number </Form.Label>
						<Form.Control
							autoFocus
							type="number"
							value={accountNumber}
							onChange={(e) => setAccountNumber(e.target.value)}
						/>
					</Form.Group>
					<Form.Group size="lg" controlId="password">
						<Form.Label>Amount</Form.Label>
						<Form.Control type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
					</Form.Group>
					<Button block size="lg" type="submit" disabled={!validateForm}>
						Add Amount
					</Button>
				</Form>
			</div>
		</div>
	);
}

export default AddTransaction;
