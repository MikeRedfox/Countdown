const timer = (data) =>{
    let eventDate= new Date(data).getTime();
    let now = new Date().getTime();
    let delta = eventDate-now;

    //Time
    let second = 1000;
    let minute = second* 60;
    let hour = minute* 60;
    let day = hour * 24;
    

    //Variables for Time
    let dayText = Math.floor(delta/day);
    let hourText = Math.floor((delta%day)/hour);
    let minuteText = Math.floor((delta%hour)/minute);
    let secondText = Math.floor((delta%minute)/second);

    //Changing HTML elements
    document.querySelector('#day_n').innerText = dayText;
    document.querySelector('#hour_n').innerText = hourText;
    document.querySelector('#minute_n').innerText = minuteText;
    document.querySelector('#second_n').innerText = secondText;
};

var inputDate = localStorage.getItem('inputDate');
if (!inputDate | inputDate==null){
    inputDate = prompt('Insert the date of your event,formatted as the example' ,'January 28, 2024 00:00:00');
    localStorage.setItem('inputDate',inputDate);
}
setInterval(function (){timer(inputDate)},1000);

let reset = document.getElementById('reset').addEventListener('click',e =>{
    localStorage.removeItem('inputDate');
    window.location.reload();
})    ;