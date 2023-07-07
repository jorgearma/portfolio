const slider = document.getElementById('slider');

let clickpresionado = false;
let cordenadainicial;
let scrolllef;

const presiona = (e) => { 

    cordenadainicial = e.pageX - slider.offsetLeft;
    scrolllef = slider.scrollLeft;

    //console.log('pageX: ', e.pageX)
    //console.log('slider.offsetleft: ', slider.offsetLeft);
    //console.log(' scrollLeft', slider.scrollLeft);
    clickpresionado = true
}
const mueve = (e) => {
    if(!clickpresionado){
        return
    }
    const espaciado = e.pageX - slider.offsetLeft;
    const distacia = espaciado - cordenadainicial;

    slider.scrollLeft = scrolllef  - distacia;
}
const suelta = (e) => {
    console.log('suelta');
    clickpresionado = false;
}

slider.addEventListener('mousedown', presiona)
slider.addEventListener('mousemove' , mueve)
slider.addEventListener('mouseup', suelta)