function solution(n) {
  let answer = 0;
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
