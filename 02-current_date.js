let date = new Date();

console.log(date);  //default format

//to get today's date

let d = date.getDate();          //current date
let m = date.getMonth()+1;         //current month (0-11) - +1 is to be added as month starts at 0
let y = date.getFullYear();      //current year

d = (d<10)?"0"+d : d;       //to add '0' in the single digits
m = (m<10)?"0"+m : m;

let today = d + "-" + m + "-" + y;

console.log("Current date is " + today);

//to get current time

let hr = date.getHours();       //current hour
let min = date.getMinutes();    //current minutes
let sec = date.getSeconds();    //seconds
let session = " AM"

if (hr==0){
    hr = 12;        //to make the 00 to 12am
}

if (hr>12){
    hr = hr - 12;   //to get 12 hour format
    session = " PM" //to make am to pm in the afternoon after 12
}

hr = (hr<10) ? "0"+hr : hr;         //adding 0 to the single digits
min = (min<10) ? "0"+min : min;
sec = (sec<10) ? "0"+sec : sec;

time = hr+":"+min+":"+sec+session;

console.log(time);      //returns the time in the hh:mm:ss am/pm format - each time returns the exact time