import { activateNightMode } from "./modoOscuro.js";
import { crearNuevoHabito, mostrarlModal, cerrarModal } from "./nuevoHabito.js";
import { cerrarPerfil, mostrarPerfil, mostrarConfiguracionHabitos } from "./ventanaConfiguracion.js";


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


const seccionHabitos = document.getElementById("configuracionHabitos");
seccionHabitos.addEventListener("click", () => {

    mostrarConfiguracionHabitos();

});


