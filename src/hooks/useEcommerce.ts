import {useCallback, useContext} from "react";
import {EcommerceContext} from "@/context/ecommerce";
import {ProductType} from "@/types/product";
import {addToCart, checkout, removeFromCart} from "@/actions";

const useEcommerce = () => {
    const {state, dispatch} = useContext(EcommerceContext);

    // HANDLERS
    const handleAddToCart = useCallback(async (product: ProductType) => {
        await addToCart(product.id);
        dispatch({type: 'ADD_ITEM', payload: product})
    }, [dispatch]);
    const handleRemoveFromCart = useCallback(async (product: ProductType) => {
        await removeFromCart(product.id);
        dispatch({type: 'REMOVE_ITEM', payload: product})
    }, [dispatch]);
    const handleCheckout = useCallback(async () => {
        await checkout();
        alert('CHECKOUT');
    }, []);

    return {state, handleAddToCart, handleRemoveFromCart, handleCheckout}
}

export default useEcommerce;