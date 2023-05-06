import React, { useEffect, useState } from "react";

function SimpsonIntegration(props) {
  const { a, b, n, f} = props;
  const [result, setResult] = useState(0);

  useEffect(() => {
    const h = (b - a) / n;
    let sum = f(a) + f(b);

    for (let i = 1; i < n; i += 2) {
      sum += 4 * f(a + i * h);
    }

    for (let i = 2; i < n - 1; i += 2) {
      sum += 2 * f(a + i * h);
    }

    setResult((h / 3) * sum);
  }, [a, b, n, f]);


  return (
    <div>
      <h3>2. Для визначення помилки обрахувань знайти точне значення площі
        під кривої f(x) шляхом інтегрування</h3>
      <h3>Точне значення площі під кривою:</h3>
      <p>{result.toFixed(4)}</p>
    </div>
  );
}

export default SimpsonIntegration;
