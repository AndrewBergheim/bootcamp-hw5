// get date and time
rawDate = new Date();
console.log(rawDate);
currentHour = rawDate.getHours()
currentDayofWeek = rawDate.getDay();
currentDayofMonth = rawDate.getDate();
currentMonth = (rawDate.getMonth() + 1);
currentYear = (rawDate.getFullYear());
console.log("hour")
console.log(currentHour)
console.log(currentDayofWeek)
//Weekday parser
if (currentDayofWeek == 0){
currentDayofWeek = "Sunday"
}else if(currentDayofWeek == 1){
    currentDayofWeek = "Monday"
}else if(currentDayofWeek == 2){
    currentDayofWeek = "Tuesday"
}else if(currentDayofWeek == 3){
    currentDayofWeek = "Wednesday"
}else if(currentDayofWeek == 4){
    currentDayofWeek = "Thursday"
}else if(currentDayofWeek == 5){
    currentDayofWeek = "Friday"
}else{
    currentDayofWeek = "Saturday"
}

// Month Parser

if (currentMonth == 1){
    currentMonth = "January"
}
else if (currentMonth == 2){
    currentMonth ="February"
}
else if (currentMonth == 3){
    currentMonth ="March"
}
else if (currentMonth == 4){
    currentMonth ="April"
}
else if (currentMonth == 5){
    currentMonth ="May"
}
else if (currentMonth == 6){
    currentMonth ="June"
}
else if (currentMonth == 7){
    currentMonth ="July"
}
else if (currentMonth == 8){
    currentMonth ="August"
}
else if (currentMonth == 9){
    currentMonth ="September"
}
else if (currentMonth == 10){
    currentMonth ="October"
}
else if (currentMonth == 11){
    currentMonth ="November"
}
else{
    currentMonth ="December"
}
console.log(currentDayofWeek);
console.log(currentDayofMonth);
console.log(currentMonth);
console.log(currentYear);
//save date and put it in header
parsedDate = (currentDayofWeek + " " + currentMonth + " " + currentDayofMonth + ", " + currentYear)
$("#currentDay").text(parsedDate);
//iterate through hour blocks
for (let i = 0; i < 9; i++){

}
//if the hour data is less than the current hour, assign .past class to that tr

// if the hour data is equivalent to the current hour, assign.present

//else, assign .future

