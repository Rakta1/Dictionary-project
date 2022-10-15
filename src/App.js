import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<h1>Dictionary</h1>
				<Dictionary />
				<footer>
					<a href="https://github.com/Rakta1/Dictionary-project">Open-Source</a>
					, coded by Terra Wardana
				</footer>
			</div>
		</div>
	);
}
