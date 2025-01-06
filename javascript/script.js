import { activateNightMode } from "./modoOscuro.js";
import { cerrarPerfil, mostrarPerfil, mostrarConfiguracionHabitos, mostrarConfiguracionContacto, mostrarConfiguracionApariencia } from "./ventanaConfiguracion.js";
import { crearNuevoHabito, crearhabitoHTML, cerrarModal, mostrarlModal } from "./nuevoHabito.js";


//Modo oscuro
const toggleBlack = document.getElementById('color__icon');
toggleBlack.addEventListener('click', () => {
   
    activateNightMode();
    
});

//Ventana de creacion de habito.
const showModal = document.getElementById('graphic__container__plus__id');
showModal.addEventListener('click',  () => {

    mostrarlModal();
    cerrarPerfil();

});

const closeModal = document.querySelector('.close');
closeModal.addEventListener('click', cerrarModal);
document.getElementById('habitForm').addEventListener('submit', crearNuevoHabito);


//Crear nuevo Habito

//Crear una ventana que aparezca cuando se selecciona goldenHabit

//Ventana del perfil
abrir__ventana__perfil.addEventListener("click", () => {
    
    mostrarPerfil();
    cerrarModal();

});

//Seccion de Habitos Configuracion
const seccionHabitos = document.getElementById("configuracionHabitos");
seccionHabitos.addEventListener("click", () => {

    mostrarConfiguracionHabitos();

});

//Seccion de apariencia Configuracion 
const seccionApariencia = document.getElementById("configuracionApariencia");
seccionApariencia.addEventListener("click", () => {

    mostrarConfiguracionApariencia();

});

//Seccion de contacto Configuracion
const seccionContacto = document.getElementById("configuracionContacto");
seccionContacto.addEventListener("click", () => {

    mostrarConfiguracionContacto();

});


