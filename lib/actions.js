"use server";

import { products } from "@/app/data/data";

export const handleCheckout = async () => {
    await fetch("http://localhost:3000/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            cartItems: products,
            userId: "user_001",
        }),
    });
};
