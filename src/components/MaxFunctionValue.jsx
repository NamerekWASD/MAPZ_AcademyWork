import React, { useEffect } from 'react';

function MaxFunctionValue(props) {
    const { a, b, n, f, fMax, setFMax } = props

    const eps = 0.00001;
    let x1 = a;
    let x2 = b;
    let c, fc1, fc2;

    while (Math.abs(x2 - x1) > eps) {
        c = (x1 + x2) / 2;
        fc1 = f(c - eps);
        fc2 = f(c + eps);

        if (fc1 < f(c) && fc2 < f(c)) {
            x1 = c;
        } else {
            x2 = c;
        }
    }
    useEffect(() => {
        setFMax(f((x1 + x2) / 2));
    }, [])
    return (
        <div>
            <div>
                <h3>
                    2. Знайти максимум функції f(x) на інтервалі [a,b] шляхом вирішення
                    рівняння df/dx(x)=0 (похідна в точці екстремуму дорівнює нулю), або
                    шляхом логічних міркувань (для монотонної функції).
                </h3>
            </div>
            <p>Максимальне значення функції на інтервалі [{a}, {b}] становить {fMax && fMax.toFixed(4)} на x = {(x1 + x2) / 2}</p>
        </div>
    );
}

export default MaxFunctionValue;
