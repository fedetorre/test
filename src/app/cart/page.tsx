import Cart from "@/app/cart/cart";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Cart',
    description: 'Cart checkout',
    robots: {
        index: false
    }
}

export default async function CartPage() {

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only mb-3">Shopping cart</h2>
                <Cart />
            </div>
        </div>
    )
}
