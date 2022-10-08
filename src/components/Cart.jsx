import React from 'react'

const Cart = ({ product, addToCart, clientCard }) => {

  return (
    <div className="xl:w-1/4 lg:w-1/3 md:w-1/2 p-4 w-full mb-10 mt-4 odd:bg-gray-100">
      <a className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src={product.images[0]}
        />
      </a>
      <div className="bg-yellow-300 rounded-lg shadow-md overflow-hidden  leading-2 mt-4 mb-4 p-4 grid grid-cols-2 gap-1">

        <div className="col-span-1 row-span-1 grid grid-cols-2 gap-2 text-center">
          <p className=" text-gray-100 bg-green-400 p-2 rounded text-center shadow-md">
            -{product.discountPercentage.toFixed(0)}%
          </p>
          <p className=" text-gray-500 bg-gray-200 rounded p-2  font-semibold line-through shadow-md whitespace-nowrap">
            {
              (product.price / (1 - product.discountPercentage / 100)).toFixed(0)
            } €</p>
        </div>

        <div className='col-span-1 row-span-2 flex flex-col justify-center'>
          <p className="text-gray-700 text-base font-bold text-right">
            {product.price.toFixed(2)} €
          </p>
          <p className="text-gray-500 text-xs text-right">
            *soodushind
          </p>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font">
          {product.brand}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {product.title}
        </h2>
        <h4>
          <p className="text-green-500 text-xs tracking-widest title-font">
            {product.stock} tk laos
          </p>
        </h4>

        <p className="mt-8 text-gray-500 text-xs tracking-widest title-font mb-4 h-10">
          {product.description}
        </p>
        <p>
          {
            clientCard.find((item) => item.id === product.id) ? (
              <button
                className="text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-sm cursor-not-allowed"
                disabled
              >
                Toode on ostukorvis
              </button>
            ) : (
              <button
                onClick={() => addToCart(product)}
                className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-sm"
              >
                Lisa ostukorvi
              </button>
            )
          }
        </p>
      </div>
    </div>
  )
}

export default Cart