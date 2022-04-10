const msg = document.querySelector(".msg");
const msg2 = document.querySelector(".msg2");
let start;
let end;
let timer;
const test = () => {
    msg.innerHTML = "시작";
    msg2.innerHTML = "파란색이 되면 클릭해주세요!"
    document.querySelector("#test").style.backgroundColor = "#ED544A";
    timer = setTimeout(() => {
        document.querySelector("#test").style.backgroundColor = "#6FADCF";
        start = new Date();
        msg.innerHTML = "클릭!!";
        msg2.innerHTML = "화면을 클릭해주세요!"
    }, Math.floor(Math.random() * 3000));
    document.getElementById("test").addEventListener('click', () => {
            clearTimeout(timer);
            document.querySelector("#test").style.backgroundColor = "#F6BB43";
            end = new Date();
            msg.innerHTML = (end - start) + " ms";
            msg2.innerHTML = "";
            setTimeout(() => {
                document.querySelector("#test").style.backgroundColor = "#3FE87F";
                msg.innerHTML = "준비";
                msg2.innerHTML = "준비가 완료되었으면 클릭해주세요!"
                reload();
            }, 2000);
        })
}