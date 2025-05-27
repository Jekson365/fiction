import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SuperPage from './components/SuperPage'
import './styles/index.scss'
import "./styles/clases.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SuperPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
