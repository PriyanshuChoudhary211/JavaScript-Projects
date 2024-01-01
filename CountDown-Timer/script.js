daysEl=document.getElementById("days");
hoursEl=document.getElementById("hours");
minutesEl=document.getElementById("minute");
secondsEl=document.getElementById("seconds");

const newYear='01 January 2025';

function countdown()
{
    const newYearDate=new Date(newYear);
    const currentDate=new Date();

    const totalSeconds=(newYearDate-currentDate)/1000;
    
    var days=Math.floor(totalSeconds/3600/24);
    var hours=Math.floor(totalSeconds/3600)%24;
    var minutes=Math.floor(totalSeconds/60)%60;
    var seconds=Math.floor(totalSeconds)%60;
    
    if(days<10) days='0'+days;
    if(hours<10) hours='0'+hours;
    if(minutes<10) minutes='0'+minutes;
    if(seconds<10) seconds='0'+seconds;
    
    daysEl.innerHTML=days;
    hoursEl.innerHTML=hours;
    minutesEl.innerHTML=minutes;
    secondsEl.innerHTML=seconds;
}   
countdown();
setInterval(countdown,1000);