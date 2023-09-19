const findMinimum = (arr) => {
  // Your code here
  let minval = arr[0];
  for (let val of arr) {
    if (val < minval) {
      minval = val;
    }
  }
  return minval;
};

const runningSum = (arr) => {
  // Your code here
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let total = 0;
    for (let j = i; j >= 0; j--) {
      total += arr[j];
    }
    newArr.push(total);
  }
  return newArr;
};

const evenNumOfChars = (arr) => {
  // Your code here
  let count = 0;
  for (let word of arr) {
    if (word.length % 2 == 0) {
      count++;
    }
  }
  return count;
};

const smallerThanCurr = (arr) => {
  // Your code here
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let total = 0;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] > arr[j]) {
        total++;
      }
    }
    newArr.push(total);
  }
  return newArr;
};

const twoSum = (arr, target) => {
  // Your code here
  for (let i = 0; i < arr.length; i++) {
    let total = 0;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] + arr[j] === target) {
        return true;
      }
    }
  }
  return false;
};

const secondLargest = (arr) => {
  // console.log(arr);
  // Your code here
  if (arr.length < 2) {
    return undefined;
  }
  // let largest = arr[0];
  // for (let val of arr) {
  //   if (largest < val) {
  //     largest = val;
  //   }
  // }
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] == largest) {
  //     arr.splice(i, 1);
  //     break;
  //   }
  // }

  // let secondLargest = arr[0];
  // for (let val of arr) {
  //   if (val > secondLargest) {
  //     secondLargest = val;
  //   }
  // }
  let newArr = arr.slice(0, arr.length);
  newArr.sort();
  newArr.pop();

  return newArr[newArr.length - 1];
};

const shuffle = (arr) => {
  // Your code here
  let newArr = arr.slice(0, arr.length);
  for (let i = 0; i < arr.length; i++) {
    let index1 = Math.floor(Math.random() * arr.length);
    let index2 = Math.floor(Math.random() * arr.length);
    let temp = newArr[index1];
    newArr[index1] = newArr[index2];
    newArr[index2] = temp;
  }
  return newArr;
};
module.exports = [
  findMinimum,
  runningSum,
  evenNumOfChars,
  smallerThanCurr,
  twoSum,
  secondLargest,
  shuffle,
];
