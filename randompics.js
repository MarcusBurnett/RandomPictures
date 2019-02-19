
        
document.getElementById("button").addEventListener("click", function (){
    var query = document.getElementById("category").value;
    var imgNum = document.getElementById("imgNum").value;

    document.body.style.backgroundColor = "rgba(226, 226, 226, 0.664)";
    document.body.style.transition = "all 2s";

    while (row.firstChild) {
        row.removeChild(row.firstChild);
    }

    for(i = 0; i < imgNum; i++){
        let row = document.getElementById("row");
        let myElement = document.createElement("img");
        let randomNum =  Math.floor(Math.random() * 3) + 1;
        myElement.className = "picture";
        myElement.src = 'https://source.unsplash.com/random?sig=' + randomNum + '/&' + query;
        row.appendChild(myElement);
    }
});

