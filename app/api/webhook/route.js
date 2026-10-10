import Stripe from "stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req) {
    const body = await req.text();
    const data = req.json();
    console.log(data);

    const sig = headers().get("stripe-signature");

    let event;

    try {
        event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
    } catch (err) {
        console.error("⚠️ Webhook signature verification failed:", err.message);
        return NextResponse.json({ error: err.message }, { status: 400 });
    }

    // Handle successful payment
    if (event.type === "checkout.session.completed") {
        const session = event.data.object;

        const userId = session.metadata.userId;
        const cart = JSON.parse(session.metadata.cart);

        console.log("✅ Payment success for user:", userId);
        console.log("🛍️ Products purchased:", cart);

        // Example: Update your database
        // await Order.updateOne({ userId }, { status: "paid", products: cart });
    }

    return NextResponse.json({ received: true });
}
