const animartexto = (texto) => {

    const numeroletras = texto.dataset.texto.length;
    //activamso el cursor
    const cursor = texto.querySelector('.hero__cursor')
    cursor.classList.add('hero__cursor--visible')

    for(let i = 0; i < numeroletras; i++){
        setTimeout(() => {
            const letra =document.createElement('span');
        letra.append(texto.dataset.texto[i]);
        texto.append(letra);

        },100 * i)

    setTimeout(() => {
        const cursores = [...texto.closest('.hero__header').querySelectorAll('.hero__cursor')]

        const indexcursoractual = cursores.indexOf(cursor);

        if(indexcursoractual < cursores.length - 1){
            cursor.classList.remove('hero__cursor--visible')
        }else{
            cursor.classList.add('hero__cursor--active')
        }

    },numeroletras * 100) 
    
    

    }
   
    //devolvemos una promesa que indica que la animacion acabo
    return new Promise((resolve) =>{
        setTimeout(resolve,numeroletras * 100)
    });
}

export default animartexto