/*document.addEventListener("DOMContentLoaded", function(){
	document.querySelector("#range").innerHTML = localStorage.getItem("range1");
    document.querySelector("#range2").innerHTML = localStorage.getItem("range2");
    document.querySelector("#range3").innerHTML = localStorage.getItem("range3");
})*/


document.addEventListener("DOMContentLoaded", function(){
    changeColor();
})

function changeColor(){
    let colorone = localStorage.getItem("range1");
    let colortwo = localStorage.getItem("range2")
    let colorthree = localStorage.getItem("range3")
    let colorfour = localStorage.getItem("range4");
    let colorfive = localStorage.getItem("range5")
    let colorsix = localStorage.getItem("range6")
    let colorseven = localStorage.getItem("range7")
    let coloreight = localStorage.getItem("range8")

    //let color = 'hsl(' + colorone + ', 100%, 60%)';
    let color = 'radial-gradient(circle, rgba(' + colorone + ', ' + colortwo + ', '+ colorthree +', 1) 0%, rgba('+ colorfour +', '+ colorfive +', '+ colorsix +', 1) 41%, rgba('+ colorseven +', '+ coloreight +', '+ colorone +', 1) 0%)';
    document.body.style.background = color;
    console.log(color);
}




