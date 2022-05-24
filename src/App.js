import './App.css';

const Title = () => {
  return (
    <form>
      <input
        type="text"
        className="Title"
        placeholder="song title?"
      />
    </form>
  )
}

//a Fret is a single input field, one note on one string
const Fret = (id) => {
  return (
    <div className="Fret">
      <form>
        <input
          type="text"
          className="singleNote"
          id={id.id}
        />
      </form>
    </div>
  )
}

//Frets is a list of 6 Frets, since there are 6 strings
const Frets = (i) => {
  return (
    <div className='Frets'>
      <Fret id={i.i} />
      <Fret id={i.i + 1} />
      <Fret id={i.i + 2} />
      <Fret id={i.i + 3} />
      <Fret id={i.i + 4} />
      <Fret id={i.i + 5} />
    </div>
  )
}

//a Measure is comprised of 8 Frets
const Measure = (measure) => {
  return (
    <div className='Measure'>
      <Frets i={measure.measure} />
      <Frets i={measure.measure + 6} />
      <Frets i={measure.measure + 12} />
      <Frets i={measure.measure + 18} />
      <Frets i={measure.measure + 24} />
      <Frets i={measure.measure + 30} />
      <Frets i={measure.measure + 36} />
      <Frets i={measure.measure + 42} />
    </div>
  )
}

//for now, just creating 2 measures manually is fine
const Neck = () => {
  return (
    <div className='Neck'>
      <Measure measure={0} />
      <Measure measure={48} />
      <Measure measure={96} />
      <Measure measure={144} />
      <Measure measure={192} />
      <Measure measure={240} />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Title />
      <Neck />
    </div >
  );
}

//find every singleNote input element on the page, and give it an id starting at 0
const notes = document.getElementsByClassName('singleNote');
let i = 0
for (let note of notes) {
  note.id = i;
  i++;
}

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
  document.getElementById(nextNote).focus();
}

//detect key presses
document.onkeydown = checkKey;

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


export default App;
