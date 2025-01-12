const ventana__configuracion__id = document.getElementById("ventana__configuracion__id");
const ventana__apariencia__id = document.getElementById("ventana__configuracion__derecha__Apariencia__id");
const ventana__contacto__id = document.getElementById("ventana__configuracion__derecha__Contacto__id");
const ventana__habitos__id = document.getElementById("ventana__configuracion__derecha__Habitos__id");

export function mostrarPerfil(){

    ventana__configuracion__id.classList.toggle("visible");
    ventana__configuracion__id.classList.remove("hidden");

}

export function cerrarPerfil(){

    ventana__configuracion__id.classList.toggle("hidden");

}

export function mostrarConfiguracionApariencia(){

    ventana__apariencia__id.classList.add("visible");
    ventana__apariencia__id.classList.remove("hidden");
    ventana__habitos__id.classList.add("hidden");
    ventana__habitos__id.classList.remove("visible");
    ventana__contacto__id.classList.remove("visible");

}

export function mostrarConfiguracionHabitos(){

    ventana__apariencia__id.classList.add("hidden");
    ventana__apariencia__id.classList.remove("visible");
    ventana__habitos__id.classList.add("visible");
    ventana__contacto__id.classList.add("hidden");
    ventana__contacto__id.classList.remove("visible");

}

export function mostrarConfiguracionContacto(){

    ventana__apariencia__id.classList.add("hidden");
    ventana__apariencia__id.classList.remove("visible")

    ventana__contacto__id.classList.add("visible");
    ventana__habitos__id.classList.remove("visible");

}

export function mostrarConfiguracionInformacion(){

    

}
