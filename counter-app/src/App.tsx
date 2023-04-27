import './App.css';
import Counter from './components/Counter';
import AdvanceCounter from './components/AdvanceCounter';

function App() {
  return (
    <div className="App">
      <h1>Basic component</h1>
      <Counter />
      <h1>Advanced component</h1>
      <AdvanceCounter />
    </div>
  );
}

export default App;
