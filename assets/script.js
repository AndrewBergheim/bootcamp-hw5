
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
// check if a day has passed since last use. If so, clear local storage
if (localStorage.getItem("date") !== currentDayofMonth+currentMonth+currentYear){
    localStorage.clear();
}



localStorage.setItem("date", (currentDayofMonth+currentMonth+currentYear));
// localStorage loop for populating items 
if (localStorage.getItem("ids")!== null){
    var idArray = JSON.parse(localStorage.getItem("ids"))
    var contentArray = JSON.parse(localStorage.getItem("content"))
    for (let i = 0; i<idArray.length;i++){
        $("#" + idArray[i]).text(contentArray[i])
    }
}
else {
var idArray = []
var contentArray = []
}


// add event listener for save button
$(".fas").on("click", function(){
    // navigate to sibling
    let parent = $(this).parent();
    //console.log(parent);
    let sibling = $(parent).siblings();
    //console.log(sibling);
    let textAreaParent = $(sibling).eq(1)
    let textAreaChildren = $(textAreaParent).children();
    let textAreaFirstChild = $(textAreaChildren).eq(0);
    //console.log ($(textAreaFirstChild).attr("class"))

    // get value of sibling

    let currentid = textAreaFirstChild.attr("id")
    let textToConvert = $(textAreaFirstChild).val();
    //console.log(textToConvert)
// add ids and content to arrays
    if (idArray.length < 1){
        idArray = [currentid]
    }
    else{
        idArray.push(currentid)
    }


    if (contentArray == undefined){
        contentArray = [textToConvert]
    }
    else {
        contentArray.push(textToConvert)
    }
    // save arrays to local storage
    localStorage.setItem("ids", JSON.stringify(idArray))
    localStorage.setItem("content", JSON.stringify(contentArray))
});

//save value of text to local storage