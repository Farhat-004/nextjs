import ProductCard from "../components/ProductCard";
import { products } from "../data/data";
export default function page() {
    return (
        <div className="flex flex-row gap-3 p-7">
            {products.map((p) => (
                <ProductCard key={p.id} product={p} />
            ))}
        </div>
    );
}
