import {ProductType} from "@/types/product";

const list = async (): Promise<string[]> => {
    const response = await fetch('https://dummyjson.com/products/categories', {next: { revalidate: 3600, tags: ['category_list', 'all'] }});
    if (!response.ok) {
        throw {'error': 'Error fetching categories'}
    }
    return await response.json();
}

export interface CategoryProductsParams {
    category: string;
}
const products = async ({category}: CategoryProductsParams): Promise<ProductType[]> => {
    const response = await fetch(`https://dummyjson.com/products/category/${category}`, {next: { revalidate: 3600, tags: [`category_${category}_products`, 'all'] }});
    if (!response.ok) {
        throw {'error': 'Error fetching category products'}
    }
    return (await response.json()).products;
}


const Category = {
    list,
    products
}
export default Category