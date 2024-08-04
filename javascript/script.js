

//Header y Nav 
const toggleBlack = document.querySelector('#color__icon');
const division__container = document.querySelector('.division__container');
const header__container = document.querySelector('.header__container');
const footer__container = document.querySelector('.footer__container');
const graphic__container__id = document.querySelector('#graphic__container__id');
const habits__container = document.querySelector('.habits__container');
const ventana__nueva = document.querySelectorAll('.ventana__nueva');
const habits__info = document.querySelector('.habits__info');
const habits__info__container = document.querySelector('.habits__info__container');
const habits__info__container__num2 = document.querySelector('.habits__info__container__num2');
const habitForm = document.querySelector('.habitForm');
const graphic__container__plus = document.querySelector('.graphic__container__plus');
const night__section = document.querySelector('.night__section');
const profile__section = document.querySelector('.profile__section');


toggleBlack.addEventListener('click', () => {

    console.log(habits__info)
    ventana__nueva.forEach(element => {
        element.classList.toggle('active');
    })
    
    profile__section.classList.toggle('active');
    night__section.classList.toggle('active');
    graphic__container__plus.classList.toggle('active');
    habitForm.classList.toggle('active');
    habits__info.classList.toggle('active');
    habits__info__container.classList.toggle('active');
    habits__info__container__num2.classList.toggle('active');
    header__container.classList.toggle('active');
    toggleBlack.classList.toggle('active');
    division__container.classList.toggle('active');
    graphic__container__id.classList.toggle('active');
    habits__container.classList.toggle('active');
    footer__container.classList.toggle('active');
    
});
   
    
       


//  -----------Main seccion 1---------- 
function crearNuevoHabito(event){

    event.preventDefault(); //Evitar el formulario por defecto

    const maximoDeElementos = 5;
    const graphic__container__id = document.getElementById('graphic__container__id');
    const graphic__container__plus__id = document.getElementById('graphic__container__plus__id');
    const form = document.getElementById('habitForm');

    //Verifica que solo sean 5 elementos
    if(graphic__container__id.children.length >= maximoDeElementos){
        return;
    }

    //Informacion que reqiere la ventana emergente
    let color = document.getElementById('habitColor').value;

    
    //Crear el nuevo habito con la informacion
    let nuevoHabito = document.createElement('div');
    nuevoHabito.className = 'nuevo__habito';
    nuevoHabito.style.backgroundColor = color;
    nuevoHabito.style.width = '50px';
    nuevoHabito.style.height = '20px';
    nuevoHabito.style.display = 'flex';
    nuevoHabito.style.alignItems = 'center';
    nuevoHabito.style.justifyContent = 'center';

    //Añadimos el div al contenedor
    graphic__container__id.appendChild(nuevoHabito);

    //Cerramos la ventana emergente
    cerrarModal();

    crearVentanaDeHabito();
    
    //Limpiar el formulario
    form.reset();
};


function mostrarlModal(){
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
}

function cerrarModal(){
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}








document.getElementById('graphic__container__plus__id').addEventListener('click', mostrarlModal);
document.querySelector('.close').addEventListener('click', cerrarModal);
document.getElementById('habitForm').addEventListener('submit', crearNuevoHabito);



//Creando la ventana de color.
// Simple example, see optional options for more configuration.


//Como crear una base de datos y como conectarla.
//Ver videos acerca de position
//Ver videos acerca e z index




//Main seccion 2


//Footer

//Pruebas de conexion a MYSQL

