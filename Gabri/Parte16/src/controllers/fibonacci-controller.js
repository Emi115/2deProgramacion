// controllers/fibonacci-controller.js

export function fibonacciController(req, res) {
  // Obtiene el número hasta el cual se calculará la serie de Fibonacci desde los parámetros de la solicitud
  const { n } = req.query;
  
  // Valida que el parámetro n sea un número positivo
  if (!n || isNaN(n) || parseInt(n) <= 0) {
    return res.status(400).json({ error: 'Por favor, proporcione un número positivo válido para calcular la serie de Fibonacci.' });
  }

  // Convierte el número a entero
  const num = parseInt(n);

  // Calcula la serie de Fibonacci hasta el número proporcionado
  const fibonacciSeries = calculateFibonacciSeries(num);

  // Responde con la serie de Fibonacci calculada
  res.json({ fibonacciSeries });
}

// Función auxiliar para calcular la serie de Fibonacci hasta el número proporcionado
function calculateFibonacciSeries(n) {
  const series = [];
  let a = 0, b = 1;

  for (let i = 0; i < n; i++) {
    series.push(a);
    [a, b] = [b, a + b];
  }

  return series;
}
