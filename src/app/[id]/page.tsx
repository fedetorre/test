import ProductComponent from "@/components/Product";
import Ecommerce from "@/api/Ecommerce";
import {ProductType} from "@/types/product";
import {notFound} from "next/navigation";
import {Metadata} from "next";

export interface ProductPageProps {
    params: {
        id: string;
    }
}

export async function generateMetadata(
    { params }: ProductPageProps
): Promise<Metadata> {
    let product: ProductType | null = null;
    try {
        product = await Ecommerce.Product.get({id: params.id});
    } catch (e) {
        return {};
    }

    return {
        title: product.title,
        description: product.description,
        openGraph: {
            images: [...product.images],
        },
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
