"use client";
import { CartContext } from "@/contexts";
import { useState } from "react";
import { CartItems } from "@/app/data/data";
const CartProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (product) => {
        setCartList((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const decreaseFromCart = (id) => {
        setCartList((prev) =>
            prev
                .map((item) =>
                    item.id === id
                        ? { ...item, quantity: Math.max(0, item.quantity - 1) }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    return (
        <CartContext value={{ cartList, addToCart, decreaseFromCart }}>
            {children}
        </CartContext>
    );
};

export default CartProvider;
