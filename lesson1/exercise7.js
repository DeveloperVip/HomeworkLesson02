const myArr = ["face", "zalo", "face", "gmail", "zalo", "zalo"];
const myFunc = (inputArr) => {
  let arr = {};
  for (let i = 0; i < inputArr.length; i++) {
    if (arr[inputArr[i]]) {
      arr[inputArr[i]]++;
    } else {
      arr[inputArr[i]] = 1;
    }
  }
  return arr;
};
console.log(myFunc(myArr));
