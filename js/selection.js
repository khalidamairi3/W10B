var selction = document.getElementById("container");
if(Cookies.get('color')){
    selction.style.backgroundColor=Cookies.get('color');
    selction.innerHTML = "<h1> the color you choose is : " + Cookies.get('color') + "</h1>";

}
else{
    selction.style.backgroundColor="black";
    selction.innerHTML = "<h1> no color is selected </h1>";

}

function reset(){
    Cookies.remove('color');
}