//called on keypress. when an arrow key is clicked, find the current element, and then add or subtract based on direction
export default function moveNote(arrow) {
    const currentNote = document.activeElement;
    let nextNote;
    switch (arrow) {
        case 'up':
            nextNote = parseInt(currentNote.id) - 1;
            break;
        case 'down':
            nextNote = parseInt(currentNote.id) + 1;
            break;
        case 'left':
            nextNote = parseInt(currentNote.id) - 6;
            break;
        case 'right':
            nextNote = parseInt(currentNote.id) + 6;
            break;
        default:
            nextNote = currentNote;
    }
    const nextNoteElement = document.getElementById(nextNote)
    nextNoteElement.select();
};