"use strict";
//----------------------------------------Importaciones
import { activateNightMode, isDarkMode } from "./modoOscuro.js";

//--------------------------------------Reiniciar Pagina
function reiniciarPagina(){

    location.reload();
    restaurarColorDeHabitos();
    
}

//--------------------------------------Variable global para el color seleccionado
let colorSeleccionado = "";
export function inicializadorSelectorDeColor(){

    //---------------------------------------Selector de Color
    const opcionesDeColor = document.querySelectorAll(".color__opcion");
    opcionesDeColor.forEach((opcion) => {
        opcion.addEventListener("click", () => {

            opcionesDeColor.forEach((opcion) =>  opcion.classList.remove("seleccionado"));

            colorSeleccionado = opcion.style.backgroundColor;   
            opcion.classList.add("seleccionado");

        }
    )}
)};

inicializadorSelectorDeColor();

//--------------------------------------Crear Nuevo Habito
export function crearNuevoHabito(event){
    
    //---------------------------------------Prevenir el comportamiento por defecto del formulario
    event.preventDefault(); 

    //---------------------------------------Obtener elementos del DOM
    const ventana__habitos__lista = document.getElementById("ventana__habitos__lista__id");
    const habits__container__list__id = document.getElementById("habits__container__list__id");
    const graphic__container__id = document.getElementById('graphic__container__id');
    const habitName = document.getElementById("habitName");
    const form = document.getElementById('habitForm');

    //---------------------------------------Limitacion de habitos
    const maximoDeElementos = 6;
    if(graphic__container__id.children.length >= maximoDeElementos){
        return;
    }
  
    //---------------------------------------Validacion de color
    const color = colorSeleccionado;
    if(!color){
        alert("Por favor, selecciona un color");
        return;
    }

    //---------------------------------------Agregar el nuevo habito
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

    //----------------------------------------Informacion
    recuadroAbajo__texto.innerText = habitName.value;
    recuadroArriba__numero.textContent = 0;
    recuadroArriba__Dias.textContent = "Día";
    buttonCompletar.innerHTML = '<i class="fa-solid fa-check"></i>'; 

    //----------------------------------------Estilos
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

    //-----------------------------------------Verificacion de obscuro o claro
    if(isDarkMode()){
        nuevo__habito__recuadro.style.borderColor = "#ffffff";
        recuadroAbajo__texto.style.color = "#ffffff";
        recuadroArriba__Dias.style.color = "#ffffff";
        icono__habito.style.color = "#ffffff";
        recuadroArriba__numero.style.color = "#ffffff";
    }

    //----------------------------------------Estructura del nuevo habito
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

    //----------------------------------------Habito creado para configuracion
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

    //----------------------------------------Habito creado para la grafica
    let nuevoHabito = document.createElement('div');
    nuevoHabito.classList.add('nuevo__habito');
    nuevoHabito.style.backgroundColor = colorSeleccionado;
    graphic__container__id.appendChild(nuevoHabito);


    //----------------------------------------Guardardo en LocalStorage
    guardarHabitos();

    //----------------------------------------Habito para configuracion
    cargarHabitoConfiguracion();

    //-----------------------------------------Reiniciar formulario y cerrar modal
    form.reset();
    cerrarModal();
    reiniciarPagina()
};

//--------------------------------------Mostrar Modal
export function mostrarlModal(){
    
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
    cubierta__container__id.style.display = 'block';
}
//--------------------------------------Cerrar Modal
export function cerrarModal(){

    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    cubierta__container__id.style.display = 'none';
}

