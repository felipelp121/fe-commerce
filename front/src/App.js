import * as page from './pages/index';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<page.Home />} />
        <Route path='/cart' element={<page.Cart />} />
        <Route path='/address' element={<page.CartAddress />} />
        <Route path='/sucess' element={<page.SucessPurchase />} />
        <Route path="*" element={
                    <div><h2>ERRO: 404 <br/> PAGINA NÃO ENCONTRADA</h2></div>
                } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
