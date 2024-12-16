export const perfil__emergente__id = document.getElementById("perfil__emergente__id");

export function mostrarPerfil(){

    ventana__configuracion__id.classList.toggle("visible");
    ventana__configuracion__id.classList.remove("hidden");

}

export function cerrarPerfil(){

    ventana__configuracion__id.classList.toggle("hidden");
    //perfil__emergente__id.classList.toggle("hidden");

}

