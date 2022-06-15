const task3Element = document.getElementById('task-3');
const task4Element = document.getElementById('task-4');
let userName = 'Dave';


function userMsg(){
    alert("Hi there!");
}

function hiUserMsg(userName){
    alert("Hi there, " + userName );
}

function bigConcat(msg01, msg02, msg03, bigMsg){
    msg01 = "You have";
    msg02 = "triggered the";
    msg03 = "event message!";
    bigMsg = msg01 + " " + msg02 + " " + msg03
    alert(bigMsg);
}

userMsg();

hiUserMsg(userName);

task3Element.addEventListener('click', userMsg);

task4Element.addEventListener('click', bigConcat);