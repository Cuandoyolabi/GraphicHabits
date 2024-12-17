
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

inicializadorSelectorDeColor();

//Funcion que elimina el habito seleccionado
export function eliminarHabito(){

}

//Funcion para editar el habito seleccionado
export function editarHabito(){
    
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
    let nuevo__habito__recuadro = document.createElement("li");
    nuevo__habito__recuadro.className = "nuevo__habitoAgregado";
    nuevo__habito__recuadro.innerHTML = habitName.value;
    
    //Creando el boton que indica que se completa
    const buttonCompletar = document.createElement("button");
    buttonCompletar.className ="buttonCompletar";
    nuevo__habito__recuadro.appendChild(buttonCompletar);

    //Agregar el habito nuevo al contenedor de habitos
    habits__container__list__id.appendChild(nuevo__habito__recuadro);


    //Agregar el habito a la configuracion de habitos
    let nuevo__habito__configuracion = document.createElement("div");
    let habito__separacion = document.createElement("div");
    let habito__editar = document.createElement("button");
    let habito__eliminar = document.createElement("button");

    habito__separacion.className = "habito__separacion";
    nuevo__habito__configuracion.className = "nuevo__habitoConfiguracion";

    
    nuevo__habito__configuracion.appendChild(habito__separacion);
    ventana__habitos__lista.appendChild(nuevo__habito__configuracion);

    nuevo__habito__configuracion.innerHTML = habitName.value;


    //Crear el nuevo habito e ingresarlo a la grafica.
    let nuevoHabito = document.createElement('div');
    nuevoHabito.className = 'nuevo__habito';
    nuevoHabito.style.backgroundColor = colorSeleccionado;
    graphic__container__id.appendChild(nuevoHabito);

    //Guardamos los habitos en localStorage
    guardarHabitos();

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

//Cerrar modal
export function cerrarModal(){

    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    cubierta__container__id.style.display = 'none';
}

//El color viene de los habitos que se crean en la grafica
//El nombre del habito viene del contenedor de habitos
//Funcion para guardar habitos en localStorage
export  function guardarHabitos(){

    const habits__container__list__id = document.getElementById("habits__container__list__id");
    const graphic__container__id = document.getElementById("graphic__container__id");

    const habitos = Array.from(habits__container__list__id.children).map((habitItem, index) => {
        const habitText = habitItem.textContent.replace("✔", "").trim();
        const graphicHabit = graphic__container__id.children[index];

        if(!graphicHabit){
            console.error(`Error: No se encontro el elemento grafico para el indice ${index}`);
            return null;
        }

        const habitColor = graphicHabit.style.backgroundColor;

            return {
                text: habitText,
                color: habitColor,
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
        //Crea el nuevo habito como un elemento de lista
        let nuevo__habito__recuadro = document.createElement("li");
        nuevo__habito__recuadro.className = "nuevo__habitoAgregado";
        nuevo__habito__recuadro.textContent = habit.text;

        //Crear el boton para completar el habito
        const buttonCompletar = document.createElement("button");
        buttonCompletar.className = "buttonCompletar";
        buttonCompletar.textContent = "✔";

        //Añadir el boton al recuadro 
        nuevo__habito__recuadro.appendChild(buttonCompletar);

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

document.addEventListener("DOMContentLoaded", cargarHabitos);

export function guardarHabitoConfiguracion(){
    //Aqui se guardara el habito de configuracion con localStorage
}

export function cargarHabitoConfiguracion(){
    //Aqui se cargara el habito de configuracion con localStorage
}