"use strict";

//Se utilizaran estas fuciones en (HabitoCompletado)
import { activateNightMode, isDarkMode } from "./modoOscuro.js";


//Funcion que reinicia la pagina
function reiniciarPagina(){

    location.reload();
    

}

// Funcion sobre eleccion del color
let colorSeleccionado = "";

export function inicializadorSelectorDeColor(){

    const opcionesDeColor = document.querySelectorAll(".color__opcion");
    opcionesDeColor.forEach((opcion) => {
        opcion.addEventListener("click", () => {
            
            colorSeleccionado = opcion.style.backgroundColor;        
            console.log(colorSeleccionado)
        }
    )}
)};

const colors =  [
    "#FF5773",
    "#33FF73",
    "#335773",
    "#FFC300",
    "#16A085",
]


inicializadorSelectorDeColor();

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

    //Agregar el habito al contenedor de habitos
    let nuevo__habito__recuadro = document.createElement("div");
    let nuevo__recuadro__Arriba = document.createElement("div");
    let nuevo__recuadro__Abajo = document.createElement("div");
    let recuadroArriba__Conjunto = document.createElement("div");
    let nuevo__recuadro__Medio = document.createElement("div");
    let recuadroArriba__Dias = document.createElement("h2");
    let recuadroArriba__numero = document.createElement("h2");
    let recuadroAbajo__texto = document.createElement("h2");
    let buttonCompletar = document.createElement("button");
    const icono__habito = document.createElement('i');

    //Informacion
    recuadroAbajo__texto.innerText = habitName.value;
    recuadroArriba__numero.textContent = 0;
    recuadroArriba__Dias.textContent = "Día";
    buttonCompletar.innerHTML = '<i class="fa-solid fa-check"></i>'; 

    //Estilos
    nuevo__habito__recuadro.className = "nuevo__habitoAgregado";
    nuevo__recuadro__Arriba.className = "nuevo__recuadro__Arriba";
    recuadroArriba__numero.className = "recuadroArriba__numero";
    nuevo__recuadro__Medio.className = "nuevo__recuadro__Medio"
    recuadroArriba__Dias.className = "recuadroArriba__dias";
    recuadroArriba__Conjunto.className = "recuadroArriba__Conjunto";
    nuevo__recuadro__Abajo.className = "nuevo__recuadro__Abajo";
    recuadroAbajo__texto.className = "recuadroAbajo__texto";
    buttonCompletar.className ="buttonCompletar";
    icono__habito.classList.add('fa-solid', 'fa-fire', "habit__icon");

    //Variable que verifica la creacion del habito en modo oscuro o light
    if(isDarkMode()){
        nuevo__habito__recuadro.style.borderColor = "#ffffff";
        recuadroAbajo__texto.style.color = "#ffffff";
        recuadroArriba__Dias.style.color = "#ffffff";
        icono__habito.style.color = "#ffffff";
        recuadroArriba__numero.style.color = "#ffffff";
    }

    //Estructura
    nuevo__habito__recuadro.appendChild(nuevo__recuadro__Arriba);
    nuevo__habito__recuadro.appendChild(nuevo__recuadro__Medio);
    nuevo__habito__recuadro.appendChild(nuevo__recuadro__Abajo);
    
    nuevo__recuadro__Arriba.appendChild(recuadroArriba__Conjunto);
    nuevo__recuadro__Medio.appendChild(recuadroArriba__Dias)
    
    recuadroArriba__Conjunto.appendChild(recuadroArriba__numero);
    recuadroArriba__Conjunto.appendChild(icono__habito);

    nuevo__recuadro__Arriba.appendChild(buttonCompletar);
    nuevo__recuadro__Abajo.appendChild(recuadroAbajo__texto);
    habits__container__list__id.appendChild(nuevo__habito__recuadro);      


    /* Separacion para mejor organizacion */

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

    //Crear el nuevo habito e ingresarlo a la grafica.
    let nuevoHabito = document.createElement('div');
    nuevoHabito.className = 'nuevo__habito';
    nuevoHabito.style.backgroundColor = colorSeleccionado;
    graphic__container__id.appendChild(nuevoHabito);

    //Guardamos los habitos en localStorage
    guardarHabitos();

    //Refrescar la pagina de configuracion
    cargarHabitoConfiguracion();

    //Resetear formulario y modal
    form.reset();
    cerrarModal();

};

//Mostrar Modal
export function mostrarlModal(){
    
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
    cubierta__container__id.style.display = 'block';
}

export function cerrarModal(){

    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    cubierta__container__id.style.display = 'none';
}

