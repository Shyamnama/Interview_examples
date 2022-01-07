function parent() {
  var a = "My parent variable";
  function child() {
    console.log(a);
  }
  child();
}

// parent();

for (var i = 1; i <= 5; i++) {
  function close(x) {
    setTimeout(() => {
      console.log(x);
    }, x * 1000);
  }
  close(i);
}

let x= {}, y = {name:"Ronny"},z = {name:"John"};

x[y] = {name:"Vivek"};
x[z] = {name:"Akki"};

console.log(x[y]);

