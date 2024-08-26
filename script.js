const countText = document.getElementById("count-el");
const addButton = document.getElementById("increment");
const decressButton = document.getElementById("decrement");
const saveButton = document.getElementById("save");

const monthKeyValuePair = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
};


let count = 0;


addButton.addEventListener("click", function(){
    count++;
    countText.innerText = count;
});

decressButton.addEventListener("click", function(){
    if(count > 0)
    {
        count--;
        countText.innerText = count;
    }
});

saveButton.addEventListener("click", function(){
    if(count === 0)
    {
        alert("You cant log 0 idiot");
        return;
    }


    const logSection = document.getElementById("logs-sect");

    const divLogWrapper = document.createElement("div");
    const timeParaElement = document.createElement("p");
    const countParaElement = document.createElement("p");

    divLogWrapper.className = "log-wrapper";
    timeParaElement.className = "date-log";
    countParaElement.className = "count-log";

    const dateNow = new Date();
    //let customDateFormat = monthKeyValuePair[dateNow.getUTCMonth()+1] + " / " + dateNow.getUTCDate() + " / " + dateNow.getFullYear() + " ( "+ dateNow.getTime() +" )";
    let customeDateTimeFormat = formatDate(dateNow) + " " + formatTime(dateNow);


    timeParaElement.textContent = customeDateTimeFormat;
    countParaElement.textContent = "counted number [ "+count+" ]";

    divLogWrapper.append(timeParaElement, countParaElement);
    logSection.append(divLogWrapper);


    count = 0;
    countText.textContent = count;
});

function formatTime(dateNowObject)
{
    const dateNow = new Date(dateNowObject);
    let hours = dateNow.getHours();
    let minutes = dateNow.getMinutes();
    let seconds = dateNow.getSeconds();

    let timeSuffix = (hours >= 12) ? "PM" : "AM";

    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
    hours = (hours > 12) ? hours - 12 : hours;
    hours = (hours === 0) ? 12 : hours;

    let formattedTime = hours + ":" + minutes + ":" + seconds + " " + timeSuffix; 

    return formattedTime;
}

function formatDate(dateNowObject){
    const dateNow = new Date(dateNowObject);    
    
    const month = monthKeyValuePair[dateNow.getMonth()+1];
    const date = dateNow.getDate();
    const year = dateNow.getFullYear();

    const formattedDate = month + " / " + date + " / " + year;

    return formattedDate;
}