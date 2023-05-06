import React, { useEffect, useState } from 'react';

const MonteCarloAccuracy = ({ n, f, a, b, fMax, exactValue }) => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        let sum = 0;
        let sumSq = 0;
        var array = [];
        for (let i = 0; i < 2; i++) {
            const N = n * 10 ** i;
            let K = 0;
            for (let j = 0; j < N; j++) {
                const x = a + Math.random() * (b - a);
                const y = Math.random() * fMax;
                const fx = f(x);
                if (y < fx) K++;
            }
            const S = ((b - a) * fMax * K) / N;
            sum += S;
            sumSq += S * S;
            const mean = sum / (i + 1);
            const variance = (sumSq - (sum * sum) / (i + 1)) / i;
            const stdev = variance > 0 ? Math.sqrt(variance) : 0;
            const absError = mean - exactValue;
            array[i] = {
                points: N,
                exactValue: exactValue.toFixed(3),
                mean: mean.toFixed(3),
                stdev: stdev.toFixed(3),
                absError: absError.toFixed(3),
            }
        }
        setResults(array);
    }, [n, f, a, b, fMax, exactValue])

    return (
        <div>
            <div>
                <h3>
                    Розробка програми оцінки точності обрахувань
                </h3>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Кількість точок n</th>
                        <th>Точне значення інтегралу St</th>
                        <th>Математичне очікування M(S)</th>
                        <th>Середньо-квадратичне відхілення sqrt(D)</th>
                        <th>Абсолютна похібка Q</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map(({ points, exactValue, mean, stdev, absError }) => (
                        <tr key={points}>
                            <td>{points}</td>
                            <td>{exactValue}</td>
                            <td>{mean}</td>
                            <td>{stdev}</td>
                            <td>{absError}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MonteCarloAccuracy;
