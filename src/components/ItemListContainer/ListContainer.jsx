// eslint-disable-next-line no-unused-vars
import React from 'react';
import Item from './Item';
import styled from 'styled-components';

function ItemListContainer( items = []) {
  return (
    <Container>
      <List>
        {items.length > 0 ? (
          items.map((item) => (
            <Item 
              key={item.id} 
              name={item.name} 
              price={item.price} 
              category={item.category} 
            />
          ))
        ) : (
          <p>¡Bienvenidos!</p>
        )}
      </List>
    </Container>
  );
}

export default ItemListContainer;

const Container = styled.div`
  padding: 1rem;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 1rem;
`;