//--------------------------------------Guardar Habitos
export function guardarHabitos() {
    const habits__container__list__id = document.getElementById("habits__container__list__id");
    const graphic__container__id = document.getElementById("graphic__container__id");


    const habitosGuardados = JSON.parse(localStorage.getItem("habitos")) || [];
    //----------------------------------Generar IDs únicos para cada hábito
    const habitos = Array.from(habits__container__list__id.children).map((habitItem, index) => {
        //----------------------------------Obtener el texto del habito
        const habitElement = habitItem.querySelector(".nuevo__recuadro__Abajo h2");
        const habitText = habitElement ? habitElement.textContent.replace("✔", "").trim() : "";

        //----------------------------------Obtener el elemento grafico
        const graphicHabit = graphic__container__id.children[index];
        console.log(`Index: ${index}, Graphic Habit:`, graphicHabit);

        //----------------------------------Asignar un ID único al hábito
        const habitId = habitItem.dataset.id || window.uuidv4();
        habitItem.dataset.id = habitId;

        //----------------------------------Obtener el color del habito
        const habitColor = graphicHabit ? graphicHabit.style.backgroundColor : "gray";

        console.log("ID del hábito: ", habitId);
        console.log(habitItem);
        console.log("Este es el ID desde guardarHabitos",habitId)

        const habitoExistente = habitosGuardados.find(h => h.id === habitId);

        return {
            id: habitId,
            text: habitText,
            completado: habitoExistente ? habitoExistente.completado : false,
            pixeles: 20,
            color: habitColor,
            days: habitoExistente ? habitoExistente.days : 0,
            ultimoDia: habitoExistente ? habitoExistente.ultimoDia : 0, 
        };
    }).filter(habit => habit !== null);

    
    console.log("Probando si llega aqui");

    //----------------------------------Guardar en localStorage
    localStorage.setItem("habitos", JSON.stringify(habitos));
}

//--------------------------------------Cargar Habitos
export function cargarHabitos(){
    
    const habits__container__list__id = document.getElementById("habits__container__list__id");
    const graphic__container__id = document.getElementById("graphic__container__id");
    const habitosGuardados = JSON.parse(localStorage.getItem("habitos")) || [];

    console.log("Habitos guardados:", habitosGuardados);

    habitosGuardados.forEach((habit) => {
        //----------------------------------Recrea el habito despues de haber regresado a la pagina
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

        //----------------------------------Asignacion de texto e informacion
        recuadroAbajo__texto.innerText = habit.text;
        recuadroArriba__numero.textContent = habit.days || 0;
        recuadroArriba__Dias.textContent = "Dias";
        buttonCompletar.innerHTML = '<i class="fa-solid fa-check"></i>'; 

        //----------------------------------Asignacion de estilos
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

        //----------------------------------Asignacion de su mismo ID
        nuevo__habito__recuadro.dataset.id = habit.id;
        console.log("ID del hábito cargado: ", habit.id);

        //----------------------------------Asignacion de estructura
        nuevo__habito__recuadro.appendChild(nuevo__recuadro__Arriba);
        nuevo__habito__recuadro.appendChild(nuevo__recuadro__Medio);
        nuevo__habito__recuadro.appendChild(nuevo__recuadro__Abajo);
        nuevo__recuadro__Arriba.appendChild(recuadroArriba__Conjunto);
        nuevo__recuadro__Medio.appendChild(recuadroArriba__Dias)
        recuadroArriba__Conjunto.appendChild(recuadroArriba__numero);
        recuadroArriba__Conjunto.appendChild(icono__habito);
        nuevo__recuadro__Arriba.appendChild(buttonCompletar);
        nuevo__recuadro__Abajo.appendChild(recuadroAbajo__texto);           

        //----------------------------------Añadir el habito a la lista de habitos
        habits__container__list__id.appendChild(nuevo__habito__recuadro);

        //----------------------------------Recrear habito en la grafica
        let nuevoHabito = document.createElement("div");
        nuevoHabito.className = 'nuevo__habito';
        nuevoHabito.style.backgroundColor = habit.color || "gray";

        //----------------------------------Asignar el ID al habito de la grafica
        nuevoHabito.dataset.id = habit.id;

        //----------------------------------Añadir el habito a la grafica
        graphic__container__id.appendChild(nuevoHabito);
    });
}

