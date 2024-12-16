export const perfil__emergente__id = document.getElementById("perfil__emergente__id");

export function mostrarPerfil(){

    perfil__emergente__id.classList.toggle("visible");
    perfil__emergente__id.classList.remove("hidden");

}

export function cerrarPerfil(){

    perfil__emergente__id.classList.toggle("hidden");

}

