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

const Fret = () => {
  return (
    <div className="Fret">
      <form>
        <input
          type="text"
          className="singleNote"
        />
      </form>
    </div>
  )
}

const Frets = () => {
  return (
    <div className='Frets'>
      <Fret />
      <Fret />
      <Fret />
      <Fret />
      <Fret />
      <Fret />
    </div>
  )
}

const Fretboard = () => {
  return (
    <div className='Fretboard'>
      <Frets />
      <Frets />
      <Frets />
      <Frets />
      <Frets />
      <Frets />
      <Frets />
      <Frets />
    </div>
  )
}

const Neck = () => {
  return (
    <div className='Neck'>
      <Fretboard />
      <Fretboard />
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

export default App;
