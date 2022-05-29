import './App.css';
import { useState } from "react";
import Title from './Title'
import Neck from './Neck'
import PowerChordButton from './PowerChord';
import moveNote from './MoveNote';
import addNote from './AddNote';

function clearNotes() {
  let notes = document.querySelectorAll('[id$="fretForm"]');
  notes.forEach(e => e.reset());
}

export default function App() {
  const [powerChord, setPowerChord] = useState(0);

  //detect key presses
  document.onkeydown = function (e) {

    e = e || window.event;
    const keyCode = e.keyCode;
    const note = e.keyCode - 48;

    switch (true) {
      case (keyCode === 38): moveNote('up');
        break;
      case (keyCode === 40): moveNote('down');
        break;
      case (keyCode === 39): moveNote('right');
        break;
      case (keyCode === 37): moveNote('left');
        break;
      case (keyCode > 47 && keyCode < 58): addNote(e.target.id, note, powerChord);
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <Title />
      <Neck powerChord={powerChord} />
      <button className="clearNotes" onClick={clearNotes}>Clear All Notes</button>
      <PowerChordButton powerChord={powerChord} setPowerChord={setPowerChord} />
    </div >
  );
}