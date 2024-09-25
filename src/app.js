import { DATA } from "./DATA";

getData();
export function getData(){
    const rawData = DATA();
    return rawData;
}

const data = getData();

export function getTodayToDo(){
    const todayDate = getTodayDate();
    const todayToDo = data.filter((item) => item.date == todayDate);
    console.log(todayToDo);
    return todayToDo;
}

export function getTomorrowToDo(){
    const tomorrowDate = getTomorrowDate();
    const tomorrowToDo = data.filter((item) => item.date == tomorrowDate)
    return tomorrowToDo;
}

export function getTodayDate(){
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate
}

export function getTomorrowDate(){
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate() + 1).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate
}

export function getWeekToDo() {
    const weekToDo = [];
    for (let i = 2; i <= 6; i++) { // Desde el día 3 al día 7 (índice 2-6)
        const futureDate = getFutureDate(i);
        const dayToDo = data.filter(item => item.date === futureDate);
        weekToDo.push(...dayToDo); // Agrega los elementos de esa fecha
    }
    return weekToDo;
}

export function getFutureDate(daysAhead) {
    const today = new Date();
    today.setDate(today.getDate() + daysAhead); // Avanza el número de días
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}