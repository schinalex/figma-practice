import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Text from './components/Text/text';
function App() {
  const [x, setX] = useState((<p>Hey!</p>));
  // const [text, setText] = useState('');

  setTimeout(() => {
    setX(<p>Hey! I changed!</p>);
  }, 3000)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {x}
        {[1, 2, 3, 6, 7, 8, 9, 10, 11].map((item) => {
          return (<Text value={item} text={'this is text'}/>);
        })}
      </header>
    </div>
  );
}

export default App;
