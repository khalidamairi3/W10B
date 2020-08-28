function setCookie( color ){
    Cookies.set('color', color);
    var color_text = document.getElementById("chosen-color");
    color_text.innerHTML = "the color you choose is :"+color;

}


