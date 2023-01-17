// 1부터 N까지 합 출력하기

function solution(n) {
  let answer = 0; // 초기값 0으로 설정하기, 하지 않으면 NaN로 뜸
  for (let i = 1; i <= n; i++) {
    console.log(i);
    answer = answer + i;
  }
  return answer;
}

console.log(solution(3));

// function solution(n){
//   let answer=0;
//   for(let i=1; i<=n; i++){
//       answer=answer+i;
//   }

//   return answer;
// }

// console.log(solution(10));
