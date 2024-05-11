import Light_hover_react_component from './component/Light_hover_react_component/Light_hover_react_component';

function App() {
	const colorMap = {
		green: 'rgb(9 260 9 / 0.15)',
		blue: 'rgb(9 9 260 / 0.15)',
		red: 'rgb(260 9 9 / 0.15)',
		yellow: 'rgb(260 260 9 / 0.15)',
		purple: 'rgb(140 9 140 / 0.15)',
		orange: 'rgb(260 150 9 / 0.15)',
		pink: 'rgb(255 105 180 / 0.15)',
		cyan: 'rgb(0 255 255 / 0.15)',
		magenta: 'rgb(255 0 255 / 0.15)',
		teal: 'rgb(0 128 128 / 0.15)',
		lime: 'rgb(0 255 0 / 0.15)',
		indigo: 'rgb(75 0 130 / 0.15)',
		maroon: 'rgb(128 0 0 / 0.15)',
		navy: 'rgb(0 0 128 / 0.15)',
		olive: 'rgb(128 128 0 / 0.15)',
		silver: 'rgb(192 192 192 / 0.15)',
		gold: 'rgb(255 215 0 / 0.15)',
		bronze: 'rgb(205 127 50 / 0.15)',
		white: 'rgb(255 255 255 / 0.15)',
		black: 'rgb(0 0 0 / 0.15)',
	};

	return (
		<>
			<h1>Light Hover React Component</h1>
			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					gap: 20,
				}}
			>
				<Light_hover_react_component>
					<h2>Default</h2>
					<p>Párrafo sobre algo random</p>
					<img
						src='https://medibangpaint.com/wp-content/uploads/2020/09/1.jpg'
						alt='paisaje'
						style={{
							width: 300,
							borderRadius: 5,
						}}
					/>
				</Light_hover_react_component>

				{Object.keys(colorMap).map((color, index) => (
					<Light_hover_react_component key={index} bgColor={color}>
						<h2>{color}</h2>
						<p>Párrafo sobre algo random</p>
						<img
							src='https://medibangpaint.com/wp-content/uploads/2020/09/1.jpg'
							alt='paisaje'
							style={{
								width: 300,
								borderRadius: 5,
							}}
						/>
					</Light_hover_react_component>
				))}
			</div>
		</>
	);
}

export default App;
