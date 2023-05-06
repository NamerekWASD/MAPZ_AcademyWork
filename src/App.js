import React, { useState } from "react";
import './App.css'
import FunctionGraph from "./components/FunctionGraph";
import SimpsonIntegration from "./components/SimpsonIntegration";
import MaxFunctionValue from "./components/MaxFunctionValue";
import RectangleArea from "./components/RectangleArea";
import MonteCarloIntegration from "./components/MonteCarloIntegration";
import MonteCarloAccuracy from "./components/2/MonteCarloAccuracy";


function App() {

	const [a, seta] = useState(0);
	const [b, setb] = useState(1);
	const [n, setn] = useState(100);

	const [fMax, setFMax] = useState(0);
	const [area, setArea] = useState(0);
	const [exactValue, setExactValue] = useState(0);

	const f = (x) => {
		return Math.cos((x / n) * (Math.PI / 2));
	}

	return (
		<div className="App mb-5 task-keeper">

			<div className="interval mt-5">
				<h4>Інтервал</h4>
				<label htmlFor="a">[</label><input type="number" name="a" defaultValue={a} onChange={(e) => seta(+e.target.value)} />:
				<input type="number" name="b" defaultValue={b} onChange={(e) => setb(+e.target.value)} /><label htmlFor="b">]</label>
				<div className="form-group">
					<label className="form-label" htmlFor="n">Кількість точок:</label> <br />
					<input type="number" name="n" defaultValue={n} onChange={(e) => setn(+e.target.value)} />
				</div>
			</div>

			<div>
				<h2>Завдання №1</h2>
				<div>
					<FunctionGraph a={a} b={b} n={n} f={f} />

					<SimpsonIntegration a={a} b={b} n={n} f={f} />
				</div>
			</div>
			<div>
				<h2>Завдання №2</h2>
				<div>
					<MaxFunctionValue a={a} b={b} n={n} fMax={fMax} setFMax={setFMax} f={f} />
				</div>
			</div>
			<div>
				<h2>Завдання №3</h2>
				<div>
					<RectangleArea a={a} b={b} fMax={fMax} area={area} setArea={setArea} f={f} />
				</div>
			</div>
			<div>
				<h2>Завдання №4</h2>
				<div>
					<MonteCarloIntegration a={a} b={b} n={n} fMax={fMax} area={area} f={f} exactValue={exactValue} setExactValue={setExactValue} />
				</div>
			</div>
			<div>
				<h2>Етап 2</h2>
				<div>
					<MonteCarloAccuracy a={a} b={b} n={n} fMax={fMax} area={area} f={f} exactValue={exactValue} />
				</div>
			</div>
		</div>
	);
}

export default App;
