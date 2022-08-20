import ProductRepositoryInterface from "../../../domain/product/repository/product.repository.interface";
import ProductInput from "../../../domain/product/value-object/product.input";
import ProductOutput from "../../../domain/product/value-object/product.output";

export default class UpdateProductUseCase {
    private repository: ProductRepositoryInterface;

    constructor(repository: ProductRepositoryInterface) {
        this.repository = repository;
    }

    async updated(product: ProductInput) : Promise<ProductOutput> {
        return this.repository.update(product);
    }
}