//Funcion para guardar habitos en localStorage
export  function guardarHabitos(){

    const habits__container__list__id = document.getElementById("habits__container__list__id");
    const graphic__container__id = document.getElementById("graphic__container__id");

    const habitos = Array.from(habits__container__list__id.children).map((habitItem, index) => {
        //Texto
        const habitElement = habitItem.querySelector(".nuevo__recuadro__Abajo h2");
        const habitText =  habitElement ? habitElement.textContent.replace("✔", "").trim() : "";
        const graphicHabit = graphic__container__id.children[index];
        //Color
        const habitColor = graphicHabit.style.backgroundColor;

        //Verificacion de que el habito se implemento en la grafica y el contenedor
        if(!graphicHabit){
            console.error(`Error: No se encontro el elemento grafico para el indice ${index}`);
            return null;
        }

        //Implementacion de ID
        let habitId =  uuid.v4();
        habitItem.dataset.id = habitId;

        return {
            id: habitId,
            text: habitText,
            color: habitColor,
            days: 0,
            ultimoDia: null,
        };
    }).filter(habit => habit !== null);

    localStorage.setItem("habitos", JSON.stringify(habitos));
}

// Funcion para cargar habitos desde localStorage
export function cargarHabitos(){
    
    const habits__container__list__id = document.getElementById("habits__container__list__id");
    const graphic__container__id = document.getElementById("graphic__container__id");
    const habitosGuardados = JSON.parse(localStorage.getItem("habitos")) || [];

    habitosGuardados.forEach((habit) => {
        //Recrea el habito con su estructura y estilos para el contenedor de habitos
        let nuevo__habito__recuadro = document.createElement("div"); 
        let nuevo__recuadro__Arriba = document.createElement("div");
        let nuevo__recuadro__Abajo = document.createElement("div");
        let recuadroArriba__Conjunto = document.createElement("div");
        let nuevo__recuadro__Medio = document.createElement("div");
        let recuadroArriba__Dias = document.createElement("h2");
        let recuadroArriba__numero = document.createElement("h2");
        let recuadroAbajo__texto = document.createElement("h2");
        let buttonCompletar = document.createElement("button");
        const icono__habito = document.createElement('i');

        //Informacion
        recuadroAbajo__texto.innerText = habit.text;
        recuadroArriba__numero.textContent = habit.days || 0;
        recuadroArriba__Dias.textContent = "Dias";
        buttonCompletar.innerHTML = '<i class="fa-solid fa-check"></i>'; 

        //Estilos
        nuevo__habito__recuadro.className = "nuevo__habitoAgregado";
        nuevo__recuadro__Arriba.className = "nuevo__recuadro__Arriba";
        nuevo__recuadro__Medio.className = "nuevo__recuadro__Medio"
        recuadroArriba__numero.className = "recuadroArriba__numero";
        recuadroArriba__Dias.className = "recuadroArriba__dias";
        recuadroArriba__Conjunto.className = "recuadroArriba__Conjunto";
        nuevo__recuadro__Abajo.className = "nuevo__recuadro__Abajo";
        recuadroAbajo__texto.className = "recuadroAbajo__texto";
        buttonCompletar.className ="buttonCompletar";
        icono__habito.classList.add('fa-solid', 'fa-fire', "habit__icon");

        //Asignacion de ID
        nuevo__habito__recuadro.dataset.id = habit.id;

        //Estructura
        nuevo__habito__recuadro.appendChild(nuevo__recuadro__Arriba);
        nuevo__habito__recuadro.appendChild(nuevo__recuadro__Medio);
        nuevo__habito__recuadro.appendChild(nuevo__recuadro__Abajo);
        nuevo__recuadro__Arriba.appendChild(recuadroArriba__Conjunto);
        nuevo__recuadro__Medio.appendChild(recuadroArriba__Dias)
        recuadroArriba__Conjunto.appendChild(recuadroArriba__numero);
        recuadroArriba__Conjunto.appendChild(icono__habito);
        nuevo__recuadro__Arriba.appendChild(buttonCompletar);
        nuevo__recuadro__Abajo.appendChild(recuadroAbajo__texto);           

        //Añadir el habito a la lista de habitos
        habits__container__list__id.appendChild(nuevo__habito__recuadro);

        //Crear el nuevo habito para la grafica
        let nuevoHabito = document.createElement("div");
        nuevoHabito.className = 'nuevo__habito';
        nuevoHabito.style.backgroundColor = habit.color || "gray";

        //Asignacion de ID al habito de la grafica
        nuevoHabito.datainfo.id = habit.id;

        //Añadir el habito a la grafica
        graphic__container__id.appendChild(nuevoHabito);
    });
}

