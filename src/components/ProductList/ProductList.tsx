import {ReactElement} from "react";
import {Product} from "@/types/product";
import Image from "next/image";
import AddToCartIconButton from "@/components/AddToCartIconButton";
import Link from "next/link";


export interface ProductListProps {
    className?: string;
    products: Product[];
}
const ProductList = ({className = '', products}: ProductListProps): ReactElement => {
    return (
        <div className={`${className} grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8`}>
            {products.map((product) => (
                <div key={product.id} className="group">
                    <Link href={`/${product.id}`} className="block relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                        <Image
                            src={product.thumbnail}
                            alt={product.title}
                            className="h-60 w-full object-cover object-center group-hover:opacity-75"
                            width={280}
                            height={320}
                        />
                    </Link>
                    <h3 className="mt-4 text-sm text-gray-700">
                        <Link href={`/${product.id}`}>
                            {product.title}
                        </Link>
                    </h3>
                    <p className="mt-1 text-lg font-medium text-gray-900 relative pr-8">
                        €{product.price}
                        <AddToCartIconButton product={product} className="absolute right-0"/>
                    </p>
                </div>
            ))}
        </div>
    );
}

export default ProductList;