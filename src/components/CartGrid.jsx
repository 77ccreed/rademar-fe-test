import React, { useState, useEffect } from 'react'

import Cart from './Cart'
const API_URL = "https://dummyjson.com/";
const CART_NUMBER = 2;

const CartGrid = () => {
  const [products, setProducts] = useState([]);
  const [clientCard, setClientCard] = useState([]);


  useEffect(() => {
    fetch(`${API_URL}products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  const addToCart = (product) => {
    const newClientCard = [...clientCard];
    const productInCart = newClientCard.find(
      (item) => item.id === product.id
    );

    if (!productInCart) {
      newClientCard.push({ ...product, quantity: 1 });
      alert("Toode lisati ostukorvi");
      fetch(`${API_URL}carts/${CART_NUMBER}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ products: newClientCard }),
      });
    }
    setClientCard(newClientCard);
  };

  return (
    <div className="container mx-auto px-5 py-24">
      <div className="flex flex-wrap">
        {clientCard && products && products.map((product) => (
          <Cart
            product={product}
            addToCart={addToCart}
            clientCard={clientCard}
            key={product.id}
          />
        ))}

        {
          products.length === 0 && (
            <p className="text-gray-500 text-xs tracking-widest title-font mb-1 text-center">
              Laadimine...
            </p>
          )
        }
      </div>
    </div>
  )
}

export default CartGrid