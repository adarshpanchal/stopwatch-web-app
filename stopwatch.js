start = document.querySelector(".start")
stopp = document.querySelector(".stop")
reset = document.querySelector(".reset")

let sec = 0;
let min = 0;
let hour = 0;
let timer = null;
start.addEventListener("click", () => {
    if (timer !== null) return;
    timer = setInterval(() => {
        sec++;
        if (sec === 60) {
            sec=0;
            min++;
        }
        if (min === 60) {
            min=0;
            hour++;
        }
        if (sec < 10) {
            document.querySelector(".sec").innerText = `0${sec}`
        }
        else {
            document.querySelector(".sec").innerText = `${sec}`

        }
        if (min < 10) {
            document.querySelector(".min").innerText = `0${min}`
        }
        else {
            document.querySelector(".min").innerText = `${min}`
        }
        hour<10? document.querySelector(".hour").innerText = `0${hour}`:document.querySelector(".hour").innerText = `${hour}`
    }, 1000);
})
stopp.addEventListener("click",()=>{
    clearInterval(timer);
    timer=null;
})
reset.addEventListener("click", () => {
    alert("i was clicked")
    clearInterval(timer);
    timer=null;
    sec=0;
    min=0;
    hour=0;
    document.querySelector(".sec").innerText = "00";
    document.querySelector(".min").innerText = "00";
    document.querySelector(".hour").innerText = "00";
})
