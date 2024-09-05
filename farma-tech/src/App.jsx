import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// pages
import Home from './pages/Home/Home'
import Medicines from './pages/Medicines/Medicines'
import Beauty from './pages/Beauty/Beauty'
import Hygiene from './pages/Hygiene/Hygiene'
import Nutrition from './pages/Nutrition/Nutrition'

// components
import Navbar from './components/NavBar/Navbar'
import Details from './pages/Details/Details'


function App() {

  return (
   <>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        
        <Route path='/medicamentos' element = {<Medicines/>}/>
        <Route path='/beleza' element = {<Beauty/>}/>
        <Route path='/higiene' element = {<Hygiene/>}/>
        <Route path='/nutricao' element = {<Nutrition/>}/>
        <Route path='/detalhes' element = {<Details/>}/>
      </Routes>
    </BrowserRouter>
   </> 
  )
}

export default App
