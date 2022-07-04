import './App.css';
import Kontakt from './pages/Kontakt';

function App() {
  return (
    <div className="App">
        <button className="nupp">NUPP</button>
        <div className="sinine-tekst">Tekst siniseks</div>
        <div>
          <h1 className="h1-esimene">Esimene kodutöö</h1>  
          
          <Kontakt />
        </div>
        <img className="pilt" src="https://miro.medium.com/max/1400/1*xo1M1DiOigYrXw4vMQ_u3A.png" alt="Example of italic text" />
     
    </div>
  );
}



export default App;
