// 2개의 배열을 허용하는 same이라는 함수를 작성하십시오. 첫번째 배열의 제곱이 두 번째 배열에 해당하는 값을 가지면 참을 반환

//example
Same([1, 2, 3], [4, 1, 9]); //true
Same([1, 2, 3], [1, 9]); //false
Same([1, 2, 1], [4, 4, 1]); //false (must be same frequency)

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}
