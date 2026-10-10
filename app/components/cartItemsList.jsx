"use client";
import { CartContext } from "@/contexts";
import { useContext } from "react";
import ProductCard from "./ProductCard";

export default function CartItemList() {
    const { cartList } = useContext(CartContext);

    return (
        <div className="flex flex-row gap-3 p-7">
            {cartList.map((p) => (
                <ProductCard key={p.id} product={p} />
            ))}
        </div>
    );
}
