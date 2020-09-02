import './App.css';

import { animated, useSpring } from 'react-spring';

import React from 'react';

function App() {
	const colorProps = useSpring({
		backgroundColor: 'rebeccapurple',
		from: { backgroundColor: 'hotpink' },
	});

	const numberProps = useSpring({ number: 100, from: { number: 0 } });
	const scaleProps = useSpring({ height: 200, from: { height: 0 } });

	return (
		<div className='App'>
			<animated.header className='App-header' style={colorProps}>
				<h1>React Spring</h1>
				<animated.img
					src='https://i.imgur.com/QZownhg.png'
					alt='logo React Spring'
					style={scaleProps}
				/>
				<p>
					Fake loader:
					<br />
					<animated.span>{numberProps.number}</animated.span>%
				</p>
			</animated.header>
		</div>
	);
}

export default App;
