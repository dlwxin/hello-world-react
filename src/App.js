import logo from './logo.svg'
import './App.css'
import React, { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/api/hash')
      .then(response => response.text())
      .then(data => setData(data))
      .catch(error => {
        console.error(error)
        setData('LOCAL' + Math.random().toString(36).substring(5))
      })
  }, [])
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
        <h1> {data} </h1>
      </header>
    </div>
  )
}

export default App
