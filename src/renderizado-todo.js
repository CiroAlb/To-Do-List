import expandRightIcon from '../svg-icon/expand-right.svg';
import deleteIcon from '../svg-icon/delete-svgrepo-com.svg'

export function renderToDo(data){
    const todayTaskHTML = data.map(item => 
        `<li id=${item.id}>
            <div class="task-li">
                <label class="task">
                    <input type="checkbox" class="checkbox" ${item.check?"checked" : ""}/>
                    <p class="checkbox-text">${item.title}</p>
                </label>
                <div class="contenedor">
                    <button class="delete-button" id=${item.id + "delete-button"}><img src="${deleteIcon}" alt="delete" class="expand-img-right"/></button>
                    <div class="priority-color-${item.priority}"></div>
                    <button class="expand-button" id=${item.id + "-button"}><img id="expanded-img" src="${expandRightIcon}" alt="expand" class="expand-img-right" ></button>
                </div>
            </div>
        </li>`
    ).join('');
    return todayTaskHTML
}

export function renderExpandedToDo(description, listItemId, priority,date){
    var priorityVar= 0;
    switch(priority){
        case 1: priorityVar = "High Priority";
            break;
        case 2: priorityVar = "Medium-High Priority";
            break;
        case 3: priorityVar = "Medium Priority";
            break;
        case 4: priorityVar = "Low Priority";
            break;
        default: priorityVar = "error";
    }
    const expandedHTML = `
            <div class="task-expand">
                <div class="description-div">
                    <p class="description-task">${description}</p>
                </div>
                <div class="extras-dis">
                    <p>${date}</p>
                    <p>${priorityVar}</p>
                </div>
            </div>`;
    
    return expandedHTML;

}

export function popUpRender(){
    return `
        <div class="extras-dis">
            <input type="text" id="task-title" name="task title" placeholder="Enter title">
            <input type="text" id="task-desc" name="task description" placeholder="Enter description">
            <input type="date" id="task-date-1" class="task-date">
            <label for="priority">Select Priority:</label>
            <select id="task-priority" name="priority">
                <option value="4" style="background-color: red; color: white;" class="priority-election">High Priority</option>
                <option value="3" style="background-color: orange; color: white;" class="priority-election">Medium-High Priority</option>
                <option value="2" style="background-color: yellow; color: black;" class="priority-election">Medium Priority</option>
                <option value="1" style="background-color: green; color: white;" class="priority-election">Low Priority</option>
            </select>
        </div>
        <div class="pop-up-buttons">
            <button id="closePopUp">Close</button>
            <button id="saveToDo">Save</button>
        </div>
    `
}
