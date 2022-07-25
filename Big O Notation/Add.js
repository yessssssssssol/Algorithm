function add1(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

let time1 = performance.now();
add1(1000000000);
let time2 = performance.now();
console.log(`Time Elapse1: ${(time2 - time1) / 1000} seconds.`);

function add2(n) {
  return (n * (n + 1)) / 2;
}

let time3 = performance.now();
add2(1000000000);
let time4 = performance.now();
console.log(`Time Elapse2: ${(time4 - time3) / 1000} seconds.`);
