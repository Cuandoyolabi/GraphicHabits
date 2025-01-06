// Funcion para cargar los habitos a la pagina de habitos de Configuracion
export function cargarHabitoConfiguracion(){
   
    //AQUI SE DEBE IMPLEMENTAR LA FUNCION DE ELIMINAR

    const ventana__habitos__lista = document.getElementById("ventana__habitos__lista__id");
    const habitosGuardados = JSON.parse(localStorage.getItem("habitos")) || [];
    habitosGuardados.forEach((habit) => { 

        let nuevo__habito__configuracion = document.createElement("div");
        let habito__nombre = document.createElement("h2");
        let habito__separacion = document.createElement("div");
        let habito__editar = document.createElement("button");
        let habito__eliminar = document.createElement("button");

        //Texto asignado
        habito__editar.textContent = "Editar";
        habito__eliminar.textContent = "Eliminar";
        habito__nombre.textContent = habit.text;

        //Ids asignados
        habito__eliminar.id = "habito__eliminar__id";
        habito__editar.id = "habito__editar__id";

        //Clases asignadas
        habito__editar.className = "habito__editar";
        habito__eliminar.className = "habito__eliminar";
        habito__nombre.className = "habito__nombre";
        nuevo__habito__configuracion.className = "nuevo__habitoConfiguracion";
        habito__separacion.className = "habito__separacion";

        //Elementos agregados
        habito__separacion.appendChild(habito__editar);
        habito__separacion.appendChild(habito__eliminar);
        nuevo__habito__configuracion.appendChild(habito__nombre);
        nuevo__habito__configuracion.appendChild(habito__separacion);
        ventana__habitos__lista.appendChild(nuevo__habito__configuracion);     

    }); 
}

cargarHabitoConfiguracion();