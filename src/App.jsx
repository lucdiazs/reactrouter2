// App.jsx
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Pokemones from './views/Pokemones';
import CardDetalle from './componentes/CardDetalle';
import NavBar from './componentes/NavBar';

function App() {
  
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/pokemones/*' element={<Pokemones/>}/>  
      <Route path='/pokemones/:id' element={<CardDetalle/>}/>  
    </Routes>
    </>
  )
}

export default App;
