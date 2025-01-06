"use strict";

// Funcion sobre eleccion del color
let colorSeleccionado = "";

export function inicializadorSelectorDeColor(){

    const opcionesDeColor = document.querySelectorAll(".color__opcion");
    opcionesDeColor.forEach((opcion) => {
        opcion.addEventListener("click", () => {
            
            colorSeleccionado = opcion.style.backgroundColor;

            opcionesDeColor.forEach((opcion) => opcion.classList.remove("seleccionado"));
            opcion.classList.add("seleccionado");
        });
    });
} 

// Funcion de creacion de habito
export function crearNuevoHabito(event){
    
    //Evitar el formulario por defecto
    event.preventDefault(); 

    //Ids de la seccion de configuracion
    const ventana__habitos__lista = document.getElementById("ventana__habitos__lista__id");
    const habits__container__list__id = document.getElementById("habits__container__list__id");
    const graphic__container__id = document.getElementById('graphic__container__id');
    const habitName = document.getElementById("habitName");
    const form = document.getElementById('habitForm');

    //Verifica limite de elementos
    const maximoDeElementos = 6;
    if(graphic__container__id.children.length >= maximoDeElementos){
        return;
    }
  
    // Verificacion de que el usuario selecciono un color
    const color = colorSeleccionado;
    if(!color){
        alert("Por favor, selecciona un color");
        return;
    }

    //Crear el nuevo habito
    const habitData = {
        name: habitName.value,
        color: colorSeleccionado,
        days: 10,
    };

    //Crear los elementos del habito
    const habitHTML = crearhabitoHTML(habitData);


    //Guardamos los habitos en localStorage
    guardarHabitos();

    //Resetear formulario y modal
    form.reset();
    cerrarModal();
};

//Habito - Grafica
export function crearHabitoGrafica({color}){

    let nuevoHabito = document.createElement('div');
    nuevoHabito.className = 'nuevo__habito';
    nuevoHabito.style.backgroundColor = color;
    graphic__container__id.appendChild(nuevoHabito);

}

//Habito selecionable
export function crearhabitoHTML({name, color, days}){

     //Agregar el habito al contenedor de habitos
    //nuevo__habito__recuadro.innerHTML = habitName.value;
    let nuevo__habito__recuadro = document.createElement("div");
    let nuevo__recuadro__Arriba = document.createElement("div");
    let nuevo__recuadro__Abajo = document.createElement("div");
    let recuadroArriba__Conjunto = document.createElement("div");

    let recuadroArriba__Dias = document.createElement("h2");
    let recuadroArriba__numero = document.createElement("h2");
    let recuadroAbajo__texto = document.createElement("h2");
    let buttonCompletar = document.createElement("button");

    //Informacion
    recuadroAbajo__texto.innerText = habitName.value;
    recuadroArriba__numero.textContent = 10;
    recuadroArriba__Dias.textContent = "Dias";
    buttonCompletar.innerHTML = '<i class="fa-solid fa-check"></i>'; 

    //Estilos
    nuevo__habito__recuadro.className = "nuevo__habitoAgregado";
    nuevo__recuadro__Arriba.className = "nuevo__recuadro__Arriba";
    recuadroArriba__numero.className = "recuadroArriba__numero";
    recuadroArriba__Dias.className = "recuadroArriba__dias";
    recuadroArriba__Conjunto.className = "recuadroArriba__Conjunto";
    nuevo__recuadro__Abajo.className = "nuevo__recuadro__Abajo";
    recuadroAbajo__texto.className = "recuadroAbajo__texto";
    buttonCompletar.className ="buttonCompletar";

    //Estructura
    nuevo__habito__recuadro.appendChild(nuevo__recuadro__Arriba);
    nuevo__habito__recuadro.appendChild(nuevo__recuadro__Abajo);
    nuevo__recuadro__Arriba.appendChild(recuadroArriba__Conjunto);

    recuadroArriba__Conjunto.appendChild(recuadroArriba__numero);
    recuadroArriba__Conjunto.appendChild(recuadroArriba__Dias);
    nuevo__recuadro__Arriba.appendChild(buttonCompletar);
    nuevo__recuadro__Abajo.appendChild(recuadroAbajo__texto);
    habits__container__list__id.appendChild(nuevo__habito__recuadro);      

}
//Habito configuracion
export function crearHabitoConfiguracion({name, color, days}){

    //Agregar el habito a la configuracion de habitos
    let nuevo__habito__configuracion = document.createElement("div");
    let habito__nombre = document.createElement("h2");
    let habito__separacion = document.createElement("div");
    let habito__editar = document.createElement("button");
    let habito__eliminar = document.createElement("button");

    habito__editar.textContent = "Editar";
    habito__eliminar.textContent = "Eliminar";
    habito__nombre.textContent = habitName.value;

    habito__eliminar.id = "habito__eliminar__id";
    habito__editar.id = "habito__editar__id";

    habito__editar.className = "habito__editar";
    habito__eliminar.className = "habito__eliminar";
    habito__nombre.className = "habito__nombre";
    nuevo__habito__configuracion.className = "nuevo__habitoConfiguracion";
    habito__separacion.className = "habito__separacion";

    habito__separacion.appendChild(habito__editar);
    habito__separacion.appendChild(habito__eliminar);
    nuevo__habito__configuracion.appendChild(habito__nombre);
    nuevo__habito__configuracion.appendChild(habito__separacion);
    ventana__habitos__lista.appendChild(nuevo__habito__configuracion);     

}

