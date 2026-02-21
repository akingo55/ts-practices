function countOccurrences(items: string[]): Record<string, number> {
  const occurrences: Record<string, number> = {};

  for (const item of items) {
    occurrences[item] = (occurrences[item] ?? 0) + 1;
  }
  return occurrences;
}

// Example usage:
const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

console.log(countOccurrences(items));

