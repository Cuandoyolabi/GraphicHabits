
export function activateNightMode(){

    const division__container = document.querySelector('.division__container');
    const header__container = document.querySelector('.header__container');
    const graphic__container__id = document.querySelector('#graphic__container__id');
    const habits__container = document.querySelector('.habits__container');
    const habitForm = document.querySelector('.habitForm');
    const graphic__container__plus = document.querySelector('.graphic__container__plus');
    const night__section = document.querySelector('.night__section');
    const profile__section = document.querySelector('.profile__section');
    const golden__habit__id = document.querySelector('.golden__habit');

    //Contenedor de habitos
    const habitoAgregado = document.querySelectorAll(".nuevo__habitoAgregado");
    const buttonCompletar = document.querySelectorAll("buttonCompletar");


    //Perfil
    const perfil__emergente__id = document.getElementById("perfil__emergente__id");
    const perfil__emergente__opciones = document.querySelector('.perfil__emergente__opciones');
    const perfil__emergente__cuenta = document.querySelector('.perfil__emergente__cuenta');
    const perfil__emergente__opcion = document.querySelectorAll('.perfil__emergente__opcion');
    const cubierta__container__id = document.querySelector('#cubierta__container__id');

    cubierta__container__id.classList.toggle('active');
    profile__section.classList.toggle('active');
    night__section.classList.toggle('active');
    graphic__container__plus.classList.toggle('active');
    habitForm.classList.toggle('active');
    header__container.classList.toggle('active');
    division__container.classList.toggle('active');
    graphic__container__id.classList.toggle('active');
    habits__container.classList.toggle('active');
    golden__habit__id.classList.toggle('active');

    //Contenedor de habitos
    habitoAgregado.forEach(function(elemento){
        elemento.classList.toggle('active');
    })

    //Perfil
    perfil__emergente__id.classList.toggle("active");
    perfil__emergente__cuenta.classList.toggle('active');
    perfil__emergente__opciones.classList.toggle('active');
    perfil__emergente__opcion.forEach(function(elemento){
        elemento.classList.toggle('active');
        
    });    
};



