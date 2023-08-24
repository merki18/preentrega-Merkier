import { useState } from 'react'

import Navbar from './components/Navbar/Navbar';
import Titulo from './components/Titulo/Titulo';

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div>
      <Navbar />
      <Titulo />
    </div>
  )
}

export default App
