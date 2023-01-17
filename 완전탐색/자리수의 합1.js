function solution(n, arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER; //작은 숫자로 초기화
  for (let x of arr) {
    let sum = 0,
      tmp = x;
    while (tmp) {
      sum += tmp % 10; // 나머지 값
      tmp = Math.floor(tmp / 10); // 몫으로 바뀜
    }
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }
  return answer;
}
let arr1 = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
