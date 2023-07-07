'use strict';

const galeria$1 = document.getElementById('trabajos');

const observer = new IntersectionObserver(
    (entries) =>{
        if(entries[0].isIntersecting){
            const trabajos = galeria$1.querySelectorAll('.trabajos__imagenes a');

            trabajos.forEach((trabajo, index) => {
                setTimeout(() =>{
                    trabajo.classList.add('trabajos__trabajo--visible');
                },200 * index);
                

            });
        }

},{
    rootmargin: '0px 0px 0px 0px',
    threshold: 0.5, 
});

observer.observe(galeria$1);

const galeria = document.getElementById('trabajos');
const ventana = document.getElementById('ventana-trabajos');

const datos = [
    {
        id:'1',
        title:'el numnero 1',
        texto: 'gfajskbfgvsjkabhg jdfhaskjb bdfkjasf dfjhasjghf dbasjkgfil bfdjahfil bfjasbfih',
        fecha: ' 1 febrero 2024',
    },
    {
        id:'2',
        title:'el numnero 2',
        texto: 'gfajskbfgvsjkabhg jdfhaskjb bdfkjasf dfjhasjghf dbasjkgfil bfdjahfil bfjasbfih',
        fecha: ' 2 febrero 2024',

    },
    {
        id:'3',
        title:'el numnero 3',
        texto: 'gfajskbfgvsjkabhg jdfhaskjb bdfkjasf dfjhasjghf dbasjkgfil bfdjahfil bfjasbfih',
        fecha: ' 3 febrero 2024',
    },
    {
        id:'4',
        title:'el numnero 4',
        texto: 'gfajskbfgvsjkabhg jdfhaskjb bdfkjasf dfjhasjghf dbasjkgfil bfdjahfil bfjasbfih',
        fecha: ' 4 febrero 2024',
    },
    {
        id:'5',
        title:'el numnero 5',
        texto: 'gfajskbfgvsjkabhg jdfhaskjb bdfkjasf dfjhasjghf dbasjkgfil bfdjahfil bfjasbfih',
        fecha: ' 5 febrero 2024',
    },
    {
        id:'6',
        title:'el numnero 6',
        texto: 'gfajskbfgvsjkabhg jdfhaskjb bdfkjasf dfjhasjghf dbasjkgfil bfdjahfil bfjasbfih',
        fecha: ' 6 febrero 2024',
    },
];

galeria.addEventListener('click', (e) => {
    e.preventDefault();
    
    const clikeado = e.target.closest('.trabajos__trabajo');

    if(clikeado){

        const id = clikeado.dataset.id;

        const trabajo = datos.filter((trabajo) => {
            if(trabajo.id === id){
                return trabajo

            }
        });
        trabajo[0];
        ventana.querySelector('.ventana__titulo').innerHTML = trabajo[0].title;
        ventana.querySelector('.ventana__fecha').innerHTML = trabajo[0].fecha;
        ventana.querySelector('.ventana__parrafo').innerHTML = trabajo[0].parrafo;
        ventana.querySelector('.ventana__imagen').src = clikeado.querySelector('img').src;
        

        ventana.classList.add('ventana--active');
    }

});

ventana.querySelector('button[data-action="cerrar-ventana"]').addEventListener('click', (e) => {
	e.preventDefault();
	ventana.classList.remove('ventana--active');
});

ventana.querySelector('.ventana__overlay').addEventListener('click',(e) =>{
    e.preventDefault();

    if(e.target.matches('.ventana__overlay')=== true){
        ventana.classList.remove('ventana--active');
    }
    



});

const animartexto = (texto) => {

    const numeroletras = texto.dataset.texto.length;
    //activamso el cursor
    const cursor = texto.querySelector('.hero__cursor');
    cursor.classList.add('hero__cursor--visible');

    for(let i = 0; i < numeroletras; i++){
        setTimeout(() => {
            const letra =document.createElement('span');
        letra.append(texto.dataset.texto[i]);
        texto.append(letra);

        },100 * i);

    setTimeout(() => {
        const cursores = [...texto.closest('.hero__header').querySelectorAll('.hero__cursor')];

        const indexcursoractual = cursores.indexOf(cursor);

        if(indexcursoractual < cursores.length - 1){
            cursor.classList.remove('hero__cursor--visible');
        }else {
            cursor.classList.add('hero__cursor--active');
        }

    },numeroletras * 100); 
    
    

    }
   
    //devolvemos una promesa que indica que la animacion acabo
    return new Promise((resolve) =>{
        setTimeout(resolve,numeroletras * 100);
    });
};

window.addEventListener('load', async() =>{

    await animartexto(document.querySelector('.hero__titulo--uno'));
    await animartexto(document.querySelector('.hero__titulo--dos'));
    
    document.querySelectorAll('.hero__burbuja')[0].classList.add('hero__burbuja--active-1');
    document.querySelectorAll('.hero__burbuja')[1].classList.add('hero__burbuja--active-2');

});
//# sourceMappingURL=bundle.js.map
