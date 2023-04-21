import products  from "src/data/product";



export const getProductsService =  () => {
    return products;
}

export const getProductService = (id : string) => {
    const product = products.data.find(prod => prod.id === id);
    return product;
}