import './App.css'
import Navbar from './components/navbar/navbar.jsx'
import Home from './pages/home/home.jsx'
import { useState } from 'react'
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [data, setData] = useState([])


  useEffect(() => {
    fetch("https://job-tracker-t0qo.onrender.com/")
    .then(jsonResponse => jsonResponse.json())
    .then(incomingData => setData(incomingData))


  }, [])
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element= {<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
