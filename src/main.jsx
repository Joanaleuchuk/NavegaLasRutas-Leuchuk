// index.js
// index.js
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import CartWidget from './components/Cart/CartWidget.jsx';
import ItemListContainer from './components/ItemListContainer/ListContainer.jsx';
import ProductDetail from './components/Product/DetailProduct.jsx';
import NotFound from './components/Product/ProcuctNotFound.jsx'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cart" element={<CartWidget />} />
        <Route path="/shop" element={<ItemListContainer />} />
        <Route path="/shop/:productId" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
