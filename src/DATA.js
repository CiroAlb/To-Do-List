import { getTodayDate } from "./app";

var Data = [
    {"id": 1, "title": "Prepare the monthly financial report.", "description": "Compilar el informe financiero mensual con los últimos datos de ingresos y gastos.", "date": "2024-09-23", "priority": 3, "check": true},
    {"id": 2, "title": "Update the client information database.", "description": "Actualizar la base de datos de información de clientes con los datos más recientes.", "date": "2024-09-24", "priority": 1, "check": false},
    {"id": 3, "title": "Schedule a team-building event.", "description": "Planificar el próximo evento de integración del equipo para fortalecer la cohesión.", "date": "2024-09-30", "priority": 2, "check": true},
    {"id": 4, "title": "Review marketing campaign results.", "description": "Analizar los resultados de la última campaña de marketing para mejorar la estrategia.", "date": "2024-09-26", "priority": 4, "check": false},
    {"id": 5, "title": "Prepare the project milestone report.", "description": "Elaborar un informe detallado de los hitos alcanzados en el proyecto.", "date": "2024-09-23", "priority": 1, "check": false},
    {"id": 6, "title": "Meet with the design team for the new project.", "description": "Reunirse con el equipo de diseño para discutir el avance del nuevo proyecto.", "date": "2024-09-17", "priority": 3, "check": true},
    {"id": 7, "title": "Organize the office event for next week.", "description": "Planificar el evento de la oficina para la próxima semana.", "date": "2024-09-28", "priority": 2, "check": false},
    {"id": 8, "title": "Finalize the proposal for the new product launch.", "description": "Finalizar la propuesta para el lanzamiento del nuevo producto.", "date": "2024-09-29", "priority": 4, "check": true},
    {"id": 9, "title": "Send out the invites for the company seminar.", "description": "Enviar las invitaciones para el seminario de la empresa a los participantes.", "date": "2024-09-24", "priority": 1, "check": false},
    {"id": 10, "title": "Prepare a summary of client feedback.", "description": "Crear un resumen con los comentarios recibidos de los clientes.", "date": "2024-09-23", "priority": 2, "check": true},
    {"id": 11, "title": "Update the internal knowledge base.", "description": "Actualizar la base de conocimiento interna con los últimos procedimientos.", "date": "2024-09-30", "priority": 1, "check": false},
    {"id": 12, "title": "Meet with the HR team to discuss policies.", "description": "Reunirse con el equipo de RRHH para revisar las nuevas políticas.", "date": "2024-09-25", "priority": 3, "check": true},
    {"id": 13, "title": "Review quarterly sales targets.", "description": "Revisar los objetivos de ventas trimestrales y hacer ajustes.", "date": "2024-09-28", "priority": 2, "check": false},
    {"id": 14, "title": "Finalize the draft for the new marketing strategy.", "description": "Finalizar el borrador de la nueva estrategia de marketing para el próximo año.", "date": "2024-09-24", "priority": 4, "check": true},
    {"id": 15, "title": "Discuss the product roadmap for the next release.", "description": "Discutir el plan de desarrollo del producto para el próximo lanzamiento.", "date": "2024-09-27", "priority": 3, "check": false},
    {"id": 16, "title": "Prepare the training material for the new software.", "description": "Desarrollar el material de formación para el nuevo software.", "date": "2024-09-23", "priority": 1, "check": true},
    {"id": 17, "title": "Organize the leadership meeting for next month.", "description": "Organizar la reunión de liderazgo del próximo mes para revisar objetivos estratégicos.", "date": "2024-09-29", "priority": 2, "check": false},
    {"id": 18, "title": "Compile the customer feedback report.", "description": "Compilar un informe detallado de los comentarios de los clientes.", "date": "2024-09-25", "priority": 4, "check": true},
    {"id": 19, "title": "Send the budget proposal to the finance team.", "description": "Enviar la propuesta de presupuesto al equipo de finanzas.", "date": "2024-09-30", "priority": 2, "check": false},
    {"id": 20, "title": "Create a presentation for the client meeting.", "description": "Preparar una presentación para la reunión con el cliente.", "date": "2024-09-24", "priority": 3, "check": true},
    {"id": 21, "title": "Review the app's user interface.", "description": "Revisar la interfaz de usuario de la aplicación y proponer mejoras.", "date": "2024-09-27", "priority": 1, "check": false},
    {"id": 22, "title": "Update the department's progress report.", "description": "Actualizar el informe de progreso del departamento con los últimos datos.", "date": "2024-09-23", "priority": 2, "check": true},
    {"id": 23, "title": "Prepare the meeting agenda for the leadership team.", "description": "Preparar la agenda de la reunión del equipo de liderazgo.", "date": "2024-09-24", "priority": 3, "check": false},
    {"id": 24, "title": "Meet with the marketing team for the campaign launch.", "description": "Reunirse con el equipo de marketing para discutir el lanzamiento de la campaña.", "date": "2024-09-27", "priority": 1, "check": true},
    {"id": 25, "title": "Update the website with the latest content.", "description": "Actualizar el sitio web con el contenido más reciente.", "date": "2024-09-29", "priority": 4, "check": false},
    {"id": 26, "title": "Review the performance metrics for the last quarter.", "description": "Revisar los indicadores de desempeño del último trimestre.", "date": "2024-09-28", "priority": 2, "check": true},
    {"id": 27, "title": "Prepare a detailed project plan for the next phase.", "description": "Elaborar un plan de proyecto detallado para la siguiente fase.", "date": "2024-09-30", "priority": 3, "check": false},
    {"id": 28, "title": "Organize the employee recognition event.", "description": "Organizar el evento de reconocimiento de empleados.", "date": "2024-09-29", "priority": 1, "check": true},
    {"id": 29, "title": "Update the customer service policies.", "description": "Actualizar las políticas de atención al cliente con las nuevas regulaciones.", "date": "2024-09-27", "priority": 4, "check": false},
    {"id": 30, "title": "Review the latest software release.", "description": "Revisar la última versión del software y reportar errores.", "date": "2024-09-25", "priority": 1, "check": true},
    {"id": 31, "title": "Discuss the budget allocation for the next quarter.", "description": "Discutir la asignación presupuestaria para el próximo trimestre.", "date": "2024-09-26", "priority": 2, "check": false},
    {"id": 32, "title": "Prepare the strategy document for the next year.", "description": "Elaborar el documento estratégico para el próximo año.", "date": "2024-09-23", "priority": 3, "check": true},
    {"id": 33, "title": "Coordinate the next product feature demo.", "description": "Coordinar la próxima demostración de características del producto.", "date": "2024-09-25", "priority": 4, "check": false},
    {"id": 34, "title": "Plan the company's anniversary event.", "description": "Planificar el evento de aniversario de la empresa.", "date": "2024-09-30", "priority": 1, "check": true},
    {"id": 35, "title": "Prepare a blog post for the website.", "description": "Escribir una entrada de blog para el sitio web.", "date": "2024-09-23", "priority": 3, "check": false},
]


export function DATA(){
    return Data;
}

export function removeData(id){
    const arrayReduce = Data.filter((data) => data.id !== id);
    Data = arrayReduce;
}

export function addData(dataObject){
    const dataVerified = {
        isDataCorrect : false,
        message : ""
    }
    if(dataObject.title == ""){
        dataVerified.isDataCorrect = false;
        dataVerified.message = "Please add title";
        return dataVerified;
    }
    if(dataObject.date == ""){
        dataVerified.isDataCorrect = false;
        dataVerified.message = "Please add date";
        return dataVerified;
    }
    if(dataObject.title !== "" && dataObject.date !== ""){
        dataVerified.isDataCorrect = true;
        return dataVerified
        dataObject.check = false;
        dataObject.id = addNewId();
        Data.push(dataObject);
    }

}

function addNewId(){
    for(let i = 0 ; i < Data.length ; i++){
        if(i+1 !== Data[i].id){
            return i+1
        } 
    }
    return Data.length + 1
}


export function setCheckById(id) {
    const newId = Number(id);
       for(let i = 0 ; i < Data.length ; i++){
        if(Data[i].id == newId){
            Data[i].check = !Data[i].check;
        }
    }
}
