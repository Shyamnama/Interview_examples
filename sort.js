// const arr = [30, 10, 56, 70, 20, 50, 100, 15];

//BUBBLE SORT
function bubbleSort(arr) {
  var i, j;
  for (i = arr.length - 1; i >= 0; i--) {
    for (j = 1; j <= i; j++) {
      if (arr[j - 1] > arr[j]) {
        var temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

// console.log('Bubble Sort:===>',bubbleSort(arr));

//INSERTION SORT
function insertionSort(arr) {
  var i, j, current;
  for (i = 1; i < arr.length; i++) {
    current = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = current;
  }
  return arr;
}

// console.log('Insertion Sort:===>',insertionSort(arr));

//SELECTION SORT
function selectionSort(arr) {
  var i, j, minIndex;
  for (i = 0; i < arr.length; i++) {
    minIndex = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    var temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

// console.log("Selection Sort:===>", selectionSort(arr));

//MERGE SORT
const arr = [30, 10, 56, 70, 20, 50, 100, 15];
function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return [...result, ...left, ...right];
}

function mergeSort(arr) {
  var length = arr.length;
  if (length < 2) {
    return arr;
  }

  var mid = Math.floor(length / 2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

// console.log("Merge Sort:===>", mergeSort(arr));

//QUICK SORT

function partition(arr, left, right) {
  var pivot = arr[Math.floor((left + right) / 2)];
  var i = left,
    j = right;
  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }

    while (arr[j] > pivot) {
      j--;
    }

    if (i <= j) {
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(arr, left, right) {
  if (arr.length > 1) {
    let index = partition(arr, left, right);

    if (left < index - 1) {
      quickSort(arr, left, index - 1);
    }

    if (index < right) {
      quickSort(arr, index, right);
    }
  }
  return arr;
}

console.log("Quick Sort ==>", quickSort(arr, 0, arr.length - 1));
