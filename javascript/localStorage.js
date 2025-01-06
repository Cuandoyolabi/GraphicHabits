
//Funcion para guardar habitos en localStorage
export  function guardarHabitos(){

    const habits__container__list__id = document.getElementById("habits__container__list__id");
    const graphic__container__id = document.getElementById("graphic__container__id");

    const habitos = Array.from(habits__container__list__id.children).map((habitItem, index) => {
        
        //Texto
        const habitElement = habitItem.querySelector(".nuevo__recuadro__Abajo h2");
        const habitText =  habitElement ? habitElement.textContent.replace("✔", "").trim() : "";
        const graphicHabit = graphic__container__id.children[index];

        //Verificacion de que el habito se implemento en la grafica y el contenedor
        if(!graphicHabit){
            console.error(`Error: No se encontro el elemento grafico para el indice ${index}`);
            return null;
        }

        //Color
        const habitColor = graphicHabit.style.backgroundColor;

        //Implementacion de ID
        let habitId =  uuid.v4();
        habitItem.dataset.id = habitId;

        return {
            id: habitId,
            text: habitText,
            color: habitColor,
        };
    }).filter(habit => habit !== null);

    //Guardado en localStorgae
    localStorage.setItem("habitos", JSON.stringify(habitos));

}

