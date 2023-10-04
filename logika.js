
let homePoints = document.getElementById("home_points");
let guestPoints = document.getElementById("guest_points");

let homeBorderTable = document.getElementById("home_points");
let guestBorderTable = document.getElementById("guest_points");

let homeBtn1 = document.getElementById("home_btn_1");
let homeBtn2 = document.getElementById("home_btn_2");
let homeBtn3 = document.getElementById("home_btn_3");

let guestBtn1 = document.getElementById("guest_btn_1");
let guestBtn2 = document.getElementById("guest_btn_2");
let guestBtn3 = document.getElementById("guest_btn_3");

let sumHomePoints=0;
let sumGuestPoints=0;

function updateScore(){
    homePoints.innerHTML = sumHomePoints;
    guestPoints.textContent = sumGuestPoints;

    if (sumHomePoints>sumGuestPoints){
        homeBorderTable.setAttribute("style","border: solid green 4px");
        guestBorderTable.setAttribute("style","border: solid black 4px");
    }else if(sumGuestPoints>sumHomePoints) {
        guestBorderTable.setAttribute("style","border:solid green 4px");
        homeBorderTable.setAttribute("style","border:solid black 4px");
    }else{
        homeBorderTable.setAttribute("style","border:solid black 4px");
        guestBorderTable.setAttribute("style","border:solid black 4px");
    }
}

function buttonPointClicked(wartosc){
    switch(wartosc.substr(0,3)){
        case "hom":
            console.log("gospodarze zdobywają punkt!");
            sumHomePoints += parseInt(wartosc.substr(3));
            break;
        case "gst":
            console.log("goście zdobywają punkt :(");
            sumGuestPoints += parseInt(wartosc.substr(3));
            break;
        case "new":
            console.log("Nowa gra! :)");
            sumHomePoints=0;
            sumGuestPoints=0;
            updateFouls("none");
            totalSeconds =  0;
            odpalZegar();
            break;
        default:
            console.log("opcja nieznana");
            break;
    }
    updateScore();
}



document.getElementById("timer").innerHTML = "00:00:00";
var totalSeconds = 0;

function odpalZegar(){
   let timerVar = setInterval(countTimer, 1000);
}

function countTimer() {
    ++totalSeconds;
    var hour = Math.floor(totalSeconds /3600);
    var minute = Math.floor((totalSeconds - hour*3600)/60);
    var seconds = totalSeconds - (hour*3600 + minute*60);
    if(hour < 10)
        hour = "0"+hour;
    if(minute < 10)
        minute = "0"+minute;
    if(seconds < 10)
         seconds = "0"+seconds;
   document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
    updatePeriod();
}


let period_1 = document.getElementById("period_1");
let period_2 = document.getElementById("period_2");
let period_3 = document.getElementById("period_3");
let period_4 = document.getElementById("period_4");

let updatePeriod =() => {
    if (totalSeconds<=600){
        period_1.setAttribute("style","background-color: red");
        period_2.setAttribute("style","background-color: white");
        period_3.setAttribute("style","background-color: white");
        period_4.setAttribute("style","background-color: white");
    }else if (totalSeconds<=1200){
        period_1.setAttribute("style","background-color: red");
        period_2.setAttribute("style","background-color: red");
        period_3.setAttribute("style","background-color: white");
        period_4.setAttribute("style","background-color: white");
    }else if (totalSeconds<=1800){
        period_1.setAttribute("style","background-color: red");
        period_2.setAttribute("style","background-color: red");
        period_3.setAttribute("style","background-color: red");
        period_4.setAttribute("style","background-color: white");
    }else {
        period_1.setAttribute("style","background-color: red");
        period_2.setAttribute("style","background-color: red");
        period_3.setAttribute("style","background-color: red");
        period_4.setAttribute("style","background-color: red");
    }
}


let btnFoulsHome = document.getElementById("btn_fouls_home");
let btnFoulsGuest = document.getElementById("btn_fouls_guest");
let homeFauls = 0;
let guestFauls = 0;


let updateFouls = (someFaul) =>{

    switch(someFaul){
        case "home":
            console.log("sfaulowali gospodarze");
            homeFauls++;
            break;
        case "guest":
            console.log("sfaulowali goście");
            guestFauls++;
            break;
        case "none":
            console.log("nikt nie fauluje");
            homeFauls = 0;
            guestFauls = 0;
            break;
        default:
            console.log("nieznana operacja");
    }
    btnFoulsHome.innerHTML = "Fouls: "+homeFauls;
    btnFoulsGuest.innerHTML = "Fouls: "+guestFauls;
}