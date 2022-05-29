import moveNote from './MoveNote'

export default function checkKey(e) {

    e = e || window.event;

    switch (e.keyCode) {
        case 38: moveNote('up');
            break;
        case 40: moveNote('down');
            break;
        case 39: moveNote('right');
            break;
        case 37: moveNote('left');
            break;
        default:
            break;
    }
};