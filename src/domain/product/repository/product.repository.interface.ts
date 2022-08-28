import ProductDto from "../value-object/product.dto";

export default interface ProductRepositoryInterface {
    create(product: ProductDto): Promise<void>;
    update(product: ProductDto): Promise<void>;
    find(id: number): Promise<ProductDto>;
    findAll(): Promise<ProductDto[]>;
}