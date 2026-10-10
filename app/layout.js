import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomLink from "./components/Link";
import CartProvider from "@/providers/CartProvider";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Boss",
    description: "For practice only",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <nav>
                    <ul className="flex gap-5 p-4">
                        <li>
                            <CustomLink path={"/"}>Home </CustomLink>
                        </li>
                        <li>
                            <CustomLink path={"/profile"}> Profile</CustomLink>
                        </li>
                        <li>
                            <CustomLink path={"/profile/name"}>Name</CustomLink>
                        </li>
                        <li>
                            <CustomLink path={"/settings"}>settings</CustomLink>
                        </li>
                        <li>
                            <CustomLink path={"/comments"}>comments</CustomLink>
                        </li>
                        <li>
                            <CustomLink path={"/payment"}>payment</CustomLink>
                        </li>
                        <li>
                            <CustomLink path={"/products"}>products</CustomLink>
                        </li>
                        <li>
                            <CustomLink path={"/cart-items"}>
                                Cart Items
                            </CustomLink>
                        </li>
                        <li>
                            <CustomLink path={"/sign-in"}>sign in</CustomLink>
                        </li>
                    </ul>
                </nav>
                <hr />
                <CartProvider>{children}</CartProvider>
            </body>
        </html>
    );
}
