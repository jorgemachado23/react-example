import logo from './logo.svg';
import './App.css';
// import Counter from './Counter'
// import Card2 from './Card2'
// import StartsWarsPerson from './StarWarsPerson';
// import StarWarsPerson2 from './StarWarsPerson2';
import Posts from './Post2';

function App() {
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
        {/* <StarWarsPerson2 /> */}
        <Posts />
      </header>
    </div>
  );
}

export default App;
