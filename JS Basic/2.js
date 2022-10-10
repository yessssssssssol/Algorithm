// 삼각형 판별하기

function solution(a, b, c) {
  let answer = 'YES',
    max;
  let Total = a + b + c;
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;
  return max;

  if (Total - max <= max) answer = 'NO';
  return answer;
}

console.log(solution(43, 62, 12));
