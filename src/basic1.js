// テンプレート文字列

const name = "名無しさん";
const age = "18";

const message = `私の名前は${name}です。年齢は${age}です。`;
console.log(message);

// アロー関数
const func = (str) => {
  return str;
};
console.log(func("funcです"));
//処理が1行の場合は、returnを省略することができる。
// const func1 = (str) => str;

const func3 = (num1, num2) => {
  return num1 + num2;
};

console.log(func3(10, 20)); //この中の引数がfunc3のnum1, num2に代入される。

// func3の文も1行なので省略することができる。
// const func3 = (num1, num2) => num1 + num2;
