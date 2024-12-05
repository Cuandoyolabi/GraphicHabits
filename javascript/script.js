import { activateNightMode } from "./modoOscuro.js";
import { crearNuevoHabito, mostrarlModal, cerrarModal } from "./nuevoHabito.js";
import { mostrarPerfil } from "./ventanaPerfil.js";


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
const abrir__ventana__perfil = document.getElementById("abrir__ventana__perfil");
const perfil__emergente__id = document.getElementById("perfil__emergente__id");

abrir__ventana__perfil.addEventListener("click", () => {
    
    mostrarPerfil();

});




