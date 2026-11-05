import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agency from './pages/Agency'
import Work from './pages/Work'


const App = () => {

  return (
    <div className='text-white '>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Agency' element={<Agency />} />
        <Route path='/Work' element={<Work />} />
      </Routes>
    </div>
  )
  }

export default App