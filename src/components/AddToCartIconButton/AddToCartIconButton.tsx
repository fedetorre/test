"use client"

import {ReactElement, useCallback} from "react";
import {Product} from "@/types/product";
import {PlusCircleIcon} from "@heroicons/react/24/outline";
import useEcommerce from "@/hooks/useEcommerce";


export interface AddToCartIconButtonProps {
    className?: string;
    product: Product;
}
const AddToCartIconButton = ({className = '', product}: AddToCartIconButtonProps): ReactElement => {
    const {handleAddToCart: dispatchAddToCart} = useEcommerce();

    // HANDLERS
    const handleAddToCart = useCallback(() => {
        dispatchAddToCart(product);
    }, [product]);

    return (
        <button
            type="button"
            className={`${className} p-3 -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-white`}
            onClick={handleAddToCart}
        >
            <span className="sr-only">Add to cart</span>
            <PlusCircleIcon className="h-6 w-6" aria-hidden="true" />
        </button>
    );
}

export default AddToCartIconButton;