//---------------------------------------Cargar Habito Configuracion
export function cargarHabitoConfiguracion() {
    const ventana__habitos__lista = document.getElementById("ventana__habitos__lista__id");
    const habitosGuardados = JSON.parse(localStorage.getItem("habitos")) || [];

    // Limpiar lista actual para evitar duplicados si la función se llama múltiples veces
    ventana__habitos__lista.innerHTML = "";

    //----------------------------------Recrear los habitos en la configuracion
    habitosGuardados.forEach((habit, index) => { 
        let nuevo__habito__configuracion = document.createElement("div");
        let habito__nombre = document.createElement("h2");
        let habito__separacion = document.createElement("div");
        let habito__editar = document.createElement("button");
        let habito__eliminar = document.createElement("button");

        //-------------------------------------Texto asignado
        habito__editar.textContent = "Editar";
        habito__eliminar.textContent = "Eliminar";
        habito__nombre.textContent = habit.text;

        //-------------------------------------Ids asignados
        habito__eliminar.id = "habito__eliminar__id_" + index;
        habito__editar.id = "habito__editar__id_" + index;

        //--------------------------------------Clases asignadas
        habito__editar.className = "habito__editar";
        habito__eliminar.className = "habito__eliminar";
        habito__nombre.className = "habito__nombre";
        nuevo__habito__configuracion.className = "nuevo__habitoConfiguracion";
        habito__separacion.className = "habito__separacion";

        //------------------------------------Evento de eliminacion
        habito__eliminar.addEventListener("click", () => {
            eliminarHabito(index);
        });

        //--------------------------------------Evento de edición
        habito__editar.addEventListener("click", () => editarHabito(index));

        //---------------------------------------Elementos agregados
        habito__separacion.appendChild(habito__editar);
        habito__separacion.appendChild(habito__eliminar);
        nuevo__habito__configuracion.appendChild(habito__nombre);
        nuevo__habito__configuracion.appendChild(habito__separacion);
        ventana__habitos__lista.appendChild(nuevo__habito__configuracion);     
    });
}

//----------------------------------------Funcion que carga los habitos en configuracion al cargar la pagina
document.addEventListener("DOMContentLoaded", () => {

    cargarHabitos(); // Cargar los hábitos al iniciar la página

});

cargarHabitoConfiguracion();

//----------------------------------------Eliminar Habito
function eliminarHabito(index) {
    const habitosGuardados = JSON.parse(localStorage.getItem("habitos")) || [];
    habitosGuardados.splice(index, 1); // Eliminar el hábito del arreglo
    localStorage.setItem("habitos", JSON.stringify(habitosGuardados)); // Guardar los cambios
    cargarHabitoConfiguracion(); // Recargar la lista para reflejar los cambios
    reiniciarPagina();
}

