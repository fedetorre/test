import {ProductType} from "@/types/product";

export interface CartProductType extends ProductType {
    quantity: number;
}