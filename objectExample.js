//UNDERSTANDING "this" and its "this binding"

// this is...
/*
  1. Established at runtime, when a function is invoked.
  2. Determined by how  a function is invoked,  not where the function is defined.
  3. A reference to the object.
*/

//this is not...
/* 
  1. The Function. Though it is established when the function is invoked, it is not the function.
*/

var name = "Global";

var obj1 = {
  name: "Object 1",
  fun1: function () {
    console.log("From Obj1---");
    console.log(this);
    console.log(this.name);
  },
};

// obj1.fun1();

var obj2 = {
  name: "Object 2",
  fun2: obj1.fun1,
};

// obj2.fun2();

var fun = function () {
  console.log(this);
  console.log(this.name);
};

var obj3 = {
  name: "Object 3",
  fun3: fun,
};

// obj3.fun3();

// var results = [
//   { tid: 1, _id: 1 },
//   { tid: 1, primary: true, _id: 2 },
//   { tid: 2, primary: true, _id: 3 },
//   { tid: 4, primary: true, _id: 4 },
//   { tid: 1, _id: 5 },
//   { tid: 2, _id: 6 },
// ];

// const response = results.reduce((acc, it) => {
//   if (!acc[it.tid]) {
//     acc[it.tid] = {};
//   }

//   const existing = acc[it.tid] || {};
//   acc[it.tid].count = (existing.count || 0) + 1;

//   if (it.primary) {
//     acc[it.tid] = {
//       ...it,
//       count: acc[it.tid].count,
//     };
//   }

//   return acc;
// }, {});

// console.log(response);

var person1 = {
  firstName: "Joe",
  lastName: "Biden",
  email: "joebiden@gmail.com",
  type: "admin",
  active: true,
  address: {
    street: "100 N. Main",
    zip: 10001,
  },
};

for (var prop in person1) {
  console.log("Key:", prop);
  console.log("Value:", person1[prop]);
}
