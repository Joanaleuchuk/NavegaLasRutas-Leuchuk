// eslint-disable-next-line no-unused-vars
import React from 'react';


function Item( name , price, category ) { 
  return (
    <div className="item">
      <h2>{name}</h2>
      <p>Precio: ${price}</p>
      <p>Categoría: {category}</p>
    </div>
  );
}

export default Item;