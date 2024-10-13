// eslint-disable-next-line no-unused-vars
import React from 'react'; 
import NavBar from "./components/NavBar/NavBar.jsx"; 
import './App.css';
import Banner from './components/Banner/Banner.jsx';

function App() {
  return (
    <div>
      <NavBar cartCount />
      <Banner />
    </div>
  );
}

export default App;
