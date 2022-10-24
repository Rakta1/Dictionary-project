import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) {
	let [keyword, setKeyword] = useState(props.defaultKeyword);
	let [results, setResults] = useState(null);
	let [loaded, setLoaded] = useState(false);
	let [photos, setPhotos] = useState(null);

	function handleDictionaryResponse(response) {
		setResults(response.data[0]);
	}

	function handlePexelsResponse(response) {
		setPhotos(response.data.photos);
	}

	function search() {
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiUrl).then(handleDictionaryResponse);

		let pexelsApiKey =
			"563492ad6f917000010000019ffa50bda7d54b11981ee965dc1d99b2";
		let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
		let headers = { Authorization: `Bearer ${pexelsApiKey}` };
		axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
	}

	function handleSubmit(event) {
		event.preventDefault();
		search();
	}

	function updateKeyword(event) {
		setKeyword(event.target.value);
	}

	function load() {
		setLoaded(true);
		search();
	}
	if (loaded) {
		return (
			<div className="Dictionary">
				<section>
					<h3>What word do you want to search?</h3>
					<form onSubmit={handleSubmit}>
						<input
							type="search"
							onChange={updateKeyword}
							defaultValue={props.defaultKeyword}
						/>
					</form>
				</section>
				<Photos photos={photos} />
				<Results results={results} />
			</div>
		);
	} else {
		load();
		return "Loading";
	}
}
