let timer = 60;
let rn;
let num;
let scr = 0;

function time() {

    let a = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer").innerHTML = timer
        }
        else {
            clearInterval(a);
            document.querySelector("#bubblesinput").innerHTML = "";
            result();

        }
    }, 1000)

}
function hitrn() {
    rn = Math.floor(Math.random() * 10);
    document.querySelector("#hits").innerHTML = rn
}

function bubbles() {
    let bmax;
    let buble = "";
    const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? 'Mobile'
    : 'Desktop';
 if (detectDeviceType() === 'Desktop'){
    bmax=152;
    console.log(bmax)}
 else if(detectDeviceType() === 'Mobile'){
    bmax=55;
    console.log(bmax)}
    for (let i = 1; i <= bmax; i++) {
        let rn = Math.floor(Math.random() * 10);
        buble += `<div class="bubble">${rn}</div>`
        document.querySelector("#bubblesinput").innerHTML = buble
        document.querySelector("#bubblesinput").classList.add('hidden')}
    
}

document.getElementById('bubblesinput').addEventListener('click', function (e) {
    num = Number(e.target.innerHTML)
    if (rn === num) {
        scr += 10;
        document.getElementById("score").innerHTML = `SCORE-${scr}`;
        hitrn();
        bubbles();
    }
})


function result() {
    document.querySelector("#bubblesinput").innerHTML = `<div  class='result'>
        <div><h1>GAME-OVER</h1></div>
        <div>YOUR SCORE - ${scr}</div>
    </div>`


}

function start () {
    document.getElementById("startbtn").addEventListener('click',function (){
        bubbles();
        time();
        hitrn();
    })
}
start();
// bubbles();
