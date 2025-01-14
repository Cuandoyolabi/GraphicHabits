export function activateNightMode(){

    //Estas variables verifican y activan el modo oscuro del body
    const body = document.body; 
    body.classList.toggle('dark-mode');
    const isDarkModeActive = body.classList.contains('dark-mode');


    //Header
    const brand__container = document.querySelector(".brand__container");

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
    const configuracionHabitos = document.querySelector('.ventana__configuracion__derecha__Habitos');
    const configuracionContacto = document.querySelector('.ventana__configuracion__derecha__Contacto');
    const ventana__apariencia__texto = document.querySelector(".ventana__apariencia__texto");

    const opciones__configuracion__apariencia = document.querySelector('.opciones__configuracion__apariencia');
    const opciones__configuracion__habitos = document.querySelector('.opciones__configuracion__habitos');
    const opciones__configuracion__contactar = document.querySelector('.opciones__configuracion__contactar');
    const opciones__configuracion__informacion = document.querySelector('.opciones__configuracion__informacion');
    
    const ventana__configuracion__derecha__Informacion = document.querySelector(".ventana__configuracion__derecha__Informacion"); 
    const ventana__habitos__titulo = document.querySelector(".ventana__habitos__titulo");
    const nuevo__habitoConfiguracion = document.querySelectorAll(".nuevo__habitoConfiguracion");
    const habito__editar = document.querySelectorAll(".habito__editar");
    const habito__eliminar = document.querySelectorAll(".habito__eliminar");

    const opciones__configuracion__texto = document.querySelectorAll('.opciones__configuracion__texto');
    const icon__configuracion = document.querySelectorAll('.icon__configuracion');

    //Contenedor de habitos
    const habitoAgregado = document.querySelectorAll(".nuevo__habitoAgregado");
    const buttonCompletar = document.querySelectorAll(".buttonCompletar");
    
    // Cubierta
    const cubierta__container__id = document.querySelector('#cubierta__container__id');

    //Modal
    const buttonGuardar = document.querySelector(".guardar__habito");
    const habitName = document.querySelector(".habitName");

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

    //Header
    brand__container.classList.toggle("active");

    // Ventana de configuracion
    configuracion__Izquierda.classList.toggle('active');
    configuracionApariencia.classList.toggle('active');
    configuracionHabitos.classList.toggle('active');
    configuracionContacto.classList.toggle('active');
    ventana__apariencia__texto.classList.toggle("active");
    ventana__habitos__titulo.classList.toggle("active");
    ventana__configuracion__derecha__Informacion.classList.toggle('active');
    
    opciones__configuracion__apariencia.classList.toggle('active');
    opciones__configuracion__contactar.classList.toggle('active');
    opciones__configuracion__habitos.classList.toggle('active');
    opciones__configuracion__informacion.classList.toggle('active');

    habito__editar.forEach(function(elemento){
        elemento.classList.toggle("active");
    });

    habito__eliminar.forEach(function(elemento){
        elemento.classList.toggle("active");
    });

    nuevo__habitoConfiguracion.forEach(function(elemento){
        elemento.classList.toggle("active");
    });

    opciones__configuracion__texto.forEach(function(elemento){
        elemento.classList.toggle("active");
    });

    icon__configuracion.forEach(function(elemento){
        elemento.classList.toggle("active");
    });

    //Modal
    buttonGuardar.classList.toggle('active');
    habitName.classList.toggle('active');

    //Contenedor de habitos
    habitoAgregado.forEach(function(elemento){
        elemento.classList.toggle('active');
    });
    
    buttonCompletar.forEach(function(elemento){
        elemento.classList.toggle('active');
    });

    if(isDarkModeActive){
        localStorage.setItem("modoOscuro", "true");
    } else {
        localStorage.setItem("modoOscuro", "false");
    }
    

    //Retornar la variable que indica que esta en modo oscuro la pagina
    return isDarkModeActive;

};

export function isDarkMode(){

    return localStorage.getItem("modoOscuro") === "true";
    
}

