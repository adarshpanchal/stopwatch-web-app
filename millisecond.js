start = document.querySelector(".start")
stopp = document.querySelector(".stop")
reset = document.querySelector(".reset")

let msec = 0;
let sec = 0;
let min = 0;
let timer = null;
start.addEventListener("click", () => {
    if (timer !== null) return;
    timer = setInterval(() => {
        msec++;
        if (msec === 10) {
            msec = 0;
            sec++;
        }
        if (sec === 60) {
            sec = 0;
            min++;
        }
        if (msec < 10) {
            document.querySelector(".sec").innerText = `0${msec}`
        }
        else {
            document.querySelector(".sec").innerText = `${msec}`

        }
        if (sec < 10) {
            document.querySelector(".min").innerText = `0${sec}`
        }
        else {
            document.querySelector(".min").innerText = `${sec}`
        }
        min < 10 ? document.querySelector(".hour").innerText = `0${min}` : document.querySelector(".hour").innerText = `${min}`
    }, 100);
})
stopp.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
})
reset.addEventListener("click", () => {
    let confirm_reset = confirm("do you want to reset")
    if (!confirm_reset) return;
    clearInterval(timer);
    timer = null;
    msec = 0;
    sec = 0;
    min = 0;
    document.querySelector(".sec").innerText = "00";
    document.querySelector(".min").innerText = "00";
    document.querySelector(".hour").innerText = "00";
})
