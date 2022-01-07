const fortuneText = ["strong brave and powerfull", "can hold magic", "master of the storms", "physcic power", "the soul wich can not be defeted", "no fortune in your hands"];
const cookie = document.getElementById("cookie");
const text = document.getElementById("text");

cookie.onclick = () => {
    let i = Math.floor(Math.random() * fortuneText.length);
    text.innerHTML = fortuneText[i];
}


