
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

// Funcion de creacion de habito
export function crearNuevoHabito(event){
    
    //Evitar el formulario por defecto
    event.preventDefault(); 

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
    const color = colorSeleccionado || document.querySelector('.habitColor__label').dataset.selectedColor;
    if(!color){
        alert("Por favor, selecciona un color");
        return;
    }

    console.log("Usando el color:", selectedColor);

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

    //Borra el valor de nombre del habito para la creacion de uno nuevo
    //habitName.value = "";

    //Crear el nuevo habito e ingresarlo a la grafica.
    let nuevoHabito = document.createElement('div');
    nuevoHabito.className = 'nuevo__habito';
    nuevoHabito.style.backgroundColor = selectedColor;
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

        console.log(`Guardando habito: Texto: ${habitText}, Color: ${habitColor}`);

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
        nuevoHabito.style.width = '50px';
        nuevoHabito.style.height = '20px';
        nuevoHabito.style.display = 'flex';
        nuevoHabito.style.alignItems = 'center';
        nuevoHabito.style.justifyContent = 'center';
        nuevoHabito.style.backgroundColor = habit.color || "gray";

        console.log(`Cargando: Texto: "${habit.text}", Color: "${habit.color}"`); // Depuración

        //Añadir el habito a la grafica
        graphic__container__id.appendChild(nuevoHabito);
        
    });
}

document.addEventListener("DOMContentLoaded", cargarHabitos);
