document.querySelector('#start').addEventListener('click', start);
document.querySelector('#stop').addEventListener('click', stop);
let body = document.querySelector('body');

let intervalidID = true;

function getRandomColor() {
    // Generate a random hex color
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function start(){
    if(intervalidID){
        intervalidID = setInterval(()=>{
            body.style.backgroundColor = getRandomColor()
        },1000)
    }
}

function stop(){
    clearInterval(intervalidID);
}