import logo from './logo.svg';
import './App.css';
import { version } from './version';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
          v{version}
        </p>
        
      </header>
    </div>
  );
}

export default App;