// Funcion para cargar los habitos a la pagina de habitos de Configuracion
export function cargarHabitoConfiguracion() {
    const ventana__habitos__lista = document.getElementById("ventana__habitos__lista__id");
    const habitosGuardados = JSON.parse(localStorage.getItem("habitos")) || [];

    // Limpiar lista actual para evitar duplicados si la función se llama múltiples veces
    ventana__habitos__lista.innerHTML = "";

    habitosGuardados.forEach((habit, index) => { 
        let nuevo__habito__configuracion = document.createElement("div");
        let habito__nombre = document.createElement("h2");
        let habito__separacion = document.createElement("div");
        let habito__editar = document.createElement("button");
        let habito__eliminar = document.createElement("button");

        // Texto asignado
        habito__editar.textContent = "Editar";
        habito__eliminar.textContent = "Eliminar";
        habito__nombre.textContent = habit.text;

        // Ids asignados
        habito__eliminar.id = "habito__eliminar__id_" + index;
        habito__editar.id = "habito__editar__id_" + index;

        // Clases asignadas
        habito__editar.className = "habito__editar";
        habito__eliminar.className = "habito__eliminar";
        habito__nombre.className = "habito__nombre";
        nuevo__habito__configuracion.className = "nuevo__habitoConfiguracion";
        habito__separacion.className = "habito__separacion";

        // Evento de eliminacion
        habito__eliminar.addEventListener("click", () => {
            eliminarHabito(index);
        });

        // Evento de edición
        habito__editar.addEventListener("click", () => editarHabito(index));

        // Elementos agregados
        habito__separacion.appendChild(habito__editar);
        habito__separacion.appendChild(habito__eliminar);
        nuevo__habito__configuracion.appendChild(habito__nombre);
        nuevo__habito__configuracion.appendChild(habito__separacion);
        ventana__habitos__lista.appendChild(nuevo__habito__configuracion);     
    });
}

document.addEventListener("DOMContentLoaded", cargarHabitos);
cargarHabitoConfiguracion();

//Funcion que elimina el habito seleccionado
function eliminarHabito(index) {
    const habitosGuardados = JSON.parse(localStorage.getItem("habitos")) || [];
    habitosGuardados.splice(index, 1); // Eliminar el hábito del arreglo
    localStorage.setItem("habitos", JSON.stringify(habitosGuardados)); // Guardar los cambios
    cargarHabitoConfiguracion(); // Recargar la lista para reflejar los cambios
    reiniciarPagina();
}

// Función que edita el hábito seleccionado
function editarHabito(index) {
    const habitosGuardados = JSON.parse(localStorage.getItem("habitos")) || [];
    const habit = habitosGuardados[index];

    // Mostrar el modal
    const modal = document.getElementById("modal");
    modal.style.display = "flex"; // Cambia el display para mostrar el modal

    // Rellenar los campos del formulario con los valores actuales del hábito
    const habitNameInput = document.getElementById("habitName");
    habitNameInput.value = habit.text;

    // Seleccionar el color actual
    const colorOptions = document.querySelectorAll(".color__opcion");
    colorOptions.forEach(option => {
        if (option.style.backgroundColor === habit.color) {
            option.classList.add("selected"); // Añade una clase para marcarlo como seleccionado
        } else {
            option.classList.remove("selected");
        }
    });

    // Actualizar el hábito al hacer clic en "Guardar"
    const habitForm = document.getElementById("habitForm");
    habitForm.onsubmit = function (event) {
        event.preventDefault(); // Prevenir el envío del formulario

        const nuevoNombre = habitNameInput.value;
        const nuevoColor = document.querySelector(".color__opcion.selected").style.backgroundColor;

        if (nuevoNombre.trim() !== "") {
            // Actualizar el hábito
            habit.text = nuevoNombre;
            habit.color = nuevoColor;
            habitosGuardados[index] = habit;

            // Guardar en localStorage y recargar la lista
            localStorage.setItem("habitos", JSON.stringify(habitosGuardados));
            cargarHabitoConfiguracion(); // Recargar la lista de hábitos

            // Cerrar el modal
            modal.style.display = "none";
        }
    };

    // Cerrar el modal si se hace clic en "Cancelar"
    const closeModal = document.querySelector(".close");
    closeModal.onclick = function () {
        modal.style.display = "none";
    };
}

// Funcion que obtiene el ID
export function obtenerIdDesdeUrl(){
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}

