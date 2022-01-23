import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div>
      {Task('Item 1')}
    </div>
    
  );
}


export default App;
