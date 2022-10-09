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

  useEffect(() => {
    fetch(`${API_URL}carts/${CART_NUMBER}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClientCard(data.products);
      });
  }, []);



  const addToCart = (product) => {
    const newClientCard = [...clientCard];
    const productInCart = newClientCard.find(
      (item) => item.id === product.id
    );

    if (!productInCart) {
      newClientCard.push({ ...product, quantity: 1 });
      alert(`${product.title} lisati ostukorvi`);
      fetch(`${API_URL}carts/${CART_NUMBER}`, {
        method: 'PUT', /* or PATCH */
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          products: newClientCard,
        })
      })
        .then(res => res.json())
        .then((data) => {
          console.log(data);
        });
    }
    setClientCard(newClientCard);
  };

  return (
    <div className="container px-5 py-24">
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