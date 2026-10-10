import CartItemList from "../components/cartItemsList";

import { handleCheckout } from "@/lib/actions";

export default async function CartPage({ searchParams }) {
    const { canceled } = await searchParams;

    if (canceled) {
        console.log(
            "Order canceled -- continue to shop around and checkout when you’re ready."
        );
    }

    return (
        <div className="flex flex-col gap-10">
            <CartItemList />
            <div>
                <form action={handleCheckout}>
                    <section>
                        <button
                            className="bg-amber-200  text-black rounded-sm border-1"
                            type="submit"
                            role="link"
                        >
                            Checkout
                        </button>
                    </section>
                </form>
            </div>
        </div>
    );
}
