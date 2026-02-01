var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function max(numbers) {
    if (numbers.length === 0) {
        throw new Error('numbers must not be empty.');
    }
    return Math.max.apply(Math, numbers);
}
// ランダムに整数の配列を作成する
var arr = __spreadArray([], Array(10), true).map(function () { return Math.floor(Math.random() * 100); });
console.log(arr);
console.log(max(arr));
