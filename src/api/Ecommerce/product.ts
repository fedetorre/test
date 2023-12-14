
const list = async (): Promise<string[]> => {
    const response = await fetch('https://dummyjson.com/products/categories', {next: { revalidate: 3600, tags: ['category_list', 'all'] }});
    if (!response.ok) {
        throw {'error': 'Error fetching categories'}
    }
    return await response.json();
}


const Category = {
    list
}
export default Category