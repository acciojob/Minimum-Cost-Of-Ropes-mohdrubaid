function calculateMinCost() {
  // Get the input element and the result element
  const input = document.getElementById('ropes-input').value;
  const result = document.getElementById('result');

  // Convert the comma separated string of integers into an array of integers
  const ropes = input.split(',').map(Number);

  // Sort the ropes in ascending order
  ropes.sort((a, b) => a - b);

  // Initialize the total cost and the sum of ropes
  let totalCost = 0;
  let sumOfRopes = ropes[0];

  // Calculate the minimum cost of ropes by summing the ropes and adding to total cost
  for (let i = 1; i < ropes.length; i++) {
    sumOfRopes += ropes[i];
    totalCost += sumOfRopes;
  }

  // Display the minimum cost of ropes in the result element
  result.innerHTML = `Minimum cost of ropes is: ${totalCost}`;
}