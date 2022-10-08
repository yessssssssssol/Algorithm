function solution(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < arr.length; i++) {
    console.log(i);
    if (arr[i] < min) min = arr[i];
  }
  answer = min;
  return answer;
}
let arr = [5, 7, 8, 3, 2, 9, 11];
console.log(solution(arr));
