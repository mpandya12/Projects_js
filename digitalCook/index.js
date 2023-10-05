const hours=document.getElementById('hours');
const minutes=document.getElementById("min");
const seconds=document.getElementById("second");
const amp=document.getElementById("ampm");

function colck(){
    let h=new Date().getHours()
    let m=new Date().getMinutes()
    let s=new Date().getSeconds()
    let apm="AM"
    if(h>12){
        h=h-12;
        apm="PM"
    }

    hours.innerHTML=h;
    minutes.innerHTML=m;
    seconds.innerHTML=s;
    amp,(innerHTML=apm);
    setTimeout(() => {
        colck()
    }, 1000);
}
colck();