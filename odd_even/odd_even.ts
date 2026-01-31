function oddEven(number: number): string {
  return number % 2 === 0 ? 'Even' : 'Odd';
}

for (let i = 1; i <= 20; i++) {
  console.log(oddEven(i));
}
