// 홀수

function solution(arr) {
  let answer = [];
  let sum = 0,
    min = 987654321;

  for (let x of arr) {
    if (x % 2 === 1) {
      sum += x;
      if (x < min) min = x;
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer;
}
arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));

function solution2(arr2) {
  let answer = [];
  let sum2 = 0,
    min2 = 987654321;
  //min = Number.MAX_SAFE_INTEGER

  for (let x of arr2) {
    if (x % 2 === 1) {
      sum2 = sum2 + x;
      if (x < min2) min2 = x;
    }
  }
  answer.push(sum2);
  answer.push(min2);
  return answer;
}

arr2 = [12, 77, 38, 41, 53, 92, 85];
console.log(solution2(arr2));
