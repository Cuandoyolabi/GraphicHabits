import { activateNightMode } from "./modoOscuro.js";
import { crearNuevoHabito, mostrarlModal, cerrarModal } from "./nuevoHabito.js";


//Modo oscuro
const toggleBlack = document.getElementById('color__icon');
console.log(toggleBlack);
toggleBlack.addEventListener('click', () => {
   
    activateNightMode();
    
});

//Ventana de creacion de habito.
const showModal = document.getElementById('graphic__container__plus__id');
showModal.addEventListener('click', mostrarlModal);

const closeModal = document.querySelector('.close');
closeModal.addEventListener('click', cerrarModal);


document.getElementById('habitForm').addEventListener('submit', crearNuevoHabito);


//Crear nuevo Habito




//Crear una ventana que aparezca cuando se selecciona goldenHabit



//Ventana del perfil
const abrir__ventana__perfil = document.getElementById('abrir__ventana__perfil');


abrir__ventana__perfil.addEventListener("click", () => {
    console.log("jajaja");
    const perfil__emergente__id = document.getElementById("perfil__emergente__id").style.display ="block";

    

    const cubierta__container__id = document.getElementById("cubierta__container__id").style.display ="block";
})

cubierta__container__id.addEventListener("click", ()=> {
    perfil__emergente__id.style.display ="none";
    cubierta__container__id.style.display = "none";
})

/*
function abrirPerfil(){
    
    cubierta__container__id.style.display = 'none';
    document.querySelector('.perfil__emergente').style.display = 'block';
    
}

function cerrarPerfil(){

    cubierta__container__id.style.display = 'none';
    document.querySelector('.perfil__emergente').style.display = 'none';
}
*/
/*
cubierta__container__id.addEventListener("click", () => {
    cerrarModal()
    document.querySelector('.perfil__emergente').style.display = 'none';
});



abrir__ventana__perfil.addEventListener("toggle", () => {

    console.log("Si esta funcionando");
    abrirPerfil()
    
});
*/









//Creando la ventana de color.
// Simple example, see optional options for more configuration.


//Como crear una base de datos y como conectarla.
//Ver videos acerca de position
//Ver videos acerca e z index




//Main seccion 2


//Footer

//Pruebas de conexion a MYSQL

