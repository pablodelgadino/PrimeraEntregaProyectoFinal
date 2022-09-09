import './App.css';
import Navbar from './Components/Navbar';
import ItemDetailContainer from './Components/ItemDetailContainer/itemDetailContainer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Quienesomos from './Components/Pages/Quienesomos';
import Cart from './Components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path ='/' element ={<ItemListContainer/> }/>
        <Route path ='/Quienesomos' element ={<Quienesomos/> }/>
        <Route path ='/Catalogo/:categoriaId' element ={<ItemListContainer/> }/>
        <Route path ='/Detalle/:detalleId' element ={<ItemDetailContainer/> }/>
        <Route path ='/cart' element ={<Cart/> }/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
