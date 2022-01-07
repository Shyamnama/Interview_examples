// arr.splice(3, 0, "hello");

//Questions
//1. Find largest number in array
//2. Find second largest number in array
//3. Remove duplicate number in array
//4. Remove middle element in array
//5. Insert an element in array
//6. Delete an element in array

// var max = arr[0];
// var secondMax = arr[0];

// answer 1
// function findLargestNumber(arr, max) {
//   for (var i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//   }
//   return "Largest number is " + max;
// }

// console.log(findLargestNumber(arr, max));

// answer 2
// function findSecondLargestNumber(arr, max, secondMax) {
//   for (var i = 0; i < arr.length; i++) {
//     if (max <= arr[i]) {
//       secondMax = max;
//       max = arr[i];
//     }
//     if (secondMax <= arr[i] && arr[i] !== max) {
//       secondMax = arr[i];
//     }
//   }
//   return "Second largest number is " + secondMax;
// }

// console.log(findSecondLargestNumber(arr, max, secondMax));

//answer 3

// function removeDuplicateNumbers(arr) {
//   var newArr = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (newArr.indexOf(arr[i]) === -1) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(removeDuplicateNumbers(arr));

// answer 4

// function removeMiddle(arr) {
//   var newArr = [];
//   var middle = Math.floor((arr.length - 1) / 2);
//   console.log("Middle Element: ", arr[middle])
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[middle]) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(removeMiddle(arr));

//answer 5

// function InsertElement(arr, elem, pos) {
//   // var middle = Math.floor((arr.length - 1) / 2); //middle = 2
//   var n = arr.length; // n=5
//   var index = n - 1; //index=4

//   n = n + 1; // n=6

//   // while (index >= middle) { // 1>=2 false              0 1 2 3 4 5
//   //   arr[index + 1] = arr[index]; // a[3] = arr[2] ==> [1,2,4,4,5,6]
//   //   index = index - 1; // index = 1
//   // }

//   for (index; index >= pos; index--) {
//     arr[index + 1] = arr[index];
//   }

//   // 0 1 2 3 4 5
//   arr[pos] = elem; // arr[2] = 3 [1,2,3,4,5,6]

//   for (var i = 0; i < n; i++) {
//     console.log(arr[i]);
//   }
// }

// InsertElement(arr, 3, 2);

// 0  1  2  3  4
var arr = [1, 2, 3, 4, 5];
// answer 6
function deleteElement(arr, index) {
  var n = arr.length; // 5

  index = index + 1; // 3

  while (index < n) {
    // 5<5      // 0 1 2 3 4
    arr[index - 1] = arr[index]; // [1,2,4,5,5]
    index = index + 1; // index = 5
    // console.log("index", index);
  }

  for (var i = 0; i < n - 1; i++) {
    console.log(arr[i]);
  }
}

deleteElement(arr, 2);
