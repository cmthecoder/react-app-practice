import './App.css';
import Person from './Person';

const App = () => {

  return (
    <div className="App">
      <Person name='Tim' lastName='Williams' age='45' />
      <Person name='Kim' lastName='Williams' age='38' />
    </div>
  );
}

export default App;
