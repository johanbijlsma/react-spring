import './App.css';

import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';

import TransitionExample from './transition';

function App() {
	const colorProps = useSpring({
		backgroundColor: 'rebeccapurple',
		from: { backgroundColor: 'hotpink' },
	});

	const numberProps = useSpring({ number: 100, from: { number: 0 } });
	const scaleProps = useSpring({ height: 200, from: { height: 0 } });
	const [isToggled, setToggle] = useState(false);
	const toggleProps = useSpring({
		transform: isToggled ? 'scale(1)' : 'scale(0)',
	});
	const togglePropsReversed = useSpring({
		transform: isToggled ? 'scale(0)' : 'scale(1)',
	});
	return (
		<div className='App'>
			<animated.header className='App-header' style={colorProps}>
				<h1>React Spring</h1>
				<animated.section className='example1' style={togglePropsReversed}>
					<animated.img
						src='https://i.imgur.com/QZownhg.png'
						alt='logo React Spring'
						style={scaleProps}
					/>
					<p>
						Fake loader:
						<br />
						<animated.span>{numberProps.number}</animated.span>
					</p>
				</animated.section>
				<animated.section className='example2' style={toggleProps}>
					<TransitionExample />
				</animated.section>

				<button
					onClick={() =>
						setToggle(!isToggled) && console.log('button got clicked')
					}
				>
					Next example ⟩
				</button>
			</animated.header>
		</div>
	);
}

export default App;
