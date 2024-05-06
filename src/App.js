import './App.css';
import { ReactKeyPress } from './components/ReactKeyPress';

function App() {
  return (
    <div className="App">
      <ReactKeyPress firstKey={'shift'} secondKey={'s'} callback={() => console.log('user can give any function here to be called on combo click')} />
    </div>
  );
}

export default App;
