//called on keypress. when an arrow key is clicked, find the current element, and then add or subtract based on direction
function moveNote(arrow) {
    const currentNote = document.activeElement
    console.log("currentNote: ", currentNote)
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
    console.log("nextNoteElement: ", nextNoteElement);
    nextNoteElement.select();
}

export default moveNote;