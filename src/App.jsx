import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import NavBar from './componentes/NavBar/NavBar';
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
import Checkout from './componentes/Checkout/Checkout';
import Cart from './componentes/Cart/Cart';

function App() {
  return (
    <>
    <BrowserRouter>
    <CarritoProvider>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>} />
      <Route path='/categoria/:idCategoria' element={<ItemListContainer/>} />
      <Route path='/item/:idItem' element= {<ItemDetailContainer/>}/>
      <Route path='/Cart' element = {<Cart/>}/>
      <Route path='*' element= {<h2>Error de Sitio</h2>}/>
      <Route path='/checkout' element = { <Checkout/> } />
      <Route path='*' element={<h2>Sitio en Construcción</h2>} />
    </Routes>
    </CarritoProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
