"use client"

import {ReactElement, useCallback} from "react";
import {ProductType} from "@/types/product";
import {PlusCircleIcon} from "@heroicons/react/24/outline";
import useEcommerce from "@/hooks/useEcommerce";


export interface AddToCartButtonProps {
    className?: string;
    product: ProductType;
}
const AddToCartButton = ({className = '', product}: AddToCartButtonProps): ReactElement => {
    const {handleAddToCart: dispatchAddToCart} = useEcommerce();

    // HANDLERS
    const handleAddToCart = useCallback(() => {
        dispatchAddToCart(product);
    }, [product, dispatchAddToCart]);

    return (
        <button
            type="button"
            className={`${className} p-3 -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-white`}
            onClick={handleAddToCart}
        >
            <PlusCircleIcon className="h-6 w-6" aria-hidden="true" />
            Add to cart
        </button>
    );
}

export default AddToCartButton;