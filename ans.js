// Make the start button work

const $startButton = document.getElementById("start");
$startButton.onclick=()=>{
location.href="ans.html"
}

const button = document.getElementById("button");
const value = document.getElementById("value");
var num=0;
button.onclick=()=>{
  value.innerHTML=num;
  num++;
  if(num==12){
    alert("This is the maximum marks you can get");
    num=0
  }
}

"use strict";

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

document.form_main.start.onclick = () => start();
document.form_main.pause.onclick = () => pause();
document.form_main.reset.onclick = () => reset();

function start() {
    pause();
    cron = setInterval(() => { timer(); }, 10);
  }
  
  function pause() {
    clearInterval(cron);
  }
  
  function reset() {
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    document.getElementById('hour').innerText = '00';
    document.getElementById('minute').innerText = '00';
    document.getElementById('second').innerText = '00';
    document.getElementById('millisecond').innerText = '000';
  }

  
  function timer() {
    if ((millisecond += 10) == 1000) {
      millisecond = 0;
      second++;
    }
    if (second == 60) {
      second = 0;
      minute++;
    }
    if (minute == 60) {
      minute = 0;
      hour++;
    }
    document.getElementById('hour').innerText = returnData(hour);
    document.getElementById('minute').innerText = returnData(minute);
    document.getElementById('second').innerText = returnData(second);
    document.getElementById('millisecond').innerText = returnData(millisecond);
  }
  
  function returnData(input) {
    return input > 10 ? input : `0${input}`
  }

  
  $(function() {
    var btn = $(".btn");
    
    btn.on("click", function() {
      
      $(this).addClass('btn-progress');
      setTimeout(function() {
        btn.addClass('btn-fill')
      }, 500);
      
      setTimeout(function() {
        btn.removeClass('btn-fill')
      }, 4100);
      
      setTimeout(function() {
        btn.addClass('btn-complete')
      }, 4100);
    
    });
  })


