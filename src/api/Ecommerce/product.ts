import {ProductType} from "@/types/product";

const list = async (): Promise<ProductType[]> => {
    const response = await fetch('https://dummyjson.com/products', {next: { revalidate: 3600, tags: ['product_list', 'all'] }});
    if (!response.ok) {
        throw {'error': 'Error fetching products'}
    }
    return (await response.json()).products;
}

export interface ProductGetParams {
    id: string;
}
const get = async ({id}: ProductGetParams): Promise<ProductType> => {
    const response = await fetch(`https://dummyjson.com/products/${id}`, {next: { revalidate: 3600, tags: [`product_${id}`, 'all'] }});
    if (!response.ok) {
        throw {'error': 'Error fetching products'}
    }
    return await response.json();
}


const Product = {
    list,
    get
}
export default Product