// Funcion para cargar habitos desde localStorage a la grafica y al contenedor
export function cargarHabitos(){
    
    const habits__container__list__id = document.getElementById("habits__container__list__id");
    const graphic__container__id = document.getElementById("graphic__container__id");
    const habitosGuardados = JSON.parse(localStorage.getItem("habitos")) || [];

    habitosGuardados.forEach((habit) => {
        //Recrea el habito con su estructura y estilos para el contenedor de habitos
        //nuevo__habito__recuadro.innerHTML = habitName.value;
        let nuevo__habito__recuadro = document.createElement("div"); 
        let nuevo__recuadro__Arriba = document.createElement("div");
        let nuevo__recuadro__Abajo = document.createElement("div");
        let recuadroArriba__Conjunto = document.createElement("div");

        let recuadroArriba__Dias = document.createElement("h2");
        let recuadroArriba__numero = document.createElement("h2");
        let recuadroAbajo__texto = document.createElement("h2");
        let buttonCompletar = document.createElement("button");

        //Informacion
        recuadroAbajo__texto.innerText = habit.text;
        recuadroArriba__numero.textContent = 10;
        recuadroArriba__Dias.textContent = "Dias";
        buttonCompletar.innerHTML = '<i class="fa-solid fa-check"></i>'; 

        //Estilos
        nuevo__habito__recuadro.className = "nuevo__habitoAgregado";
        nuevo__recuadro__Arriba.className = "nuevo__recuadro__Arriba";
        recuadroArriba__numero.className = "recuadroArriba__numero";
        recuadroArriba__Dias.className = "recuadroArriba__dias";
        recuadroArriba__Conjunto.className = "recuadroArriba__Conjunto";
        nuevo__recuadro__Abajo.className = "nuevo__recuadro__Abajo";
        recuadroAbajo__texto.className = "recuadroAbajo__texto";
        buttonCompletar.className ="buttonCompletar";

        //Estructura
        nuevo__habito__recuadro.appendChild(nuevo__recuadro__Arriba);
        nuevo__habito__recuadro.appendChild(nuevo__recuadro__Abajo);
        nuevo__recuadro__Arriba.appendChild(recuadroArriba__Conjunto);

        recuadroArriba__Conjunto.appendChild(recuadroArriba__numero);
        recuadroArriba__Conjunto.appendChild(recuadroArriba__Dias);
        nuevo__recuadro__Arriba.appendChild(buttonCompletar);
        nuevo__recuadro__Abajo.appendChild(recuadroAbajo__texto);
        habits__container__list__id.appendChild(nuevo__habito__recuadro);          

        /*   Separacion para mejor organizacion   */



        //Añadir el habito a la lista de habitos
        habits__container__list__id.appendChild(nuevo__habito__recuadro);

        //Crear el nuevo habito para la grafica
        let nuevoHabito = document.createElement("div");
        nuevoHabito.className = 'nuevo__habito';
        nuevoHabito.style.backgroundColor = habit.color || "gray";

        //Añadir el habito a la grafica
        graphic__container__id.appendChild(nuevoHabito);
        
    });
}

inicializadorSelectorDeColor();
document.addEventListener("DOMContentLoaded", cargarHabitos);



