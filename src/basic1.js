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

// 分割代入
// 1.オブジェクトの場合
const profile = {
  place: "福岡",
  hobby: "お茶"
};

const { place, hobby } = profile;
const message1 = `私の出身は${place}です。趣味は${hobby}です。`;
console.log(message1);

//2. 配列の場合
// 分割代入使わない通常の書き方
const myProfile = ["太郎", "70"];

const message2 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
console.log(message2);
// 分割代入を使った書き方
const animal = ["MacBook", "IT company"];

const [usePc, workingCompany] = animal; //この変数に上のanumalの値が入ってくる。
const message3 = `私の使っているPCは${usePc}です。勤務先は${workingCompany}です。`;
console.log(message3);
