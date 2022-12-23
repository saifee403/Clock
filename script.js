var second = 0;
var minute = 0;
var hour = 0;
var d = new Date();


setInterval(
    function(){
        d = new Date();
        second = d.getSeconds() * 6;
        minute = d.getMinutes() * 6;
        hour = d.getHours() * 30 + Math.round(minute / 12);
        document.getElementById("secs").style.transform = "rotate(" + second + "deg)";
        document.getElementById("mint").style.transform = "rotate(" + minute + "deg)";
        document.getElementById("hr").style.transform = "rotate(" + hour + "deg)";
        document.getElementById("secs").style.width = "185px";
        document.getElementById("secs").style.left = "62px"
    }, 1000
);
// let h=document.getElementById('hr');
// let m=document.getElementById('mint');
// let s=document.getElementById('secs');
// setInterval(()=>{
//     let date=new Date();
// let secDeg=date.getSeconds()/60*360;
// let minDeg=date.getMinutes()/60*360 -90;
// let hourDeg=date.getHours()/12*360 -90;
// s.style.transform=`rotate(${secDeg}deg)`;
// m.style.transform=`rotate(${minDeg}deg)`;
// h.style.transform=`rotate(${hourDeg}deg)`;
// },1000);