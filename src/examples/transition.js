import './examples.css';

import React, { useCallback, useState } from 'react';
import { animated, useTransition } from 'react-spring';

import { render } from 'react-dom';

const pages = [
	({ style }) => (
		<animated.div style={{ ...style, background: 'lightpink' }}>A</animated.div>
	),
	({ style }) => (
		<animated.div style={{ ...style, background: 'lightblue' }}>B</animated.div>
	),
	({ style }) => (
		<animated.div style={{ ...style, background: 'lightgreen' }}>
			C
		</animated.div>
	),
];

export default function TransitionExample() {
	const [index, set] = useState(0);
	const onClick = useCallback(() => set((state) => (state + 1) % 3), []);
	const transitions = useTransition(index, (p) => p, {
		from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
		enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
		leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
	});
	return (
		<div className='simple-trans-main' onClick={onClick}>
			{transitions.map(({ item, props, key }) => {
				const Page = pages[item];
				return <Page key={key} style={props} />;
			})}
		</div>
	);
}

render(<TransitionExample />, document.getElementById('root'));
