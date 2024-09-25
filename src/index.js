import "./styles.css";
import { getTodayToDo , getTomorrowToDo, getWeekToDo, getData} from "./app";
import { renderToDo, renderExpandedToDo , popUpRender} from "./renderizado-todo";
import { setCheckById , addData, removeData} from "./DATA";
import expandRightIcon from '../svg-icon/expand-right.svg';
import expandDownIcon from '../svg-icon/expand-down-svgrepo-com.svg'

const test = getData();

todayToDo();

function todayToDo(){
    const data = getTodayToDo();
    const cuantity = document.getElementById("quantity-title");
    cuantity.textContent = data.length;
    console.log(data);
    const newTaskList = document.getElementById("today-task-list");
    newTaskList.innerHTML = renderToDo(data);
}

tomorrowToDo();

function tomorrowToDo(){
    const data = getTomorrowToDo();
    const newTaskList = document.getElementById("tomorrow-task-list")
    newTaskList.innerHTML = renderToDo(data);
}

weekToDo();

function weekToDo() {
    const data = getWeekToDo();
    const weekTaskList = document.getElementById("week-task-list");
    weekTaskList.innerHTML = renderToDo(data);
}

const buttonExpand = document.querySelectorAll(".expand-button");
let currentExpanded = null;  

buttonExpand.forEach(button => {
    button.addEventListener("click", () => {
        const listItem = button.closest('li');
        const listItemId = listItem.id;
        const existingExpand = listItem.querySelector('.task-expand'); 
        const aux = test.filter((item) => item.id == listItemId);
        const description = aux[0].description;
        const priority = aux[0].priority;
        const date = aux[0].date;
        
        // Obtener el elemento <img> dentro del botón
        const expandIcon = button.querySelector('img');

        // Si hay un elemento expandido actualmente y es diferente al actual, lo colapsamos
        if (currentExpanded && currentExpanded !== listItem) {
            const expandedContent = currentExpanded.querySelector('.task-expand');
            const previousExpandIcon = currentExpanded.querySelector('.expand-button img');

            if (expandedContent) {
                expandedContent.remove();
            }

            // Cambiar la imagen de vuelta a expand-right en el elemento anteriormente expandido
            if (previousExpandIcon) {
                previousExpandIcon.setAttribute('src', expandRightIcon);
            }

            currentExpanded = null;
        }

        // Si el actual ya está expandido, lo cerramos
        if (existingExpand) {
            existingExpand.remove();
            currentExpanded = null;

            // Cambiar la imagen de vuelta a expand-right cuando se colapsa
            if (expandIcon) {
                expandIcon.setAttribute('src', expandRightIcon);
            }
        } else {
            // Expandimos el contenido actual
            const expanded = renderExpandedToDo(description, listItemId, priority, date);
            listItem.insertAdjacentHTML('beforeend', expanded);
            currentExpanded = listItem; // Guardamos la referencia del <li> actualmente expandido

            // Cambiar la imagen a expand-down cuando se expande
            if (expandIcon) {
                expandIcon.setAttribute('src', expandDownIcon);
            }
        }
    });
});



const newToDo = document.querySelector("#new-to-do");

newToDo.addEventListener("click", () => {
    const body = document.getElementById("body");

    const popUpContainer = document.createElement('div');
    popUpContainer.classList.add('pop-up');

    popUpContainer.innerHTML = popUpRender();

    // Añadir el pop-up al body
    body.appendChild(popUpContainer);

    // Cerrar el pop-up
    document.getElementById("closePopUp").addEventListener("click", () => {
        body.removeChild(popUpContainer);
    });

    document.getElementById("saveToDo").addEventListener("click", () => {
        const title = document.getElementById("task-title").value;
        const description = document.getElementById("task-desc").value;
        const date = document.getElementById("task-date-1").value;
        const priority = document.getElementById("task-priority").value;
        
        const newToDoObject = {
            "title" : title,
            "description" : description,
            "date" : date,
            "priority" : priority
        }

        const dataVerified = addData(newToDoObject);
        if(dataVerified.isDataCorrect){
            body.removeChild(popUpContainer);
        }
        if(!dataVerified.isDataCorrect){
            console.log("error data");
            const errorMessage = document.createElement('p');
            errorMessage.textContent = dataVerified.message;
            errorMessage.style.color = "red";
            popUpContainer.appendChild(errorMessage);
        }
        
    });
});

const checkboxListener = document.querySelectorAll(".checkbox")

checkboxListener.forEach(button => {
    button.addEventListener("click", () =>{
        const listItem = button.closest('li');
        const listItemId = listItem.id;
        setCheckById(listItemId);
    })
})

const buttonDelete = document.querySelectorAll(".delete-button");

buttonDelete.forEach(button => {
    button.addEventListener("click", () => {
        const listItem = button.closest('li');
        const listItemId = listItem.id;
        removeData(listItemId);
        const unordenedListDelete = listItem.closest('ul');
        unordenedListDelete.removeChild(listItem);
    })
})
