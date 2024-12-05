const cubierta__container__id = document.getElementById("cubierta__container__id");
const perfil__emergente__id = document.getElementById("perfil__emergente__id");

export function mostrarPerfil(){

    perfil__emergente__id.style.display = 'block';
    cubierta__container__id.style.display = 'block';

}

export function ocultarPerfil(){

    perfil__emergente__id.style.display = 'none';
    cubierta__container__id.style.display = 'none';

}

export function toggleProfile(){
    perfil__emergente__id.classList.toggle("visible");
    perfil__emergente__id.classList.toggle("hidden");
}