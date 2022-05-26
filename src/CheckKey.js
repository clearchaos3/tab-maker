import moveNote from './MoveNote'

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode === 38) {
        moveNote('up')
    }
    else if (e.keyCode === 40) {
        moveNote('down')
    }
    else if (e.keyCode === 37) {
        moveNote('left')
    }
    else if (e.keyCode === 39) {
        moveNote('right')
    }
}

export default checkKey;