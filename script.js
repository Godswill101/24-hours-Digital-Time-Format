const formatSwitchBtn = document.querySelector(".format-switch-btn");

formatSwitchBtn.addEventListener("click", () => {
    formatSwitchBtn.classList.toggle("active");

    var formatValue = formatSwitchBtn.getAttribute("data-format");

    if(formatValue === "12"){
        formatSwitchBtn.setAttribute("data-format", "24");
    } else {
        formatSwitchBtn.setAttribute("data-format", "12");
    }
});

function clock(){
    var today = new Date();

    var hr = today.getHours();
    var min = today.getMinutes();
    var seconds = today.getSeconds();
    let period = "AM";

    // Set the time period(AM/PM);
    if(hr >= 12){
        period = "PM";
    }

    // Set the 12-hours clock format
    var formatValue = formatSwitchBtn.getAttribute("data-format");

    if(formatValue === "12"){
        hr = hr > 12 ? hr % 12 : hr;
    }
    

    // Add the 0 for the values lower than 10
    if(hr < 10){
        hr = "0" + hr;
    }

    if(min < 10){
        min = "0" + min;
    }

    if(seconds < 10){
        seconds = "0" + seconds;
    }

    document.querySelector(".hr").innerHTML = hr;
    document.querySelector(".min").innerHTML = min;
    document.querySelector(".seconds").innerHTML = seconds;
    document.querySelector(".period").innerHTML = period;
}

var updateClock = setInterval(clock, 1000);


// Get dot-menu toggle
const dotmenuBtn = document.querySelector(".dot-menu-btn");
const dotMenu = document.querySelector('.dot-menu');

dotmenuBtn.addEventListener('click', () => {
    dotMenu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if(e.target.id !== 'active-menu'){
        dotMenu.classList.remove('active');
    }
});


// Get the date
var today = new Date();
const dayNumber = today.getDate();
const year = today.getFullYear();
const dayName = today.toLocaleString("default", {weekday: "long"});
const monthName = today.toLocaleString("default", {month: "long"});

document.querySelector(".month-name").innerHTML = monthName;
document.querySelector(".day-name").innerHTML = dayName;
document.querySelector(".day-number").innerHTML = dayNumber;
document.querySelector(".year").innerHTML = year;