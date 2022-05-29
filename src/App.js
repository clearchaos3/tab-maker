import './App.css';
import { useState } from "react";
import Title from './Title'
import Neck from './Neck'
import checkKey from './CheckKey';
import PowerChord from './PowerChord';

function clearNotes() {
  let notes = document.querySelectorAll('[id$="fretForm"]');
  notes.forEach(e => e.reset())
}

export default function App() {
  const [powerChord, setPowerChord] = useState(0);
  return (
    <div className="App">
      <Title />
      <Neck />
      <button className="clearNotes" onClick={clearNotes}>Clear All Notes</button>
      <PowerChord powerChord={powerChord} setPowerChord={setPowerChord} />
    </div >
  );
}

//detect key presses
document.onkeydown = checkKey;
