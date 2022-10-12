// 최솟값 구하기

function solution(arr) {
  let answer,
    min = 987654321; //min값 미리 주는 것 잊지 않기
  // min = Number.MAX_SAFE_INTEGER
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    answer = min;
  }
  return answer;
}

arr = [5, 3, 7, 11, 9, 15, 17];
console.log(solution(arr));

function solution2(arr) {
  let answer = Math.min(...arr2);
  return answer;
}
arr2 = [5, 7, 3, 11, 2, 15, 17];

console.log(solution2(arr2));
