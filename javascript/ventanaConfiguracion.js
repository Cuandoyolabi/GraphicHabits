"use strict"

//Ventanas del lado derechos
const ventana__configuracion__id = document.getElementById("ventana__configuracion__id");
const ventana__apariencia__id = document.getElementById("ventana__configuracion__derecha__Apariencia__id");
const ventana__contacto__id = document.getElementById("ventana__configuracion__derecha__Contacto__id");
const ventana__habitos__id = document.getElementById("ventana__configuracion__derecha__Habitos__id");
const ventana__informacion__id = document.getElementById("ventana__configuracion__derecha__Informacion__id");

//Opciones del lado izquierdo
const configuracionApariencia = document.getElementById("configuracionApariencia");
const configuracionHabitos = document.getElementById("configuracionHabitos");
const configuracionInformacion = document.getElementById("configuracionInformacion");
const configuracionContacto = document.getElementById("configuracionContacto");

export function mostrarPerfil(){

    ventana__configuracion__id.classList.toggle("visible");
    ventana__configuracion__id.classList.remove("hidden");

}

export function cerrarPerfil(){

    ventana__configuracion__id.classList.toggle("hidden");

}

export function mostrarConfiguracionApariencia(){
    
    configuracionApariencia.classList.add("selected");
    configuracionHabitos.classList.remove("selected");
    configuracionInformacion.classList.remove("selected");
    configuracionContacto.classList.remove("selected");

    //Cambio de ventana
    ventana__apariencia__id.classList.add("visible");
    ventana__apariencia__id.classList.remove("hidden");
    ventana__habitos__id.classList.add("hidden");
    ventana__habitos__id.classList.remove("visible");
    ventana__contacto__id.classList.remove("visible");
    ventana__informacion__id.classList.remove("visible");
}

export function mostrarConfiguracionHabitos(){

    configuracionApariencia.classList.remove("selected");
    configuracionHabitos.classList.add("selected");
    configuracionInformacion.classList.remove("selected");
    configuracionContacto.classList.remove("selected");

    //Cambio de ventana
    ventana__apariencia__id.classList.add("hidden");
    ventana__apariencia__id.classList.remove("visible");
    ventana__habitos__id.classList.add("visible");
    ventana__contacto__id.classList.add("hidden");
    ventana__contacto__id.classList.remove("visible");
    ventana__informacion__id.classList.remove("visible");
}

export function mostrarConfiguracionContacto(){

    configuracionApariencia.classList.remove("selected");
    configuracionHabitos.classList.remove("selected");
    configuracionInformacion.classList.remove("selected");
    configuracionContacto.classList.add("selected");

    //Cambio de ventana
    ventana__apariencia__id.classList.add("hidden");
    ventana__apariencia__id.classList.remove("visible")
    ventana__contacto__id.classList.add("visible");
    ventana__habitos__id.classList.remove("visible");
    ventana__informacion__id.classList.remove("visible");

}

export function mostrarConfiguracionInformacion(){

    configuracionApariencia.classList.remove("selected");
    configuracionHabitos.classList.remove("selected");
    configuracionInformacion.classList.add("selected");
    configuracionContacto.classList.remove("selected");

    //Cambio de ventana
    ventana__informacion__id.classList.add("visible");
    ventana__apariencia__id.classList.remove("visible");
    ventana__apariencia__id.classList.add("hidden");
    ventana__contacto__id.classList.remove("visible");
    ventana__habitos__id.classList.remove("visible");

}
