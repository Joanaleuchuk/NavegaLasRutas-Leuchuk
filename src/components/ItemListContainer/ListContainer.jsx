// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ItemContainer from './Item';

function ItemListContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/Product/Product.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <Container>
      <List>
        {products.length > 0 ? (
          products.map((item) => (
            <ItemContainer key={item.id} item={item} /> 
          ))
        ) : (
          <p>Cargando productos...</p>
        )}
      </List>
    </Container>
  );
}

export default ItemListContainer;

const Container = styled.div`
  padding: 2rem;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 1rem;
  align-items: start;
`;
