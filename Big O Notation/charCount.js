function charCount(str) {
  var obj = {};
  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    //a~z 또는 0~9가 한 번 이상 반복되는 문자열을 전역 검색 = /[\w]
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
}

function charCount2(str) {
  var obj = {};
  for (var char of str) {
    var char = char.toLowerCase();
    //a~z 또는 0~9가 한 번 이상 반복되는 문자열을 전역 검색 = /[\w]
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
}

console.log(charCount2('Hello hi!'));
