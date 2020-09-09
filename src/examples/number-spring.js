import './examples.css';

import { animated, useSpring } from 'react-spring';

import React from 'react';
import { render } from 'react-dom';

export default function NumberExample() {
	const numberProps = useSpring({ number: 100, from: { number: 0 } });
	const numberwidth = useSpring({ width: '100%', from: { width: '0%' } });

	return (
		<div className='card'>
			<h2>Fake loader:</h2>
			<animated.div className='loading-bar' style={numberwidth}></animated.div>
			<div>
				<animated.span>{numberProps.number}</animated.span>
				<span> %</span>
			</div>
		</div>
	);
}

render(<NumberExample />, document.getElementById('root'));
