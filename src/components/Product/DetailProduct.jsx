// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function ProductDetail() {
  const { productId } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch('/Product/Product.json')
      .then((response) => response.json())
      .then((data) => {
        const foundProduct = data.find((item) => item.id === parseInt(productId));
        if (!foundProduct) {
          navigate('*'); 
        } else {
          setProduct(foundProduct);
        }
      })
      .catch((error) => console.error('Error fetching product:', error))
      .finally(() => setLoading(false)); 
  }, [productId, navigate]);

  if (loading) return <p>Cargando producto...</p>;

  return (
    product && (
      <DetailContainer>
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Precio: ${product.price.toLocaleString()}</p>
      </DetailContainer>
    )
  );
}

export default ProductDetail;

const DetailContainer = styled.div`
  padding: 2rem;
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 2rem;
    margin: 1rem 0;
  }

  p {
    font-size: 1.2rem;
  }
`;
