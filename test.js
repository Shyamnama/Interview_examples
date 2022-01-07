//******** PROBLEM 1*********

// let x = {},
//   y = { name: "Ronny" },
//   z = { name: "John" };

//   x[y] = { name: "Vivek" };
//   x[z] = { name: "Akki" };

// console.log(x[y]);

//******** PROBLEM 2*********

// var x = 23;

// function fun() {
//   var x = 43;
//   (function random() {
//     x++;
//     console.log(x);
//     var x = 21;
//   })();
// }

// fun(); // NaN

//******** PROBLEM 3*********

// let hero = {
//   powerLevel: 99,
//   getPower(){
//     return this.powerLevel;
//   }
// }

// let getPower = hero.getPower;

// let hero2 = {powerLevel:42};
// console.log(getPower());
// console.log(getPower.apply(hero2));

//******** PROBLEM 4*********

// const a = function(){
//   console.log(this);

//   const b = {
//     func1: function(){
//       console.log(this);
//     }
//   }

//   const c = {
//     func2: ()=>{
//       console.log(this);
//     }
//   }

//   b.func1();
//   c.func2();
// }

// a();

//******** PROBLEM 5*********

// const b = {
//   name: "Vivek",
//   f: function () {
//     var self = this;
//     console.log(this.name);
//     (function () {
//       console.log(this.name); //undefined
//       console.log(self.name);
//     })();
//   },
// };

// b.f();

//******** PROBLEM 6*********

// (function (a) {
//   return (function () {
//     console.log(a);
//     a = 23;
//   })();
// })(45);

//******** PROBLEM 7*********

// function randomFunc() {
//   for (var i = 0; i < 2; i++) {
//     function x(i) {
//       setTimeout(() => console.log(i), 1000);
//     }
//     x(i);
//   }
// }

// randomFunc();

//******** PROBLEM 8*********
//alternative binary search

var arr = [1, 2, 4, 6, 7, 8, 9, 10];

function binarySearch(arr, elem, start, end) {
  var middle = Math.floor(start + end / 2);

  if (start > end) {
    return "Element not found";
  }

  if (arr[middle] === elem) {
    return `Element ${elem} is found at index ${middle}`;
  } else if (arr[middle] > elem) {
    return binarySearch(arr, elem, start, middle - 1);
  } else {
    return binarySearch(arr, elem, middle + 1, end);
  }
}

// console.log(binarySearch(arr, 10, 0, arr.length - 1));

//******** PROBLEM 9*********

function rotateRight(arr, rotations) {
  if (rotations == 0) return arr;
  for (let i = 0; i < rotations; i++) {
    let element = arr.pop();
    arr.unshift(element);
  }

  return arr;
}

// console.log(rotateRight([44, 1, 22, 111], 5));
