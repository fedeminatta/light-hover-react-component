import { useRef } from 'react';
import './light.css';

function Card({ children, bgColor }) {
	const cardRef = useRef(null);

	const handleMouseMove = (ev) => {
		const blob = cardRef.current.querySelector('.blob');
		const fblob = cardRef.current.querySelector('.fakeblob');
		const rec = fblob.getBoundingClientRect();
		blob.style.opacity = '1';

		blob.animate(
			[
				{
					transform: `translate(${ev.clientX - rec.left - rec.width / 2}px,${
						ev.clientY - rec.top - rec.height / 2
					}px)`,
				},
			],
			{
				duration: 300,
				fill: 'forwards',
			}
		);
	};

	let cardColor;

	const colorMap = {
		green: 'rgb(9 260 9 / 0.3)',
		blue: 'rgb(9 9 260 / 0.3)',
		red: 'rgb(260 9 9 / 0.3)',
		yellow: 'rgb(260 260 9 / 0.3)',
		purple: 'rgb(140 9 140 / 0.3)',
		orange: 'rgb(260 30 9 / 0.3)',
		pink: 'rgb(255 105 180 / 0.3)',
		cyan: 'rgb(0 255 255 / 0.3)',
		magenta: 'rgb(255 0 255 / 0.3)',
		teal: 'rgb(0 128 128 / 0.3)',
		lime: 'rgb(0 255 0 / 0.3)',
		indigo: 'rgb(75 0 130 / 0.3)',
		maroon: 'rgb(128 0 0 / 0.3)',
		navy: 'rgb(0 0 128 / 0.3)',
		olive: 'rgb(128 128 0 / 0.3)',
		silver: 'rgb(192 192 192 / 0.3)',
		gold: 'rgb(255 233 0 / 0.3)',
		bronze: 'rgb(205 127 50 / 0.3)',
		white: 'rgb(255 255 255 / 0.4)',
		black: 'rgb(0 0 0 / 0.6)',
	};

	if (bgColor in colorMap) {
		cardColor = colorMap[bgColor];
	} else if (bgColor !== undefined && bgColor !== '') {
		cardColor = bgColor;
	} else {
		cardColor = 'rgb(128 128 128 / 0.2)';
	}

	return (
		<div
			ref={cardRef}
			className='card'
			onMouseMove={handleMouseMove}
			style={{
				background: cardColor,
			}}
		>
			<div className='inner'>{children}</div>
			<div className='blob'></div>
			<div className='fakeblob'></div>
		</div>
	);
}

export default Card;
