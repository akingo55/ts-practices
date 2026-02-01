function max(numbers: number[]): number {
  if ( numbers.length === 0 ) {
    throw new Error('numbers must not be empty.');
  }
  return Math.max(...numbers);
}

// ランダムに整数の配列を作成する
const arr: number[] = [...Array(10)].map(() => Math.floor(Math.random() * 100));

console.log(arr);
console.log(max(arr));
