import './App.css';
import Title from './Title'
import Neck from './Neck'
import checkKey from './CheckKey';
import PowerChord from './PowerChord';

function clearNotes() {
  let notes = document.querySelectorAll('[id$="fretForm"]');
  notes.forEach(e => e.reset())
}

function App() {
  return (
    <div className="App">
      <Title />
      <Neck />
      <button className="clearNotes" onClick={clearNotes}>Clear All Notes</button>
      <PowerChord />
    </div >
  );
}

//detect key presses
document.onkeydown = checkKey;

export default App;
