
let homePoints = document.getElementById("home_points");
let guestPoints = document.getElementById("guest_points");

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
}

function homeAddOne(){
    sumHomePoints++;
    updateScore();
}
function homeAddTwo(){
    sumHomePoints +=2;
    updateScore();
}
function homeAddThree(){
    sumHomePoints +=3;
    updateScore();
}

function guestAddOne(){
    sumGuestPoints++;
    updateScore();
}
function guestAddTwo(){
    sumGuestPoints +=2;
    updateScore();
}
function guestAddThree(){
    sumGuestPoints +=3;
    updateScore();
}
