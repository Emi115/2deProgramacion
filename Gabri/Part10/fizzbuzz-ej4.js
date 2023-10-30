
function fizzBuzz(n, condition) {
  let text = "";
  Object.entries(condition).forEach(([num, t]) => {
    if (n % num === 0) text += t;
  });

  return text || n;
}

export default fizzBuzz;
