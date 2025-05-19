function sumOfEvenNumbers(arr: number[], sum: number = 0, index: number = 0) {
  if (index > arr.length - 1) return sum;

  sum += arr[index] % 2 === 0 ? arr[index] : 0;

  return sumOfEvenNumbers(arr, sum, ++index);
}

console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6]));
