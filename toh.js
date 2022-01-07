//Tower of hanoi

function towerOfHanoi(n, from, to, via) {
  if (n === 1) {
    console.log(`Move disk 1 from rod ${from} to rod ${to}`);
    return;
  }
  towerOfHanoi(n - 1, from, via, to);
  console.log(`Move disk ${n} from rod ${from} to rod ${to}`);
  towerOfHanoi(n - 1, via, to, from);
}

function main() {
  var n = 3;
  towerOfHanoi(n, "A", "C", "B");
}

main();