import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
	let [keyword, setKeyword] = useState("");
	let [results, setResults] = useState(null);

	function handleResponse(response) {
		console.log(response.data[0]);
		setResults(response.data[0]);
	}

	function search(event) {
		event.preventDefault();

		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiUrl).then(handleResponse);
	}
	function updateKeyword(event) {
		setKeyword(event.target.value);
	}
	return (
		<div className="Dictionary">
			<form onSubmit={search}>
				<input
					type="search"
					placeholder="Enter a word to search"
					onChange={updateKeyword}
				/>
			</form>
			<Results results={results} />
		</div>
	);
}
