import './animargaleria'
import './galeria'
import animartexto from "./animartexto";


window.addEventListener('load', async() =>{

    await animartexto(document.querySelector('.hero__titulo--uno'));
    await animartexto(document.querySelector('.hero__titulo--dos'));
    
    const burbujas = document.querySelectorAll('.hero__burbuja')[0].classList.add('hero__burbuja--active-1')
    const burbujas2 = document.querySelectorAll('.hero__burbuja')[1].classList.add('hero__burbuja--active-2')

})