import { activateNightMode } from "./modoOscuro.js";
import { crearNuevoHabito, mostrarlModal, cerrarModal } from "./nuevoHabito.js";
import { cerrarPerfil, mostrarPerfil, mostrarConfiguracionHabitos, mostrarConfiguracionContacto, mostrarConfiguracionApariencia, mostrarConfiguracionInformacion } from "./ventanaConfiguracion.js";

const graphic__container__id = document.getElementById(
  "graphic__container__id"
);

//Modo oscuro
const toggleBlack = document.getElementById('color__icon');
toggleBlack.addEventListener('click', () => {
   
    activateNightMode();
    
});

//Ventana de creacion de habito.
const showModal = document.getElementById('graphic__container__plus__id');
showModal.addEventListener('click',  () => {

    const maximoDeElementos = 6;
    if (graphic__container__id.children.length >= maximoDeElementos) {
        alert("Has alcanzado el maximo de habitos (6)");
        return;
    }

    mostrarlModal();
    cerrarPerfil();

});

const closeModal = document.querySelector('.close');
closeModal.addEventListener('click', cerrarModal);

document.getElementById('habitForm').addEventListener('submit', crearNuevoHabito);

//Ventana del perfil
abrir__ventana__perfil.addEventListener("click", () => {
    
    mostrarPerfil();
    cerrarModal();

});


const seccionHabitos = document.getElementById("configuracionHabitos");
seccionHabitos.addEventListener("click", () => {

    mostrarConfiguracionHabitos();

});

const seccionApariencia = document.getElementById("configuracionApariencia");
seccionApariencia.addEventListener("click", () => {

    mostrarConfiguracionApariencia();

});

const seccionContacto = document.getElementById("configuracionContacto");
seccionContacto.addEventListener("click", () => {

    mostrarConfiguracionContacto();

});

const configuracionInformacion  = document.getElementById("configuracionInformacion");
configuracionInformacion.addEventListener("click", () => {

    mostrarConfiguracionInformacion();

});




