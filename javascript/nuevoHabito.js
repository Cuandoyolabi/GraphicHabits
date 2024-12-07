//  -----------Main seccion 1---------- 
export function crearNuevoHabito(event){

    event.preventDefault(); //Evitar el formulario por defecto

    const habits__container__list__id = document.getElementById("habits__container__list__id");
    const graphic__container__id = document.getElementById('graphic__container__id');
    const habitName = document.getElementById("habitName");
    const form = document.getElementById('habitForm');

    //Verifica que solo sean 5 elementos
    const maximoDeElementos = 5;
    if(graphic__container__id.children.length >= maximoDeElementos){
        return;
    }
  
    //Informacion que requiere la ventana emergente
    let color = document.getElementById('habitColor').value;

    //Crear el nuevo habito
    let nuevo__habito__recuadro = document.createElement("li");
    nuevo__habito__recuadro.textContent = habitName.value;
    nuevo__habito__recuadro.className = "nuevo__habitoAgregado";
    nuevo__habito__recuadro.innerHTML = habitName.value;
    
    //Creando el boton que indica que se completa
    const buttonCompletar = document.createElement("button");
    buttonCompletar.className ="buttonCompletar";

    //Agrega el boton a el habito creado recientemente
    nuevo__habito__recuadro.appendChild(buttonCompletar);

    //Agregar el habito nuevo al contenedor de habitos
    habits__container__list__id.appendChild(nuevo__habito__recuadro);


    //Borra el valor de nombre del habito para la creacion de uno nuevo
    habitName.value = "";

    //Crear el nuevo habito e ingresarlo a la grafica.
    let nuevoHabito = document.createElement('div');
    nuevoHabito.className = 'nuevo__habito';
    nuevoHabito.style.backgroundColor = color;
    nuevoHabito.style.width = '50px';
    nuevoHabito.style.height = '20px';
    nuevoHabito.style.display = 'flex';
    nuevoHabito.style.alignItems = 'center';
    nuevoHabito.style.justifyContent = 'center';

    //Añadimos el div al contenedor
    graphic__container__id.appendChild(nuevoHabito);

    //Cerramos la ventana emergente
    cerrarModal();
    
    //Limpiar el formulario
    form.reset();
};

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



