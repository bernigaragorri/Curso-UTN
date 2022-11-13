import './estilos/normalize.css';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./componentes/layout/Header";
import Nav from "./componentes/layout/Nav";
import Footer from "./componentes/layout/Footer";

import Home from './paginas/Home';
import Nosotros from './paginas/Nosotros';
import Servicios from './paginas/Servicios';
import Galeria from './paginas/Galeria';
import Contacto from './paginas/Contacto';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/nosotros' element={<Nosotros/>}></Route>
          <Route path='servicios' element={<Servicios/>}></Route>
          <Route path='galeria' element={<Galeria/>}></Route>
          <Route path='contacto' element={<Contacto/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>      
    </div>
  );
}

export default App;
