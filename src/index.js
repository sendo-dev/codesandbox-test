/**
 * const, let
 */
// var val1 = "val1の中身";
// console.log(val1);

// val1 = "val1の上書き";
// console.log(val1);

// var val1 = "val1の再宣言";
// console.log(val1);

// let val2 = "val2の中身";
// console.log(val2);

// val2 = "val2の上書き";
// console.log(val2);

// let val2 = "val2の再宣言";
// console.log(val2);

// const val3 = "val3の中身";
// console.log(val3);

// val3 = "val3の上書き";
// console.log(val3);

// const val4 = {
//   name: "namae",
//   age: "10"
// }
// console.log(val4);

// val4.name = "aa";

// const val5 = ["dog", "cat"];
// val5[0] = "bard";
// val5.push("monkey")
// console.log(val5);

// 従来の方法
// const name = "endo";
// const age = 26;
// // console.log("私の名前は" + name + "です。年齢は" + age + "歳です。")

// // テンプレート文字列
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2)

// 従来の関数宣言
// function func1() {
//   return "func1";
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("ddddd"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("ddd"));

// 分割代入
// const myProfile = {
//   name: "endo",
//   age: 26
// }
// const {name, age} = myProfile
// console.log("私の名前は" + name + "です。年齢は" + age + "歳です。")

// const myProfile = ["endo", 26];
// const [name, age] = myProfile;
// myProfile[0] = "sendo";
// console.log(`私の名前は${name}です。年齢は${age}歳です。`);

// デフォルト値
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
// sayHello("endo");

// スプレット構文　...
// 配列の展開
// const arr1 = [1, 2, 3]
// console.log(arr1)
// console.log(...arr1)

// const sumFunc = (num1, num2) => console.log(num1 + num2)
// sumFunc(arr1[0], arr1[1])
// sumFunc(...arr1)

// まとめる
// const arr2 = [1, 2, 3, 4, 5]
// const [num1, num2, ...arr3] = arr2
// console.log(num1)
// console.log(num2)
// console.log(arr3)

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4]; // ディープコピーができる
// console.log(arr6);
// const arr7 = arr4; // これはアドレスコピー
// console.log(arr7);
// arr4[0] = 50;
// console.log("arr6:" + arr6);
// console.log("arr7:" + arr7);

// const arr8 = [...arr4, ...arr5];
// console.log(...arr8);


// 配列、map
// const nameArr = ["endo", "sato", "tanaka"];
// for (let i=0; i<nameArr.length; i++) {
//   console.log(`${i+1}番目は${nameArr[i]}さんです`);
// }

// これはそのまま返しているだけ
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, index)=>console.log(`${index + 1}番目は${name}さんです`))

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num)=>{
//   return num % 2 === 1;
// })
// console.log(newNumArr);

const flag = false;
const fee = flag || null;
console.log(fee);

