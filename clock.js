var noon = 12;


function showCurrentTime(){
    var currentTime = new Date();

    var clock = document.getElementById('solve');
    var hours = currentTime.getHours();
    var minute = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var meridian = "AM";
//set hours
    if (hours >=noon) {
    meridian = "PM";
    }

    if (hours > noon) {
    hours =hours - 12;
    }



    var clockTime = hours + ' : ' +minute+ ' : ' +seconds + ' '+meridian;

    clock.innerHTML = clockTime;
}

showCurrentTime();


var oneSecond = 1000;
setInterval( showCurrentTime, oneSecond);