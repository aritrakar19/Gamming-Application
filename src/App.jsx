import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/froms/Login';
import MainPage from './Components/mainPage/MainPage';
import Exit from './Components/mainPage/Exit';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/login' element = {<Login/>}/>
            <Route path='/' element = {<MainPage/>}/>
            <Route path='/exit' element = {<Exit/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
