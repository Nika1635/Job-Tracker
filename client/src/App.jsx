import './App.css'
import Navbar from './components/navbar/navbar.jsx'
import Home from './pages/home/home.jsx'
import Jobs from './pages/Jobs/jobs.jsx'
import NotFound from './pages/NotFound/notFound.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <div className='app-hero'>
        <Routes>
          <Route index element= {<Home/>}></Route>
          <Route path='/jobs' element= {<Jobs/>}></Route>
          <Route path='*' element= {<NotFound/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
