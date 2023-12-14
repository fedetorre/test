"use client"

import {ReactElement, useCallback, useMemo} from "react";
import useEcommerce from "@/hooks/useEcommerce";
import Image from "next/image";
import {CartProductType} from "@/types/cart";
import {ProductType} from "@/types/product";
import Link from "next/link";

export interface CartProps {
    className?: string;
}

const Cart = ({className = ''}: CartProps): ReactElement => {
    // HOOKS
    const {state, handleRemoveFromCart} = useEcommerce();

    // MEMO
    const products: CartProductType[] = useMemo(() => Object.values(state.items.reduce((acc, value: ProductType) => {
        if (acc[value.id]) {
            acc[value.id].quantity +=1;
        } else {
            acc[value.id] = {...value, quantity: 1};
        }
        return acc;
    }, {} as Record<string, CartProductType>)), [state.items]);

    const total = useMemo(() => products.reduce((acc, product) => acc + product.quantity * product.price, 0), [products]);

    // HANDLERS
    const handleCheckout = useCallback(() => alert('CHECKOUT'), []);

    if (products.length === 0) {
        return <p className={`${className} mt-1 text-lg font-medium text-gray-900 relative pr-8`}>
            The cart is empty
        </p>
    }
    return (
        <div className={`${className} mt-8`}>
            <div className="flow-root mb-8">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {products.map((product) => (
                        <li key={product.id} className="flex py-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <Image
                                    src={product.thumbnail}
                                    alt={product.title}
                                    className="h-full w-full object-cover object-center"
                                    width={94}
                                    height={94}
                                />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                            <Link href={`/${product.id}`}>{product.title}</Link>
                                        </h3>
                                        <p className="ml-4">{product.price}</p>
                                    </div>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Qty {product.quantity}</p>

                                    <div className="flex">
                                        <button
                                            type="button"
                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                            onClick={() => handleRemoveFromCart(product)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>€{total}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                <div className="mt-6">
                    <button
                        onClick={handleCheckout}
                        role="button"
                        className="w-full flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    >
                        Checkout
                    </button>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                        or
                        <Link
                            href="/"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Cart;