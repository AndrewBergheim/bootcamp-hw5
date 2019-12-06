// get data from local storage
// if a row has an associated event, populate it


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
    rows = $("[data-hour]");
    currentRow = rows.eq(i);
    //console.log($(currentRow));

    //if the hour data is less than the current hour, assign .past class to that tr
    if (currentRow.attr("data-hour") < currentHour){
        currentRow.attr("class", "past")
    }
    // if the hour data is equivalent to the current hour, assign.present
    else if (currentRow.attr("data-hour") == currentHour){
        currentRow.attr("class", "present")
    }
    //else, assign .future
    else{
        currentRow.attr("class", "future")
    }
}


// add event listener for save button
$(".fas").on("click", function(){
    // navigate to sibling
    parent = $(this).parent();
    //console.log(parent);
    sibling = $(parent).siblings();
    //console.log(sibling);
    textAreaParent = $(sibling).eq(1)
    textAreaChildren = $(textAreaParent).children();
    textAreaFirstChild = $(textAreaChildren).eq(0);
    //console.log ($(textAreaFirstChild).attr("class"))

    // get value of sibling

    let currentid = textAreaFirstChild.attr("id")
    textToConvert = $(textAreaFirstChild).val();
    //console.log(textToConvert)

    // save value of sibling to local storage
    localStorage.setItem(currentid, textToConvert)
});

//save value of text to local storage