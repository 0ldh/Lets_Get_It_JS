const startWords = ["우리말", "끝말잇기", "게임"]
const index = Math.floor(Math.random() * 3)
let word = startWords[index]

const keyWord = document.querySelector(".keyWord")
let time = 10;
const timeZone = document.querySelector(".timeZone")
const input = document.querySelector("#word")
const pointZone = document.querySelector("#point")
let point = 0;

keyWord.innerHTML = word;
pointZone.innerHTML = point;
input.focus()

const timeCheck = () => {
    timeZone.innerHTML = time
    if (time === 0) {
        clearInterval(start)
        input.setAttribute("disabled", true)
        alert(`Game Over \npoint : ${point}`)
    } else { 
        time -= 1
    }
}

timeCheck()
let start = setInterval(timeCheck, 1000)

const apiKey = "2A31B07743FDC9A7BD35AD5C9F6105F7"
input.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        const prevWord = keyWord.innerHTML
        word = this.value

        clearInterval(start)

        if (word.length > 1 && HanTools.dueum(prevWord[prevWord.length - 1]) === word[0]) {

            fetch(
                `https://opendict.korean.go.kr/api/search?key=${apiKey}&q=${word}&advanced=y&method=exact`
            )
                .then(res => {
                    return res.text()
                })
                .then(data => {

                    const parser = new DOMParser()
                    const xmlDoc = parser.parseFromString(data, "text/xml")

                    const result = xmlDoc
                        .getElementsByTagName("total")[0]
                        .childNodes[0]
                        .nodeValue

                    if (result > 0) {
                        keyWord.innerHTML = word
                        this.value = ''
                        this.style.outline = ''
                        time = 10

                        point = point + (word.length * 10)
                        pointZone.innerHTML = point

                        fetch(
                            `https://opendict.korean.go.kr/api/search?key=${apiKey}&q=${HanTools.dueum(word[word.length - 1])}&advanced=y&sort=popular&type1=word&method=start&num=100`
                        )
                            .then(res => {
                                return res.text()
                            })
                            .then(comData => {
                                const comXmlDoc = parser.parseFromString(comData, "text/xml")
                                const item = comXmlDoc.getElementsByTagName("item")

                                let comWord = []

                                Array
                                    .from(item)
                                    .forEach(
                                        item => comWord.push(item.getElementsByTagName("word")[0].childNodes[0].nodeValue)
                                    )

                                comWord = comWord
                                    .map(word => word.replace(/\-|\^/g, ""))
                                    .filter(word => word.length > 1)

                                keyWord.innerHTML = comWord[Math.floor(Math.random() * comWord.length)]

                                timeCheck()
                                start = setInterval(timeCheck, 1000)
                            })
                            .catch(error => {
                                console.log(error)
                            })

                        } else {
                        this.value = ''
                        this.style.outline = '1px solid red'
                        start = setInterval(timeCheck, 1000)
                    }

                })
                .catch(error => {
                    console.log(error)
                })

            } else {
            this.value = ''
            this.style.outline = '1px solid red'
            start = setInterval(timeCheck, 1000)
        }

    }
})