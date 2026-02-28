//Task-1:Write a function to convert temperature from Celsius to Fahrenheit.
function celToFarCon(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}
const celValue = celToFarCon(30);
console.log(celValue);
