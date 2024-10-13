// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; 

const ItemContainer = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate(); 

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handleViewDetails = () => {
    navigate(`/shop/${item.id}`); 
  };

  return (
    <ItemCard onClick={handleViewDetails}> 
      <Image src={item.image} alt={item.name} />
      <Info>
        <h2>{item.name}</h2>
        <p>Price: ${item.price.toLocaleString()}</p>
      </Info>
      <Actions>
        <label>Cantidad:</label>
        <select value={quantity} onChange={handleQuantityChange}>
          {[...Array(20).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
              {num + 1}
            </option>
          ))}
        </select>
      </Actions>
      <button>COMPRAR</button>
    </ItemCard>
  );
};

ItemContainer.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ItemContainer;

const ItemCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  cursor: pointer; /* Indicamos que es clicable */
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const Info = styled.div`
  h2 {
    font-size: 1.5rem;
    margin: 0;
    color: #333;
  }

  p {
    font-size: 1rem;
    margin: 0.5rem 0;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  select {
    padding: 0.5rem;
    font-size: 1rem;
  }
`;
