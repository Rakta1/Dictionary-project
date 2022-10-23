import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
	return (
		<div className="Meaning">
			<h3 className="text-capitalize">{props.meaning.partOfSpeech}</h3>
			{props.meaning.definitions.map(function(definition, index) {
				return (
					<div key={index}>
						<div>{definition.definition}</div>
						<div className="example">{definition.example}</div>
					</div>
				);
			})}
		</div>
	);
}
