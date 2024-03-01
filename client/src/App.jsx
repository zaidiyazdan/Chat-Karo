import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectRoute from "./components/auth/ProtectRoute.jsx";
import NotFound from "./pages/NotFound.jsx";

const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Login = lazy(() => import('./pages/Login.jsx'));
const Chat = lazy(() => import('./pages/Chat'));
const Groups = lazy(() => import('./pages/Groups'));

let user = false;

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectRoute user={user} />} >
            <Route path='/' element={<Home />} />
            <Route path='/chat/:chatId' element={<Chat />} />
            <Route path='/groups' element={<Groups />} />
          </Route>
          <Route element={<ProtectRoute user={!user} redirect="/" />}>
            <Route path='/login' element={<Login />} />
          </Route>

          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
