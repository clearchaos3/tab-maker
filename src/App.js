import './App.css';
import Title from './Title'
import Neck from './Neck'
import checkKey from './CheckKey';

function App() {
  return (
    <div className="App">
      <Title />
      <Neck />
    </div >
  );
}

//detect key presses
document.onkeydown = checkKey;

export default App;
