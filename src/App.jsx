import './App.css'
import { Route, Routes } from 'react-router'
import Home from './components/pages/Home'
import Cart from './components/pages/Cart'
import Navbar from './components/Navbar'

function App() {

  return (
    <div>
      <div className='bg-slate-900'>
        <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </div>
  )
}

export default App