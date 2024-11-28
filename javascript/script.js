import { activateNightMode } from "./modoOscuro.js";
import { crearNuevoHabito } from "./nuevoHabito.js";

//Night mode
const toggleBlack = document.getElementById('color__icon');
console.log(toggleBlack);
toggleBlack.addEventListener('click', () => {
   
    activateNightMode();
    
});


//Crear una ventana que aparezca cuando se selecciona goldenHabit




//Ventana del perfil


function abrirPerfil(){
    
    cubierta__container__id.style.display = 'block';
    document.querySelector('.perfil__emergente').style.display = 'block';
    
}

function cerrarPerfil(){

    cubierta__container__id.style.display = 'none';
    document.querySelector('.perfil__emergente').style.display = 'none';
}

cubierta__container__id.addEventListener('click', cerrarPerfil);
cubierta__container__id.addEventListener('click', cerrarModal);
const abrir__ventana__perfil = document.getElementById('abrir__ventana__perfil').addEventListener('click', abrirPerfil);










//Creando la ventana de color.
// Simple example, see optional options for more configuration.


//Como crear una base de datos y como conectarla.
//Ver videos acerca de position
//Ver videos acerca e z index




//Main seccion 2


//Footer

//Pruebas de conexion a MYSQL

