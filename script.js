function handleYes() {
    const responseElem = document.getElementById("response");
    responseElem.style.display = "block";
    
    document.body.style.backgroundColor = "#ff3838";
    document.getElementById("response").innerHTML = "Yay! I knew you'd say yes! 🎉I love you! 💖";
    document.getElementById("response").style.fontSize = "2em";
    document.getElementById("response").style.color = "#ff9999";
}

function handleNo() {
    const responseElem = document.getElementById("response");
    responseElem.style.display = "block";
    
    document.body.style.backgroundColor = "#cccccc";
    document.getElementById("response").innerHTML = "No? Are you sure? 😢 You're missing out! 😘";
    document.getElementById("response").style.fontSize = "2em";
    document.getElementById("response").style.color = "#999999";
}