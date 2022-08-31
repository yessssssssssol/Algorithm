const target = 'Is this all there is?';
const regExp = /is/;

console.log(regExp.test(target));


//특정 단어로 시작하는지 검사
const url = 'https://example.com';
/^https?:\/\//.test(url);
/^(http|https):\/\//.test(url);

// 특정 단어로 끝나는지 검사 
const fileName = 'index.html';
/html$/.test(fileName);

// 숫자로만 이루어진 문자열인지 검사
const target2 = '12345';
/^\d+$/.test(target2);

// 하나 이상의 공백으로 시작하는지 검사
const target3 = ' hi'
/^[\s]+/.test(target3)

// 아이디로 사용 가능한지 검사
// 알파벳 대소문자 또는 숫자로 시작하고 끝나며 4~10자리인지 검사
const id = 'abc123'
/^[A-Za-z0-9]{4,10}$/.test(id)

// 메일 주소 형식에 맞는지 검사
const email = 'whassup_man@naver.com'
/^[0~9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(email)

// 핸드폰 번호 형식에 맞는지 검사
const cellphone = '010-1234-5678'
/^\d{3}-\d{3,4}-\d{4}$/.test(cellphone)

// 특수 문자 포함 여부 검사 [...]의 내부의 ^은 not을 의미
const emoji = 'abcd#123'
(/[^A-Za-z0-9]/gi).test(emoji); //true
// 특수 문자를 제거
target.replace(/[^A-Za-z0-9]/gi,'') //abcd123