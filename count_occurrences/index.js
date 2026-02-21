function countOccurrences(items) {
    var _a;
    var occurrences = {};
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        occurrences[item] = ((_a = occurrences[item]) !== null && _a !== void 0 ? _a : 0) + 1;
    }
    return occurrences;
}
// Example usage:
var items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
console.log(countOccurrences(items));
