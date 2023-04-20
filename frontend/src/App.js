import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Secret from './pages/Secret'
import Controller from './pages/Controller'
import './index.css'
import './App.css'
const App = () => {

  const [authAccess, setAuthAcces] = useState(false);
  return (
    <div className='app'>
      <nav>
        <a href='/Login' > Login</a>
        {true && <>
        <a href='/Controller'>Controller</a>
        <a href='/Secret'>Secret</a>
        <a href='/List'>List</a>
        </>
      }
      </nav>
      <BrowserRouter>
        <Routes>
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/' element={<Login />} />
          <Route exact path='/secret' element={<Secret />} />
          <Route exact path='/controller' element={<Controller />} />
          <Route exact path='/controller' element={<Controller />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App