import {Product} from "@/types/product";

export interface CartProductType extends Product {
    quantity: number;
}