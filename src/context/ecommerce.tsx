"use client"

import { ProductType } from "@/types/product";
import {createContext, Dispatch, ReactNode, useReducer} from "react";

export interface EcommerceContextProps {
  items: ProductType[];
};

export const initialState: EcommerceContextProps = {
    items: []
};

export type EcommerceContextType = {
    type: string;
    payload?: any;
};

export const ecommerceReducer = (state: EcommerceContextProps, action: EcommerceContextType) => {
    switch (action.type) {
        case "ADD_ITEM":
            return { ...state, items: [...state.items, action.payload]};
        case "REMOVE_ITEM":
            return { ...state, items: state.items.filter((i) => i.id !== action?.payload?.id)};
        case "RESET":
            return { ...state, ...initialState};
        default:
            return state;
    }
};

export const EcommerceContext = createContext<{
    state: EcommerceContextProps;
    dispatch: Dispatch<EcommerceContextType>;
}>({ state: initialState, dispatch: () => null });

export default function Ecommerce({ children }: {children: ReactNode}) {
    const [state, dispatch] = useReducer(ecommerceReducer, initialState);
    return (
        <EcommerceContext.Provider value={{ state, dispatch }}>
            {children}
        </EcommerceContext.Provider>);
}
