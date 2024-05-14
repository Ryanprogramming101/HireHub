import React from 'react';

const App = () => {
	const names = ['Ryan', 'Sam', 'Cass', 'Someone'];
	const loggedIn = true;
	const styles = {
		color: 'red',
		fontSize: '36px',
	};

	return (
		<>
			<div className='text-5xl'>App</div>
			<p style={styles}>Testing object styling</p>
			<p style={{ color: 'red', fontSize: '24px' }}>Testing inline style</p>
			<ul>
				{names.map((name, index) => (
					<li key={index}>{name}</li>
				))}
			</ul>
			{loggedIn ? <h1>Hello {names[0]}! </h1> : <h1>Hello Guest!</h1>}
		</>
	);
};

export default App;
