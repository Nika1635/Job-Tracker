import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {

  const [data, setData] = useState([])


  useEffect(() => {
    fetch("https://job-tracker-t0qo.onrender.com/")
    .then(jsonResponse => jsonResponse.json())
    .then(incomingData => setData(incomingData))


  }, [])
  return (
    <>
      {
        data.map((item) => <h1 key={item.id}>{item.company}</h1>)
      }
    </>
  )
}

export default App
