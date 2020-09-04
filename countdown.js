if(!localStorage.getItem('counter')){
    localStorage.setItem('counter', 1);
}

function count(){
    
    let counter = localStorage.getItem('counter');
    counter--;
    document.querySelector('h1').innerHTML = counter;
    localStorage.setItem('counter', counter);
    if (counter == 0) {
    clearInterval(countdownTimer);
    document.getElementById('h1').innerHTML = "Completed";
}     else {
     seconds--;
}

}

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('h1').innerHTML = localStorage.getItem('counter')
    document.querySelector('button').onclick = count;
    var countdownTimer = setInterval('count()', 1000);
});

