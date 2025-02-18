import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ErrorPage from './pages/ErrorPage/ErrorPage'
import ContactPage from './pages/ContactPage/ContactPage';
import Semillas from './pages/Semillas/Semillas';
import Wtsp from './Components/Wtsp/Wtsp';
import Servicios from './pages/Servicios/Servicios';
import Pauny from './pages/Pauny/Pauny';
import Jardineria from './pages/Jardineria/Jardineria';
import Tromen from './pages/Tromen/Tromen';
import ProductPage from './pages/ProductPage/ProductPage';
import Termos from './pages/Termos/Termos';


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
        <Route path='/tromen' element={<Tromen/>}/>
        <Route path='/termos' element={<Termos/>}/>
        <Route path='/:tipo/:id' element={<ProductPage />} />
     </Routes>
     <Wtsp/>
    </>
  );
}

export default App;
