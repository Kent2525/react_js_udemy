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
const data = ["MacBook", "IT company"];

const [usePc, workingCompany] = data; //この変数に上のanimalの値が順番に入ってくる。
const message3 = `私の使っているPCは${usePc}です。勤務先は${workingCompany}です。`;
console.log(message3);

//デフォルト値、初期値
// この書き方だと「こんにちは!undefinedさん！」と出力されてしまう。
const sayHello = (name) => console.log(`こんにちは!${name}さん！`);
sayHello();
// 引数の部分に = '文字列'を入れる事で初期値を設定することができる。
const sayHello2 = (name = "ゲスト") => console.log(`こんにちは!${name}さん！`);
sayHello2();

// スプレッド構文 ... , 配列の展開
const arr1 = [1, 2];
console.log(arr1); //結果は[1,2]
console.log(...arr1); // スプレッド構文。結果は1 2 配列の中身を取り出してくれる。

//例その2
const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1); //上のコードと同じ結果になる。

//配列をまとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3); //結果は[3, 4, 5]

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];
//コピー
const arr6 = [...arr4];
console.log(arr6); // 結果 [10, 20]
//以下のやり方だと参照値も引き継がれてしまうので、予期せぬ挙動をしてしまう事がある。
//この後の処理でarr6の値を書き換えるとarr4の本体の値も変わってしまう。
// const arr6 = arr4;

// 結合
const arr7 = [...arr4, ...arr5];
console.log(arr7); //結果[10, 20, 30, 40]

//mapがfilterを使った配列の処理。mapやfilterはfor文のようなもの
//従来のfor文の書き方
const nameArr = ["佐藤", "鈴木", "田中"];
for (let index = 0; index < nameArr.length; index++) {
  console.log(nameArr[index]); //結果:佐藤　鈴木　田中//index番号を出したい時に使う
}

//map
const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2); //結果:["佐藤", "鈴木", "田中"]

nameArr.map((name) => console.log(name)); //結果:佐藤　鈴木　田中

//filter: return文に条件を設定して、合致したもののみを取り出す。
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr);

//応用：ループでindex番号を表示したい場合
const animalArr = ["犬", "猫", "猿"];
for (let index = 0; index < animalArr.length; index++) {
  console.log(`${index + 1}番目は${animalArr[index]}です。`); //${index}をつける
}
//mapの場合
animalArr.map((animal, index) =>
  console.log(`${index + 1}番目は${animal}です。`)
); //第二引数をindexを入れる

//実践的な書き方
const newNameArr1 = nameArr.map((name) => {
  if (name === "佐藤") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr1); //結果:["佐藤", "鈴木さん", "田中さん"]

// 三項演算子
const num1300 = 1300;
console.log(num1300.toLocaleString());

const formattedNum =
  typeof num1300 === "number" ? "数字だよー" : "それ以外だよー";
console.log(formattedNum);
// 三項演算子をreturnに入れる
const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えている" : "許容範囲内です";
};
console.log(checkSum(10, 80)); // 結果:許容範囲内です
console.log(checkSum(90, 80)); // 結果:100を超えている
