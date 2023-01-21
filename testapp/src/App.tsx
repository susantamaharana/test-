import React from 'react'
import { Counter } from './features/counter/Counter'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Counter />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
