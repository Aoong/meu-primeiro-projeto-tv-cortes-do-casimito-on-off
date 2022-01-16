const turnOn = document.getElementById ( 'turnOn' );
const turnOff = document.getElementById ( 'turnOff' );
const lamp = document.getElementById ( 'lamp' );
let notBroken = true;

function lampOn () {
    if ( notBroken  ) {
        lamp.src = './img/tvligada.jpg';
    }
}

function lampOff () {
    if ( notBroken ) {
        lamp.src = './img/tvdesligada.jpg';
    }
}

function lampBroken () {
    notBroken = false;
    lamp.src = './img/tvquebrada.jpg';
}

turnOn.addEventListener ( 'click', lampOn );
turnOff.addEventListener ( 'click', lampOff );
lamp.addEventListener ( 'mouseover', lampOn );
lamp.addEventListener ( 'mouseleave', lampOff );
lamp.addEventListener ( 'dblclick', lampBroken );
