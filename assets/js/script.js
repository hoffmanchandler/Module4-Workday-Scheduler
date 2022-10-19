var saveClick = document.querySelector('#button');
var titleDate = moment().format('MMMM Do YYYY');
var currentTime = moment()
var currentHour = moment().hour()

console.log(currentHour);
console.log(titleDate);

currentDay = document.querySelector('#currentDay');
currentDay.textContent = titleDate;

// Selecting HTML ID to display title date and time
// currentDay = document.querySelector('#currentDay');
// Adding current date/time to HTML file
// currentDay.textContent = titleDate;

//function liveTime(){
    //currentDay = document.querySelector('#currentDay');
    //currentDay.textContent = titleDate;
//}
//setInterval(liveTime, 1000);

rowSelector = document.querySelectorAll('.row');
console.log(rowSelector);

for (var i = 0; i < rowSelector.length; i++){
    // Convert row ID to number
    var rowIdNumber = parseInt(rowSelector[i].id)
    console.log(rowIdNumber);
    // Decide if currentHour is before/during/after ID
    if (rowIdNumber < currentHour){
        console.log(rowIdNumber, "earlier");
        // Change color of row
        rowSelector[i].style.backgroundColor = "green";
    } else if (rowIdNumber === currentHour){
        console.log(rowIdNumber, "now");
        rowSelector[i].style.backgroundColor = "red";
    }   else {
        console.log(rowIdNumber, "after");
    }
}

var saveToStorage = function saveToStorage() {
    console.log("Hello");
    var textEntry = document.querySelectorAll(".text");
    localStorage.getItem(textEntry, String);
}

// Event listener for any save click that will run function to save data to local storage
saveClick.addEventListener('click', saveToStorage);
