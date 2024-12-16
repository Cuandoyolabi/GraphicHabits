const ventana__configuracion__id = document.getElementById("ventana__configuracion__id");
const configuracionApariencia = document.getElementById("configuracionApariencia");
const configuracionContacto = document.getElementById("configuracionContacto");

export function mostrarPerfil(){

    ventana__configuracion__id.classList.toggle("visible");
    ventana__configuracion__id.classList.remove("hidden");

}

export function cerrarPerfil(){

    ventana__configuracion__id.classList.toggle("hidden");

}


export function mostrarConfiguracionHabitos(){


    console.log("Checando si sirve esta funcion");
    configuracionApariencia.classList.toggle("hidden");
    configuracionContacto.classList.toggle("hidden");

}

