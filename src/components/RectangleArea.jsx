import React, { useEffect } from 'react';

const RectangleArea = ({ a, b, fMax, area, setArea }) => {

    useEffect(() => {
        setArea(fMax * (b - a));
    }, [a, b, fMax]);

    return (
        <div className="rectangle-area">
            <div>
                <h3>3. Обрахувати площу прямокутника, що охоплює функцію F(x)
                    S=(b-a)*f max</h3>
            </div>
            <h3>Площа прямокутника</h3>
            <p>Ширина: {b - a}</p>
            <p>Висота: {fMax}</p>
            <p>Площа: {area}</p>
        </div>
    );
};

export default RectangleArea;
