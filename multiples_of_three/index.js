function multiplesOfThree(number) {
    var numbers = [];
    for (var i = 1; i <= number; i++) {
        if (i % 3 === 0) {
            numbers.push(i);
        }
    }
    return numbers;
}
console.log(multiplesOfThree(20));
