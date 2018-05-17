// enums

enum months {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}

enum days {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

//html 

window.onload = function() {

    let pTodayDate = document.getElementById("p--today-date");
console.log(pTodayDate);

// Today's date
let today : Date = new Date();
console.log(today);

// today's month
let todayMonth : string = months[today.getMonth()];
//console.log(todayMonth);

// today's day of the week
let todayDayOfTheWeek : string = days[today.getDay()];
//console.log(todayDayOfTheWeek);

// display today's date in readable format to page
    if(pTodayDate!= null)
    {
        pTodayDate.innerHTML = `Today is ${ todayDayOfTheWeek }, ${ todayMonth} ${ today.getDate()}, ${ today.getFullYear()}`;
    }

} // end of onload function

