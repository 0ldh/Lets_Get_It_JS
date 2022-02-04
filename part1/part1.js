function loadJQuery() {
   var oScript = document.createElement("script");
   oScript.type = "text/javascript";
   oScript.src = "http://code.jquery.com/jquery-1.6.2.min.js";	
   document.getElementsByTagName("head")[0].appendChild(oScript);
   console.log("JQuery 로딩완료");
}

const startWords = ["우리말", "끝말잇기", "게임"]
const index = Math.floor(Math.random()*3)
let word = startWords[index]

const keyWord = document.querySelector(".keyWord")
let time = 10;
const timeZone = document.querySelector