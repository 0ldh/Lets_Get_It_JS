arr = ["rock", "paper", "siss"];
let userpick;
let compick;
const urock = document.querySelector("#urock");
const upaper = document.querySelector("#upaper");
const usiss = document.querySelector("#usiss");

const crock = document.querySelector("#crock");
const cpaper = document.querySelector("#cpaper");
const csiss = document.querySelector("#csiss");
const sel = (rps) => {
    if (rps == "urock") {
        userpick = "rock";
        urock.style.textAlign = "left";
        upaper.style.textAlign = "";
        usiss.style.textAlign = "";
    } else if (rps == "upaper") {
        userpick = "paper";
        upaper.style.textAlign = "left";
        urock.style.textAlign = "";
        usiss.style.textAlign = "";
    } else if (rps == "usiss") {
        userpick = "siss";
        usiss.style.textAlign = "left";
        upaper.style.textAlign = "";
        urock.style.textAlign = "";
        console.log(userpick);
    }
}

const start = () => {
    const btn = document.querySelector("#button")
    btn.setAttribute("disabled", true);
    let res = document.createElement("h1");
    const vs = document.getElementsByClassName("vs");
    console.log("게임 시작");
    const draw = Math.floor(Math.random() * 3)
    compick = arr[draw];

    // 초기화
    setTimeout(() => {
        btn.removeAttribute("disabled")
        crock.style.textAlign = "";
        cpaper.style.textAlign = "";
        csiss.style.textAlign = "";

        usiss.style.textAlign = "";
        upaper.style.textAlign = "";
        urock.style.textAlign = "";

        res.innerHTML = "";

    }, 1000);

    if (compick == "rock") {
        crock.style.textAlign = "right";
        cpaper.style.textAlign = "";
        csiss.style.textAlign = "";
    } else if (compick == "paper") {
        crock.style.textAlign = "";
        cpaper.style.textAlign = "right";
        csiss.style.textAlign = "";
    } else {
        crock.style.textAlign = "";
        cpaper.style.textAlign = "";
        csiss.style.textAlign = "right";
    }

    // 승패
    document
        .querySelector(".vs")
        .append(res);
    if (compick == userpick) {
        res.innerHTML = "무승부!!";
    } else if (compick == "rock") {
        console.log("주먹");
        if (userpick == "paper") {
            res.innerHTML = "승리!!!";
        } else {
            res.innerHTML = "패배...";
        }
    } else if (compick == "paper") {
        console.log("보");
        if (userpick == "siss") {
            res.innerHTML = "승리!!!";
        } else {
            res.innerHTML = "패배...";
        }
    } else if (compick == "siss") {
        console.log("가위");
        if (userpick == "rock") {
            res.innerHTML = "승리!!!";
        } else {
            res.innerHTML = "패배...";
        }
    }

    // 점수
    let usocre = parseInt(document.querySelector(".uscore").innerHTML);
    let csocre = parseInt(document.querySelector(".cscore").innerHTML);
    if (res.innerHTML == "승리!!!") {
        document
            .querySelector(".uscore")
            .innerHTML = usocre + 1;
    } else if (res.innerHTML == "패배...") {
        document
            .querySelector(".cscore")
            .innerHTML = csocre + 1;
    }

}