//----------------------------------------Editar Habito
function editarHabito(index) {
    const habitosGuardados = JSON.parse(localStorage.getItem("habitos")) || [];
    const habit = habitosGuardados[index];

    //---------------------------------Mostrar el modal
    const modal = document.getElementById("modal");
    modal.style.display = "flex"; // Cambia el display para mostrar el modal

    //---------------------------------------Rellenar los campos del formulario 
    const habitNameInput = document.getElementById("habitName");
    habitNameInput.value = habit.text;

    //---------------------------------------Seleccion de color
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

//----------------------------------------Obtener ID desde la URL
export function obtenerIdDesdeUrl(){
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}

//----------------------------------------Marcar un habito como completado
function habitoCompletado(habitId) {
    const habitosGuardados = JSON.parse(localStorage.getItem("habitos")) || [];
    const habitIndex = habitosGuardados.findIndex(habit => habit.id === habitId);

    if (habitIndex !== -1) {
        const habit = habitosGuardados[habitIndex];
        const today = new Date().toLocaleDateString();
        const habitElement = document.querySelector(`.nuevo__habitoAgregado[data-id="${habitId}"]`);

        if (!habitElement) {
            console.error(`No se encontró el elemento con data-id: ${habitId}`);
            return;
        }

        // Ajusta el selector para el botón
        const buttonCompletar = habitElement.querySelector("div:nth-child(2) .buttonCompletar");
        if (!buttonCompletar) {
            console.error(`No se encontró el botón con clase .buttonCompletar dentro del habitElement con data-id: ${habitId}`);
            console.log("Habit Element:", habitElement);
            console.log("Children of Habit Element:", habitElement.children);
            return;
        }

        const habit__icon = habitElement.querySelector(".habit__icon");
        const nuevo__habitoAgregado = document.querySelector(".nuevo__habitoAgregado");

        if (habit.ultimoDia === today) {
            habit.days = Math.max(0, habit.days - 1); 
            habit.ultimoDia = 0; 
            habit.completado = false;

            const colorDeterminado = isDarkMode() ? '#ffffff' : '#000000';
            buttonCompletar.style.borderColor = "black";
            buttonCompletar.style.color = "black";
            buttonCompletar.style.backgroundColor = "white";
            nuevo__habitoAgregado.style.borderWidth = "1px";
            nuevo__habitoAgregado.style.borderColor = colorDeterminado;
            habit__icon.style.color = colorDeterminado;

        } else {
            habit.days += 1;
            habit.ultimoDia = today;
            habit.completado = true;

            buttonCompletar.style.backgroundColor = habit.color;
            buttonCompletar.style.borderColor = "white";
            buttonCompletar.style.color = "white";
            habit__icon.style.color = habit.color;
        }

        localStorage.setItem("habitos", JSON.stringify(habitosGuardados));
        const habitNumberElement = habitElement.querySelector(".recuadroArriba__numero");
        habitNumberElement.textContent = habit.days;
    } else {
        console.error(`No se encontró el hábito con el ID: ${habitId}`);
    }
}

//----------------------------------------Restaurar Color de Habitos
function restaurarColorDeHabitos() {
    const habitosGuardados = JSON.parse(localStorage.getItem("habitos")) || [];

    habitosGuardados.forEach(habit => {
        const habitElement = document.querySelector(`.nuevo__habitoAgregado[data-id="${habit.id}"]`);

        if (habitElement) {
            const buttonCompletar = habitElement.querySelector(".buttonCompletar");
            const habit__icon = habitElement.querySelector(".habit__icon");

            if (buttonCompletar && habit__icon) {
                if (habit.completado === true) {

                    buttonCompletar.style.backgroundColor = habit.color;
                    buttonCompletar.style.color = "white";
                    buttonCompletar.style.borderColor = "white";
                    habit__icon.style.color = habit.color;
                } else {

                    buttonCompletar.style.backgroundColor = "white";
                    buttonCompletar.style.color = "black";
                    habit__icon.style.color = "black";
                }
            } else {
                console.warn(`No se encontraron los elementos buttonCompletar o habit__icon para el hábito con data-id: ${habit.id}`);
            }
        } else {
            console.warn(`No se encontro el elemento con data-id: ${habit.id}`);
        }
    });
}

//----------------------------------------Actualizar Grafica
function actualizarGrafica(habitId){

    const habitosGuardados = JSON.parse(localStorage.getItem("habitos")) || [];
    const habitIndex = habitosGuardados.findIndex(habit => habit.id === habitId);
    const habitElement = document.querySelector(`.nuevo__habito[data-id="${habitId}"]`);
    console.log(`Este habito es de la grafica`,habitElement);

    






}

//----------------------------------------Delegacion de eventos para completar habitos

const habitsContainer = document.getElementById("habits__container__list__id");
habitsContainer.addEventListener("click", (event) => {
    if (event.target.closest(".buttonCompletar")) {
        const habitElement = event.target.closest(".nuevo__habitoAgregado");
        const habitId = habitElement.dataset.id;

        habitoCompletado(habitId);
        //Aqui se insertara la nueva funcion que incrementa el tamaño de los habitos en la grafica
        actualizarGrafica(habitId);

    }
});

//----------------------------------------Restaurar Color de Habitos al cargar la pagina
document.addEventListener("DOMContentLoaded", () => {
    restaurarColorDeHabitos();
    
    //-----------------------------------------Activar modo oscuro si es necesario
    if(isDarkMode()){
        activateNightMode();
    };
});




