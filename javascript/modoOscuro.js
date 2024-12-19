
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

    // Ventana de Configuracion
    const configuracion__Izquierda = document.querySelector(".ventana__configuracion__izquierda");
    const configuracionApariencia = document.querySelector('.ventana__configuracion__derecha__Apariencia');
    const configuracionHabitos = document.querySelector('.ventana__configuracion__derecha__Apariencia');
    const configuracionContacto = document.querySelector('.ventana__configuracion__derecha__Contacto');
    
    //Contenedor de habitos
    const habitoAgregado = document.querySelectorAll(".nuevo__habitoAgregado");
    const buttonCompletar = document.querySelectorAll(".buttonCompletar");
    
    // Cubierta
    const cubierta__container__id = document.querySelector('#cubierta__container__id');

    //Modal
    const buttonGuardar = document.querySelector(".guardar__habito");

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

    // Ventana de configuracion
    configuracion__Izquierda.classList.toggle('active');
    configuracionApariencia.classList.toggle('active');
    configuracionHabitos.classList.toggle('active');
    configuracionContacto.classList.toggle('active');

    //Modal
    buttonGuardar.classList.toggle('active');

    //Contenedor de habitos
    habitoAgregado.forEach(function(elemento){
        elemento.classList.toggle('active');
    });
    
    buttonCompletar.forEach(function(elemento){
        elemento.classList.toggle('active');
    });

};



