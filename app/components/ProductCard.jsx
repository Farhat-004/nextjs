// ProductCard.jsx
"use client";
import { CartContext } from "@/contexts";
import React, { useContext } from "react";

const ProductCard = ({ product }) => {
    const { addToCart, decreaseFromCart, cartList } = useContext(CartContext);

    const cartItem = cartList.find((item) => item.id === product.id);
    const quantity = cartItem ? cartItem.quantity : 0;

    return (
        <div className="border p-4 rounded-2xl shadow-md flex flex-col items-center gap-2 w-64 bg-white">
            <h2 className="text-lg text-amber-600 font-semibold">
                {product.name}
            </h2>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
            <p className="text-gray-600">
                {product.quantity - quantity} items left
            </p>

            <div className="flex items-center gap-3 mt-3">
                <button
                    onClick={() => decreaseFromCart(product.id)}
                    className="px-3 py-1 text-amber-600 bg-gray-200 rounded-full hover:bg-gray-300"
                >
                    -
                </button>
                <span className="text-lg text-amber-600 font-medium w-6 text-center">
                    {quantity}
                </span>
                <button
                    onClick={() => addToCart(product)}
                    className="px-3 text-amber-600  py-1 bg-blue-500 rounded-full hover:bg-blue-600"
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
