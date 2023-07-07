const abrircorreo = document.querySelectorAll('[data-action="abrir-ventana-correo"]');
const ventanacorreo = document.getElementById('ventana-correo')

const elementos = Array.from(abrircorreo)

elementos.forEach((elemento) => {
    elemento.addEventListener('click',(e) =>{
        e.preventDefault();
        
        ventanacorreo.classList.add('ventana--active')
    })
})

ventanacorreo.querySelector('.ventana__icono-cerrar').addEventListener('click',(e) => {
        ventanacorreo.classList.remove('ventana--active')
})

ventanacorreo.querySelector('.ventana__overlay').addEventListener('click',(e) =>{
    e.preventDefault();

    if(e.target.matches('.ventana__overlay')=== true){
        ventanacorreo.classList.remove('ventana--active');
    }
        
})