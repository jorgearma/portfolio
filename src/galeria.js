const galeria = document.getElementById('trabajos');
const ventana = document.getElementById('ventana-trabajos')

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
]

galeria.addEventListener('click', (e) => {
    e.preventDefault();
    
    const clikeado = e.target.closest('.trabajos__trabajo')

    if(clikeado){

        const id = clikeado.dataset.id;

        const trabajo = datos.filter((trabajo) => {
            if(trabajo.id === id){
                return trabajo

            }
        })
        const {title , fecha, texto} = trabajo[0]
        ventana.querySelector('.ventana__titulo').innerHTML = trabajo[0].title;
        ventana.querySelector('.ventana__fecha').innerHTML = trabajo[0].fecha;
        ventana.querySelector('.ventana__parrafo').innerHTML = trabajo[0].parrafo;
        ventana.querySelector('.ventana__imagen').src = clikeado.querySelector('img').src;
        

        ventana.classList.add('ventana--active')
    }

})

ventana.querySelector('button[data-action="cerrar-ventana"]').addEventListener('click', (e) => {
	e.preventDefault();
	ventana.classList.remove('ventana--active');
});

ventana.querySelector('.ventana__overlay').addEventListener('click',(e) =>{
    e.preventDefault();

    if(e.target.matches('.ventana__overlay')=== true){
        ventana.classList.remove('ventana--active');
    }
    



})