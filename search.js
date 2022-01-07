// Linear Search
// var arr = [12, 123, 16, 89, 41, 8, 0, 127, 5, 1, 9];

function linearSearch(arr, element) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return `${arr[i]} found at index ${i}`;
    }
  }
  return "Not found";
}

var arr = [2, 13, 4, 162, 8, 10, 12, 14, 16, 18, 20];
// console.log(linearSearch(arr, 10));

// Binary Search

// function binarySearch(arr, elem) {
//   var start = 0;
//   var end = arr.length - 1;
//   var middle = Math.floor((start + end) / 2);

//   while (arr[middle] !== elem && start <= end) {
//     if (arr[middle] < elem) {
//       start = middle + 1;
//     } else {
//       end = middle - 1;
//     }
//     middle = Math.floor((start + end) / 2);
//   }

//   if (arr[middle] === elem) {
//     return `${arr[middle]} found at index  ${middle}`;
//   } else {
//     return "Not found";
//   }
// }

var arr1 = [10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 24, 33, 35, 42, 47];

function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start < end) {
    if (arr[middle] < elem) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
    middle = Math.floor((start + end) / 2);
  }

  if (arr[middle] === elem) {
    return `${elem} found at index ${middle}`;
  } else {
    return "value not found";
  }
}

// var sorted = arr.sort((a, b) => a-b);
console.log(binarySearch(arr1, 18));
