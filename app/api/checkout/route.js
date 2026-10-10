import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
    const body = await req.json();
    const { cartItems, userId } = body;

    const line_items = cartItems.map((item) => ({
        price_data: {
            currency: "usd",
            product_data: {
                name: item.name,
            },
            unit_amount: Math.round(parseInt(item.price) * 100), // in cents
        },
        quantity: item.quantity,
    }));

    // Store cart data in metadata (stringify because metadata values must be strings)
    const metadata = {
        userId,
        cart: JSON.stringify(cartItems),
    };

    const session = await stripe.checkout.sessions.create({
        mode: "checkout",
        line_items,
        metadata,
        success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/products`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart-items`,
    });

    return NextResponse.json({ url: session.url });
}
