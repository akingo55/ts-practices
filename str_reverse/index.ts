function reverseString(str: string): string {
  return [...str].reverse().join('');
}

// ES2015以降の環境で動作するコード
// tsc -pコマンドでtsconfig.jsonを指定してコンパイル
console.log(reverseString('Hello'));
console.log(reverseString('Hello😃'));
