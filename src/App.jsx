// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import NavBar from "./components/NavBar/NavBar.jsx"; 
import ItemListContainer from "./components/ItemListContainer/ListContainer.jsx";
import './App.css';
import Banner from './components/Banner/Banner.jsx';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const products = [
      { id: 1, name: 'Comida para Perros', price: 25, category: 'Alimento' },
      { id: 2, name: 'Comida para Gatos', price: 20, category: 'Alimento' },
      { id: 3, name: 'Juguete de Peluche para Perros', price: 15, category: 'Juguetes' },
      { id: 4, name: 'Rascador para Gatos', price: 30, category: 'Accesorios' },
      { id: 5, name: 'Collar para Perros', price: 10, category: 'Accesorios' },
      { id: 6, name: 'Transportadora para Mascotas', price: 50, category: 'Accesorios' },
      { id: 7, name: 'Piedras para Gatos', price: 18, category: 'Higiene' },
      { id: 8, name: 'Cama para Mascotas', price: 40, category: 'Accesorios' },
    ];
    setItems(products);
  }, []);

  return (
    <div>
      <NavBar cartCount={items.length} />  
      <ItemListContainer items={items} />
      <Banner />
    </div>
  );
}

export default App;
