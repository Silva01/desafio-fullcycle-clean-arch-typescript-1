import ProductInput from "../value-object/product.input";
import ProductOutput from "../value-object/product.output";

export default interface ProductRepositoryInterface {
    create(product: ProductInput): Promise<ProductOutput>;
    update(product: ProductInput): Promise<ProductOutput>;
    find(id: number): Promise<ProductOutput>;
    findAll(): Promise<ProductOutput[]>;
}