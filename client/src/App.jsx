import React,{lazy} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const Home = lazy(()=>import('./pages/Home.jsx'))
const About = lazy(()=>import('./pages/About.jsx'))
const Login = lazy(()=>import('./pages/Login.jsx'))
const Chat = lazy(()=>import('./pages/Chat'))
const Groups = lazy(()=>import('./pages/Groups'))

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/chat/:chatId' element={<Chat/>}/>
          <Route path='/groups' element={<Groups/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
