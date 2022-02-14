const inputT = document.querySelector('#input');
const formT = document.querySelector('#form');
const logsT = document.querySelector('#logs');

let answer = [] // 숫자를 저장할 배열
for (let i = 0; i < 4; i++) {
    let num = Math.floor(Math.random() * 10) // 난수 발생 및 저장
    // 중복제거 IF문
    if (answer.includes(num)) {
        i -= 1;
    } else {
        answer.push(num);
    }
}
console.log(answer)

// 검증
const tries = [];

let check = (input) => {
    if (input.length !== 4) { // 길이
        return alert("4자리 숫자를 입력하세요")
    }
    if (new Set(input).size !== 4) { // 중복된 숫자
        return alert('숫자가 중복되지 않게 입력하세요')
    }
    if (tries.includes(input)) { // 이미 시도한 값
        return alert('이미 시도한 값입니다.')
    }
    return true;
}
let out = 0;
formT.addEventListener('submit', (event) => {
    event.preventDefault(); // 새로고침 동작 막기
    const value = inputT.value;
    inputT.value = '';

    // 검증
    if (!check(value)) {
        return;
    }
    tries.push(value);
    if (answer.join('') === value) { // 답 확인
        logsT.textContent = '홈런!';
        inputT.setAttribute("disabled", true)
        return;
    }
    
    if (tries.length >= 10) { // 10번째 시도인가?
        const message = document.createTextNode(`패배! 정답은 ${answer.join('')}`);
        logsT.appendChild(message)
        inputT.setAttribute("disabled", true)
    }
    

    // 몇 스트 몇 볼 인지
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < answer.length; i++) {
        const index = value.indexOf(answer[i]);
        if (index > -1) { // 일치하는 숫자 발견
            if (index === i) { // 인덱스번호도 같으면
                strike += 1;
            } else {
                ball += 1;
            }
        }
    }
    if (strike === 0 && ball === 0 && tries.length < 10) {
        out++
        logsT.append(`${value}:${out}아웃`, document.createElement('br'));
    } else if (tries.length < 10){
        logsT.append(`${value}: ${strike} 스트라이크 ${ball}볼`,
            document.createElement('br')
        )
    }
    if (out === 3) {
        logsT.appendChild(message)
        inputT.setAttribute("disabled", true)
    }
    
})