/*
	Owner: Joaquín Paz
	Year: 2022
	Description: Fixing the App.js module of a Passing Thoughts app (where you can store strings that are automatically deleted after certain amount of seconds)
*/
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { AddThoughtForm } from './AddThoughtForm';
import { Thought } from './Thought';
import { generateId, getNewExpirationTime } from './utilities';

function App() {
	const [thoughts, setThoughts] = useState([
		{
			id: generateId(),
			text: 'This is a place for your passing thoughts.',
			expiresAt: getNewExpirationTime(),
		},
		{
			id: generateId(),
			text: "They'll be removed after 15 seconds.",
			expiresAt: getNewExpirationTime(),
		},
	]);

	const addThought = thought => {
		setThoughts(prev => setThoughts([thought, ...prev]))
	}
	const removeThought = thoughtIdToRemove => {
		setThoughts(thoughts.filter(thought => thought.id !== thoughtIdToRemove))
	}

	return (
		<div className="App">
			<header>
				<h1>Passing Thoughts</h1>
			</header>
			<main>
				<AddThoughtForm addThought={addThought} />
				<ul className="thoughts">
					{thoughts.map((thought) => (
						<Thought key={thought.id} thought={thought} removeThought={removeThought} />
					))}
				</ul>
			</main>
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById('app'));
