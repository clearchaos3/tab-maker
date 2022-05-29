//called on keypress. when an arrow key is clicked, find the current element, and then add or subtract based on direction
export default function addNote(id, note, powerChord) {
    if (powerChord) {
        const currentValue = (document.getElementById(id).value || null) + note;
        const fifth = document.getElementById(id - 1) || null;
        const octave = document.getElementById(id - 2) || null;
        try {
            fifth.value = parseInt(currentValue) + 2;
        }
        catch (e) {
            console.log("Cannot place fifth above.")
        }
        try {
            octave.value = parseInt(currentValue) + 2;
        }
        catch (e) {
            console.log("Cannot place octave above.")
        }

    }
};