// Funcion ( Completar Habito)
function habitoCompletado(habitId) {
    const habitosGuardados = JSON.parse(localStorage.getItem("habitos")) || [];
    const habitIndex = habitosGuardados.findIndex(habit => habit.id === habitId);

    if (habitIndex !== -1) {
        const habit = habitosGuardados[habitIndex];

        // Comprobamos si es el mismo día
        const today = new Date().toLocaleDateString();

        const habitElement = document.querySelector(`[data-id="${habitId}"]`);
        const buttonCompletar = habitElement.querySelector(".buttonCompletar");
        const habit__icon = habitElement.querySelector(".habit__icon");
        const nuevo__habitoAgregado = document.querySelector(".nuevo__habitoAgregado");

        console.log(buttonCompletar)

        if (habit.ultimoDia === today) {
            habit.days = Math.max(0, habit.days - 1); 
            habit.ultimoDia = null; 
            habit.completado = false;

            const colorDeterminado = isDarkMode() ? '#ffffff' : '#000000';

            console.log(buttonCompletar)
            //Resetea los estilos
            buttonCompletar.style.borderColor = "black";
            buttonCompletar.style.color = "black";
            buttonCompletar.style.backgroundColor = "white";
            nuevo__habitoAgregado.style.borderWidth = "1px";

            // SI LA PAGINA ESTA EN SU MODO OSCURO, ESTOS DEBEN SER BLANCOS EN VEZ DE NEGROS
            nuevo__habitoAgregado.style.borderColor = colorDeterminado;
            habit__icon.style.color = colorDeterminado;

        } else {
            habit.days += 1;
            habit.ultimoDia = today;
            habit.completado = true;

            console.log(nuevo__habitoAgregado)

            //Le da color al habito al ser completado
            buttonCompletar.style.backgroundColor = habit.color;
            buttonCompletar.style.borderColor = "white";
            buttonCompletar.style.color = "white";
            habit__icon.style.color = habit.color;
            //nuevo__habitoAgregado.style.borderWidth = "3px";
            //nuevo__habitoAgregado.style.borderColor = habit.color;
        }

        // Actualizamos el habit en el localStorage
        localStorage.setItem("habitos", JSON.stringify(habitosGuardados));

        // Actualizar el contador de días en el DOM
        const habitNumberElement = habitElement.querySelector(".recuadroArriba__numero");
        habitNumberElement.textContent = habit.days;

        //Se llama a la funcion que actualiza el habito en la grafica
        //actualizarGrafica(habitId);

    } else {
        console.error(`No se encontró el hábito con el ID: ${habitId}`);
    }
}

function restaurarColorDeHabitos() {
    const habitosGuardados = JSON.parse(localStorage.getItem("habitos")) || [];

    habitosGuardados.forEach(habit => {
        const habitElement = document.querySelector(`[data-id="${habit.id}"]`);

        if (habitElement) {
            const buttonCompletar = habitElement.querySelector(".buttonCompletar");
            const habit__icon = habitElement.querySelector(".habit__icon");

            //Solo le hace falta el borde
            if (habit.completado) {
                //nuevoHabitoAgregado.classList.add("habito-completado");
                buttonCompletar.style.backgroundColor = habit.color;
                buttonCompletar.style.color = "white";
                buttonCompletar.style.borderColor = "white";
                habit__icon.style.color = habit.color;
            } else {
                //nuevoHabitoAgregado.classList.remove("habito-completado");
                buttonCompletar.style.backgroundColor = "white";
                buttonCompletar.style.color = "black";
                habit__icon.style.color = "black";
            }
        }
    });
}

function actualizarGrafica(habitId){

    const habitosGuardados = JSON.parse(localStorage.getItem("habitos")) || [];
    const habitIndex = habitosGuardados.findIndex(habit => habit.id === habitId);
    const habitElement = document.querySelector(`[data-id="${habitId}"]`);




}

// Aquí seleccionamos el contenedor principal donde se agregan dinámicamente los hábitos
const habitsContainer = document.getElementById("habits__container__list__id");

// Delegación de eventos: escuchamos los clics en el contenedor principal
habitsContainer.addEventListener("click", (event) => {
    if (event.target.closest(".buttonCompletar")) {
        const habitElement = event.target.closest(".nuevo__habitoAgregado");
        const habitId = habitElement.dataset.id;

        habitoCompletado(habitId);
        //Aqui se insertara la nueva funcion que incrementa el tamaño de los habitos en la grafica
        //habitoDeGraficaCompletado(habitId);

    }
});

//Recarga la pagina automaticamente
document.addEventListener("DOMContentLoaded", () => {
    restaurarColorDeHabitos();
    
    //Verifica si el usuario dejo la pagina en el modo oscuro
    if(isDarkMode()){
        activateNightMode();
    };
});




