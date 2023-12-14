import {useCallback, useContext} from "react";
import {EcommerceContext} from "@/context/ecommerce";
import {ProductType} from "@/types/product";

const useEcommerce = () => {
    const {state, dispatch} = useContext(EcommerceContext);

    // HANDLERS
    const handleAddToCart = useCallback((product: ProductType) => {
        dispatch({type: 'ADD_ITEM', payload: product})
    }, [dispatch]);
    const handleRemoveFromCart = useCallback((product: ProductType) => {
        dispatch({type: 'REMOVE_ITEM', payload: product})
    }, [dispatch]);
    return {state, handleAddToCart, handleRemoveFromCart}
}

export default useEcommerce;