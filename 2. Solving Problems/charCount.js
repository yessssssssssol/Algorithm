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
    char = char.toLowerCase();
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

function charCount3(str) {
  var obj = {};
  for (var char of str) {
    char = char.toLowerCase();
    //a~z 또는 0~9가 한 번 이상 반복되는 문자열을 전역 검색 = /[\w]
    if (/[a-z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

console.log(charCount2('Hello hi!')); //{ h: 2, e: 1, l: 2, o: 1, i: 1 }

function isAlphaNumeric(char) {
  var code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric 0-9
    !(code > 64 && code < 91) && // upper alpha A-Z
    !(code > 96 && code < 123) // lower alpha a-z
  ) {
    return false;
  }
  return true;
}
carCodeAt(0);
