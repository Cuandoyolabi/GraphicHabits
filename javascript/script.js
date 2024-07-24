

//Header y Nav 




//  -----------Main seccion 1---------- 
function crearNuevoHabito(event){

    event.preventDefault(); //Evitar el formulario por defecto

    const maximoDeElementos = 2;
    const graphic__container = document.getElementById('graphic__container');
    const graphic__container__plus = document.getElementById('graphic__container__plus');
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

//Creando la ventana de color.
// Simple example, see optional options for more configuration.
const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'classic', // or 'monolith', or 'nano'

    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsla: true,
            hsva: true,
            cmyk: true,
            input: true,
            clear: true,
            save: true
        }
    }
});

pickr.on('change', (color) => {
    document.getElementById('habitColor').value = color.toHEXA().toString();
});








//Main seccion 2


//Footer