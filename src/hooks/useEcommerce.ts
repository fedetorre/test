import {useCallback, useContext} from "react";
import {EcommerceContext} from "@/context/ecommerce";
import {Product} from "@/types/product";

const useEcommerce = () => {
    const {state, dispatch} = useContext(EcommerceContext);

    // HANDLERS
    const handleAddToCart = useCallback((product: Product) => {
        dispatch({type: 'ADD_ITEM', payload: product})
    }, [dispatch]);
    const handleRemoveFromCart = useCallback((product: Product) => {
        dispatch({type: 'REMOVE_ITEM', payload: product})
    }, [dispatch]);
    return {state, handleAddToCart, handleRemoveFromCart}
}

export default useEcommerce;