import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ErrorPage from './pages/ErrorPage/ErrorPage'
import ContactPage from './pages/ContactPage/ContactPage';
import Semillas from './pages/Semillas/Semillas';
import Wtsp from './Components/Wtsp/Wtsp';
import Servicios from './pages/Servicios/Servicios';
import Pauny from './pages/Pauny/Pauny';
import Jardineria from './pages/Jardineria/Jardineria';
import PaginaEnConstruccion from './pages/PaginaEnConstruccion/PaginaEnConstruccion'


function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/*' element={<ErrorPage/>}/>
        <Route path='/contacto' element={<ContactPage/>}/>
        <Route path='/semillas' element={<Semillas/>}/>
        <Route path='/servicio' element={<Servicios/>}/>
        <Route path='/maquinaria' element={<Pauny/>}/>
        <Route path='/jardineria' element={<Jardineria/>}/>
        <Route path='/tromen' element={<PaginaEnConstruccion/>}/>
     </Routes>
     <Wtsp/>
    </>
  );
}

export default App;
