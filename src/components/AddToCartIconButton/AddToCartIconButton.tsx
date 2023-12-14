import {ReactElement} from "react";
import {Product} from "@/types/product";
import Image from "next/image";


export interface ProductListProps {
    products: Product[];
}
const ProductList = ({products}: ProductListProps): ReactElement => {
    return (
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
                <a key={product.id} href={`/${product.id}`} className="group">
                    <div className="relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                        <Image
                            src={product.thumbnail}
                            alt={product.title}
                            className="h-60 w-full object-cover object-center group-hover:opacity-75"
                            width={280}
                            height={320}
                        />
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                </a>
            ))}
        </div>
    );
}

export default ProductList;