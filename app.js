// Make the start button work

const $startButton = document.getElementById("start");
$startButton.onclick=()=>{
location.href="./movie.html"
}

var pokemonimg=document.getElementById("Superior");
pokemonimg.onclick=()=>{
    location.href="./shadow.html"
    }

    const setBg = () => {
      const randomColor = Math.floor(Math.random()*16777215).toString(16);
      document.body.style.backgroundColor = "#" + randomColor;
      color.innerHTML = "#" + randomColor;
    }
    
    genNew.addEventListener("click", setBg);
    setBg();

    function showDateTime() {
        var myDiv = document.getElementById("myDiv");
      
        var date = new Date();
        var dayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var monthNames = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ];
        var dayName = dayList[date.getDay()];
        var monthName = monthNames[date.getMonth()];
        var today = `${dayName}, ${monthName} ${date.getDate()}, ${date.getFullYear()}`;
      
        var hour = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
      
        var time = hour + ":" + min + ":" + sec;
        myDiv.innerText = `Today is  ${today}. Time is ${time}`;
      }
      setInterval(showDateTime, 1000);

      
      
        
        
