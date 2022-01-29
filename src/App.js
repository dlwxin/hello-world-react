import logo from './logo.svg'
import './App.css'

import randomData from './data/randomData'

function App() {
  let result = ''
  for (let i = 0; i < 20; i++) {
    let r = Math.floor(Math.random() * 62)
    result += randomData[r]
  }

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
        <section>{result}</section>
      </header>
    </div>
  )
}

export default App
