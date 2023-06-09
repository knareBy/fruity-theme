// Hello, World!
console.log('Hello, World!');

// Calculate the nth prime number
function nthPrime(n) {
  const primes = [2];
  let currentNumber = 3;

  while (primes.length < n) {
    if (isPrime(currentNumber)) primes.push(currentNumber);
    currentNumber += 2;
  }

  return primes[n - 1];
}

// Check if a number is prime
function isPrime(number) {
  if (number <= 1) return false;

  const sqrt = Math.sqrt(number);

  for (let i = 2; i <= sqrt; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// Find the largest element in an array
function findLargestElement(arr) {
  if (arr.length === 0) throw new Error("The array is empty.");

  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) largest = arr[i];
  }

  return largest;
}

// Perform matrix multiplication
function multiplyMatrices(matrix1, matrix2) {
  const result = [];

  for (let i = 0; i < matrix1.length; i++) {
    result[i] = [];

    for (let j = 0; j < matrix2[0].length; j++) {
      let sum = 0;

      for (let k = 0; k < matrix1[0].length; k++) {
        sum += matrix1[i][k] * matrix2[k][j];
      }

      result[i][j] = sum;
    }
  }

  return result;
}