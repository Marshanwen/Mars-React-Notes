
import './App.css';
import Clock from './ClockComponent/Clock';
import Img from './Img';
import Welcome from './WelcomeComponent/Welcome'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">  
        <Welcome name="Mars" sex="1" />
        <Clock />
        <Img />
      </header>
    </div>
  );
}

export default App;
