//area of a circle
//circumference of a circle
//diameter of a circle

const radius = [3, 5, 10, 6];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

const calculation = function (arr, logic) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(logic(arr[i]));
  }
  return result;
};

//USING PROTOTYPE
// Array.prototype.calculation = function (logic) {
//   let result = [];

//   for (let i = 0; i < this.length; i++) {
//     result.push(logic(this[i]));
//   }
//   return result;
// };

// console.log(radius.map(area));
// console.log(radius.calculation(area));
console.log("Area of circles:", calculation(radius, area));
// console.log("Circumference of circles:", calculation(radius, circumference));
// console.log("diameter of circles:", calculation(radius, diameter));

const users = [
  { name: "Shyam Nama", age: 26, address: "Greater Noida" },
  { name: "Shubham", age: 27, address: "Delhi" },
  { name: "Farhan", age: 27, address: "Noida" },
  { name: "Amit", age: 28, address: "Jaipur" },
];

const result = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

// console.log(result);
