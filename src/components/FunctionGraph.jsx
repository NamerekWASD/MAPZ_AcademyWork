import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

function FunctionGraph(props) {
	const {a, b, n, f} = props;

	const [x, setx] = useState([]);
	const [y, sety] = useState([]);

	useEffect(() => {
		setx(new Array(n).fill(0).map((_, i) => a + (i * (b - a)) / n));

	}, [a, b, n, f])

	useEffect(() => {
		sety(x.map((xi) => f(xi)));
	}, [x])

	// Обчислюємо значення функції в точках x
	return (
		<div>
			<h3>1. Побудувати графік функції на заданому інтервалі [a, b].</h3>
			<Plot
				data={[
					{
						x: x,
						y: y,
						type: 'scatter',
						mode: 'lines',
						line: { color: '#008000' },
					},
				]}
				layout={{
					width: 600,
					height: 400,
					title: 'Графік функції',
					xaxis: { title: 'x' },
					yaxis: { title: 'y' },
				}}
			/>
		</div>
	);
}

export default FunctionGraph;
