//Header y Nav 




//  -----------Main seccion 1---------- 
function crearNuevoHabito(event){

    event.preventDefault(); //Evitar el formulario por defecto

    const maximoDeElementos = 5;
    const graphic__container = document.getElementById('graphic__container');
    const form = document.getElementById('habitForm');

    //Verifica que solo sean 5 elementos
    if(graphic__container.children.length >= maximoDeElementos){
        return;
    }

    //Informacion que reqiere la ventana emergente
    let nombre = document.getElementById('habitName').value;
    let color = document.getElementById('habitColor').value;

    
    //Crear el nuevo habito con la informacion
    let nuevoHabito = document.createElement('div');
    nuevoHabito.textContent = nombre;
    nuevoHabito.className = 'nuevo__habito';
    nuevoHabito.style.backgroundColor = color;
    nuevoHabito.style.width = '50px';
    nuevoHabito.style.height = '20px';
    nuevoHabito.style.display = 'flex';
    nuevoHabito.style.alignItems = 'center';
    nuevoHabito.style.justifyContent = 'center';

    //Añadimos el div al contenedor
    graphic__container.appendChild(nuevoHabito);

    //Cerramos la ventana emergente
    cerrarModal();

    //Limpiar el formulario
    form.reset();
};

function mostrarlModal(){
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
}

function cerrarModal(){
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}



document.getElementById('graphic__container__plus').addEventListener('click', mostrarlModal);
document.querySelector('.close').addEventListener('click', cerrarModal);
document.getElementById('habitForm').addEventListener('submit', crearNuevoHabito);




const form = document.getElementById('habitForm');






//Main seccion 2


//Footer