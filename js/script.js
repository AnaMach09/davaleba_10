{
    
function antebachaqroba()
{
    let suratismisamarti = document.getElementById("light3").src;
console.log("suratismisamarti");
    if (suratismisamarti == "file:///Users/macbookpro/Desktop/davaleba_10/img/off.png") {

    document.getElementById("light3").src = "img/on.png";
    document.getElementById("anteba").innerHTML= "ჩაქრობა";

}
else{
    document.getElementById("light3").src = "img/off.png";
    document.getElementById("anteba").innerHTML= "ანთება";
}

}

}