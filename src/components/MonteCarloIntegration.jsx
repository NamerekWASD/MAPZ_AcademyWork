import React, { useEffect } from 'react';

function MonteCarloIntegration({ a, b, n, f, area, fMax, exactValue, setExactValue }) {
    useEffect(() => {
        let k = 0;
        for (let i = 0; i < n; i++) {
            const x = Math.random() * (b - a) + a;
            const y = Math.random() * fMax;
            const fx = f(x);
            if (y < fx) {
                k++;
            }
        }
        const integralValue = area * (k / n);
        setExactValue(integralValue);
    }, [a, b, n, f])

    return (
        <div>
            <h3>Метод Монте-Карло</h3>
            {exactValue && <p>Значення інтегралу: {exactValue}</p>}
        </div>
    );
}

export default MonteCarloIntegration;
