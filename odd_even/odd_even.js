function oddEven(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
}
for (var i = 1; i <= 20; i++) {
    console.log(oddEven(i));
}
