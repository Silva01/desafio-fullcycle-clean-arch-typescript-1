import ProductRepositoryInterface from "../../../domain/product/repository/product.repository.interface";
import ProductOutput from "../../../domain/product/value-object/product.output";

export default class ListProductUseCase {
    private repository: ProductRepositoryInterface;

    constructor(repository: ProductRepositoryInterface) {
        this.repository = repository;
    }

    findAll(): Promise<ProductOutput[]> {
        return this.repository.findAll()
    }
}