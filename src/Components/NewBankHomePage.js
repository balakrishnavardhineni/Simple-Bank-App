import React, { useState } from "react";
import "../Styles/Login.css";
import AppNavBar from "./AppNavBar";

function NewBankHomePage(props) {
	let bankAccounts = [
		{
			bankName: "New Bank",
			branch: "Bangalore",
			accountHolder: "First name",
			accountNo: "9744113411",
			accountType: "Savings",
			bankCode: "845dfd"
		},
		{
			bankName: "New",
			branch: "Bangalore",
			accountHolder: " name",
			accountNo: "9744113411",
			accountType: "Savings",
			bankCode: "845dfd"
		}
	];
	return (
		<div className="container">
			<AppNavBar />
			<div className="App container py-3">
				{bankAccounts.map((element) => {
					return (
						<div
							className="card"
							onClick={() => {
								props.history.push({ pathname: "/accountDetails", state: { details: element } });
							}}
						>
							<div className="card-title">{element.bankName}</div>
							<div className="card-subtitle mb-2">Branch : {element.branch} </div>
							<div className="card-subtitle mb-2"> Account Holder : {element.accountHolder}</div>
							<div className="card-text mb-2 text-muted">Account Number : {element.accountNo}</div>
							<div className="card-text mb-2 text-muted">Account Type : {element.accountType}</div>
							<div className="card-text mb-2 text-muted">Bank Code : {element.bankCode}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default NewBankHomePage;
