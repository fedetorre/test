import ProductComponent from "@/components/Product";
import Ecommerce from "@/api/Ecommerce";
import {ProductType} from "@/types/product";
import {notFound} from "next/navigation";


export interface ProductPageProps {
    params: {
        id: string;
    }
}
export default async function ProductPage({ params }: ProductPageProps) {
    let product: ProductType | null = null;
    try {
        product = await Ecommerce.Product.get({id: params.id});
    } catch (e) {
        notFound();
    }
    return (
        <ProductComponent product={product} />
    )
}
