let deadline = new Date("March 7, 2020 17:40:00");

let x = setInterval( () => {

    let now = new Date().getTime();
    let t = deadline - now;
    let days = Math.floor(t /(1000 * 60 * 60 * 24));
    let hours = Math.floor((t %(1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t %(1000 * 60 * 60 )) / (1000 * 60 ));
    let seconds = Math.floor((t %(1000 * 60 )) /1000);

    document.getElementById('day').innerHTML = days;
    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = minutes;
    document.getElementById('second').innerHTML = seconds;

    if ( t < 0){

        clearInterval(x);
        document.getElementById('container').style.display ='none';
        document.getElementById('content').style.display ='block';
        document.querySelector('audio').play();

        document.getElementById('day').innerHTML = '0';
        document.getElementById('hour').innerHTML = '0';
        document.getElementById('minute').innerHTML = '0';
        document.getElementById('second').innerHTML = '0';
    }
}, 1000);

{
    let  appuie=document.getElementById('tap').addEventListener('click',(e)=>document.getElementById('message').style.display='block'
)

let  fermer=document.getElementById('close').addEventListener('click',(e)=>document.getElementById('message').style.display='none'
)
}
