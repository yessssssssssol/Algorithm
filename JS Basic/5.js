function solution(arr) {
  let answer,
    min = 987654321;
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    answer = min;
  }
  return answer;
}

arr = [5, 3, 7, 11, 9, 15, 17];
console.log(solution(arr));
