const reslutT = document.querySelector('#result');
const bonusT = document.querySelector('#bonus');
const buttonT = document.querySelector('#button');

// 로또 난수 만들기 방법 1. 0~45 까지의 공 바구니 생성
//
let answerA = Array(7);
let draw = () => {
    buttonT.setAttribute("disabled", true)
    reslutT.textContent = ` `;
    bonusT.textContent = ` `;
    let candidateA = Array(45) // 길이 45짜리 배열 생성
        .fill() // undefind로 채움
        .map((v, i) => i + 1); // ? i = 인덱스 번호 , v = 매개변수이나 매개변수 없이 인덱스 번호 i만을 사용할 수 없어서,
    // undefind를 매개변수로 받지만 사용하지는 않음 그리고 인덱스 번호 + 1 을 값으로 리턴함
    console.log(candidateA);

    // 로또 숫자 뽑기 방법 2
    let count = 0;
    let num = 0;
    let timedel = setInterval(() => {
        let indexN = Math.floor(Math.random() * (candidateA.length - 1) + 1)
        answerA[count] = candidateA[indexN];
        num = answerA[count];
        candidateA.splice(indexN, 1)

        /*let resT = document.createTextNode(`${answerA[count]} `)
                    reslutT.appendChild(resT) */

        if (count === 6) {
            let bonusN = answerA[6];
            delete answerA[6];
            ballcss(bonusN, bonusT)
            clearInterval(timedel)
            return;
        }
        count = count + 1;
        ballcss(num, reslutT)
        console.log(count)
    }, 1000);
    setTimeout(() => {
        console.log("실행됨")
        // sort 정렬 버블 정렬
        answerA.sort((a, b) => a - b);
        console.log(answerA.join(' '))
        reslutT.textContent = ` `;
        for (let i = 0; i < answerA.length - 1; i++) {
            let resN = answerA[i];
            ballcss(resN, reslutT)
        }
        return buttonT.removeAttribute("disabled");
    }, 10000);

}

/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */
/* // 로또 난수 만들기 방법 2
            let lottoA;
            let draw = ()=>{ while (new Set(lottoA).size !== 7) {
                lottoA = Array(7)
                .fill()
                .map((v, i) => Math.floor(Math.random() * 45 + 1));
            }}
            console.log(lottoA)

            로또 숫자 뽑기 방법 1
            for (let i = 0; i < answerA.length; i++) {
                let indexN = Math.floor(Math.random() * (candidateA.length-1) + 1)
                answerA[i] = candidateA[indexN];
                candidateA.splice(indexN, 1)
                console.log(indexN);
                setTimeout(() => {
                let resT = document.createTextNode(`${answerA[i]} `)
                console.log(resT)
                reslutT.appendChild(resT)
                }, 3000);
            }



            console.log(answerA.join(' '))

            선택 정렬
            for (let i = 0; i < answerA.length; i++){
                let temp = 0;
                for (let j = i+1; j < answerA.length; j++){
                    if (answerA[i] > answerA[j]){
                        temp = answerA[i];
                        answerA[i] = answerA[j];
                        answerA[j] = temp;
                        console.log('정렬함')
                    }
                }
            }
             */