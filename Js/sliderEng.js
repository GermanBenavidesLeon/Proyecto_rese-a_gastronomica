let sliderEng = document.querySelector(".slider_container__eng")
let sliderPaginaEng = document.querySelectorAll(".contenido_slider__eng")
let count = 1;
let widthEng = sliderPaginaEng[0].clientWidth;
let interval = 3000;

window.addEventListener("resize", function(){
    widthEng = sliderPaginaEng[0].clientWidth;
})

setInterval(function(){
    slidesEng();
},interval);


function slidesEng () {
    sliderEng.style.transform = "translate("+(-widthEng*count)+"px)";
    sliderEng.style.transition = "transform .8s";
    count ++;

    if(count == sliderPaginaEng.length){
        setTimeout(function() {
            sliderEng.style.transform = "translate(0px)";
            sliderEng.style.transition = "transform 0s";
            count=1;
        }, 1500)
    }
}


